#ifndef _GENERATED_POINT_HPP_
#define _GENERATED_POINT_HPP_

#include <string>

#include "pose.hpp"

namespace squiggles {
/**
 * The output of the initial, "naive" generation step. We discard the
 * derivative values to replace them with values from a motion profile.
 */
class GeneratedPoint {
  public:
  GeneratedPoint(Pose ipose, double icurvature = 0.0)
    : pose(ipose), curvature(icurvature) {}

  std::string to_string() {
    return "GeneratedPoint: {pose: " + pose.to_string() +
           ", curvature: " + std::to_string(curvature) + "}";
  }

  Pose pose;
  double curvature;
};
} // namespace squiggles

#endif