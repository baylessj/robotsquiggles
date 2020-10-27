#ifndef _GEOMETRY_PROFILE_POINT_HPP_
#define _GEOMETRY_PROFILE_POINT_HPP_

#include <iostream>
#include <string>
#include <vector>

#include "controlvector.hpp"

namespace squiggles {
struct ProfilePoint {
  /**
   * Defines a state along a motion profiled path.
   */
  ProfilePoint(ControlVector ivector,
               std::vector<double> iwheel_velocities,
               double icurvature,
               double itime)
    : vector(ivector),
      wheel_velocities(iwheel_velocities),
      curvature(icurvature),
      time(itime) {}

  ProfilePoint() = default;

  std::string to_string() {
    std::string wheels = "{";
    for (auto& w : wheel_velocities) {
      wheels += std::to_string(w);
      wheels += ", ";
    }
    wheels += "}";
    return "ProfilePoint: {" + vector.to_string() + ", wheels: " + wheels +
           ", k: " + std::to_string(curvature) +
           ", t: " + std::to_string(time) + "}";
  }

  ControlVector vector;
  std::vector<double> wheel_velocities;
  double curvature;
  double time;
};
} // namespace squiggles

#endif