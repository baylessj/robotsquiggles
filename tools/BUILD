package(default_visibility = ["PUBLIC"])

genrule(
    name = "emcc_lib",
    srcs = ["//third_party/cpp:emscripten"],
    outs = ["emsdk"],
    cmd = [
        "cd third_party/cpp/emscripten",
        "./emsdk install latest",
        "./emsdk activate latest",
        "cp -r ./ $OUT",
    ],
)

genrule(
    name = "emcc",
    srcs = [":emcc_lib"],
    outs = ["emcc"],
    binary = True,
    cmd = [
        "cd tools/emsdk/",
        "cp -r ./upstream/emscripten/emcc $OUT",
    ],
    deps = [":emcc_lib"],
)

genrule(
    name = "emconfigure",
    srcs = [":emcc_lib"],
    outs = ["emconfigure"],
    binary = True,
    cmd = [
        "cd tools/emsdk",
        "cp -r ./upstream/emscripten/emconfigure $OUT",
    ],
    deps = [":emcc_lib"],
)

genrule(
    name = "emmake",
    srcs = [":emcc_lib"],
    outs = ["emmake"],
    binary = True,
    cmd = [
        "cd tools/emsdk",
        "cp -r ./upstream/emscripten/emmake $OUT",
    ],
    deps = [":emcc_lib"],
)

# Split rules up into an install, an emmake, an emcc, and others?
