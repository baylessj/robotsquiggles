cmake_minimum_required(VERSION 3.10)
project(squiggles)

option(SQUIGGLES_TEST "determines if we're gonna pull googletest" OFF)
option(INSTALL_SQUIGGLES "Enables installation of the squiggles library" ON)

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

#-------------------------------------------------------------------------------

set(SQUIGGLES_VERSION 0.1.0)

if (CMAKE_VERSION VERSION_LESS 3.0)
  project(squiggles CXX C)
  set(PROJECT_VERSION ${SQUIGGLES_VERSION})
else()
  cmake_policy(SET CMP0048 NEW)
  project(squiggles VERSION ${SQUIGGLES_VERSION} LANGUAGES CXX C)
endif()
cmake_minimum_required(VERSION 2.6.4)

if (POLICY CMP0063) # Visibility
  cmake_policy(SET CMP0063 NEW)
endif (POLICY CMP0063)

if (INSTALL_SQUIGGLES)
  include(CMakePackageConfigHelpers)
  set(cmake_package_name Squiggles)
  set(targets_export_name ${cmake_package_name}Targets CACHE INTERNAL "")
  set(generated_dir "${CMAKE_CURRENT_BINARY_DIR}/generated" CACHE INTERNAL "")
  set(cmake_files_install_dir "${CMAKE_INSTALL_LIBDIR}/cmake/${cmake_package_name}")
  set(version_file "${generated_dir}/${cmake_package_name}ConfigVersion.cmake")
  write_basic_package_version_file(${version_file} VERSION ${SQUIGGLES_VERSION} COMPATIBILITY AnyNewerVersion)
  install(EXPORT ${targets_export_name}
    NAMESPACE ${cmake_package_name}::
    DESTINATION ${cmake_files_install_dir})
  set(config_file "${generated_dir}/${cmake_package_name}Config.cmake")
  configure_package_config_file("${gtest_SOURCE_DIR}/cmake/Config.cmake.in"
    "${config_file}" INSTALL_DESTINATION ${cmake_files_install_dir})
  install(FILES ${version_file} ${config_file}
    DESTINATION ${cmake_files_install_dir})
endif()

cxx_library(squiggles "${cxx_strict}" src/main.cpp)
set_target_properties(squiggles PROPERTIES VERSION ${SQUIGGLES_VERSION})

set(squiggles_build_include_dirs
  "${squiggles_SOURCE_DIR}/include"
  "${squiggles_SOURCE_DIR}")
include_directories(${squiggles_build_include_dirs})

target_include_directories(squiggles SYSTEM INTERFACE
    "$<BUILD_INTERFACE:${squiggles_build_include_dirs}>"
    "$<INSTALL_INTERFACE:$<INSTALL_PREFIX>/${CMAKE_INSTALL_INCLUDEDIR}>")

install_project(squiggles)

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