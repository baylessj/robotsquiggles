#include <cmath>
#include <iostream>

#include "gtest/gtest.h"

#include "spline.hpp"

using namespace squiggles;

TEST(plan_plath_test, nonzero_start_end) {
  auto spline = Spline(ControlVector(Pose(0, 0, 0), 1.0, 2.0),
                       ControlVector(Pose(4, 4, 0), 1.0, -2.0),
                       Constraints(2.0, 2.0, 1.0));
  auto path = spline.plan();
  ASSERT_NEAR(path.back().pose.x, 4, Spline::K_EPSILON);
  ASSERT_NEAR(path.back().pose.y, 4, Spline::K_EPSILON);
  ASSERT_NEAR(path.back().pose.yaw, 0, Spline::K_EPSILON);
}

TEST(plan_plath_test, zero_start) {
  auto spline = Spline(ControlVector(Pose(0, 0, 0), 0.0, 0.0),
                       ControlVector(Pose(4, 4, 0), 1.0, -2.0),
                       Constraints(2.0, 2.0, 1.0));
  auto path = spline.plan();
  ASSERT_NEAR(path.back().pose.x, 4, Spline::K_EPSILON);
  ASSERT_NEAR(path.back().pose.y, 4, Spline::K_EPSILON);
  ASSERT_NEAR(path.back().pose.yaw, 0, Spline::K_EPSILON);
}

TEST(plan_plath_test, zero_end) {
  auto spline = Spline(ControlVector(Pose(0, 0, 0), 1.0, 2.0),
                       ControlVector(Pose(4, 4, 0), 0.0, 0.0),
                       Constraints(2.0, 2.0, 1.0));
  auto path = spline.plan();
  ASSERT_NEAR(path.back().pose.x, 4, Spline::K_EPSILON);
  ASSERT_NEAR(path.back().pose.y, 4, Spline::K_EPSILON);
  ASSERT_NEAR(path.back().pose.yaw, 0, Spline::K_EPSILON);
}

TEST(plan_plath_test, zero_start_end) {
  auto spline = Spline(ControlVector(Pose(0, 0, 0), 0.0, 0.0),
                       ControlVector(Pose(4, 4, 0), 0.0, 0.0),
                       Constraints(2.0, 2.0, 1.0));
  auto path = spline.plan();
  ASSERT_NEAR(path.back().pose.x, 4, Spline::K_EPSILON);
  ASSERT_NEAR(path.back().pose.y, 4, Spline::K_EPSILON);
  ASSERT_NEAR(path.back().pose.yaw, 0, Spline::K_EPSILON);

  auto planned_path = spline.parameterize(path);
  for (auto p : path) {
    std::cout << p.to_string() << std::endl;
  }
  std::cout << std::endl << std::endl;
  for (auto p : planned_path) {
    std::cout << p.to_string() << std::endl;
  }
}