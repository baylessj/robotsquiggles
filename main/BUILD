subinclude("//build_defs:custom_cc_test")

filegroup(
    name = "squiggles_srcs",
    srcs = glob(
        ["src/*.cpp"],
        exclude = ["src/main.cpp"],
    ),
    visibility = ["PUBLIC"],
)

filegroup(
    name = "squiggles_hdrs",
    srcs = glob(["include/**.hpp"]),
    visibility = ["PUBLIC"],
)

cc_library(
    name = "squiggles",
    srcs = glob(
        include = ["src/*.cpp"],
        exclude = ["src/main.cpp"],
    ),
    hdrs = glob(
        include = ["include/**.hpp"],
    ),
    compiler_flags = [
        "-fprofile-arcs",
        "-ftest-coverage",
        "-coverage",
    ],
    includes = [
        "include/",
    ],
    linker_flags = ["-lgcov"],
    visibility = ["PUBLIC"],
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
    name = "squiggles_test",
    srcs = glob(["test/*.cpp"]),
    hdrs = ["test/shared.hpp"],
    compiler_flags = [
        "-fprofile-arcs",
        "-ftest-coverage",
        "-coverage",
    ],
    linker_flags = ["-lgcov"],
    visibility = ["PUBLIC"],
    deps = [
        ":squiggles",
        "//third_party/cpp:gtest",
    ],
)

# gentest(
#     name = "squiggles_coverage",
#     test_cmd = "cp ../../_squiggles#src_io_cpp._build/io.gcda $OUTS_IO",
#     # test_cmd = "cp . .",
#     deps = [":squiggles_test"]
# )

cc_binary(
    name = "squiggles_memcheck",
    srcs = ["src/main.cpp"],
    deps = [":squiggles"],
)
