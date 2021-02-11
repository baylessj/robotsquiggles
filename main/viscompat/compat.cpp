#include "compat.hpp"
#include "squiggles.hpp"

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
  auto spline = SplineGenerator(constraints, model, dt);
  auto s = Pose(sx, sy, syaw);
  auto g = Pose(gx, gy, gyaw);
  auto scv = ControlVector(s, sv, sa);
  auto gcv = ControlVector(g, gv, ga);
  std::vector<squiggles::ProfilePoint> path = spline.generate({scv, gcv});
  VisData out;
  out.size = path.size();
  out.points = new VisDataPoint[path.size()];
  for (std::size_t i = 0; i < path.size(); ++i) {
    out.points[i].time = i;
    out.points[i].x = path[i].vector.pose.x;
    out.points[i].y = path[i].vector.pose.y;
    out.points[i].yaw = path[i].vector.pose.yaw;
    out.points[i].k = path[i].curvature;
    // out.points[i].v = path[i].vel;
    // out.points[i].a = path[i].accel;
    // out.points[i].j = path[i].jerk;
    out.points[i].lv = path[i].wheel_velocities[0];
    out.points[i].rv = path[i].wheel_velocities[1];
  }
  return out;
}
