#include <cmath>
#include <iostream>

#include "gtest/gtest.h"

#include "spline.hpp"

using namespace squiggles;

TEST(impose_limits_test, cap_velocity_1d) {
  const double max_vel = 2.0;
  const double max_accel = 2.0;
  const double max_jerk = 1.0;

  auto spline = Spline({Pose(0, 0, 0), Pose(0, 0, 0)},
                       Constraints(max_vel, max_accel, max_jerk));

  // helper script for generating the position values
  // double pos = 2.0;
  // for (int i = 0; i < 10; ++i) {
  //   pos += 0.01 + (3.0 - (i * (max_accel / 10))) * 0.1;
  // }

  // 1D Triangle motion profile
  // position is set by x_f = x_0 + v_0 * dt + .5 * a_0 * dt * dt
  std::vector<PathPosition> test_path = {
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

  std::vector<PathPosition> parameterized_path = spline.parameterize(test_path);
  for (auto p : parameterized_path) {
    std::cout << p.to_string() << '\n';
    EXPECT_LE(std::abs(p.vel), max_vel);
    EXPECT_LE(std::abs(p.accel), max_accel);
  }
}