#include <iostream>

#include "pythoncompat.hpp"
#include "spline.hpp"

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
                     double max_accel,
                     double max_jerk,
                     double dt) {
  auto spline = Spline({Pose(sx, sy, syaw), Pose(gx, gy, gyaw)},
                       Constraints(9999, max_accel, max_jerk),
                       dt,
                       sv,
                       sa,
                       gv,
                       ga);
  std::vector<PathPosition> path = spline.plan();
  VisData out;
  out.size = path.size();
  out.points = new VisDataPoint[path.size()];
  for (std::size_t i = 0; i < path.size(); ++i) {
    out.points[i].time = path[i].time;
    out.points[i].rx = path[i].pose.x;
    out.points[i].ry = path[i].pose.y;
    out.points[i].ryaw = path[i].pose.yaw;
    out.points[i].rv = path[i].vel;
    out.points[i].ra = path[i].accel;
    out.points[i].rj = path[i].jerk;
  }
  return out;
}

VisData
parameterize(VisData data, double max_vel, double max_accel, double max_jerk) {
  VisData out;
  out.size = data.size;

  out.points = new VisDataPoint[data.size];

  auto spline = Spline({Pose(0, 0, 0), Pose(0, 0, 0)},
                       Constraints(max_vel, max_accel, max_jerk),
                       0,
                       0,
                       0,
                       0,
                       0);
  std::vector<PathPosition> path(data.size);

  for (std::size_t i = 0; i < data.size; ++i) {
    path[i] = PathPosition(
      Pose(data.points[i].rx, data.points[i].ry, data.points[i].ryaw),
      data.points[i].rv,
      data.points[i].ra,
      data.points[i].rj,
      data.points[i].time);
  }

  std::vector<PathPosition> parameterized = spline.parameterize(path);
  for (std::size_t i = 0; i < parameterized.size(); ++i) {
    out.points[i].time = parameterized[i].time;
    out.points[i].rx = parameterized[i].pose.x;
    out.points[i].ry = parameterized[i].pose.y;
    out.points[i].ryaw = parameterized[i].pose.yaw;
    out.points[i].rv = parameterized[i].vel;
    out.points[i].ra = parameterized[i].accel;
    out.points[i].rj = parameterized[i].jerk;
  }
  return out;
}