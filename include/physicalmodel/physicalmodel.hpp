#ifndef _PHYSICAL_MODEL_HPP_
#define _PHYSICAL_MODEL_HPP_

#include "constraints.hpp"
#include "geometry/pose.hpp"

// This silences a warning in GCC/Clang about not using passed parameters
#define UNUSED __attribute__((unused))

namespace squiggles {
class PhysicalModel {
  public:
  virtual Constraints
  constraints(const Pose pose, double curvature, double vel) = 0;

  virtual std::vector<double> linear_to_wheel_vels(double linear,
                                                   double curvature) = 0;

  virtual std::string to_string() = 0;
};
} // namespace squiggles

#endif