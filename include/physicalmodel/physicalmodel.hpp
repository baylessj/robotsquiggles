#ifndef _PHYSICAL_MODEL_HPP_
#define _PHYSICAL_MODEL_HPP_

#include "constraints.hpp"
#include "geometry/pose.hpp"

// This silences a warning in GCC/Clang about not using passed parameters
#define UNUSED __attribute__((unused))

namespace squiggles {
class PhysicalModel {
  public:
  PhysicalModel() = default;

  Constraints constraints(UNUSED const Pose pose,
                          UNUSED double curvature,
                          UNUSED double vel) const {
    return Constraints();
  };
};
} // namespace squiggles

#endif