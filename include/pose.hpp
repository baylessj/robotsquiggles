namespace squiggles {
struct Pose {
  Pose(double ix, double iy, double itheta) : x(ix), y(iy), theta(itheta) {}

  double x;
  double y;
  double theta;
};

struct State {
  State(Pose ipos, Pose ivel) : pos(ipos), vel(ivel) {}

  Pose pos;
  Pose vel;
};
} // namespace squiggles