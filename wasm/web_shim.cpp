#include "emscripten.h"
#include "squiggles.hpp"

extern "C" {

EMSCRIPTEN_KEEPALIVE
double linvels() {
  auto model = std::make_shared<squiggles::TankModel>(0.4, squiggles::Constraints(1.0));
  return model->linear_to_wheel_vels(1.0, 1.0)[0];
}

}
