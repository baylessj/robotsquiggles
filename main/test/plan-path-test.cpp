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
  auto path = spline.generate({Pose(0, 0, 1), Pose(2, 2, 1)});
  ASSERT_NEAR(path.back().vector.pose.x, 2, TEST_EPSILON);
  ASSERT_NEAR(path.back().vector.pose.y, 2, TEST_EPSILON);
  ASSERT_NEAR(path.back().vector.pose.yaw, 1, TEST_EPSILON);
}

TEST(plan_path_test, three_points_nonzero) {
  auto spline = SplineGenerator(
    Constraints(20.0, 2.0, 10.0), std::make_shared<PassthroughModel>(), 0.01);
  auto path = spline.generate({ControlVector(Pose(0, 0, 1), 1.0, 2.0),
                               ControlVector(Pose(1, 1, 1), 1.0, 0.0),
                               ControlVector(Pose(2, 2, 1), 1.0, -2.0)});
  ASSERT_NEAR(path.back().vector.pose.x, 2, TEST_EPSILON);
  ASSERT_NEAR(path.back().vector.pose.y, 2, TEST_EPSILON);
  ASSERT_NEAR(path.back().vector.pose.yaw, 1, TEST_EPSILON);
}

TEST(plan_path_test, three_points_zero) {
  auto spline = SplineGenerator(
    Constraints(20.0, 2.0, 10.0), std::make_shared<PassthroughModel>(), 0.1);
  auto path = spline.generate({Pose(0, 0, 1), Pose(1, 1, 1), Pose(2, 2, 1)});
  ASSERT_NEAR(path.back().vector.pose.x, 2, TEST_EPSILON);
  ASSERT_NEAR(path.back().vector.pose.y, 2, TEST_EPSILON);
  ASSERT_NEAR(path.back().vector.pose.yaw, 1, TEST_EPSILON);
  auto prev_time = path[0].time;
  for (auto p : path) {
    ASSERT_NEAR(p.time - prev_time, 0.1, TEST_EPSILON);
    prev_time = p.time;
  }
}
