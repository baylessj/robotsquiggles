#include <cmath>
#include <memory>
#include <iostream>

#include "gtest/gtest.h"

#include "spline.hpp"
#include "physicalmodel/tankmodel.hpp"

using namespace squiggles;

TEST(model_constraints_test, sharp_turn) {
  auto constraints = Constraints(2.0, 2.0, 1.0);
  auto model = std::make_shared<TankModel>(0.4, constraints);
  auto spline = Spline(ControlVector(Pose(0, 0, 0), 0.0, 0.0),
                       ControlVector(Pose(0, 2, 0), 0.0, 0.0),
                       constraints,
                       model,
                       0.1);
  auto path = spline.plan();
  ASSERT_NEAR(path.back().pose.x, 0, Spline::K_EPSILON);
  ASSERT_NEAR(path.back().pose.y, 2, Spline::K_EPSILON);
  ASSERT_NEAR(path.back().pose.yaw, 0, Spline::K_EPSILON);

  auto planned_path = spline.parameterize(path);

  ASSERT_NEAR(planned_path.front().vector.vel, 0.0, Spline::K_EPSILON);
  ASSERT_NEAR(planned_path.back().vector.vel, 0.0, Spline::K_EPSILON);

  for (auto p : planned_path) {
    ASSERT_LE(p.wheel_velocities[0], 2.0);
    ASSERT_LE(p.wheel_velocities[1], 2.0);
    // std::cout << p.to_string() << std::endl;
  }
}

TEST(model_constraints_test, smooth_arc) {
  auto constraints = Constraints(2.0, 2.0, 1.0);
  auto model = std::make_shared<TankModel>(0.4, constraints);
  auto spline = Spline(ControlVector(Pose(0, 0, 0), 0.0, 0.0),
                       ControlVector(Pose(4, 4, 1), 0.0, 0.0),
                       constraints,
                       model,
                       0.1);
  auto path = spline.plan();
  ASSERT_NEAR(path.back().pose.x, 4, Spline::K_EPSILON);
  ASSERT_NEAR(path.back().pose.y, 4, Spline::K_EPSILON);
  ASSERT_NEAR(path.back().pose.yaw, 1, Spline::K_EPSILON);

  auto planned_path = spline.parameterize(path);

  ASSERT_NEAR(planned_path.front().vector.vel, 0.0, Spline::K_EPSILON);
  ASSERT_NEAR(planned_path.back().vector.vel, 0.0, Spline::K_EPSILON);

  for (auto p : planned_path) {
    ASSERT_LE(p.wheel_velocities[0], 2.0);
    ASSERT_LE(p.wheel_velocities[1], 2.0);
    // std::cout << p.to_string() << std::endl;
  }
}