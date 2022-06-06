cmake_minimum_required(VERSION 3.10)
project(squiggles)

set(SQUIGGLES_VERSION 1.1.1)

option(SQUIGGLES_TEST "determines if we're gonna pull googletest" OFF)
option(INSTALL_SQUIGGLES "Enables installation of the squiggles library" ON)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=gnu++${CMAKE_CXX_STANDARD} -Wall -Wextra -Wshadow -Wnull-dereference -Wno-psabi -Wno-unused-function -pthread -g -O0 -fprofile-arcs -ftest-coverage --coverage -D THREADS_STD")

set(SQUIGGLES_SOURCES main/include/constraints.hpp
  main/include/math/utils.hpp
  main/include/math/quinticpolynomial.hpp 
  main/include/spline.hpp 
  main/include/squiggles.hpp
  main/include/geometry/controlvector.hpp 
  main/include/geometry/pose.hpp 
  main/include/geometry/profilepoint.hpp
  main/include/physicalmodel/passthroughmodel.hpp
  main/include/physicalmodel/physicalmodel.hpp
  main/include/physicalmodel/tankmodel.hpp
  main/src/io.cpp
  main/src/main.cpp
  main/src/quinticpolynomial.cpp
  main/src/spline.cpp
  main/src/tankmodel.cpp)

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

include_directories(main/include)

add_subdirectory(main/src)
add_subdirectory(main/viscompat)
if (SQUIGGLES_TEST)
    add_subdirectory(main/test)
endif()

#-------------------------------------------------------------------------------

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

cxx_library(squiggles "${cxx_strict}" ${SQUIGGLES_SOURCES})
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
  ${SQUIGGLES_SOURCES}
  main/viscompat/compat.hpp
  main/viscompat/compat.cpp)

add_library(${CMAKE_PROJECT_NAME}_compat SHARED ${VIS_SO}) # creates a shared object for use with python 