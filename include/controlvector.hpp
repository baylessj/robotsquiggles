#ifndef _CONTROL_VECTOR_HPP_
#define _CONTROL_VECTOR_HPP_

#include "pose.hpp"

namespace squiggles {
class ControlVector {
  public:
  ControlVector(Pose ipose, double ivelocity = std::nan(""), double iacceleration = 0.0)
    : pose(ipose), velocity(ivelocity), acceleration(iacceleration) {}

  ControlVector() = default;

  Pose pose;
  double velocity;
  double acceleration;
};
} // namespace squiggles

#endif