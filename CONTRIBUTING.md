# Contributing

## Dependencies

- [CMake](https://cmake.org/) - C++ Build Tool
- [Poetry](https://python-poetry.org/) - Python Package Manager
- [Doxygen](https://doxygen.nl/) - Documentation Generator
- [Sphinx](https://www.sphinx-doc.org/en/master/) - Documentation Generator

### Installation

#### CMake

Mac OS: `brew install cmake`

Linux: `apt-get install cmake`

#### Poetry:

```
pip install poetry
```

#### Doxygen

Mac OS: `brew install doxygen`

Linux: `apt-get install doxygen`

#### Sphinx

Mac OS:

```
brew install sphinx-build
```

then add the following to your `.zshrc` or `.bashrc` file:

```
export PATH="/usr/local/opt/sphinx-doc/bin:$PATH"
```

Linux: https://www.sphinx-doc.org/en/master/usage/installation.html

## Building

### Core Library

Squiggles is built with [CMake](https://cmake.org/). A convenience script for creating the
CMake makefiles on a \*nix environment is included as `run_cmake_format.sh`.

After creating the CMake makefiles, you can run `make` from the `build` directory to build the library.

The tests are built alongside the source binaries and depend on [GoogleTest](https://github.com/google/googletest). GoogleTest is pulled automatically by CMake.

### Path Visualization

The path visualizations are created with Python and [Matplotlib](https://matplotlib.org/). The
dependencies for the Python portion of the project are handled by [Poetry](https://python-poetry.org/).

To install the Python dependencies, run `poetry install`.

If you have not built the Core Library yet, do that first.

Open a Poetry shell with `poetry shell`.

Then run `poetry run vis` to run the visualization.

### Docs

The documentation is built with [Sphinx](https://www.sphinx-doc.org/en/master/) and [Doxygen](https://doxygen.nl/) and is generated in the `docs` directory.

To install the Python dependencies, run `poetry install` from the root of the repo.

Open a Poetry shell with `poetry shell`.

Then, from the `docs` directory, run `make html`.
