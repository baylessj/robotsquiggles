cc_library(
    name = "squiggles",
    srcs = glob(
        include = ["src/*.cpp"],
        exclude = ["src/main.cpp"],
    ),
    hdrs = glob(
        include = ["include/**.hpp"],
    ),
    includes = [
        "include/",
    ],
)

cc_static_library(
    name = "libsquiggles",
    deps = [
        ":squiggles",
    ],
)

cc_shared_object(
    name = "squigglesviscompat",
    srcs = glob(["viscompat/*.cpp"]),
    hdrs = glob(["viscompat/*.hpp"]),
    visibility = ["PUBLIC"],
    deps = [":squiggles"],
)

cc_test(
    name = 'squiggles_test',
    srcs = glob(["test/*.cpp"]),
    hdrs = ["test/shared.hpp"],
    deps = [
        ":squiggles",
        "//third_party/cpp:gtest",
    ]
)

cc_binary(
    name = "squiggles_memcheck",
    srcs = ["src/main.cpp"],
    deps = [":squiggles"]
)

# genrule(
#     name = "docs",
#     cmd = "$TOOLS_sphinx-build",
#     tools = {
#         "sphinx-build": ["//docs:sphinx_build"]
#     }
# )

# genrule(
#     name = "docs",
#     srcs = glob(["./docs/*"]),
#     outs = glob(["./docs/_build/*"]),
#     cmd = "sphinx-build -M html $SRC $OUT",
#     deps = [
#         "//third_party/python:sphinx",
#         "//third_party/python:sphinx-rtd-theme",
#     ],
    
# )
