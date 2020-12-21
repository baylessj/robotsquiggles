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

sh_cmd(
    name = "emsdk",
    cmd = "./third_party/cpp/emscripten/emsdk",
    deps = ["//third_party/cpp:emscripten"],
)

genrule(
    name = "squiggles_emcc",
    srcs = ['src/main.cpp'],
    deps = [":squiggles"],
    cmd = ["echo $TOOL"],
    tools = ["//tools:emcc"]
)

# genrule(
#     name = "install_emscripten",
#     outs = glob(["third_party/cpp/emscripten/*"]),
#     cmd = [
#         "cd third_party/cpp/emscripten",
#         "./emsdk install latest",
#         "./emsdk activate latest",
#         "source ./emsdk_env.sh",
#         # 'emsdk list > "$OUT"',
#     ],
#     deps = ["//third_party/cpp:emscripten"],
# )

# genrule(
#     name = "wasm",
#     srcs = [],
#     cmd = "$TOOLS_EMCC $SRCS",
#     tools = {
#         "emcc": [":install_emscripten"],
#     }
# )
