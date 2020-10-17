#ifndef _SQUIGGLES_POSE_HPP_
#define _SQUIGGLES_POSE_HPP_

namespace squiggles {
struct Pose {
  Pose(double ix, double iy, double iyaw) : x(ix), y(iy), yaw(iyaw) {}

  double x;
  double y;
  double yaw;
};
} // namespace squiggles

#endif