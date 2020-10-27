#ifndef _PASSTHROUGH_MODEL_HPP_
#define _PASSTHROUGH_MODEL_HPP_

#include "physicalmodel/physicalmodel.hpp"

namespace squiggles {
class PassthroughModel : public PhysicalModel {
  public:
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