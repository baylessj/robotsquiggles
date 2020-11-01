/**
 * Copyright 2020 Jonathan Bayless
 *
 * Use of this source code is governed by an MIT-style license that can be found
 * in the LICENSE file or at https://opensource.org/licenses/MIT.
 */
#ifndef _PHYSICAL_MODEL_PASSTHROUGH_MODEL_HPP_
#define _PHYSICAL_MODEL_PASSTHROUGH_MODEL_HPP_

#include "physicalmodel/physicalmodel.hpp"

namespace squiggles {
class PassthroughModel : public PhysicalModel {
  public:
  /**
   * Defines a Physical Model that imposes no constraints of its own.
   */
  PassthroughModel() = default;

  Constraints constraints(UNUSED const Pose pose,
                          UNUSED double curvature,
                          UNUSED double vel) override {
    return Constraints();
  };

  std::vector<double> linear_to_wheel_vels(UNUSED double lin_vel,
                                           UNUSED double curvature) override {
    return std::vector<double>{};
  }

  std::string to_string() override {
    return "PassthroughModel {}";
  }
};
} // namespace squiggles

#endif