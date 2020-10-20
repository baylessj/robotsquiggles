#include <algorithm>
#include <array>
#include <cmath>
#include <iostream>
#include <numeric>
#include <tuple>

#include "polynomial.hpp"
#include "spline.hpp"

namespace squiggles {
Spline::Spline(ControlVector istart,
               ControlVector iend,
               Constraints iconstraints,
               double idt)
  : start(istart), end(iend), constraints(iconstraints), dt(idt) {
    // TODO: we need to keep the start and end velocities for the motion profile

    // ensure that we don't have unspecified start/end velocities, this angers
    // the spline math
    if (std::isnan(start.velocity) || std::abs(start.velocity) < K_EPSILON) {
      start.velocity = 1.2 * start.pose.dist(end.pose);
    }
    if (std::isnan(end.velocity) || std::abs(end.velocity) < K_EPSILON) {
      end.velocity = 1.2 * start.pose.dist(end.pose);
    }
  }

Spline::Spline(Pose istart, Pose iend, Constraints iconstraints, double idt)
  : constraints(iconstraints), dt(idt) {
  const auto scalar = 1.2 * istart.dist(iend); // Magic number comes from WPILib
  start = ControlVector(Pose(istart), scalar, 0.0);
  end = ControlVector(Pose(iend), scalar, 0.0);
}

std::vector<PathPosition> Spline::plan() {
  // break the starting/goal velocities and accelerations into their
  // axis-specific components
  double s_x = start.pose.x;
  double s_y = start.pose.y;
  double s_yaw = start.pose.yaw;
  double s_v = start.velocity;
  double s_a = start.acceleration;

  double g_x = end.pose.x;
  double g_y = end.pose.y;
  double g_yaw = end.pose.yaw;
  double g_v = end.velocity;
  double g_a = end.acceleration;

  double s_vx = s_v * cos(s_yaw);
  double s_vy = s_v * sin(s_yaw);
  double g_vx = g_v * cos(g_yaw);
  double g_vy = g_v * sin(g_yaw);
  double s_ax = s_a * cos(s_yaw);
  double s_ay = s_a * sin(s_yaw);
  double g_ax = g_a * cos(g_yaw);
  double g_ay = g_a * sin(g_yaw);

  // iterate through possible path durations until we find one that fits
  // our kinematic constraints
  std::vector<int> durations(T_MAX - T_MIN + 1);
  std::iota(std::begin(durations), std::end(durations), T_MIN);
  for (auto d : durations) {
    auto x_qp = QuinticPolynomial(s_x, s_vx, s_ax, g_x, g_vx, g_ax, d);
    auto y_qp = QuinticPolynomial(s_y, s_vy, s_ay, g_y, g_vy, g_ay, d);

    std::vector<PathPosition> out;

    std::vector<double> times(round(d / dt) + 1);
    std::iota(std::begin(times), std::end(times), 0.0);
    for (auto time : times) {
      double t = time * dt;

      double x_p = x_qp.calc_point(t);
      double y_p = y_qp.calc_point(t);
      double x_v = x_qp.calc_first_derivative(t);
      double y_v = y_qp.calc_first_derivative(t);
      double x_a = x_qp.calc_second_derivative(t);
      double y_a = y_qp.calc_second_derivative(t);
      double x_j = x_qp.calc_third_derivative(t);
      double y_j = y_qp.calc_third_derivative(t);

      double linear_vel = sqrt(x_v * x_v + y_v * y_v);
      double linear_accel = sqrt(x_a * x_a + y_a * y_a);
      double linear_jerk = sqrt(x_j * x_j + y_j * y_j);
      double yaw = atan2(y_v, x_v);

      if (out.size() > 2 && out.rbegin()[0].vel - out.rbegin()[1].vel < 0.0) {
        linear_accel *= -1;
      }
      if (out.size() > 2 &&
          out.rbegin()[0].accel - out.rbegin()[1].accel < 0.0) {
        linear_jerk *= -1;
      }

      out.push_back(PathPosition(
        Pose(x_p, y_p, yaw), linear_vel, linear_accel, linear_jerk, t));
    }

    auto a_max =
      std::max_element(out.begin(),
                       out.end(),
                       [](const PathPosition &a, const PathPosition &b) {
                         return a.accel < b.accel;
                       })
        ->accel;
    auto j_max =
      std::max_element(out.begin(),
                       out.end(),
                       [](const PathPosition &a, const PathPosition &b) {
                         return a.jerk < b.jerk;
                       })
        ->jerk;
    if (a_max <= constraints.max_accel && j_max <= constraints.max_jerk) {
      return out;
    }
  }
  throw std::runtime_error(
    "Could not find a valid path within the constraints");
}

/**
 * Applies the Spline's kinematic constraints on the acceleration and velocity
 * requested for the given segment of the path.
 *
 * TODO: should we constrain jerk here too?
 */
std::tuple<double, double> Spline::impose_limits(PathPosition s,
                                                 PathPosition e) {
  double dist = e.pose.dist(s.pose);
  if (std::abs(dist) < K_EPSILON) {
    // distance is too small to care about, next
    return std::make_tuple(e.vel, s.accel);
  }

  double v_f_limited, a_0_limited;
  do {
    // Start by constraining the acceleration at the start of the segment
    // Note: The maximum constraint is subtracted by K_EPSILON to ensure that
    // checking that the resulting path is within the constraints in tests
    // is successful.
    a_0_limited = std::copysign(
      std::min(constraints.max_accel - K_EPSILON, std::abs(s.accel)), s.accel);

    // Extrapolate the velocity at the end of this segment based on the
    // acceleration at the start of the segment. If this final velocity
    // is greater than the velocity constraint then we need to recalculate
    // the acceleration at the start of the segment
    double v_sq = s.vel * s.vel + 2 * a_0_limited * dist;
    double v_f = std::sqrt(std::abs(v_sq));

    // limit the velocity to +- max while respecting its sign
    v_f_limited = std::copysign(
      std::min(constraints.max_vel - K_EPSILON, std::abs(v_f)), v_f);

    // TODO: also constrain the max velocity based on the curvature so we
    // respect wheel speeds for tank drives and such

    // Re-calculate the limited acceleration to see if reaching the constrained
    // final velocity requires a starting acceleration that exceeds the
    // acceleration limits.
    a_0_limited = ((v_f_limited * v_f_limited) - (s.vel * s.vel)) / (2 * dist);
  } while ((std::abs(a_0_limited) - constraints.max_accel) > K_EPSILON);

  return {v_f_limited, a_0_limited};
}

/**
 * TODO: would it be possible to modify the path in-place to conserve memory?
 */
std::vector<PathPosition>
Spline::parameterize(std::vector<PathPosition> &raw_path) {
  std::vector<PathPosition> parameterized_path(raw_path.size());

  // forward pass through path
  parameterized_path[0] = raw_path[0];
  for (std::size_t i = 1; i < raw_path.size(); ++i) {
    parameterized_path[i] = raw_path[i];
    PathPosition parameterized_start = parameterized_path[i - 1];
    PathPosition raw_end = raw_path[i];

    auto [end_vel, start_accel] = impose_limits(parameterized_start, raw_end);
    parameterized_path[i].vel = end_vel;
    parameterized_path[i - 1].accel = start_accel;
  }

  // backward pass
  for (std::size_t i = raw_path.size() - 1; i > 0; --i) {
    PathPosition parameterized_start = parameterized_path[i];
    PathPosition parameterized_end = parameterized_path[i - 1];

    auto [end_vel, start_accel] =
      impose_limits(parameterized_end, parameterized_start);
    parameterized_path[i - 1].vel = end_vel;
    parameterized_path[i].accel = start_accel;
  }

  // integrate the constrained kinematics to obtain the timestamp when we'll
  // reach the desired positions
  for (std::size_t i = 1; i < raw_path.size(); ++i) {
    PathPosition &s = parameterized_path[i - 1];
    PathPosition &e = parameterized_path[i];
    double dist = e.pose.dist(s.pose);
    double a = ((e.vel * e.vel) - (s.vel * s.vel)) / (2 * dist);
    double segment_dt;
    if (std::abs(a) > K_EPSILON) {
      // v_f = v_0 + a * dt
      segment_dt = (e.vel - s.vel) / a;
    } else if (std::abs(s.vel) > K_EPSILON) {
      // v = dx / dt
      segment_dt = dist / s.vel;
    } else {
      throw std::runtime_error(
        "Zero acceleration and velocity for path is invalid");
    }
    e.time = s.time + segment_dt;
  }
  return parameterized_path;
}
} // namespace squiggles