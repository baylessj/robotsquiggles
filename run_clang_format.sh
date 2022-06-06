#!/bin/bash
find main/include/ -iname *.hpp | xargs clang-format -i -style=file
find main/src/ -iname *.cpp | xargs clang-format -i -style=file
find main/test/ -iname *.cpp | xargs clang-format -i -style=file
find main/viscompat/ -iname *.cpp | xargs clang-format -i -style=file
