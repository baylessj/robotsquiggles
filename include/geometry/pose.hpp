/**
 * Copyright 2020 Jonathan Bayless
 *
 * Use of this source code is governed by an MIT-style license that can be found
 * in the LICENSE file or at https://opensource.org/licenses/MIT.
 */
#ifndef _GEOMETRY_POSE_HPP_
#define _GEOMETRY_POSE_HPP_

#include <cmath>
#include <string>

namespace squiggles {
class Pose {
  public:
  /**
   * Specifies a point and heading in 2D space.
   *
   * @param ix The x position of the point in meters.
   * @param iy The y position of the point in meters.
   * @param iyaw The heading at the point in radians.
   */
  Pose(double ix, double iy, double iyaw) : x(ix), y(iy), yaw(iyaw) {}

  Pose() = default;

  /**
   * Calculates the Euclidean distance between this pose and another.
   *
   * @param other The point from which the distance will be calculated.
   *
   * @return The distance between this pose and Other.
   */
  double dist(const Pose& other) const {
    return std::sqrt((x - other.x) * (x - other.x) +
                     (y - other.y) * (y - other.y));
  }

  /**
   * Serializes the Pose data for debugging.
   *
   * @return The Pose data.
   */
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