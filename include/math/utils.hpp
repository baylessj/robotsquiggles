#ifndef _MATH_UTILS_HPP_
#define _MATH_UTILS_HPP_

namespace squiggles {
template <class T> inline int sgn(T v) {
  return (v > T(0)) - (v < T(0));
}
} // namespace squiggles

#endif