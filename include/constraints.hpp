#ifndef _CONSTRAINTS_HPP_
#define _CONSTRAINTS_HPP_

namespace squiggles {
struct Constraints {
  Constraints(double imax_vel,
              double imax_accel,
              double imax_jerk,
              double imin_accel = std::nan(""))
    : max_vel(imax_vel), max_accel(imax_accel), max_jerk(imax_jerk) {
    min_accel = std::isnan(imin_accel) ? -imax_accel : imin_accel;
  }

  double max_vel;
  double max_accel;
  double max_jerk;
  double min_accel;
};
} // namespace squiggles
#endif