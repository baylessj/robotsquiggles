#ifndef _SQUIGGLES_PATH_POSITION_HPP_
#define _SQUIGGLES_PATH_POSITION_HPP_

#include "pose.hpp"

namespace squiggles {
struct PathPosition {
  PathPosition(Pose ipose, double ivel, double iaccel, double itime)
    : pose(ipose), vel(ivel), accel(iaccel), time(itime) {}

  Pose pose;
  double vel;
  double accel;
  double time;
};
} // namespace squiggles

#endif