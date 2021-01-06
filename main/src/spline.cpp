/**
 * Copyright 2020 Jonathan Bayless
 *
 * Use of this source code is governed by an MIT-style license that can be found
 * in the LICENSE file or at https://opensource.org/licenses/MIT.
 */
#include <algorithm>
#include <array>
#include <cmath>
#include <iostream>
#include <numeric>
#include <tuple>

#include "spline.hpp"

namespace squiggles {
SplineGenerator::SplineGenerator(Constraints iconstraints,
                                 std::shared_ptr<PhysicalModel> imodel,
                                 double idt)
  : constraints(iconstraints), model(std::move(imodel)), dt(idt) {}

std::vector<ProfilePoint>
SplineGenerator::generate(std::vector<Pose> iwaypoints) {
  std::vector<Pose> points = iwaypoints;
  std::vector<ControlVector> vectors;
  for (auto p : points) {
    vectors.emplace_back(ControlVector(p));
  }
  return _generate(vectors.begin(), vectors.end());
}

std::vector<ProfilePoint>
SplineGenerator::generate(std::initializer_list<Pose> iwaypoints) {
  std::vector<Pose> points = iwaypoints;
  std::vector<ControlVector> vectors;
  for (auto p : points) {
    vectors.emplace_back(ControlVector(p));
  }
  return _generate(vectors.begin(), vectors.end());
}

std::vector<ProfilePoint>
SplineGenerator::generate(std::vector<ControlVector> iwaypoints) {
  return _generate(iwaypoints.begin(), iwaypoints.end());
}

std::vector<ProfilePoint>
SplineGenerator::generate(std::initializer_list<ControlVector> iwaypoints) {
  return _generate(iwaypoints.begin(), iwaypoints.end());
}

template <class Iter>
std::vector<ProfilePoint> SplineGenerator::_generate(Iter start, Iter end) {
  std::vector<ProfilePoint> path;
  for (auto vec = std::next(start); vec != end; ++vec) {
    // create copies of the values
    auto spline_start = *std::prev(vec);
    auto spline_end = *vec;

    auto preferred_start_vel =
      std::isnan(spline_start.vel) ? 0 : spline_start.vel;
    auto preferred_end_vel = std::isnan(spline_end.vel) ? 0 : spline_end.vel;

    auto raw_path = gen_raw_path(spline_start, spline_end);
    // TODO: check if the vel or accel constraints are actually hit by the raw
    // path and return the raw path if not?
    auto profiled_path = parameterize(spline_start,
                                      spline_end,
                                      raw_path,
                                      preferred_start_vel,
                                      preferred_end_vel);
    path.insert(path.end(), profiled_path.begin(), profiled_path.end());
  }
  return path;
}

// TODO: Seek to minimize peak curvature, we will want a curved path so 
      // we don't want to minimize the total curvature or anything but we'll
      // definitely want to eliminate peaks

      // Two variables affect the curvature -- the path duration (d) and the
      // starting/ending velocity (K_DEFAULT_VEL). If we have the freedom to 
      // mess with the dummy velocities then we can change the 
std::vector<SplineGenerator::GeneratedVector> SplineGenerator::gen_single_raw_path(ControlVector start, ControlVector end, int duration, double start_vel, double end_vel) {
  start.vel = start_vel;
  end.vel = end_vel;
  auto x_qp = get_x_spline(start, end, duration);
  auto y_qp = get_y_spline(start, end, duration);

  std::vector<GeneratedVector> vectors;

  std::vector<double> times(round(duration / dt) + 1);
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

    double curvature = (x_v * y_a - x_a * y_v) /
                        ((x_v * x_v + y_v * y_v) * std::hypot(x_v, y_v));
    

    vectors.push_back(
      GeneratedVector(GeneratedPoint(Pose(x_p, y_p, yaw), curvature),
                      linear_vel,
                      linear_accel,
                      linear_jerk));
  }
  return vectors;
}

/**
 * NOTE: the time value here is meaningless since we'll remap it completely
 * when imposing the constraints
 */
std::vector<SplineGenerator::GeneratedPoint>
SplineGenerator::gen_raw_path(ControlVector start, ControlVector end) {
  // set dummy velocity values if the user has not explicitly set them
  double start_vel = start.vel;
  double end_vel = end.vel;
  bool dummy_vel = false;
  if (std::isnan(start.vel) ||
      std::abs(start.vel) < K_EPSILON) {
    start_vel =
      K_DEFAULT_VEL * start.pose.dist(end.pose);
    dummy_vel = true;
  }
  if (std::isnan(end.vel) || std::abs(end.vel) < K_EPSILON) {
    end_vel = K_DEFAULT_VEL * start.pose.dist(end.pose);
    dummy_vel = true;
  }

  int borkcounter = 0;

  // iterate through possible path durations until we find one that fits
  // our kinematic constraints
  std::vector<int> durations(T_MAX - T_MIN + 1);
  std::iota(std::begin(durations), std::end(durations), T_MIN);
  for (auto d : durations) {
__gen_path:
    std::vector<GeneratedVector> vectors = gen_single_raw_path(start, end, d, start_vel, end_vel);    

    auto a_max =
      std::max_element(vectors.begin(),
                       vectors.end(),
                       [](const GeneratedVector& a, const GeneratedVector& b) {
                         return a.accel < b.accel;
                       })
        ->accel;
    auto j_max =
      std::max_element(vectors.begin(),
                       vectors.end(),
                       [](const GeneratedVector& a, const GeneratedVector& b) {
                         return a.jerk < b.jerk;
                       })
        ->jerk;
    auto k_max = std::max_element(vectors.begin(),
                       vectors.end(),
                       [](const GeneratedVector& a, const GeneratedVector& b) {
                         return a.point.curvature < b.point.curvature;
                       })->point.curvature;
    if (std::isnan(k_max)) {
      std::cout << std::to_string(end_vel) << std::endl;
      for (auto v : vectors) {
        std::cout << std::to_string(v.point.curvature) << std::endl;
      }
      borkcounter++;
      if (borkcounter > 3)
        throw std::runtime_error("");
      k_max = std::numeric_limits<double>::max();
    }

    std::cout << std::to_string(k_max) << "   |   " << std::to_string(constraints.max_curvature) << std::endl;
    if (a_max > constraints.max_accel || j_max > constraints.max_jerk || (k_max > constraints.max_curvature && !dummy_vel)) {
      continue;
    } else if (k_max >= constraints.max_curvature) {
      std::cout << std::to_string(start_vel) << std::endl;
      start_vel *= 0.8;
      end_vel *= 0.8;
      goto __gen_path;
      // TODO: this is way too simple
    } else {
      // all of the constraints are met
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
SplineGenerator::parameterize(const ControlVector start,
                              const ControlVector end,
                              const std::vector<GeneratedPoint>& raw_path,
                              const double preferred_start_vel,
                              const double preferred_end_vel) {
  std::vector<ConstrainedState> constrainedStates(raw_path.size());

  // Forward Pass
  ConstrainedState predecessor(raw_path.front().pose,
                               0,
                               0,
                               preferred_start_vel,
                               constraints.min_accel,
                               constraints.max_accel);
  constrainedStates[0] = predecessor;
  for (std::size_t i = 0; i < raw_path.size(); ++i) {
    auto& constrainedState = constrainedStates[i];
    constrainedState.pose = raw_path[i].pose;
    constrainedState.curvature = raw_path[i].curvature;
    forward_pass(&predecessor, &constrainedState);
    predecessor = constrainedState;
  }

  // Backward pass
  ConstrainedState successor(raw_path.back().pose,
                             0,
                             constrainedStates.back().distance,
                             preferred_end_vel,
                             constraints.min_accel,
                             constraints.max_accel);
  for (int i = raw_path.size() - 1; i >= 0; i--) {
    backward_pass(&constrainedStates[i], &successor);
    successor = constrainedStates[i];
  }

  // Now we can integrate the constrained states forward in time to obtain our
  // trajectory states.
  auto time_adjusted = integrate_constrained_states(constrainedStates);

  const auto num_time_steps = std::round(time_adjusted.back().time / dt) + 1;
  std::vector<double> times(num_time_steps);
  std::iota(std::begin(times), std::end(times), 0.0);
  std::vector<ProfilePoint> out;
  for (auto t : times) {
    out.emplace_back(get_point_at_time(start, end, time_adjusted, t * dt));
  }
  return out;
}

/**
 * We may need to iterate to find the maximum end vel and common accel, since
 * accel limits may be a function of vel.
 */
void SplineGenerator::forward_pass(ConstrainedState* predecessor,
                                   ConstrainedState* successor) {
  double ds = successor->pose.dist(predecessor->pose);
  successor->distance = predecessor->distance + ds;

  while (true) {
    // Enforce global max vel and max reachable vel by global accel limit.
    // vf = std::sqrt(vi^2 + 2*a*d).

    successor->max_vel =
      std::min(constraints.max_vel,
               vf(predecessor->max_vel, predecessor->max_accel, ds));

    successor->min_accel = -constraints.max_accel;
    successor->max_accel = constraints.max_accel;

    // TODO: allow for multiple kinds of contraints in addition to the physical
    // models?
    auto model_max_vel =
      model
        ->constraints(successor->pose, successor->curvature, successor->max_vel)
        .max_vel;
    successor->max_vel = std::min(successor->max_vel, model_max_vel);

    // Now enforce all accel limits.
    enforce_accel_lims(successor);

    if (ds < K_EPSILON)
      break;

    // If the actual accel for this state is higher than the max
    // accel that we applied, then we need to reduce the max
    // accel of the predecessor and try again.
    double start_accel_needed =
      ai(successor->max_vel, predecessor->max_vel, ds);

    // If we violate the max accel constraint, let's modify the
    // predecessor.
    if (successor->max_accel < start_accel_needed - K_EPSILON) {
      predecessor->max_accel = successor->max_accel;
    } else {
      // Constrain the predecessor's max accel to the current
      // accel.
      if (start_accel_needed > predecessor->min_accel + K_EPSILON) {
        predecessor->max_accel = start_accel_needed;
      }
      // If the actual accel is less than the predecessor's min
      // accel, it will be repaired in the backward pass.
      break;
    }
  }
}

/**
 * Enforce the max velocity on the predecessor point and the min
 * acceleration on the successor point.
 */
void SplineGenerator::backward_pass(ConstrainedState* predecessor,
                                    ConstrainedState* successor) {
  double ds = predecessor->distance - successor->distance; // negative

  while (predecessor->max_vel >
         vf(successor->max_vel, successor->min_accel, ds)) {
    predecessor->max_vel = vf(successor->max_vel, successor->min_accel, ds);
    auto model_max = model
                       ->constraints(predecessor->pose,
                                     predecessor->curvature,
                                     predecessor->max_vel)
                       .max_vel;
    predecessor->max_vel = std::min(predecessor->max_vel, model_max);
    enforce_accel_lims(predecessor);

    if (ds > -K_EPSILON)
      break;

    // Recalculate the needed acceleration from the successor point that will
    // give us the desired velocity at the predecessor point. If this
    // recalculated acceleration exceeds then constraints then we repeat this
    // loop to find a suitable velocity for the predecessor point.
    double end_accel_needed = ai(predecessor->max_vel, successor->max_vel, ds);
    if ((end_accel_needed - K_EPSILON) <= predecessor->min_accel) {
      successor->min_accel = predecessor->min_accel;
    } else {
      successor->min_accel = end_accel_needed;
      break;
    }
  }
}

std::vector<ProfilePoint> SplineGenerator::integrate_constrained_states(
  std::vector<ConstrainedState> constrainedStates) {
  std::vector<ProfilePoint> out(constrainedStates.size());
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
      out.at(i - 1).vector.accel = accel;
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
    auto k = state.curvature;
    auto wheel_vels = model->linear_to_wheel_vels(v, k);

    t += segment_dt;

    out[i] =
      ProfilePoint(ControlVector(state.pose, v, accel, 0), wheel_vels, k, t);
  }
  return out;
}

double SplineGenerator::vf(double vi, double a, double ds) {
  return std::sqrt(vi * vi + a * ds * 2.0);
}

double SplineGenerator::ai(double vf, double vi, double ds) {
  return vf * vf - vi * vi / (ds * 2.0);
}

void SplineGenerator::enforce_accel_lims(ConstrainedState* state) {
  // for (auto&& constraint : constraints) {
  //   double factor = reverse ? -1.0 : 1.0;

  auto model_constraints =
    model->constraints(state->pose, state->curvature, state->max_vel);
  if (model_constraints.min_accel > model_constraints.max_accel) {
    throw std::runtime_error(
      "The constraint's min accel was greater than its max "
      "accel. To debug this, remove all constraints from the config "
      "and add each one individually.If the offending constraint was "
      "packaged with RobotSquiggles, please file a bug report.");
  }

  state->min_accel =
    std::max(state->min_accel,
             // reverse ? -minMaxAccel.maxaccel : minMaxAccel.minaccel);
             model_constraints.min_accel);

  state->max_accel =
    std::min(state->max_accel,
             // reverse ? -minMaxAccel.minaccel : minMaxAccel.maxaccel);
             model_constraints.max_accel);
}

ProfilePoint
SplineGenerator::get_point_at_time(const ControlVector start,
                                   const ControlVector end,
                                   std::vector<ProfilePoint> points,
                                   double t) {
  if (t <= points.front().time)
    return points.front();
  if (t >= points.back().time)
    return points.back();

  // Use binary search to get the element with a timestamp no less than the
  // requested timestamp. This starts at 1 because we use the previous state
  // later on for interpolation.
  auto sample = std::lower_bound(
    points.cbegin() + 1, points.cend(), t, [](const auto& a, const auto& b) {
      return a.time < b;
    });

  auto prev_sample = sample - 1;

  // The sample's timestamp is now greater than or equal to the requested
  // timestamp. If it is greater, we need to interpolate between the
  // previous state and the current state to get the exact state that we
  // want.

  // If the difference in states is negligible, then we are spot on!
  if (std::abs(sample->time - prev_sample->time) < K_EPSILON) {
    return *sample;
  }
  const auto i = (t - prev_sample->time) / (sample->time - prev_sample->time);
  const auto duration = points.back().time;
  // Interpolate between the two states for the state that we want.
  return lerp_point(get_x_spline(start, end, duration),
                    get_y_spline(start, end, duration),
                    *prev_sample,
                    *sample,
                    i);
}

ProfilePoint SplineGenerator::lerp_point(QuinticPolynomial x_qp,
                                         QuinticPolynomial y_qp,
                                         ProfilePoint p_start,
                                         ProfilePoint p_end,
                                         double i) {
  // Find the new [t] value.
  const auto new_t = std::lerp(p_start.time, p_end.time, i);

  // Find the delta time between the current state and the interpolated state.
  const auto cur_dt = new_t - p_start.time;

  // If delta time is negative, flip the order of interpolation.
  if (cur_dt < 0)
    return lerp_point(x_qp, y_qp, p_end, p_start, 1.0 - i);

  // Check whether the robot is reversing at this stage.
  const auto reversing =
    p_start.vector.vel < 0 ||
    (std::abs(p_start.vector.vel) < K_EPSILON && p_start.vector.accel < 0);

  // Calculate the new velocity.
  // v = v_0 + at
  const auto new_v = p_start.vector.vel + (p_start.vector.accel * cur_dt);

  // Calculate the change in position.
  // delta_s = v_0 t + 0.5 at^2
  const auto new_s = (p_start.vector.vel * cur_dt +
                      0.5 * p_start.vector.accel * cur_dt * cur_dt) *
                     (reversing ? -1.0 : 1.0);

  // Return the new state. To find the new position for the new state, we need
  // to interpolate between the two endpoint poses. The fraction for
  // interpolation is the change in position (delta s) divided by the total
  // distance between the two endpoints.
  const double interpolationFrac =
    new_s / p_end.vector.pose.dist(p_start.vector.pose);

  const auto new_curvature =
    std::lerp(p_start.curvature, p_end.curvature, interpolationFrac);
  std::vector<double> new_wheel_vels =
    model->linear_to_wheel_vels(new_v, new_curvature);
  const auto new_x = x_qp.calc_point(new_t);
  const auto new_y = y_qp.calc_point(new_t);
  const auto new_yaw = std::atan2(y_qp.calc_first_derivative(new_t),
                                  x_qp.calc_first_derivative(new_t));
  // const auto new_pose = p_start.vector.pose.lerp(p_end.vector.pose,
  // interpolationFrac);

  return ProfilePoint(ControlVector(Pose(new_x, new_y, new_yaw),
                                    new_v,
                                    p_start.vector.accel,
                                    p_start.vector.jerk),
                      new_wheel_vels,
                      new_curvature,
                      new_t);
}

QuinticPolynomial SplineGenerator::get_x_spline(const ControlVector start,
                                                const ControlVector end,
                                                const double duration) {
  // break the starting/goal velocities and accels into their
  // axis-specific components
  double s_x = start.pose.x;
  double s_yaw = start.pose.yaw;
  double s_v = start.vel;
  double s_a = start.accel;

  double g_x = end.pose.x;
  double g_yaw = end.pose.yaw;
  double g_v = end.vel;
  double g_a = end.accel;

  double s_vx = s_v * std::cos(s_yaw);
  double g_vx = g_v * std::cos(g_yaw);
  double s_ax = s_a * std::cos(s_yaw);
  double g_ax = g_a * std::cos(g_yaw);

  return QuinticPolynomial(s_x, s_vx, s_ax, g_x, g_vx, g_ax, duration);
}

QuinticPolynomial SplineGenerator::get_y_spline(const ControlVector start,
                                                const ControlVector end,
                                                const double duration) {
  // break the starting/goal velocities and accels into their
  // axis-specific components
  double s_y = start.pose.y;
  double s_yaw = start.pose.yaw;
  double s_v = start.vel;
  double s_a = start.accel;

  double g_y = end.pose.y;
  double g_yaw = end.pose.yaw;
  double g_v = end.vel;
  double g_a = end.accel;

  double s_vy = s_v * std::sin(s_yaw);
  double g_vy = g_v * std::sin(g_yaw);
  double s_ay = s_a * std::sin(s_yaw);
  double g_ay = g_a * std::sin(g_yaw);

  return QuinticPolynomial(s_y, s_vy, s_ay, g_y, g_vy, g_ay, duration);
}
} // namespace squiggles
