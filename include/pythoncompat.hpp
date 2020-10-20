#ifndef _PYTHON_COMPAT_HPP_
#define _PYTHON_COMPAT_HPP_

extern "C" {
// Should be visible in dll without this but this makes sure
#ifdef __GNUC__
#define EXPORT __attribute__((visibility("default")))
#else
#define EXPORT
#endif

typedef struct {
  double time;
  double rx;
  double ry;
  double ryaw;
  double rv;
  double ra;
  double rj;
} VisDataPoint;

typedef struct {
  unsigned int size;
  VisDataPoint *points = nullptr;
} VisData;

EXPORT VisData compute_path(double sx,
                            double sy,
                            double syaw,
                            double sv,
                            double sa,
                            double gx,
                            double gy,
                            double gyaw,
                            double gv,
                            double ga,
                            double max_accel,
                            double max_jerk,
                            double dt);

EXPORT VisData parameterize(VisData data,
                            double max_vel,
                            double max_accel,
                            double max_jerk);
}

#endif