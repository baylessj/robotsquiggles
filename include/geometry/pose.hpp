#ifndef _SQUIGGLES_POSE_HPP_
#define _SQUIGGLES_POSE_HPP_

#include <cmath>
#include <string>

namespace squiggles {
class Pose {
  public:
  Pose(double ix, double iy, double iyaw) : x(ix), y(iy), yaw(iyaw) {}

  Pose() = default;

  Pose operator+(const Pose& other) const {
    const auto new_x = x + (other.x * std::cos(yaw) - other.y * std::sin(yaw));
    const auto new_y = y + (other.x * std::sin(yaw) + other.y * std::cos(yaw));
    return Pose(new_x, new_y, yaw + other.yaw);
  }

  Pose& operator+=(const Pose& other) {
    x += (other.x * std::cos(yaw) - other.y * std::sin(yaw));
    y += (other.x * std::sin(yaw) + other.y * std::cos(yaw));
    yaw += other.yaw;
    return *this;
  }

  Pose operator-(const Pose& other) const {
    const auto new_x = x - (other.x * std::cos(yaw) - other.y * std::sin(yaw));
    const auto new_y = y - (other.x * std::sin(yaw) + other.y * std::cos(yaw));
    return Pose(new_x, new_y, yaw - other.yaw);
  }

  Pose operator*(double scalar) const {
    return Pose(scalar * x, scalar * y, scalar * yaw);
  }

  double dist(const Pose& other) const {
    return std::sqrt((x - other.x) * (x - other.x) +
                     (y - other.y) * (y - other.y));
  }

  Pose lerp(const Pose& other, double i) const {
    return *this + (other - *this) * i;
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