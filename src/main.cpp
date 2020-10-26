#include <iostream>

#include "squiggles.hpp"

using namespace squiggles;

int main() {
  auto constraints = Constraints(2.0, 2.0, 1.0);
  auto model = std::make_shared<TankModel>(0.4, constraints);
  auto spline = Spline(ControlVector(Pose(0, 0, 0), 0.0, 0.0),
                       ControlVector(Pose(0, 2, 0), 0.0, 0.0),
                       constraints,
                       model,
                       0.1);
  auto path = spline.plan();
  auto planned_path = spline.parameterize(path);
  return 0;
}