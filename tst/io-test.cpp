#include "gtest/gtest.h"

#include "spline.hpp"
#include "physicalmodel/tankmodel.hpp"
#include "io.hpp"

using namespace squiggles;

std::string example_path = "x, y, yaw, vel, accel, jerk, curvature, time, wheels\n0.000000,0.000000,1.000000,1.000000,2.000000,0.000000,0.000000,0.000000\n0.060764,0.092108,0.967272,1.200000,2.000000,0.000000,-0.264205,0.100000\n0.139121,0.198404,0.903664,1.400000,2.000000,0.000000,-0.356943,0.200000\n0.238782,0.316440,0.838101,1.600000,2.000000,0.000000,-0.385577,0.300000\n0.360552,0.443959,0.781941,1.800000,2.000000,0.000000,-0.373784,0.400000\n0.502812,0.578859,0.738647,2.000000,2.000000,0.000000,-0.326066,0.500000\n0.662019,0.719161,0.708578,2.200000,2.000000,0.000000,-0.243891,0.600000\n0.833183,0.862979,0.691182,2.400000,2.000000,0.000000,-0.128275,0.700000\n1.010370,1.008487,0.685912,2.576708,-2.000000,0.000000,0.008317,0.800000\n1.187180,1.153892,0.692576,2.376708,-2.000000,0.000000,0.143075,0.900000\n1.357244,1.297395,0.711415,2.176708,-2.000000,0.000000,0.254727,1.000000\n1.514710,1.437166,0.743002,1.976708,-2.000000,0.000000,0.333370,1.100000\n1.654734,1.571310,0.787845,1.776708,-2.000000,0.000000,0.377640,1.200000\n1.773970,1.697836,0.845374,1.576708,-2.000000,0.000000,0.385902,1.300000\n1.871058,1.814625,0.911518,1.376708,-2.000000,0.000000,0.348760,1.400000\n1.947114,1.919397,0.973497,1.176708,-2.000000,0.000000,0.232414,1.500000\n2.000000,2.000000,1.000000,1.000000,-2.000000,0.000000,-0.000000,1.588354\n";

TEST(io_test, serialize_path_test) {
  auto spline = SplineGenerator(Constraints(20.0, 2.0, 10.0));
  auto path = spline.generate({ControlVector(Pose(0, 0, 1), 1.0, 2.0),
                               ControlVector(Pose(2, 2, 1), 1.0, -2.0)});
  std::string serialized_path;
  std::stringstream stream(serialized_path);
  int rtn = serialize_path(stream, path);
  ASSERT_EQ(rtn, 0);
  ASSERT_STREQ(stream.str().c_str(), example_path.c_str());
}

TEST(io_test, deserialize_path_test) {
  auto spline = SplineGenerator(Constraints(20.0, 2.0, 10.0));
  auto path = spline.generate({ControlVector(Pose(0, 0, 1), 1.0, 2.0),
                               ControlVector(Pose(2, 2, 1), 1.0, -2.0)});
  std::istringstream stream(example_path);
  std::optional<std::vector<ProfilePoint>> rtn = deserialize_path(stream);                       
}

TEST(io_test, wheel_vels) {
  auto constraints = Constraints(20.0, 2.0, 10.0);
  auto model = std::make_shared<TankModel>(0.4, constraints);
  auto spline = SplineGenerator(constraints, model);
  auto path = spline.generate({ControlVector(Pose(0, 0, 1), 1.0, 2.0),
                               ControlVector(Pose(2, 2, 1), 1.0, -2.0)});
  std::string serialized_path;
  std::stringstream stream(serialized_path);
  int rtn = serialize_path(stream, path);
  std::cout << stream.str() << std::endl;
  std::optional<std::vector<ProfilePoint>> parsed_path = deserialize_path(stream);  
  for (std::size_t i = 0; i < path.size(); ++i) {
    ASSERT_EQ(parsed_path.value()[i], path[i]);
  }
}