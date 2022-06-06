cmake_minimum_required(VERSION 3.10)

set(BINARY ${CMAKE_PROJECT_NAME})

file(GLOB_RECURSE SOURCES LIST_DIRECTORIES true *.h *.cpp)

add_executable(${BINARY}_run ${SOURCES})

add_library(${CMAKE_PROJECT_NAME}_lib STATIC ${SOURCES})