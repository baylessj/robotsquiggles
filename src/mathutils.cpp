#include <cmath>

#include "mathutils.hpp"

namespace squiggles {
double deg2rad(double deg) {
  return deg * M_PI / 180.0;
}

double rad2deg(double rad) {
  return rad * 180.0 / M_PI;
}
} // namespace squiggles