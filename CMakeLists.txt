cmake_minimum_required(VERSION 3.10)
project(RobotSquiggles)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=gnu++17 -Wall -Wextra -Wshadow -Wnull-dereference -Wno-psabi -Wno-unused-function -pthread -g -O0 -fprofile-arcs -ftest-coverage -D THREADS_STD")

include_directories(include)

add_subdirectory(src)
add_subdirectory(tst)
add_subdirectory(lib/googletest)