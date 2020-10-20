#ifndef _SQUIGGLES_POSE_HPP_
#define _SQUIGGLES_POSE_HPP_

#include <cmath>

namespace squiggles {
class Pose {
  public:
  Pose(double ix, double iy, double iyaw) : x(ix), y(iy), yaw(iyaw) {}

  Pose() = default;

  double dist(const Pose &other) const {
    return std::sqrt((x - other.x) * (x - other.x) +
                     (y - other.y) * (y - other.y));
  }

  double x;
  double y;
  double yaw;
};
} // namespace squiggles

#endif