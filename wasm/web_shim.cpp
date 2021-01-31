#include "emscripten.h"
#include "squiggles.hpp"

using namespace squiggles;

extern "C" {

EMSCRIPTEN_KEEPALIVE
double linvels() {
  auto model = std::make_shared<TankModel>(0.4, Constraints(1.0));
  return model->linear_to_wheel_vels(1.0, 1.0)[0];
}

// struct GenerateOutput {
//   double x;
//   double y;
//   double yaw;
//   double vel;
//   double wheel_0;
//   double wheel_1;
//   double curvature;
// };

// EMSCRIPTEN_KEEPALIVE
// std::vector<GenerateOutput> generate(double sx,
//                                      double sy,
//                                      double syaw,
//                                      double sv,
//                                      double gx,
//                                      double gy,
//                                      double gyaw,
//                                      double gv,
//                                      double max_vel,
//                                      double max_accel,
//                                      double max_jerk,
//                                      double track_width) {
//   if (!sx) return std::vector<GenerateOutput>();
//   auto constraints = Constraints(max_vel, max_accel, max_jerk);
//   auto model = std::make_shared<TankModel>(track_width, constraints);
//   auto spline = SplineGenerator(constraints, model, 0.1);
//   auto path = spline.generate({ControlVector(Pose(sx, sy, syaw), sv, 0),
//                                ControlVector(Pose(gx, gy, gyaw), gv, 0)});
//   std::vector<GenerateOutput> out;
//   for (auto p : path) {
//     out.push_back(GenerateOutput({p.vector.pose.x,
//                                   p.vector.pose.y,
//                                   p.vector.pose.yaw,
//                                   p.vector.vel,
//                                   p.wheel_velocities[0],
//                                   p.wheel_velocities[1],
//                                   p.curvature}));
//   }
//   return out;
// }

EMSCRIPTEN_KEEPALIVE
int generate(double sx,
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
  if (!sx)
    return 2;
  auto constraints = Constraints(max_vel, max_accel, max_jerk);
  auto model = std::make_shared<TankModel>(track_width, constraints);
  auto spline = SplineGenerator(constraints, model, 0.1);
  try {
    auto path = spline.generate({ControlVector(Pose(sx, sy, syaw), sv, 0),
                                 ControlVector(Pose(gx, gy, gyaw), gv, 0)});
    for (auto p: path) {
      printf("%s\n", p.to_string().c_str());
    }
    return 0;
  } catch (std::runtime_error e) {
    return 1;
  }
}

}
