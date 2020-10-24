#ifndef _PHYSICAL_MODEL_HPP_
#define _PHYSICAL_MODEL_HPP_

#include "constraints.hpp"
#include "geometry/pose.hpp"

namespace squiggles {
class PhysicalModel {
  public:
  PhysicalModel() = default;

  virtual Constraints
  constraints(const Pose pose, double curvature, double vel) const = 0;
};
} // namespace squiggles

#endif