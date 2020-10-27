#ifndef _PHYSICAL_MODEL_TANK_MODEL_HPP_
#define _PHYSICAL_MODEL_TANK_MODEL_HPP_

#include <tuple>
#include <vector>

#include "physicalmodel/physicalmodel.hpp"

namespace squiggles {
class TankModel : public PhysicalModel {
  public:
  TankModel(double itrack_width, Constraints ilinear_constraints);

  Constraints
  constraints(UNUSED const Pose pose, double curvature, double vel) override;

  std::vector<double> linear_to_wheel_vels(double lin_vel,
                                           double curvature) override;

  std::string to_string() override;

  private:
  double vel_constraint(const Pose pose, double curvature, double vel);
  std::tuple<double, double>
  accel_constraint(const Pose pose, double curvature, double vel) const;

  double track_width;
  Constraints linear_constraints;
};
} // namespace squiggles

#endif