#ifndef _PYTHON_COMPAT_HPP_
#define _PYTHON_COMPAT_HPP_

extern "C" {

typedef struct {
  double time;
  double x;
  double y;
  double yaw;
  double v;
  double a;
  double j;
  double k;
  double lv;
  double rv;
} VisDataPoint;

typedef struct {
  unsigned int size;
  VisDataPoint* points = nullptr;
} VisData;

// EXPORT VisData compute_path(double sx,
VisData compute_path(double sx,
                     double sy,
                     double syaw,
                     double sv,
                     double sa,
                     double gx,
                     double gy,
                     double gyaw,
                     double gv,
                     double ga,
                     double max_vel,
                     double max_accel,
                     double max_jerk,
                     double track_width,
                     double dt);
}

#endif
