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
  : start(istart),
    end(iend),
    constraints(iconstraints),
    dt(idt),
    preferred_start_vel(std::isnan(istart.vel) ? 0 : istart.vel),
    preferred_end_vel(std::isnan(iend.vel) ? 0 : iend.vel) {
  std::cout << "Start: " << std::to_string(preferred_start_vel)
            << " End: " << std::to_string(preferred_end_vel) << std::endl;
  // TODO: we need to keep the start and end velocities for the motion profile

  // ensure that we don't have unspecified start/end velocities, this angers
  // the spline math
  if (std::isnan(start.vel) || std::abs(start.vel) < K_EPSILON) {
    start.vel = K_DEFAULT_VEL * start.pose.dist(end.pose);
  }
  if (std::isnan(end.vel) || std::abs(end.vel) < K_EPSILON) {
    end.vel = K_DEFAULT_VEL * start.pose.dist(end.pose);
  }
}

Spline::Spline(Pose istart, Pose iend, Constraints iconstraints, double idt)
  : Spline(ControlVector(istart), ControlVector(iend), iconstraints, idt) {}

/**
 * NOTE: the time value here is meaningless since we'll remap it completely
 * when imposing the constraints
 */
std::vector<GeneratedPoint> Spline::plan() {
  // break the starting/goal velocities and accels into their
  // axis-specific components
  double s_x = start.pose.x;
  double s_y = start.pose.y;
  double s_yaw = start.pose.yaw;
  double s_v = start.vel;
  double s_a = start.accel;

  double g_x = end.pose.x;
  double g_y = end.pose.y;
  double g_yaw = end.pose.yaw;
  double g_v = end.vel;
  double g_a = end.accel;

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

    std::vector<GeneratedVector> vectors;

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

      if (vectors.size() > 2 &&
          vectors.rbegin()[0].vel - vectors.rbegin()[1].vel < 0.0) {
        linear_accel *= -1;
      }
      if (vectors.size() > 2 &&
          vectors.rbegin()[0].accel - vectors.rbegin()[1].accel < 0.0) {
        linear_jerk *= -1;
      }

      double curvature = 0.0;

      vectors.push_back(
        GeneratedVector(GeneratedPoint(Pose(x_p, y_p, yaw), curvature),
                        linear_vel,
                        linear_accel,
                        linear_jerk));
    }

    auto a_max =
      std::max_element(vectors.begin(),
                       vectors.end(),
                       [](const GeneratedVector &a, const GeneratedVector &b) {
                         return a.accel < b.accel;
                       })
        ->accel;
    auto j_max =
      std::max_element(vectors.begin(),
                       vectors.end(),
                       [](const GeneratedVector &a, const GeneratedVector &b) {
                         return a.jerk < b.jerk;
                       })
        ->jerk;
    if (a_max <= constraints.max_accel && j_max <= constraints.max_jerk) {
      std::vector<GeneratedPoint> out;
      std::transform(vectors.begin(),
                     vectors.end(),
                     std::back_inserter(out),
                     [](GeneratedVector v) { return v.point; });
      return out;
    }
  }
  throw std::runtime_error(
    "Could not find a valid path within the constraints");
}

std::vector<ProfilePoint>
Spline::parameterize(std::vector<GeneratedPoint> &raw_path) {
  std::vector<ConstrainedState> constrainedStates(raw_path.size());

  // Forward Pass
  ConstrainedState predecessor{raw_path.front().pose,
                               0,
                               0,
                               preferred_start_vel,
                               constraints.min_accel,
                               constraints.max_accel};
  constrainedStates[0] = predecessor;
  for (std::size_t i = 0; i < raw_path.size(); ++i) {
    auto &constrainedState = constrainedStates[i];
    constrainedState.pose = raw_path[i].pose;

    double ds = constrainedState.pose.dist(predecessor.pose);
    constrainedState.distance = predecessor.distance + ds;

    // We may need to iterate to find the maximum end vel and common
    // accel, since accel limits may be a function of vel.
    // XXX: while (true) bad
    while (true) {
      // Enforce global max vel and max reachable vel by global accel limit. 
      // vf = std::sqrt(vi^2 + 2*a*d).

      constrainedState.max_vel =
        std::min(constraints.max_vel,
                 std::sqrt(predecessor.max_vel * predecessor.max_vel +
                           predecessor.max_accel * ds * 2.0));

      constrainedState.min_accel = -constraints.max_accel;
      constrainedState.max_accel = constraints.max_accel;

      // At this point, the constrained state is fully constructed apart from
      // all the custom-defined user constraints.
      // for (const auto& constraint : constraints) {
      //   constrainedState.max_vel = units::math::min(
      //       constrainedState.max_vel,
      //       constraint->max_vel(constrainedState.pose.first,
      //                               constrainedState.pose.second,
      //                               constrainedState.max_vel));
      // }
      // TODO: this is the whole tank drive modifications thing

      // Now enforce all accel limits.
      enforce_limits(&constrainedState);

      if (ds < K_EPSILON)
        break;

      // If the actual accel for this state is higher than the max
      // accel that we applied, then we need to reduce the max
      // accel of the predecessor and try again.
      auto actual_accel = (constrainedState.max_vel * constrainedState.max_vel -
                           predecessor.max_vel * predecessor.max_vel) /
                          (ds * 2.0);

      // If we violate the max accel constraint, let's modify the
      // predecessor.
      if (constrainedState.max_accel < actual_accel - K_EPSILON) {
        predecessor.max_accel = constrainedState.max_accel;
      } else {
        // Constrain the predecessor's max accel to the current
        // accel.
        if (actual_accel > predecessor.min_accel + K_EPSILON) {
          predecessor.max_accel = actual_accel;
        }
        // If the actual accel is less than the predecessor's min
        // accel, it will be repaired in the backward pass.
        break;
      }
    }
    predecessor = constrainedState;
  }

  ConstrainedState successor{raw_path.back().pose,
                             0,
                             constrainedStates.back().distance,
                             preferred_end_vel,
                             constraints.min_accel,
                             constraints.max_accel};

  // Backward pass
  for (int i = raw_path.size() - 1; i >= 0; i--) {
    auto &constrainedState = constrainedStates[i];
    double ds = constrainedState.distance - successor.distance; // negative

  // TODO: Below is still TBD

  //   constrainedState.min_accel = std::max(constrainedState.min_accel, constraints.min_accel);

  //   double prev_max_vel;
  //   double new_max_vel = constrainedState.max_vel;
  //   double prev_start_accel = successor.min_accel;
  //   double start_accel_needed;
  //   do {
  //     prev_max_vel = new_max_vel;

  //     // Enforce max vel limit (reverse)
  //     // vf = std::sqrt(vi^2 + 2*a*d), where vi = successor.
  //     new_max_vel = std::sqrt(successor.max_vel * successor.max_vel + prev_start_accel * ds * 2.0);

  //     // If the actual accel for this state is lower than the min
  //     // accel, then we need to lower the min accel of the
  //     // successor and try again.
  //     start_accel_needed = (new_max_vel * new_max_vel - successor.max_vel * successor.max_vel) /
  //       (ds * 2.0);

  //     prev_start_accel = constrainedState.min_accel;
  //   } while (ds <= -K_EPSILON && new_max_vel < prev_max_vel && start_accel_needed <= constrainedState.min_accel - K_EPSILON);
  //   successor.min_accel = start_accel_needed;
  //   constrainedState.max_vel = new_max_vel;

  //   successor = constrainedState;
  // }

    // XXX: infinite loop bad
    while (true) {
      // Enforce max vel limit (reverse)
      // vf = std::sqrt(vi^2 + 2*a*d), where vi = successor.
      double newmax_vel = std::sqrt(successor.max_vel * successor.max_vel +
                                    successor.min_accel * ds * 2.0);

      // No more limits to impose! This state can be finalized.
      if (newmax_vel >= constrainedState.max_vel)
        break;

      constrainedState.max_vel = newmax_vel;

      // Check all accel constraints with the new max vel.
      enforce_limits(&constrainedState);

      if (ds > -K_EPSILON)
        break;

      // If the actual accel for this state is lower than the min
      // accel, then we need to lower the min accel of the
      // successor and try again.
      double actual_accel =
        (constrainedState.max_vel * constrainedState.max_vel -
         successor.max_vel * successor.max_vel) /
        (ds * 2.0);
      if (constrainedState.min_accel > actual_accel + K_EPSILON) {
        successor.min_accel = constrainedState.min_accel;
      } else {
        successor.min_accel = actual_accel;
        break;
      }
    }
    successor = constrainedState;
  }

  // Now we can integrate the constrained states forward in time to obtain our
  // trajectory states.

  std::vector<ProfilePoint> states(raw_path.size());
  double t = 0;
  double s = 0;
  double v = 0;

  for (unsigned int i = 0; i < constrainedStates.size(); i++) {
    auto state = constrainedStates[i];

    // Calculate the change in position between the current state and the
    // previous state.
    double ds = state.distance - s;

    // Calculate the accel between the current state and the previous
    // state.
    double accel = (state.max_vel * state.max_vel - v * v) / (ds * 2);

    // Calculate dt.
    double segment_dt = 0;
    if (i > 0) {
      // states.at(i - 1).accel = reversed ? -accel : accel;
      states.at(i - 1).vector.accel = accel;
      if (std::abs(accel) > K_EPSILON) {
        // v_f = v_0 + a * t
        segment_dt = (state.max_vel - v) / accel;
      } else if (std::abs(v) > K_EPSILON) {
        // delta_x = v * t
        segment_dt = ds / v;
      } else {
        throw std::runtime_error("Something went wrong at iteration " +
                                 std::to_string(i) +
                                 " of time parameterization.");
      }
    }

    v = state.max_vel;
    s = state.distance;

    t += segment_dt;

    // states[i] = {t, reversed ? -v : v, reversed ? -accel : accel,
    //              state.pose.first, state.pose.second};
    states[i] = ProfilePoint(ControlVector(state.pose, v, accel, 0), t);
  }

  return states;
}

void Spline::enforce_limits(ConstrainedState* state) {
  // for (auto&& constraint : constraints) {
  //   double factor = reverse ? -1.0 : 1.0;

  // auto minMaxAccel = constraint->MinMaxaccel(
  //     state->pose.first, state->pose.second, state->maxvel * factor);

  // if (minMaxAccel.minaccel > minMaxAccel.maxaccel) {
  //   throw std::runtime_error(
  //       "The constraint's min accel was greater than its max "
  //       "accel. To debug this, remove all constraints from the config
  //       " "and add each one individually. If the offending constraint was "
  //       "packaged with WPILib, please file a bug report.");
  // }

  state->min_accel =
    std::max(state->min_accel,
             // reverse ? -minMaxAccel.maxaccel : minMaxAccel.minaccel);
             constraints.min_accel);

  state->max_accel =
    std::min(state->max_accel,
             // reverse ? -minMaxAccel.minaccel : minMaxAccel.maxaccel);
             constraints.max_accel);
}

} // namespace squiggles