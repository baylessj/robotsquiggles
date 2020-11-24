/**
 * Copyright 2020 Jonathan Bayless
 *
 * Use of this source code is governed by an MIT-style license that can be found
 * in the LICENSE file or at https://opensource.org/licenses/MIT.
 */
#ifndef _MATH_UTILS_HPP_
#define _MATH_UTILS_HPP_

#include <cmath>

namespace squiggles {
/**
 * Returns the sign value of the given value.
 *
 * @return 1 if the value is positive, -1 if the value is negative, and 0 if
 *         the value is 0.
 */
template <class T> inline int sgn(T v) {
  return (v > T(0)) - (v < T(0));
}

inline bool
nearly_equal(const double& a, const double& b, double epsilon = 1e-5) {
  return std::fabs(a - b) < epsilon;
}
} // namespace squiggles

#endif