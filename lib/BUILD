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
    compiler_flags = ["-fprofile-arcs", "-ftest-coverage", "-coverage"],
    linker_flags = ["-lgcov"],
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
    test_outputs = ['../../tmp/lib/_squiggles#src_io_cpp._build/io.gcda'],
    deps = [
        ":squiggles",
        "//third_party/cpp:gtest",
    ],
    compiler_flags = ["-fprofile-arcs", "-ftest-coverage", "-coverage"],
    linker_flags = ["-lgcov"],
    visibility = ["PUBLIC"]
)

gentest(
    name = "squiggles_coverage",
    outs = {
        "io": "io.gcda"
    },
    test_cmd = "cp ../../_squiggles#src_io_cpp._build/io.gcda $OUTS_IO",
    # test_cmd = "cp . .",
    deps = [":squiggles_test"]
)

cc_binary(
    name = "squiggles_memcheck",
    srcs = ["src/main.cpp"],
    deps = [":squiggles"]
)

