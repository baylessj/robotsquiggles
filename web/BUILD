filegroup(
  name = "static",
  srcs = ["cu_comp_field.png", "two.min.js", "field.js", "squiggles.html"]
)

genrule(
    name = "gen_test",
    srcs = ["web_shim.cpp", "//main:squiggles_srcs"],
    outs = [
        "a.out.js",
        "a.out.wasm",
    ],
    cmd = [
        "./tools/emsdk/upstream/emscripten/emcc $SRCS -s WASM=1 -s EXTRA_EXPORTED_RUNTIME_METHODS='[\"cwrap\"]' -I main/include --std=gnu++17",
    ],
    deps = [
        # pulling in the squiggles source directly since we need to rebuild the
        # library with emcc rather than gcc to link properly
        "//main:squiggles_srcs", 
        "//main:squiggles_hdrs",
        "//tools:emcc_lib",
        ":static",
    ],
)
