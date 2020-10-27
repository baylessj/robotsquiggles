#ifndef _CONSTRAINTS_HPP_
#define _CONSTRAINTS_HPP_

#include <cmath>
#include <string>

namespace squiggles {
struct Constraints {
  /**
   * Defines the motion constraints for a path.
   */
  Constraints(double imax_vel = std::numeric_limits<double>::max(),
              double imax_accel = std::numeric_limits<double>::max(),
              double imax_jerk = std::numeric_limits<double>::max(),
              double imin_accel = std::nan(""))
    : max_vel(imax_vel), max_accel(imax_accel), max_jerk(imax_jerk) {
    min_accel = std::isnan(imin_accel) ? -imax_accel : imin_accel;
  }

  std::string to_string() const {
    return "Constraints: {max_vel: " + std::to_string(max_vel) +
           ", max_accel: " + std::to_string(max_accel) +
           ", max_jerk: " + std::to_string(max_jerk) +
           ", min_accel: " + std::to_string(min_accel) + "}";
  }

  double max_vel;
  double max_accel;
  double max_jerk;
  double min_accel;
};
} // namespace squiggles
#endif