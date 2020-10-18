#include <algorithm>
#include <array>
#include <cmath>
#include <iostream>
#include <numeric>

#include "polynomial.hpp"
#include "spline.hpp"

namespace squiggles {
Spline::Spline(std::initializer_list<Pose> iwaypoints,
               double imax_acceleration,
               double imax_jerk,
               double idt,
               double istart_velocity,
               double istart_acceleration,
               double igoal_velocity,
               double igoal_acceleration)
  : points(iwaypoints),
    s_x(points[0].x),
    s_y(points[0].y),
    s_yaw(points[0].yaw),
    g_x(points[1].x),
    g_y(points[1].y),
    g_yaw(points[1].yaw),
    max_a(imax_acceleration),
    max_j(imax_jerk),
    dt(idt),
    s_v(istart_velocity),
    g_v(igoal_velocity),
    s_a(istart_acceleration),
    g_a(igoal_acceleration) {}

std::vector<PathPosition> Spline::plan() {
  // break the starting/goal velocities and accelerations into their
  // axis-specific components
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
    if (a_max <= max_a && j_max <= max_j) {
      return out;
    }
  }
  throw std::runtime_error(
    "Could not find a valid path within the constraints");
}

// Pose Spline::step(double t) {
//   double a = 2 * t * t * t - 3 * t * t + 1;
//   double b = -2 * t * t * t + 3 * t * t;
//   double c = t * t * t - 2 * t * t + t;
//   double d = t * t * t - t * t;

//   // TODO: assuming we need to change up theta to give delta x or delta y?
//   // TODO: allow for more than two points by iterating through (0, 1) to
//   (n-1, n) double x_t = a * points[0].x + b * points[1].x + c *
//   points[0].theta + d * points[1].theta; double y_t = a * points[0].y + b *
//   points[1].y + c * points[0].theta + d * points[1].theta;
//   // TODO: calculate the theta from the previous point maybe?
//   return Pose(x_t, y_t, 0);
// }
} // namespace squiggles