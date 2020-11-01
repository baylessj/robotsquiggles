#include <cmath>
#include <iostream>

#include "shared.hpp"
#include "gtest/gtest.h"

#include "spline.hpp"

using namespace squiggles;

TEST(plan_plath_test, nonzero_start_end) {
  auto spline = SplineGenerator(Constraints(20.0, 2.0, 10.0));
  auto path = spline.generate({ControlVector(Pose(0, 0, 1), 1.0, 2.0),
                               ControlVector(Pose(2, 2, 1), 1.0, -2.0)});
  ASSERT_NEAR(path.back().vector.pose.x, 2, TEST_EPSILON);
  ASSERT_NEAR(path.back().vector.pose.y, 2, TEST_EPSILON);
  ASSERT_NEAR(path.back().vector.pose.yaw, 1, TEST_EPSILON);
}

TEST(plan_plath_test, zero_start) {
  auto spline = SplineGenerator(Constraints(20.0, 2.0, 10.0));
  auto path = spline.generate({ControlVector(Pose(0, 0, 1), 0.0),
                               ControlVector(Pose(2, 2, 1), 1.0, -2.0)});
  ASSERT_NEAR(path.back().vector.pose.x, 2, TEST_EPSILON);
  ASSERT_NEAR(path.back().vector.pose.y, 2, TEST_EPSILON);
  ASSERT_NEAR(path.back().vector.pose.yaw, 1, TEST_EPSILON);
}

TEST(plan_plath_test, zero_end) {
  auto spline = SplineGenerator(Constraints(20.0, 2.0, 10.0));
  auto path = spline.generate({ControlVector(Pose(0, 0, 1), 1.0, 2.0),
                               ControlVector(Pose(2, 2, 1), 0.0)});
  ASSERT_NEAR(path.back().vector.pose.x, 2, TEST_EPSILON);
  ASSERT_NEAR(path.back().vector.pose.y, 2, TEST_EPSILON);
  ASSERT_NEAR(path.back().vector.pose.yaw, 1, TEST_EPSILON);
}

TEST(plan_plath_test, zero_start_end) {
  auto spline = SplineGenerator(Constraints(2.0, 2.0, 10.0));
  auto path = spline.generate(
    {ControlVector(Pose(0, 0, 1), 0.0), ControlVector(Pose(2, 2, 1), 0.0)});
  ASSERT_NEAR(path.back().vector.pose.x, 2, TEST_EPSILON);
  ASSERT_NEAR(path.back().vector.pose.y, 2, TEST_EPSILON);
  ASSERT_NEAR(path.back().vector.pose.yaw, 1, TEST_EPSILON);

  // auto planned_path = spline.parameterize(path);
  // for (auto p : path) {
  //   std::cout << p.to_string() << std::endl;
  // }
  // std::cout << std::endl << std::endl;
  // std::cout << "------------------" << std::endl;
  // std::cout << std::endl << std::endl;
  // for (auto p : planned_path) {
  //   std::cout << p.to_string() << std::endl;
  // }
}