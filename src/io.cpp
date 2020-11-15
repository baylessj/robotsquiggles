/**
 * Copyright 2020 Jonathan Bayless
 *
 * Use of this source code is governed by an MIT-style license that can be found
 * in the LICENSE file or at https://opensource.org/licenses/MIT.
 */
#include <string.h>

#include "io.hpp"

namespace squiggles {
int serialize_path(FILE* file, std::vector<ProfilePoint> path) {
  if (!file || path.size() == 0) {
    return -1;
  }

  fputs("x, y, yaw, vel, accel, jerk, curvature, time, wheels", file);
  for (auto p : path) {
    fputs(p.to_csv().c_str(), file);
  }
  return 0;
}

std::optional<std::vector<ProfilePoint>> deserialize_path(FILE* file) {
  if (file == NULL) {
      std::cout << "File does not exist!" << std::endl;
      return std::nullopt;
  }
  
  std::vector<ProfilePoint> path;
  char line[1024];
  int line_n = 0;
  int seg_n = 0;
  while (fgets(line, 1024, file)) {
      char *tmp = strdup(line);
      if (tmp == NULL) {
          std::cout << "strdup returned null. Have you run out of RAM, Heap Space, or have been hit by a cosmic ray?" << std::endl;
          return {};
      }
      if (line_n == 0) {
        line_n++;
      } 

      char *record;
      record = strtok(tmp, ",");
      double x   = strtod(record, NULL);
      record = strtok(NULL, ",");
      double y    = strtod(record, NULL);
      record = strtok(NULL, ",");
      double yaw  = strtod(record, NULL);
      record = strtok(NULL, ",");
      double vel  = strtod(record, NULL);
      record = strtok(NULL, ",");
      double acc  = strtod(record, NULL);
      record = strtok(NULL, ",");
      double jerk = strtod(record, NULL);
      record = strtok(NULL, ",");
      double curv = strtod(record, NULL);
      record = strtok(NULL, ",");
      double time = strtod(record, NULL);
      std::vector<double> wheels;
      while(record != NULL ) {
        wheels.emplace_back(strtod(record, NULL));
        record = strtok(NULL, ",");
      }
      
      path.emplace_back(ProfilePoint(ControlVector(Pose(x, y, yaw), vel, acc, jerk), wheels, curv, time));
      
      free(tmp);
      
      if (line_n != 0) seg_n++;
      line_n++;
  }
  return path;
}

static std::optional<std::vector<ProfilePoint>> deserialize_pathfinder_segment(FILE* file) {
  if (file == NULL) {
      std::cout << "File does not exist!" << std::endl;
      return std::nullopt;
  }
  
  std::vector<ProfilePoint> path;
  char line[1024];
  int line_n = 0;
  int seg_n = 0;
  while (fgets(line, 1024, file)) {
      char *tmp = strdup(line);
      if (tmp == NULL) {
          std::cout << "strdup returned null. Have you run out of RAM, Heap Space, or have been hit by a cosmic ray?" << std::endl;
          return {};
      }
      if (line_n == 0) { } // Do nothing, first line specifies the headers
      
      char *record;
      record = strtok(tmp, ",");
      double dt   = strtod(record, NULL);
      record = strtok(NULL, ",");
      double x    = strtod(record, NULL);
      record = strtok(NULL, ",");
      double y    = strtod(record, NULL);
      record = strtok(NULL, ",");
      [[maybe_unused]] double pos  = strtod(record, NULL);
      record = strtok(NULL, ",");
      double vel  = strtod(record, NULL);
      record = strtok(NULL, ",");
      double acc  = strtod(record, NULL);
      record = strtok(NULL, ",");
      double jerk = strtod(record, NULL);
      record = strtok(NULL, ",");
      double head = strtod(record, NULL);
      
      path.emplace_back(ProfilePoint(ControlVector(Pose(x, y, head), vel, acc, jerk), {}, 0, dt));
      
      free(tmp);
      
      if (line_n != 0) seg_n++;
      line_n++;
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

static double wheel_vels_to_curvature(double left, double right, double track_width) {
  return (right - left) / track_width;
}

std::optional<std::vector<ProfilePoint>> deserialize_pathfinder_path(FILE* left_file, FILE* right_file) {
  auto left_path = deserialize_pathfinder_segment(left_file);
  auto right_path = deserialize_pathfinder_segment(right_file);

  if (!left_path || !right_path) {
    return std::nullopt;
  }

  auto track_width = left_path->begin()->vector.pose.dist(right_path->begin()->vector.pose);

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

    path[i] = ProfilePoint(ControlVector(pose, vel, accel, jerk), {l_v, r_v}, curvature, left_path.value()[i].time);
  }

  return path;
}
}