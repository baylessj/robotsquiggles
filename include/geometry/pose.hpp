#ifndef _GEOMETRY_POSE_HPP_
#define _GEOMETRY_POSE_HPP_

#include <cmath>
#include <string>

namespace squiggles {
class Pose {
  public:
  /**
   * Specifies a point and heading in 2D space.
   */
  Pose(double ix, double iy, double iyaw) : x(ix), y(iy), yaw(iyaw) {}

  Pose() = default;

  /**
   * Calculates the Euclidean distance between this pose and another.
   */
  double dist(const Pose& other) const {
    return std::sqrt((x - other.x) * (x - other.x) +
                     (y - other.y) * (y - other.y));
  }

  std::string to_string() {
    return "Pose: {x: " + std::to_string(x) + ", y: " + std::to_string(y) +
           ", yaw: " + std::to_string(yaw) + "}";
  }

  double x;
  double y;
  double yaw;
};
} // namespace squiggles

#endif