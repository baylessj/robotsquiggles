cmake_minimum_required(VERSION 3.10)
project(RobotSquiggles)

option(SQUIGGLES_TEST "determines if we're gonna pull googletest" OFF)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=gnu++2a -Wall -Wextra -Wshadow -Wnull-dereference -Wno-psabi -Wno-unused-function -pthread -g -O0 -fprofile-arcs -ftest-coverage --coverage -D THREADS_STD")

if (SQUIGGLES_TEST)
    # Download and unpack googletest at configure time
    configure_file(CMakeLists.txt.in external-dependencies/CMakeLists.txt)
    execute_process(COMMAND ${CMAKE_COMMAND} -G "${CMAKE_GENERATOR}" .
            RESULT_VARIABLE result
            WORKING_DIRECTORY ${CMAKE_BINARY_DIR}/external-dependencies )
    if(result)
        message(FATAL_ERROR "CMake step for dependencies failed: ${result}")
    endif()
    execute_process(COMMAND ${CMAKE_COMMAND} --build .
            RESULT_VARIABLE result
            WORKING_DIRECTORY ${CMAKE_BINARY_DIR}/external-dependencies )
    if(result)
        message(FATAL_ERROR "Build step for dependencies failed: ${result}")
    endif()

    # Prevent overriding the parent project's compiler/linker
    # settings on Windows
    set(gtest_force_shared_crt ON CACHE BOOL "" FORCE)

    # Add googletest directly to our build. This defines
    # the gtest and gtest_main targets.
    add_subdirectory(${CMAKE_BINARY_DIR}/googletest-src
                    ${CMAKE_BINARY_DIR}/googletest-build
                    EXCLUDE_FROM_ALL)

    # The gtest/gtest_main targets carry header search path
    # dependencies automatically when using CMake 2.8.11 or
    # later. Otherwise we have to add them here ourselves.
    if (CMAKE_VERSION VERSION_LESS 2.8.11)
        include_directories("${gtest_SOURCE_DIR}/include")
    endif()
endif()

include_directories(include)
include_directories(vis)

add_subdirectory(src)
if (SQUIGGLES_TEST)
    add_subdirectory(tst)
endif()
add_subdirectory(vis)

set(VIS_SO
  include/constraints.hpp
  include/math/utils.hpp
  include/math/quinticpolynomial.hpp 
  include/spline.hpp 
  include/squiggles.hpp
  include/geometry/controlvector.hpp 
  include/geometry/pose.hpp 
  include/geometry/profilepoint.hpp
  include/physicalmodel/passthroughmodel.hpp
  include/physicalmodel/physicalmodel.hpp
  include/physicalmodel/tankmodel.hpp
  src/main.cpp
  src/quinticpolynomial.cpp
  src/spline.cpp
  src/tankmodel.cpp
  vis/compat.hpp
  vis/compat.cpp)

add_library(RobotSquiggles SHARED ${VIS_SO}) # creates a shared object for use with python