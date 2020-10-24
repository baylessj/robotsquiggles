#ifndef _SQUIGGLES_SPLINE_HPP_
#define _SQUIGGLES_SPLINE_HPP_

#include <initializer_list>
#include <vector>

#include "constraints.hpp"
#include "geometry/controlvector.hpp"
#include "geometry/generatedpoint.hpp"
#include "geometry/profilepoint.hpp"

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

  std::vector<GeneratedPoint> plan();

  std::vector<ProfilePoint> parameterize(std::vector<GeneratedPoint>& raw_path);

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
   * These are split from the control vectors to allow the starting and/or
   * ending velocities to be 0 when constraining the motion profiles.
   */
  double preferred_start_vel;
  double preferred_end_vel;

  /**
   * The minimum and maximum times for a path to take.
   */
  // const int T_MIN = 2;
  // const int T_MAX = 15;
  const int T_MIN = 5;
  const int T_MAX = 100;

  // This was 1.2 in the WPILib example but that large of a value seems to
  // create wild paths
  const double K_DEFAULT_VEL = 0.12;

  private:
  struct GeneratedVector {
    GeneratedVector(GeneratedPoint ipoint,
                    double ivel,
                    double iaccel,
                    double ijerk)
      : point(ipoint), vel(ivel), accel(iaccel), jerk(ijerk) {}

    GeneratedPoint point;
    double vel;
    double accel;
    double jerk;
  };

  struct ConstrainedState {
    ConstrainedState(Pose ipose,
                     double icurvature,
                     double idistance,
                     double imax_vel,
                     double imin_accel,
                     double imax_accel)
      : pose(ipose),
        curvature(icurvature),
        distance(idistance),
        max_vel(imax_vel),
        min_accel(imin_accel),
        max_accel(imax_accel) {}

    ConstrainedState() = default;

    Pose pose = Pose();
    double curvature = 0;
    double distance = 0;
    double max_vel = 0;
    double min_accel = 0;
    double max_accel = 0;

    std::string to_string() {
      return "ConstrainedState: {x: " + std::to_string(pose.x) +
             ", y: " + std::to_string(pose.y) +
             ", yaw: " + std::to_string(pose.yaw) +
             ", k: " + std::to_string(curvature) +
             ", dist: " + std::to_string(distance) +
             ", v: " + std::to_string(max_vel) +
             ", min_a: " + std::to_string(min_accel) +
             ", max_a: " + std::to_string(max_accel) + "}";
    }
  };

  void enforce_accel_lims(ConstrainedState* state);

  void forward_pass(ConstrainedState* predecessor, ConstrainedState* successor);

  void backward_pass(ConstrainedState* predecessor,
                     ConstrainedState* successor);

  std::vector<ProfilePoint>
  integrate_constrained_states(std::vector<ConstrainedState> constrainedStates);

  double vf(double vi, double a, double ds);
  double ai(double vf, double vi, double s);
};
} // namespace squiggles

#endif