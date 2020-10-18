#ifndef _SQUIGGLES_SPLINE_HPP_
#define _SQUIGGLES_SPLINE_HPP_

#include <initializer_list>
#include <vector>

#include "pathposition.hpp"
#include "pose.hpp"

namespace squiggles {
/**
 *
 */
class Spline {
  public:
  Spline(std::initializer_list<Pose> iwaypoints,
         double imax_acceleration,
         double imax_jerk,
         double idt = 0.1,
         double istart_velocity = 0.0,
         double istart_acceleration = 0.0,
         double igoal_velocity = 0.0,
         double igoal_acceleration = 0.0);

  std::vector<PathPosition> plan();

  protected:
  std::vector<Pose> points;

  /**
   * The starting pose in {x: m, y: m, yaw: rad}.
   */
  double s_x;
  double s_y;
  double s_yaw;

  /**
   * The ending (goal) pose {x: m, y: m, yaw: rad}
   */
  double g_x;
  double g_y;
  double g_yaw;

  /**
   * The acceleration [m/s*s] and jerk [m/s*s*s] limitations of the
   * robot's movements
   */
  double max_a;
  double max_j;

  /**
   * The step size in seconds for the path.
   */
  double dt;

  /**
   * The starting and ending velocities in [m/s].
   */
  double s_v;
  double g_v;

  /**
   * The starting and ending accelerations in [m/s*s].
   */
  double s_a;
  double g_a;

  /**
   * The minimum and maximum times for a path to take.
   */
  const int T_MIN = 2;
  const int T_MAX = 15;
};
} // namespace squiggles

#endif