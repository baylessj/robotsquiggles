#include "spline.hpp"

namespace squiggles {
  Spline::Spline(std::initializer_list<Pose> waypoints) : points(waypoints) {}

  Pose Spline::step(double t) {
    double a = 2 * t * t * t - 3 * t * t + 1;
    double b = -2 * t * t * t + 3 * t * t;
    double c = t * t * t - 2 * t * t + t;
    double d = t * t * t - t * t;

    // TODO: assuming we need to change up theta to give delta x or delta y?
    double x_t = a * points[0].x + b * points[1].x + c * points[0].theta + d * points[1].theta; 
    double y_t = a * points[0].y + b * points[1].y + c * points[0].theta + d * points[1].theta; 
    // TODO: calculate the theta from the previous point maybe?
    return Pose(x_t, y_t, 0);
  }
}