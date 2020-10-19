#include <iostream>

#include "pythoncompat.hpp"
#include "spline.hpp"

using namespace squiggles;

VisData *compute_path(double sx,
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
  auto spline = Spline({Pose(sx, sy, syaw), Pose(gx, gy, gyaw)},
                       max_accel,
                       max_jerk,
                       dt,
                       sv,
                       sa,
                       gv,
                       ga);
  std::vector<PathPosition> path = spline.plan();
  VisData *out = new VisData[path.size()];
  for (std::size_t i = 0; i < path.size(); ++i) {
    out[i].time = path[i].time;
    out[i].rx = path[i].pose.x;
    out[i].ry = path[i].pose.y;
    out[i].ryaw = path[i].pose.yaw;
    out[i].rv = path[i].vel;
    out[i].ra = path[i].accel;
    out[i].rj = path[i].jerk;
  }
  return out;
}