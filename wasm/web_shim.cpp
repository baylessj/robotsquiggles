#include "emscripten.h"
#include "squiggles.hpp"

using namespace squiggles;

extern "C" {

EMSCRIPTEN_KEEPALIVE
double linvels() {
  auto model = std::make_shared<TankModel>(0.4, Constraints(1.0));
  return model->linear_to_wheel_vels(1.0, 1.0)[0];
}

EMSCRIPTEN_KEEPALIVE
std::vector<ProfilePoint> generate(double sx,
                                   double sy,
                                   double syaw,
                                   double sv,
                                   double gx,
                                   double gy,
                                   double gyaw,
                                   double gv,
                                   double max_vel,
                                   double max_accel,
                                   double max_jerk,
                                   double track_width) {
  auto constraints = Constraints(max_vel, max_accel, max_jerk);
  auto model = std::make_shared<TankModel>(track_width, constraints);
  auto spline = SplineGenerator(constraints, model, 0.1);
  return spline.generate({ControlVector(Pose(sx, sy, syaw), sv, 0),
                          ControlVector(Pose(gx, gy, gyaw), gv, 0)});
}
}
