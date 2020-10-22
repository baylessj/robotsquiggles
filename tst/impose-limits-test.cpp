#include <cmath>
#include <iostream>

#include "gtest/gtest.h"

#include "spline.hpp"

// #define DEBUG

#ifdef DEBUG
#define DEBUG_PRINT(x) (std::cout << x << '\n')
#else
#define DEBUG_PRINT(x)
#endif

using namespace squiggles;

// 1D Triangle motion profile
// position is set by x_f = x_0 + v_0 * dt + .5 * a_0 * dt * dt
std::vector<PathPosition> test_path_1d = {
  PathPosition(Pose(0.00, 0, 0), 1.0, 2.0, 0.0, 0),
  PathPosition(Pose(0.11, 0, 0), 1.2, 2.0, 0.0, 0.1),
  PathPosition(Pose(0.24, 0, 0), 1.4, 2.0, 0.0, 0.2),
  PathPosition(Pose(0.39, 0, 0), 1.6, 2.0, 0.0, 0.3),
  PathPosition(Pose(0.56, 0, 0), 1.8, 2.0, 0.0, 0.4),
  PathPosition(Pose(0.75, 0, 0), 2.0, 2.0, 0.0, 0.5),
  PathPosition(Pose(0.96, 0, 0), 2.2, 2.0, 0.0, 0.6),
  PathPosition(Pose(1.19, 0, 0), 2.4, 2.0, 0.0, 0.7),
  PathPosition(Pose(1.44, 0, 0), 2.6, 2.0, 0.0, 0.8),
  PathPosition(Pose(1.71, 0, 0), 2.8, 2.0, 0.0, 0.9),
  PathPosition(Pose(2.00, 0, 0), 3.0, -2.0, 0.0, 1.0),
  PathPosition(Pose(2.31, 0, 0), 2.8, -2.0, 0.0, 1.1),
  PathPosition(Pose(2.60, 0, 0), 2.6, -2.0, 0.0, 1.2),
  PathPosition(Pose(2.87, 0, 0), 2.4, -2.0, 0.0, 1.3),
  PathPosition(Pose(3.12, 0, 0), 2.2, -2.0, 0.0, 1.4),
  PathPosition(Pose(3.35, 0, 0), 2.0, -2.0, 0.0, 1.5),
  PathPosition(Pose(3.56, 0, 0), 1.8, -2.0, 0.0, 1.6),
  PathPosition(Pose(3.75, 0, 0), 1.6, -2.0, 0.0, 1.7),
  PathPosition(Pose(3.92, 0, 0), 1.4, -2.0, 0.0, 1.8),
  PathPosition(Pose(4.07, 0, 0), 1.2, -2.0, 0.0, 1.9),
  PathPosition(Pose(4.20, 0, 0), 1.0, -2.0, 0.0, 2.0),
};

std::vector<PathPosition> test_path_2d = {
  PathPosition(Pose(0.00, 0, 1), 1.0, 2.0, 0.0, 0),
  PathPosition(Pose(0.059433, 0.092562, 1), 1.2, 2.0, 0.0, 0.1),
  PathPosition(Pose(0.129673, 0.201953, 1), 1.4, 2.0, 0.0, 0.2),
  PathPosition(Pose(0.210718, 0.328174, 1), 1.6, 2.0, 0.0, 0.3),
  PathPosition(Pose(0.302569, 0.471224, 1), 1.8, 2.0, 0.0, 0.4),
  PathPosition(Pose(0.405227, 0.631103, 1), 2.0, 2.0, 0.0, 0.5),
  PathPosition(Pose(0.518690, 0.807812, 1), 2.2, 2.0, 0.0, 0.6),
  PathPosition(Pose(0.642960, 1.001350, 1), 2.4, 2.0, 0.0, 0.7),
  PathPosition(Pose(0.778035, 1.211718, 1), 2.6, 2.0, 0.0, 0.8),
  PathPosition(Pose(0.923917, 1.438915, 1), 2.8, 2.0, 0.0, 0.9),
  PathPosition(Pose(1.080605, 1.682942, 1), 3.0, -2.0, 0.0, 1.0),
  PathPosition(Pose(1.248098, 1.943798, 1), 2.8, -2.0, 0.0, 1.1),
  PathPosition(Pose(1.404786, 2.187825, 1), 2.6, -2.0, 0.0, 1.2),
  PathPosition(Pose(1.550668, 2.415022, 1), 2.4, -2.0, 0.0, 1.3),
  PathPosition(Pose(1.685743, 2.625389, 1), 2.2, -2.0, 0.0, 1.4),
  PathPosition(Pose(1.810013, 2.818928, 1), 2.0, -2.0, 0.0, 1.5),
  PathPosition(Pose(1.923476, 2.995637, 1), 1.8, -2.0, 0.0, 1.6),
  PathPosition(Pose(2.026134, 3.155516, 1), 1.6, -2.0, 0.0, 1.7),
  PathPosition(Pose(2.117985, 3.298566, 1), 1.4, -2.0, 0.0, 1.8),
  PathPosition(Pose(2.199030, 3.424787, 1), 1.2, -2.0, 0.0, 1.9),
  PathPosition(Pose(2.269270, 3.534178, 1), 1.0, -2.0, 0.0, 2.0),
};

// TEST(helper_scripts, pos) {
//   // helper script for generating the position values
//   double pos = 2.0;
//   for (int i = 0; i < 10; ++i) {
//     pos += 0.01 + (3.0 - (i * (max_accel / 10))) * 0.1;
//   }
// }

// TEST(helper_scripts, 2d_pos) {
//   for (auto p : test_path_1d) {
//     std::cout << "{" << std::to_string(p.pose.x * std::cos(1)) << ", " <<
//     std::to_string(p.pose.x * std::sin(1)) << '\n';
//   }
// }

TEST(impose_limits_test, cap_velocity_1d) {
  const double max_vel = 2.0;
  const double max_accel = 2.0;
  const double max_jerk = 1.0;

  auto spline = Spline(
    Pose(0, 0, 0), Pose(0, 0, 0), Constraints(max_vel, max_accel, max_jerk));

  std::vector<PathPosition> parameterized_path =
    spline.parameterize(test_path_1d);
  for (auto p : parameterized_path) {
    DEBUG_PRINT(p.to_string());
    EXPECT_LE(std::abs(p.vel) - Spline::K_EPSILON, max_vel);
    EXPECT_LE(std::abs(p.accel) - Spline::K_EPSILON, max_accel);
  }
}

TEST(impose_limits_test, cap_accel_1d) {
  const double max_vel = 999.0;
  const double max_accel = 0.2;
  const double max_jerk = 1.0;

  auto spline = Spline(
    Pose(0, 0, 0), Pose(0, 0, 0), Constraints(max_vel, max_accel, max_jerk));

  std::vector<PathPosition> parameterized_path =
    spline.parameterize(test_path_1d);
  for (auto p : parameterized_path) {
    DEBUG_PRINT(p.to_string());
    EXPECT_LE(std::abs(p.vel) - Spline::K_EPSILON, max_vel);
    EXPECT_LE(std::abs(p.accel) - Spline::K_EPSILON, max_accel);
  }
}

TEST(impose_limits_test, cap_both_1d) {
  const double max_vel = 2.0;
  const double max_accel = 1.0;
  const double max_jerk = 1.0;

  auto spline = Spline(
    Pose(0, 0, 0), Pose(0, 0, 0), Constraints(max_vel, max_accel, max_jerk));

  std::vector<PathPosition> parameterized_path =
    spline.parameterize(test_path_1d);
  for (auto p : parameterized_path) {
    DEBUG_PRINT(p.to_string());
    EXPECT_LE(std::abs(p.vel) - Spline::K_EPSILON, max_vel);
    EXPECT_LE(std::abs(p.accel) - Spline::K_EPSILON, max_accel);
  }
}

TEST(impose_limits_test, cap_velocity_2d) {
  const double max_vel = 2.0;
  const double max_accel = 2.0;
  const double max_jerk = 1.0;

  auto spline = Spline(
    Pose(0, 0, 0), Pose(0, 0, 0), Constraints(max_vel, max_accel, max_jerk));

  std::vector<PathPosition> parameterized_path =
    spline.parameterize(test_path_2d);
  for (auto p : parameterized_path) {
    DEBUG_PRINT(p.to_string());
    EXPECT_LE(std::abs(p.vel) - Spline::K_EPSILON, max_vel);
    EXPECT_LE(std::abs(p.accel) - Spline::K_EPSILON, max_accel);
  }
}

TEST(impose_limits_test, cap_accel_2d) {
  const double max_vel = 999.0;
  const double max_accel = 0.2;
  const double max_jerk = 1.0;

  auto spline = Spline(
    Pose(0, 0, 0), Pose(0, 0, 0), Constraints(max_vel, max_accel, max_jerk));

  std::vector<PathPosition> parameterized_path =
    spline.parameterize(test_path_2d);
  for (auto p : parameterized_path) {
    DEBUG_PRINT(p.to_string());
    EXPECT_LE(std::abs(p.vel) - Spline::K_EPSILON, max_vel);
    EXPECT_LE(std::abs(p.accel) - Spline::K_EPSILON, max_accel);
  }
}

TEST(impose_limits_test, cap_both_2d) {
  const double max_vel = 2.0;
  const double max_accel = 1.0;
  const double max_jerk = 1.0;

  auto spline = Spline(
    Pose(0, 0, 0), Pose(0, 0, 0), Constraints(max_vel, max_accel, max_jerk));

  std::vector<PathPosition> parameterized_path =
    spline.parameterize(test_path_2d);
  for (auto p : parameterized_path) {
    DEBUG_PRINT(p.to_string());
    EXPECT_LE(std::abs(p.vel) - Spline::K_EPSILON, max_vel);
    EXPECT_LE(std::abs(p.accel) - Spline::K_EPSILON, max_accel);
  }
}