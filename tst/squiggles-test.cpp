#include "mathutils.hpp"
#include "squiggles.hpp"
#include "gtest/gtest.h"

using namespace squiggles;

// TEST(blaTest, test1) {
//   double sx = 10.0;
//   double sy = 10.0;
//   double syaw = deg2rad(10.0); // start yaw angle [rad]
//   double sv = 1.0;             // start speed [m/s]
//   double sa = 0.1;             // start accel [m/ss]
//   double gx = 30.0;            // goal x position [m]
//   double gy = -10.0;           // goal y position [m]
//   double gyaw = deg2rad(20.0); // goal yaw angle [rad]
//   double gv = 1.0;             // goal speed [m/s]
//   double ga = 0.1;             // goal accel [m/ss]
//   double max_accel = 1.0;      // max accel [m/ss]
//   double max_jerk = 0.5;       // max jerk [m/sss]
//   double dt = 0.1;             // time tick [s]

//   auto spline = Spline({Pose(sx, sy, syaw), Pose(gx, gy, gyaw)},
//                        Constraints(100, max_accel, max_jerk),
//                        dt,
//                        sv,
//                        sa,
//                        gv,
//                        ga);
//   std::vector<PathPosition> path = spline.plan();
//   // for (auto p : path) {
//   //   std::cout << "{x: " << p.pose.x << ", y: " << p.pose.y << "}\n";
//   // }
// }