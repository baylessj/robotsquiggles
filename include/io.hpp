/**
 * Copyright 2020 Jonathan Bayless
 *
 * Use of this source code is governed by an MIT-style license that can be found
 * in the LICENSE file or at https://opensource.org/licenses/MIT.
 */
#ifndef _SQUIGGLES_IO_HPP_
#define _SQUIGGLES_IO_HPP_

#include <optional>
#include <vector>

#include "geometry/profilepoint.hpp"

namespace squiggles {
/**
 * Writes the path data to a CSV file.
 */
int serialize_path(FILE* file, std::vector<ProfilePoint> path);

/**
 * Converts CSV data into a path.
 */
std::optional<std::vector<ProfilePoint>> deserialize_path(FILE* file);

/**
 * Converts CSV data from the Pathfinder library's format to a Squiggles path.
 * 
 * NOTE: this code is copied almost exactly from Jaci Brunning's Pathfinder
 * library. The source for this code can be found at:
 * https://github.com/JaciBrunning/Pathfinder/blob/master/Pathfinder-Core/src/io.c
 */
std::optional<std::vector<ProfilePoint>> deserialize_pathfinder_path(FILE* left_file, FILE* right_file);
}

#endif