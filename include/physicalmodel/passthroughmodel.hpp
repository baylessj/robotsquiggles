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

  Constraints constraints(const Pose pose,
                          double curvature,
                          double vel) override {
    UNUSED(pose);
    UNUSED(curvature);
    return Constraints(vel);
  };

  std::vector<double> linear_to_wheel_vels(double lin_vel,
                                           double curvature) override {
    UNUSED(lin_vel);
    UNUSED(curvature);
    return std::vector<double>{};
  }

  std::string to_string() override {
    return "PassthroughModel {}";
  }
};
} // namespace squiggles

#endif