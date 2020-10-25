#ifndef _SQUIGGLES_PATH_POSITION_HPP_
#define _SQUIGGLES_PATH_POSITION_HPP_

#include <string>

#include "controlvector.hpp"

namespace squiggles {
struct ProfilePoint {
  ProfilePoint(ControlVector ivector, double icurvature, double itime)
    : vector(ivector), curvature(icurvature), time(itime) {}

  ProfilePoint() = default;

  std::string to_string() {
    return "ProfilePoint: {" + vector.to_string() +
           ", k: " + std::to_string(curvature) + ", t: " + std::to_string(time) + "}";
  }

  ControlVector vector;
  double curvature;
  double time;
};
} // namespace squiggles

#endif