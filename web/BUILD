package(CC_Tool = "//tools:emcc")

genrule(
  name = "gen_test",
  srcs = ["hello.c"],
  outs = ['hello.html', 'hello.js', 'hello.wasm'],
  cmd = [
    "./tools/emsdk/upstream/emscripten/emcc $SRC -s WASM=1 -o hello.html"
  ],
  deps = ["//tools:emcc_lib"]
)
