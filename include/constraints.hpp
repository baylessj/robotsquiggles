#ifndef _CONSTRAINTS_HPP_
#define _CONSTRAINTS_HPP_

#include <cmath>
#include <string>

namespace squiggles {
struct Constraints {
  Constraints(double imax_vel,
              double imax_accel = std::numeric_limits<double>::max(),
              double imax_jerk = std::numeric_limits<double>::max(),
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