/**
 * Copyright 2020 Jonathan Bayless
 *
 * Use of this source code is governed by an MIT-style license that can be found
 * in the LICENSE file or at https://opensource.org/licenses/MIT.
 */
#include <iostream>
#include <sstream>
#include <string.h>

#include "io.hpp"

namespace squiggles {
int serialize_path(std::ostream& out, std::vector<ProfilePoint> path) {
  if (!out || path.size() == 0) {
    return -1;
  }

  out << "x, y, yaw, vel, accel, jerk, curvature, time, wheels\n";
  for (auto p : path) {
    out << p.to_csv() << "\n";
  }
  return 0;
}

std::optional<std::vector<ProfilePoint>> deserialize_path(std::istream& in) {
  if (!in) {
    std::cout << "File does not exist!" << std::endl;
    return std::nullopt;
  }

  std::vector<ProfilePoint> path;
  std::string line;
  bool header_found = false;
  while (std::getline(in, line)) {
    if (!header_found) {
      // skip the first line with the field declarations
      header_found = true;
      continue;
    }
    // vector contents are [x, y, yaw, vel, acc, jerk, curv, time, wheels...]
    std::vector<double> contents;
    std::string token;
    std::istringstream line_stream(line);
    while (std::getline(line_stream, token, ',')) {
      contents.emplace_back(stod(token));
    }

    if (contents.size() < 8) {
      std::cout << "Error parsing Squiggles path: malformed CSV content";
      return std::nullopt;
    }

    double x = contents[0];
    double y = contents[1];
    double yaw = contents[2];
    double vel = contents[3];
    double acc = contents[4];
    double jerk = contents[5];
    double curv = contents[6];
    double time = contents[7];
    // put the remaining items into the wheel velocities vector
    std::vector<double> wheels;
    if (contents.size() > 8) {
      wheels = std::vector<double>(contents.begin() + 8, contents.end());
    }

    path.emplace_back(ProfilePoint(
      ControlVector(Pose(x, y, yaw), vel, acc, jerk), wheels, curv, time));
  }
  return path;
}

static std::optional<std::vector<ProfilePoint>>
deserialize_pathfinder_segment(std::istream& in) {
  if (!in) {
    std::cout << "File does not exist!" << std::endl;
    return std::nullopt;
  }

  std::vector<ProfilePoint> path;
  std::string line;
  bool header_found = false;
  while (std::getline(in, line)) {
    if (!header_found) {
      // skip the first line with the field declarations
      header_found = true;
      continue;
    }
    // vector contents are [dt, x, y, pos, vel, acc, jerk, yaw]
    std::vector<double> contents;
    std::string token;
    std::istringstream line_stream(line);
    while (std::getline(line_stream, token, ',')) {
      contents.emplace_back(stod(token));
    }

    if (contents.size() < 8) {
      std::cout << "Error parsing Squiggles path: malformed CSV content";
      return std::nullopt;
    }

    double dt = contents[0];
    double x = contents[1];
    double y = contents[2];
    // ignoring the path position in position 3
    double vel = contents[4];
    double acc = contents[5];
    double jerk = contents[6];
    double yaw = contents[7];

    path.emplace_back(
      ProfilePoint(ControlVector(Pose(x, y, yaw), vel, acc, jerk), {}, 0, dt));
  }
  return path;
}

static Pose wheels_to_pose(Pose right, double track_width) {
  auto new_x = right.x - (track_width / 2.0) * std::cos(right.yaw);
  auto new_y = right.y + (track_width / 2.0) * std::sin(right.yaw);
  return Pose(new_x, new_y, right.yaw);
}

static double wheel_vels_to_linear(double left, double right) {
  return (left + right) / 2.0;
}

static double
wheel_vels_to_curvature(double left, double right, double track_width) {
  return (right - left) / track_width;
}

std::optional<std::vector<ProfilePoint>>
deserialize_pathfinder_path(std::istream& left, std::istream& right) {
  auto left_path = deserialize_pathfinder_segment(left);
  auto right_path = deserialize_pathfinder_segment(right);

  if (!left_path || !right_path) {
    return std::nullopt;
  }

  auto track_width =
    left_path->begin()->vector.pose.dist(right_path->begin()->vector.pose);

  std::vector<ProfilePoint> path(left_path->size());
  for (std::size_t i = 0; i < left_path->size(); ++i) {
    auto l_v = left_path.value()[i].vector.vel;
    auto l_a = left_path.value()[i].vector.accel;
    auto l_j = left_path.value()[i].vector.jerk;
    auto r_v = right_path.value()[i].vector.vel;
    auto r_a = right_path.value()[i].vector.accel;
    auto r_j = right_path.value()[i].vector.jerk;

    auto pose = wheels_to_pose(right_path.value()[i].vector.pose, track_width);
    auto vel = wheel_vels_to_linear(l_v, r_v);
    auto accel = wheel_vels_to_linear(l_a, r_a);
    auto jerk = wheel_vels_to_linear(l_j, r_j);
    auto curvature = wheel_vels_to_curvature(l_v, r_v, track_width);

    path[i] = ProfilePoint(ControlVector(pose, vel, accel, jerk),
                           {l_v, r_v},
                           curvature,
                           left_path.value()[i].time);
  }

  return path;
}
} // namespace squiggles