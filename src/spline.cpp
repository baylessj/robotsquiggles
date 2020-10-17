#include <array>
#include <cmath>
#include <iostream>
#include <numeric>

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
    max_a(imax_acceleration),
    max_j(imax_jerk),
    dt(dt),
    s_v(istart_velocity),
    s_a(istart_acceleration),
    g_v(igoal_velocity),
    g_a(igoal_acceleration) {
  s_x = points[0].x;
  s_y = points[0].y;
  s_yaw = points[0].yaw;
  g_x = points[1].x;
  g_y = points[1].y;
  g_yaw = points[1].yaw;
}

template <typename T>
std::vector<T> linspace(T a, T b, size_t N) {
    T h = (b - a) / static_cast<T>(N-1);
    std::vector<T> xs(N);
    typename std::vector<T>::iterator x;
    T val;
    for (x = xs.begin(), val = a; x != xs.end(); ++x, val += h)
        *x = val;
    return xs;
}

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
  std::vector<int> times = linspace<int>(T_MIN, T_MAX, 1);
  for (auto n : times)
    std::cout << n << ' ';
  std::cout << '\n';
}

// Pose Spline::step(double t) {
//   double a = 2 * t * t * t - 3 * t * t + 1;
//   double b = -2 * t * t * t + 3 * t * t;
//   double c = t * t * t - 2 * t * t + t;
//   double d = t * t * t - t * t;

//   // TODO: assuming we need to change up theta to give delta x or delta y?
//   // TODO: allow for more than two points by iterating through (0, 1) to (n-1, n)
//   double x_t = a * points[0].x + b * points[1].x + c * points[0].theta + d * points[1].theta;
//   double y_t = a * points[0].y + b * points[1].y + c * points[0].theta + d * points[1].theta;
//   // TODO: calculate the theta from the previous point maybe?
//   return Pose(x_t, y_t, 0);
// }
} // namespace squiggles