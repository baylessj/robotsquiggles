
#include "squiggles.hpp"
#include "compat.hpp"

using namespace squiggles;

// extern "C" {
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
                     double max_accel,
                     double max_jerk,
                     double dt) {
  auto constraints = Constraints(9999, max_accel, max_jerk);
  auto spline = Spline(ControlVector(Pose(sx, sy, syaw), sv, sa), ControlVector(Pose(gx, gy, gyaw), gv, ga),
                       constraints,
                       std::make_shared<TankModel>(0.4, constraints),
                       dt);
  std::vector<GeneratedPoint> raw_path = spline.plan();
  std::vector<ProfilePoint> path = spline.parameterize(raw_path);
  VisData out;
  out.size = path.size();
  out.points = new VisDataPoint[path.size()];
  for (std::size_t i = 0; i < path.size(); ++i) {
    out.points[i].time = path[i].time;
    out.points[i].rx = path[i].vector.pose.x;
    out.points[i].ry = path[i].vector.pose.y;
    out.points[i].ryaw = path[i].vector.pose.yaw;
    out.points[i].rv = path[i].vector.vel;
    out.points[i].ra = path[i].vector.accel;
    out.points[i].rj = path[i].vector.jerk;
  }
  return out;
}
// }