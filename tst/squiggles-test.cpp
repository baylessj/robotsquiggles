#include "squiggles.hpp"
#include "gtest/gtest.h"

TEST(blaTest, test1) {
  // arrange
  // act
  // assert

  EXPECT_EQ(Squiggles::bla(0), 0);
  EXPECT_EQ(Squiggles::bla(10), 20);
  EXPECT_EQ(Squiggles::bla(50), 100);

  auto spline = squiggles::Spline(
    {squiggles::Pose(0, 0, 0), squiggles::Pose(0, 0, 0)}, 0, 0);
  spline.plan();
}