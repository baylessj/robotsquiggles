#ifndef _GEOMETRY_CONTROL_VECTOR_HPP_
#define _GEOMETRY_CONTROL_VECTOR_HPP_

#include <cmath>
#include <string>

#include "pose.hpp"

namespace squiggles {
class ControlVector {
  public:
  /**
   * A vector used to specify a state along a hermite spline.
   */
  ControlVector(Pose ipose,
                double ivel = std::nan(""),
                double iaccel = 0.0,
                double ijerk = 0.0)
    : pose(ipose), vel(ivel), accel(iaccel), jerk(ijerk) {}

  ControlVector() = default;

  std::string to_string() {
    return "ControlVector: {" + pose.to_string() +
           ", v: " + std::to_string(vel) + ", a: " + std::to_string(accel) +
           ", j: " + std::to_string(jerk) + "}";
  }

  Pose pose;
  double vel;
  double accel;
  double jerk;
};
} // namespace squiggles

#endif