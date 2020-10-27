/**
 * Copyright 2020 Jonathan Bayless
 *
 * Use of this source code is governed by an MIT-style license that can be found
 * in the LICENSE file or at https://opensource.org/licenses/MIT.
 */
#include <iostream>
#include <string>

#include "math/quinticpolynomial.hpp"

namespace squiggles {
QuinticPolynomial::QuinticPolynomial(double s_p,
                                     double s_v,
                                     double s_a,
                                     double g_p,
                                     double g_v,
                                     double g_a,
                                     double t) {
  a0 = s_p;
  a1 = s_v;
  a2 = s_a * 0.5;

  // clang-format off
  /**
   * Last three coeffs are expressed as AX=B
   * Source: https://github.com/AtsushiSakai/PythonRobotics/blob/master/PathPlanning/QuinticPolynomialsPlanner/quintic_polynomials_planner.ipynb
   * 
   * --                     -- --  --   --                        --
   * | t^3  , t^4   , t^5    | | a3 |   | g_p - a0 - a1*t - a2*t^2 |
   * | 3*t^2, 4*t^3 , 5*t^4  | | a4 | = | g_v - a1 - 2*a2*t        |
   * | 6*t  , 12*t^2, 20*t^3 | | a5 |   | g_a - 2*a2               |
   * --                     -- --  --   --                        --
   * 
   * We then invert A (in separate program) to solve for our coeffs 
   * via X=(A^-1)B
   *
   *         --                               --
   *         |  10 / t^3, -4 / t^2,  1 / 2*t   |
   * A_inv = | -15 / t^4,  7 / t^3, -1 / t^2   |
   *         |   6 / t^5, -3 / t^4,  1 / 2*t^3 |
   *         --                               --
   */
  // clang-format on
  double A_11 = 10 / (t * t * t);
  double A_12 = -4 / (t * t);
  double A_13 = 1 / (2 * t);
  double A_21 = -15 / (t * t * t * t);
  double A_22 = 7 / (t * t * t);
  double A_23 = -1 / (t * t);
  double A_31 = 6 / (t * t * t * t * t);
  double A_32 = -3 / (t * t * t * t);
  double A_33 = 1 / (2 * t * t * t);

  double B_11 = g_p - a0 - a1 * t - a2 * t * t;
  double B_21 = g_v - a1 - 2 * a2 * t;
  double B_31 = g_a - 2 * a2;

  a3 = A_11 * B_11 + A_12 * B_21 + A_13 * B_31;
  a4 = A_21 * B_11 + A_22 * B_21 + A_23 * B_31;
  a5 = A_31 * B_11 + A_32 * B_21 + A_33 * B_31;
}

double QuinticPolynomial::calc_point(double t) {
  return a0 + a1 * t + a2 * t * t + a3 * t * t * t + a4 * t * t * t * t +
         a5 * t * t * t * t * t;
}

double QuinticPolynomial::calc_first_derivative(double t) {
  return a1 + 2 * a2 * t + 3 * a3 * t * t + 4 * a4 * t * t * t +
         5 * a5 * t * t * t * t;
}

double QuinticPolynomial::calc_second_derivative(double t) {
  return 2 * a2 + 6 * a3 * t + 12 * a4 * t * t + 20 * a5 * t * t * t;
}

double QuinticPolynomial::calc_third_derivative(double t) {
  return 6 * a3 + 24 * a4 * t + 60 * a5 * t * t;
}

} // namespace squiggles