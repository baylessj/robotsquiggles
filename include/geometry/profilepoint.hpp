#ifndef _SQUIGGLES_PATH_POSITION_HPP_
#define _SQUIGGLES_PATH_POSITION_HPP_

#include <string>

#include "controlvector.hpp"

namespace squiggles {
struct ProfilePoint {
  ProfilePoint(ControlVector ivector, double itime)
    : vector(ivector), time(itime) {}

  ProfilePoint() = default;

  std::string to_string() {
    return "ProfilePoint: {vector: " + vector.to_string() +
           ", t: " + std::to_string(time) + "}";
  }

  ControlVector vector;
  double time;
};
} // namespace squiggles

#endif