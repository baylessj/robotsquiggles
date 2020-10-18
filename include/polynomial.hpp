#ifndef _SQUIGGLES_POLYNOMIAL_HPP_
#define _SQUIGGLES_POLYNOMIAL_HPP_

#include <string>

namespace squiggles {
class QuinticPolynomial {
  public:
  QuinticPolynomial(double s_p,
                    double s_v,
                    double s_a,
                    double g_p,
                    double g_v,
                    double g_a,
                    double t);

  double calc_point(double t);

  double calc_first_derivative(double t);

  double calc_second_derivative(double t);

  double calc_third_derivative(double t);

  std::string to_string();

  protected:
  /**
   * The coefficients for each term of the polynomial
   */
  double a0, a1, a2, a3, a4, a5;
};
} // namespace squiggles

#endif