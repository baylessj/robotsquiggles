cmake_minimum_required(VERSION 3.10)
project(RobotSquiggles)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=gnu++17 -Wall -Wextra -Wshadow -Wnull-dereference -Wno-psabi -Wno-unused-function -pthread -g -O0 -fprofile-arcs -ftest-coverage -D THREADS_STD")

include_directories(include)
include_directories(vis)

add_subdirectory(src)
add_subdirectory(tst)
add_subdirectory(vis)
add_subdirectory(lib/googletest)

set(VIS_SO
  include/constraints.hpp
  include/mathutils.hpp
  include/polynomial.hpp 
  include/spline.hpp 
  include/squiggles.hpp
  include/geometry/controlvector.hpp 
  include/geometry/generatedpoint.hpp
  include/geometry/pose.hpp 
  include/geometry/profilepoint.hpp
  include/physicalmodel/passthroughmodel.hpp
  include/physicalmodel/physicalmodel.hpp
  include/physicalmodel/tankmodel.hpp
  src/main.cpp
  src/mathutils.cpp
  src/polynomial.cpp
  src/spline.cpp
  src/tankmodel.cpp
  vis/compat.hpp
  vis/compat.cpp)

add_library(${CMAKE_PROJECT_NAME} SHARED ${VIS_SO}) # creates a shared object for use with python