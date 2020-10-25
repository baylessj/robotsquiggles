#ifndef _PHYSICAL_MODEL_TANK_MODEL_HPP_
#define _PHYSICAL_MODEL_TANK_MODEL_HPP_

#include <tuple>

#include "physicalmodel/physicalmodel.hpp"

namespace squiggles {
class TankModel : public PhysicalModel {
  public:
  TankModel(double itrack_width, Constraints ilinear_constraints);

  Constraints constraints(const Pose pose, double curvature, double vel) override;

  std::tuple<double, double> linear_to_wheel_vels(double lin_vel,
                                                  double curvature) const;
  
  std::string to_string() override;

  private:
  double vel_constraint(const Pose pose, double curvature, double vel) const;
  std::tuple<double, double>
  accel_constraint(const Pose pose, double curvature, double vel) const;

  double track_width;
  Constraints linear_constraints;
};
} // namespace squiggles

#endif