#ifndef _SQUIGGLES_PATH_POSITION_HPP_
#define _SQUIGGLES_PATH_POSITION_HPP_

#include <string>

#include "pose.hpp"

namespace squiggles {
struct PathPosition {
  PathPosition(Pose ipose,
               double ivel,
               double iaccel,
               double ijerk,
               double itime)
    : pose(ipose), vel(ivel), accel(iaccel), jerk(ijerk), time(itime) {}

  PathPosition() : pose(Pose(0, 0, 0)), vel(0), accel(0), jerk(0), time(0) {}

  std::string to_string() {
    return "PathPosition: {x: " + std::to_string(pose.x) +
           ", y: " + std::to_string(pose.y) +
           ", yaw: " + std::to_string(pose.yaw) +
           ", v: " + std::to_string(vel) + ", a: " + std::to_string(accel) +
           ", j: " + std::to_string(jerk) + ", t: " + std::to_string(time) +
           "}";
  }

  Pose pose;
  double vel;
  double accel;
  double jerk;
  double time;
};
} // namespace squiggles

#endif