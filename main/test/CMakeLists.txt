cmake_minimum_required(VERSION 3.10)

set(BINARY ${CMAKE_PROJECT_NAME}_tst)

# file(GLOB_RECURSE TEST_SOURCES LIST_DIRECTORIES false *.hpp *.cpp)
set(TEST_SOURCES 
    impose-limits-test.cpp
    io-test.cpp
    main.cpp
    model-constraints-test.cpp
    plan-path-test.cpp
    shared.hpp)

include_directories(.)

# Below line seemed to cause issues with collecting coverage from source
# set(SOURCES ${TEST_SOURCES})

add_executable(${BINARY} ${TEST_SOURCES})

add_test(NAME ${BINARY} COMMAND ${BINARY})

target_link_libraries(${BINARY} PUBLIC ${CMAKE_PROJECT_NAME}_lib gtest)