#include "gtest/gtest.h"
#include "squiggles.h"

TEST(blaTest, test1) {
    //arrange
    //act
    //assert
    EXPECT_EQ (Squiggles::bla (0),  0);
    EXPECT_EQ (Squiggles::bla (10), 20);
    EXPECT_EQ (Squiggles::bla (50), 100);
}