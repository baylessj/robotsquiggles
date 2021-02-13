#include <cmath>
#include <iostream>
#include <memory>

#include "shared.hpp"
#include "gtest/gtest.h"

#include "physicalmodel/tankmodel.hpp"
#include "spline.hpp"

using namespace squiggles;

TEST(model_constraints_test, min_constraints) {
  auto constraints = Constraints(1.0, 2.0);
  auto model = std::make_shared<TankModel>(0.4, constraints);
  auto spline = SplineGenerator(constraints, model, 0.01);
  auto path = spline.generate({
    ControlVector(Pose(0, 0, 0), 0.0, 0.0),
    ControlVector(Pose(0, 2, 0), 0.0, 0.0),
  });

  ASSERT_NEAR(path.back().vector.pose.x, 0, TEST_EPSILON);
  ASSERT_NEAR(path.back().vector.pose.y, 2, TEST_EPSILON);
  ASSERT_NEAR(path.back().vector.pose.yaw, 0, TEST_EPSILON);

  ASSERT_NEAR(path.front().vector.vel, 0.0, TEST_EPSILON);
  ASSERT_LE(path.back().vector.vel, 0.1);
}

TEST(model_constraints_test, sharp_turn) {
  auto constraints = Constraints(2.0, 2.0, 1.0);
  auto model = std::make_shared<TankModel>(0.4, constraints);
  auto spline = SplineGenerator(constraints, model, 0.01);
  auto path = spline.generate({
    ControlVector(Pose(0, 0, 0), 0.0, 0.0),
    ControlVector(Pose(0, 2, 0), 0.0, 0.0),
  });
  ASSERT_NEAR(path.back().vector.pose.x, 0, TEST_EPSILON);
  ASSERT_NEAR(path.back().vector.pose.y, 2, TEST_EPSILON);
  ASSERT_NEAR(path.back().vector.pose.yaw, 0, TEST_EPSILON);

  ASSERT_NEAR(path.front().vector.vel, 0.0, TEST_EPSILON);
  ASSERT_LE(path.back().vector.vel,
            0.1); // again, minor changes from lerp

  for (auto p : path) {
    // Giving a tiny bit of room above the max vel to account for the lerp
    ASSERT_LE(p.wheel_velocities[0], 2.0001);
    ASSERT_LE(p.wheel_velocities[1], 2.0001);
    // std::cout << p.to_string() << std::endl;
  }
}

TEST(model_constraints_test, smooth_arc) {
  auto constraints = Constraints(2.0, 2.0, 1.0);
  auto model = std::make_shared<TankModel>(0.4, constraints);

  auto spline = SplineGenerator(constraints, model, 0.01);
  auto path = spline.generate({
    ControlVector(Pose(0, 0, 0), 0.0, 0.0),
    ControlVector(Pose(4, 4, 1), 0.0, 0.0),
  });
  ASSERT_NEAR(path.back().vector.pose.x, 4, TEST_EPSILON);
  ASSERT_NEAR(path.back().vector.pose.y, 4, TEST_EPSILON);
  ASSERT_NEAR(path.back().vector.pose.yaw, 1, TEST_EPSILON);

  ASSERT_NEAR(path.front().vector.vel, 0.0, TEST_EPSILON);
  ASSERT_LE(path.back().vector.vel,
            0.1); // again, minor changes from lerp

  for (auto p : path) {
    ASSERT_LE(p.wheel_velocities[0], 2.0001);
    ASSERT_LE(p.wheel_velocities[1], 2.0001);
    // std::cout << p.to_string() << std::endl;
  }
}
