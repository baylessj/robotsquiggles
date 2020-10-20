#ifndef _SQUIGGLES_SPLINE_HPP_
#define _SQUIGGLES_SPLINE_HPP_

#include <initializer_list>
#include <vector>

#include "constraints.hpp"
#include "controlvector.hpp"
#include "pathposition.hpp"
#include "pose.hpp"

namespace squiggles {
/**
 *
 */
class Spline {
  public:
  Spline(ControlVector start,
         ControlVector end,
         Constraints iconstraints,
         double idt = 0.1);

  Spline(Pose start, Pose end, Constraints iconstraints, double idt = 0.1);

  std::vector<PathPosition> plan();

  std::tuple<double, double> impose_limits(PathPosition start,
                                           PathPosition end);

  std::vector<PathPosition> parameterize(std::vector<PathPosition> &raw_path);

  /**
   * Values that are closer to each other than this value are considered equal.
   */
  static constexpr double K_EPSILON = 1e-5;

  protected:
  ControlVector start;
  ControlVector end;

  /**
   *
   */
  Constraints constraints;

  /**
   * The step size in seconds for the path.
   */
  double dt;

  /**
   * The minimum and maximum times for a path to take.
   */
  // const int T_MIN = 2;
  // const int T_MAX = 15;
  const int T_MIN = 5;
  const int T_MAX = 100;
};
} // namespace squiggles

#endif