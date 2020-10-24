#include "physicalmodel/tankmodel.hpp"
#include "mathutils.hpp"

namespace squiggles {
TankModel::TankModel(double itrack_width, Constraints ilinear_constraints)
  : track_width(itrack_width), linear_constraints(ilinear_constraints) {}

Constraints
TankModel::constraints(const Pose pose, double curvature, double vel) const {
  auto vel = vel_constraint(pose, curvature, vel);
  auto [min_accel, max_accel] = accel_constraint(pose, curvature, vel);
  return Constraints(vel, max_accel, 0.0, min_accel);
}

double
TankModel::vel_constraint(const Pose pose, double curvature, double vel) const {
  auto [left, right] = linear_to_wheel_vels(vel, curvature);
  auto cur_vel = std::max(std::abs(left), std::abs(right));

  if (cur_vel > linear_constraints.max_vel) {
    // normalize the wheel velocities
    left = left / cur_vel * linear_constraints.max_vel;
    right = right / cur_vel * linear_constraints.max_vel;
  }

  return (left + right / 2.0);
}

std::tuple<double, double> TankModel::accel_constraint(const Pose pose,
                                                       double curvature,
                                                       double vel) const {
  auto [left, right] = linear_to_wheel_vels(vel, curvature);
  auto max_wheel_speed = std::max(left, right);
  auto min_wheel_speed = std::min(left, right);

  // Calculate maximum/minimum possible accelerations from motor dynamics
  // and max/min wheel speeds
  // auto maxWheelAcceleration =
  //     m_feedforward.MaxAchievableAcceleration(m_maxVoltage, maxWheelSpeed);
  // auto minWheelAcceleration =
  //     m_feedforward.MinAchievableAcceleration(m_maxVoltage, minWheelSpeed);

  // Robot chassis turning on radius = 1/|curvature|.  Outer wheel has radius
  // increased by half of the trackwidth T.  Inner wheel has radius decreased
  // by half of the trackwidth.  Achassis / radius = Aouter / (radius + T/2), so
  // Achassis = Aouter * radius / (radius + T/2) = Aouter / (1 +
  // |curvature|T/2). Inner wheel is similar.

  // sgn(speed) term added to correctly account for which wheel is on
  // outside of turn:
  // If moving forward, max acceleration constraint corresponds to wheel on
  // outside of turn If moving backward, max acceleration constraint corresponds
  // to wheel on inside of turn

  // When velocity is zero, then wheel velocities are uniformly zero (robot
  // cannot be turning on its center) - we have to treat this as a special case,
  // as it breaks the signum function.  Both max and min acceleration are
  // *reduced in magnitude* in this case.

  double max_chassis_accel, min_chassis_accel;

  if (!vel) {
    max_chassis_accel = linear_constraints.max_accel /
                        (1 + track_width * std::abs(curvature) / 2);
    min_chassis_accel = linear_constraints.min_accel /
                        (1 + track_width * std::abs(curvature) / 2);
  } else {
    max_chassis_accel = linear_constraints.max_accel /
                        (1 + track_width * std::abs(curvature) * sgn(vel) / 2);
    min_chassis_accel = linear_constraints.min_accel /
                        (1 - track_width * std::abs(curvature) * sgn(vel) / 2);
  }

  // When turning about a point inside of the wheelbase (i.e. radius less than
  // half the trackwidth), the inner wheel's direction changes, but the
  // magnitude remains the same.  The formula above changes sign for the inner
  // wheel when this happens. We can accurately account for this by simply
  // negating the inner wheel.

  if ((track_width / 2) > 1 / std::abs(curvature)) {
    if (vel > 0) {
      min_chassis_accel = -min_chassis_accel;
    } else if (vel < 0) {
      max_chassis_accel = -max_chassis_accel;
    }
  }

  return std::make_tuple(min_chassis_accel, max_chassis_accel);
}

std::tuple<double, double>
TankModel::linear_to_wheel_vels(double lin_vel, double curvature) const {
  double omega = lin_vel * curvature;
  return std::make_tuple(lin_vel - track_width / 2 * omega,
                         lin_vel + track_width / 2 * omega);
}
} // namespace squiggles