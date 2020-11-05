#!/bin/bash
cd ./build && cmake .. -DCMAKE_BUILD_TYPE=Debug -DSQUIGGLES_TEST=ON -G "Unix Makefiles"