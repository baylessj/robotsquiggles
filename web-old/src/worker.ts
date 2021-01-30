import ReactWasm from "./wasm/squiggles.js";

import { buffer, filter, map } from "rxjs/operators";
import { Subject } from "rxjs";

const stdOut$: Subject<number> = new Subject();
const stdErr$: Subject<number> = new Subject();
const stdOutFinished$ = stdOut$.pipe(filter((a) => a === 10));
const stdErrFinished$ = stdErr$.pipe(filter((a) => a === 10));
export const bufferedStdOut$ = stdOut$.pipe(
  buffer(stdOutFinished$),
  map((byteArray) => {
    return byteArray.map((c) => String.fromCharCode(c)).join("");
  })
);
export const bufferedStdErr$ = stdErr$.pipe(
  buffer(stdErrFinished$),
  map((byteArray) => {
    return byteArray.map((c) => String.fromCharCode(c)).join("");
  })
);
bufferedStdOut$.subscribe((v) => console.log(v));
bufferedStdErr$.subscribe((v) => console.warn(v));

const ctx: Worker = self as any;

interface EmscriptenModule {
  [key: string]: any;
}

// Respond to message from parent thread
ctx.onmessage = (ev) => {
  let message: string = ev.data;
  const Module: EmscriptenModule = {};

  // Module.stdout = (v: number) => stdOut$.next(v);
  // Module.stderr = (v: number) => stdErr$.next(v);
  Module.MEMFS = [
    {
      name: "input.txt",
      data: new TextEncoder().encode(message),
    },
  ];
  Module.arguments = ["input.txt"];
  Module.callback = (module: EmscriptenModule) => {
    const v = module.MEMFS.pop().data;
    // MEMFS will contain all the non-output files, see pre.js for more info
    ctx.postMessage(new TextDecoder("utf-8").decode(v));
  };
  ReactWasm(Module);
};
