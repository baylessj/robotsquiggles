#ifndef _SQUIGGLES_PATH_POSITION_HPP_
#define _SQUIGGLES_PATH_POSITION_HPP_

#include <string>

#include "controlvector.hpp"

namespace squiggles {
struct ProfilePoint {
  ProfilePoint(ControlVector ivector, std::vector<double> iwheel_velocities, double icurvature, double itime)
    : vector(ivector), wheel_velocities(iwheel_velocities), curvature(icurvature), time(itime) {}

  ProfilePoint() = default;

  std::string to_string() {
    std::string wheels = "";
    for (auto& w : wheel_velocities) {
      wheels += std::to_string(w);
      wheels += ", ";
    }
    return "ProfilePoint: {" + vector.to_string() + ", wheels: " + wheels +
           ", k: " + std::to_string(curvature) + ", t: " + std::to_string(time) + "}";
  }

  ControlVector vector;
  std::vector<double> wheel_velocities;
  double curvature;
  double time;
};
} // namespace squiggles

#endif