#ifndef _CONSTRAINTS_HPP_
#define _CONSTANTS_HPP_

namespace squiggles {
struct Constraints {
  Constraints(double imax_vel,
              double imax_accel,
              double imax_jerk,
              double imin_accel = 0.0)
    : max_vel(imax_vel),
      max_accel(imax_accel),
      max_jerk(imax_jerk),
      min_accel(imin_accel) {}

  double max_vel;
  double min_accel;
  double max_accel;
  double max_jerk;
};
} // namespace squiggles
#endif