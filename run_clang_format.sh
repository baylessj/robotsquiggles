#!/bin/bash
find include/ -iname *.hpp | xargs clang-format -i -style=file
find src/ -iname *.cpp | xargs clang-format -i -style=file
find tst/ -iname *.cpp | xargs clang-format -i -style=file