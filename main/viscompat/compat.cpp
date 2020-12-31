#include "squiggles.hpp"
#include "compat.hpp"

#define K_EPSILON (1e-5)

using namespace squiggles;

VisData compute_path(double sx,
                     double sy,
                     double syaw,
                     double sv,
                     double sa,
                     double gx,
                     double gy,
                     double gyaw,
                     double gv,
                     double ga,
                     double max_vel,
                     double max_accel,
                     double max_jerk,
                     double track_width,
                     double dt) {
  auto constraints = Constraints(max_vel, max_accel, max_jerk);
  std::shared_ptr<PhysicalModel> model;
  if (track_width > K_EPSILON) {
    model = std::make_shared<TankModel>(track_width, constraints);
  } else {
    model = std::make_shared<PassthroughModel>();
  }
  auto spline = SplineGenerator(constraints,
                       model,
                       dt);
  std::vector<ProfilePoint> path = spline.generate({ControlVector(Pose(sx, sy, syaw), sv, sa), ControlVector(Pose(gx, gy, gyaw), gv, ga)});
  VisData out;
  out.size = path.size();
  out.points = new VisDataPoint[path.size()];
  for (std::size_t i = 0; i < path.size(); ++i) {
    out.points[i].time = path[i].time;
    out.points[i].x = path[i].vector.pose.x;
    out.points[i].y = path[i].vector.pose.y;
    out.points[i].yaw = path[i].vector.pose.yaw;
    out.points[i].v = path[i].vector.vel;
    out.points[i].a = path[i].vector.accel;
    out.points[i].j = path[i].vector.jerk;
    if (track_width > K_EPSILON) {
      out.points[i].lv = path[i].wheel_velocities[0];
      out.points[i].rv = path[i].wheel_velocities[1];
    } else {
      out.points[i].lv = 0.0;
      out.points[i].rv = 0.0;
    }
  }
  return out;
}