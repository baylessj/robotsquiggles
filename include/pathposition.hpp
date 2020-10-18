#ifndef _SQUIGGLES_PATH_POSITION_HPP_
#define _SQUIGGLES_PATH_POSITION_HPP_

#include "pose.hpp"

namespace squiggles {
struct PathPosition {
  PathPosition(Pose ipose,
               double ivel,
               double iaccel,
               double ijerk,
               double itime)
    : pose(ipose), vel(ivel), accel(iaccel), jerk(ijerk), time(itime) {}

  Pose pose;
  double vel;
  double accel;
  double jerk;
  double time;
};
} // namespace squiggles

#endif