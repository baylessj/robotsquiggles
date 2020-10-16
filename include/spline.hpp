#include <initializer_list>
#include <vector>

#include "pose.hpp"

namespace squiggles {
/**
 *
 */
class Spline {
  public:
  Spline(std::initializer_list<Pose> waypoints);

  protected:
  Pose step(double t);

  std::vector<Pose> points;
};
} // namespace squiggles