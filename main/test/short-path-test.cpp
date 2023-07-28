#include "gtest/gtest.h"

#include "squiggles.hpp"

using namespace squiggles;

TEST(short_path_test, print) {
    auto constraints = Constraints(2.0, 2.0, 9.0);
  auto model = std::make_shared<TankModel>(0.32385, constraints);
  auto spline = SplineGenerator(constraints, model, 0.01);
  auto path = spline.generate({
    ControlVector(Pose(0, 0, 0), 0.0, 0.0),
    ControlVector(Pose(0.0508, 0, 0), 0.0, 0.0),
  });
  std::cout << "final path" << std::endl;
  for (auto point : path) {
    auto pose = point.vector.pose;
    std::cout << "X: " << pose.x << " Y: " << pose.y << " Yaw: " << pose.yaw
              << " Vel: " << point.vector.vel << std::endl;
  }
}