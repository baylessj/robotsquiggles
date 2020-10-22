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
    preferred_start_vel(std::isnan(istart.velocity) ? 0 : istart.velocity),
    preferred_end_vel(std::isnan(iend.velocity) ? 0 : iend.velocity) {
  std::cout << "Start: " << std::to_string(preferred_start_vel)
            << " End: " << std::to_string(preferred_end_vel) << std::endl;
  // TODO: we need to keep the start and end velocities for the motion profile

  // ensure that we don't have unspecified start/end velocities, this angers
  // the spline math
  if (std::isnan(start.velocity) || std::abs(start.velocity) < K_EPSILON) {
    start.velocity = K_DEFAULT_VEL * start.pose.dist(end.pose);
  }
  if (std::isnan(end.velocity) || std::abs(end.velocity) < K_EPSILON) {
    end.velocity = K_DEFAULT_VEL * start.pose.dist(end.pose);
  }
}

Spline::Spline(Pose istart, Pose iend, Constraints iconstraints, double idt)
  : Spline(ControlVector(istart), ControlVector(iend), iconstraints, idt) {}

/**
 * NOTE: the time value here is meaningless since we'll remap it completely
 * when imposing the constraints
 */
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
    // checking that the resulting path is within the constraints is successful
    // in unit tests.
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
// std::vector<PathPosition>
// Spline::parameterize(std::vector<PathPosition> &raw_path) {
//   std::vector<PathPosition> parameterized_path(raw_path.size());

//   // forward pass through path
//   parameterized_path[0] = raw_path[0];
//   parameterized_path[0].vel = preferred_start_vel;
//   for (std::size_t i = 1; i < raw_path.size(); ++i) {
//     parameterized_path[i] = raw_path[i];
//     PathPosition &parameterized_start = parameterized_path[i - 1];
//     PathPosition &raw_end = raw_path[i];

//     auto [end_vel, start_accel] = impose_limits(parameterized_start,
//     raw_end); parameterized_path[i].vel = end_vel; parameterized_path[i -
//     1].accel = start_accel;
//   }

//   // backward pass
//   // TODO: this is borked
//   // TODO: just use Control Vectors as the return type of the initial plan?
//   Time isn't used there
//   // TODO: add jerk to the control vectors then?
//   // TODO: should PathPosition be ControlVector + time?
//   ControlVector successor = ControlVector(raw_path.back().pose,
//   preferred_end_vel, constraints.min_accel); for (std::size_t i =
//   raw_path.size() - 1; i > 0; --i) {
//     PathPosition& parameterized_start = parameterized_path[i];
//     PathPosition& parameterized_end = parameterized_path[i - 1];

//     double dist = parameterized_path[i].pose.dist(successor.pose);
//     if (std::abs(dist) > K_EPSILON) {
//       continue;
//     }

//     double a_0 = constraints.min_accel;
//     do {
//       // Extrapolate the velocity at the end of this segment based on the
//       // acceleration at the start of the segment. If this final velocity
//       // is greater than the velocity constraint then we need to recalculate
//       // the acceleration at the start of the segment
//       double v_sq = successor.velocity * successor.velocity + 2 *
//       constraints.min_accel * dist; double v_f = std::sqrt(std::abs(v_sq));

//       if (v_f >= constraints.max_vel) break;

//       parameterized_start.vel = v_f;

//       // Re-calculate the limited acceleration to see if reaching the
//       constrained
//       // final velocity requires a starting acceleration that exceeds the
//       // acceleration limits.
//       a_0 = ((parameterized_start.vel * parameterized_start.vel) -
//       (successor.velocity * successor.velocity)) / (2 * dist);
//       parameterized_start.accel = std::max(a_0, constraints.min_accel);
//     } while ((std::abs(a_0) - std::abs(constraints.min_accel)) > K_EPSILON);

//     successor = ControlVector(parameterized_start.pose,
//     parameterized_start.vel, parameterized_start.accel);
//   }

//   // integrate the constrained kinematics to obtain the timestamp when we'll
//   // reach the desired positions
//   for (std::size_t i = 1; i < raw_path.size(); ++i) {
//     PathPosition &s = parameterized_path[i - 1];
//     PathPosition &e = parameterized_path[i];
//     double dist = e.pose.dist(s.pose);
//     double a = ((e.vel * e.vel) - (s.vel * s.vel)) / (2 * dist);
//     double segment_dt;
//     if (std::abs(a) > K_EPSILON) {
//       // v_f = v_0 + a * dt
//       segment_dt = (e.vel - s.vel) / a;
//     } else if (std::abs(s.vel) > K_EPSILON) {
//       // v = dx / dt
//       segment_dt = dist / s.vel;
//     } else {
//       // throw std::runtime_error(
//         // "Zero acceleration and velocity for path is invalid");
//     }
//     e.time = s.time + segment_dt;
//   }
//   return parameterized_path;
// }

std::vector<PathPosition>
Spline::parameterize(std::vector<PathPosition> &raw_path) {
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

    // We may need to iterate to find the maximum end velocity and common
    // acceleration, since acceleration limits may be a function of velocity.
    // XXX: while (true) bad
    while (true) {
      // Enforce global max velocity and max reachable velocity by global
      // acceleration limit. vf = std::sqrt(vi^2 + 2*a*d).

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

      // Now enforce all acceleration limits.
      enforce_accel_lims(&constrainedState);

      if (ds < K_EPSILON)
        break;

      // If the actual acceleration for this state is higher than the max
      // acceleration that we applied, then we need to reduce the max
      // acceleration of the predecessor and try again.
      auto actual_accel = (constrainedState.max_vel * constrainedState.max_vel -
                           predecessor.max_vel * predecessor.max_vel) /
                          (ds * 2.0);

      // If we violate the max acceleration constraint, let's modify the
      // predecessor.
      if (constrainedState.max_accel < actual_accel - K_EPSILON) {
        predecessor.max_accel = constrainedState.max_accel;
      } else {
        // Constrain the predecessor's max acceleration to the current
        // acceleration.
        if (actual_accel > predecessor.min_accel + K_EPSILON) {
          predecessor.max_accel = actual_accel;
        }
        // If the actual acceleration is less than the predecessor's min
        // acceleration, it will be repaired in the backward pass.
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

    // XXX: infinite loop bad
    while (true) {
      // Enforce max velocity limit (reverse)
      // vf = std::sqrt(vi^2 + 2*a*d), where vi = successor.
      double newmax_vel = std::sqrt(successor.max_vel * successor.max_vel +
                                    successor.min_accel * ds * 2.0);

      // No more limits to impose! This state can be finalized.
      if (newmax_vel >= constrainedState.max_vel)
        break;

      constrainedState.max_vel = newmax_vel;

      // Check all acceleration constraints with the new max velocity.
      enforce_accel_lims(&constrainedState);

      if (ds > -K_EPSILON)
        break;

      // If the actual acceleration for this state is lower than the min
      // acceleration, then we need to lower the min acceleration of the
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

  std::vector<PathPosition> states(raw_path.size());
  double t = 0;
  double s = 0;
  double v = 0;

  for (unsigned int i = 0; i < constrainedStates.size(); i++) {
    auto state = constrainedStates[i];

    // Calculate the change in position between the current state and the
    // previous state.
    double ds = state.distance - s;

    // Calculate the acceleration between the current state and the previous
    // state.
    double accel = (state.max_vel * state.max_vel - v * v) / (ds * 2);

    // Calculate dt.
    double segment_dt = 0;
    if (i > 0) {
      // states.at(i - 1).acceleration = reversed ? -accel : accel;
      states.at(i - 1).accel = accel;
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
    states[i] = PathPosition(state.pose, v, accel, 0, t);
  }

  return states;
}

void Spline::enforce_accel_lims(ConstrainedState *state) {
  // for (auto&& constraint : constraints) {
  //   double factor = reverse ? -1.0 : 1.0;

  // auto minMaxAccel = constraint->MinMaxAcceleration(
  //     state->pose.first, state->pose.second, state->maxVelocity * factor);

  // if (minMaxAccel.minAcceleration > minMaxAccel.maxAcceleration) {
  //   throw std::runtime_error(
  //       "The constraint's min acceleration was greater than its max "
  //       "acceleration. To debug this, remove all constraints from the config
  //       " "and add each one individually. If the offending constraint was "
  //       "packaged with WPILib, please file a bug report.");
  // }

  state->min_accel = std::max(
    state->min_accel,
    // reverse ? -minMaxAccel.maxAcceleration : minMaxAccel.minAcceleration);
    constraints.min_accel);

  state->max_accel = std::min(
    state->max_accel,
    // reverse ? -minMaxAccel.minAcceleration : minMaxAccel.maxAcceleration);
    constraints.max_accel);
  // }
}

} // namespace squiggles