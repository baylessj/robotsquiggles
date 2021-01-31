
var squiggles = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(squiggles) {
  squiggles = squiggles || {};



// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = typeof squiggles !== 'undefined' ? squiggles : {};

// Set up the promise that indicates the Module is initialized
var readyPromiseResolve, readyPromiseReject;
Module['ready'] = new Promise(function(resolve, reject) {
  readyPromiseResolve = resolve;
  readyPromiseReject = reject;
});

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_main')) {
        Object.defineProperty(Module['ready'], '_main', { configurable: true, get: function() { abort('You are getting _main on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_main', { configurable: true, set: function() { abort('You are setting _main on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_emscripten_stack_get_end')) {
        Object.defineProperty(Module['ready'], '_emscripten_stack_get_end', { configurable: true, get: function() { abort('You are getting _emscripten_stack_get_end on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_emscripten_stack_get_end', { configurable: true, set: function() { abort('You are setting _emscripten_stack_get_end on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_emscripten_stack_get_free')) {
        Object.defineProperty(Module['ready'], '_emscripten_stack_get_free', { configurable: true, get: function() { abort('You are getting _emscripten_stack_get_free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_emscripten_stack_get_free', { configurable: true, set: function() { abort('You are setting _emscripten_stack_get_free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_emscripten_stack_init')) {
        Object.defineProperty(Module['ready'], '_emscripten_stack_init', { configurable: true, get: function() { abort('You are getting _emscripten_stack_init on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_emscripten_stack_init', { configurable: true, set: function() { abort('You are setting _emscripten_stack_init on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_stackSave')) {
        Object.defineProperty(Module['ready'], '_stackSave', { configurable: true, get: function() { abort('You are getting _stackSave on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_stackSave', { configurable: true, set: function() { abort('You are setting _stackSave on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_stackRestore')) {
        Object.defineProperty(Module['ready'], '_stackRestore', { configurable: true, get: function() { abort('You are getting _stackRestore on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_stackRestore', { configurable: true, set: function() { abort('You are setting _stackRestore on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_stackAlloc')) {
        Object.defineProperty(Module['ready'], '_stackAlloc', { configurable: true, get: function() { abort('You are getting _stackAlloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_stackAlloc', { configurable: true, set: function() { abort('You are setting _stackAlloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '___wasm_call_ctors')) {
        Object.defineProperty(Module['ready'], '___wasm_call_ctors', { configurable: true, get: function() { abort('You are getting ___wasm_call_ctors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '___wasm_call_ctors', { configurable: true, set: function() { abort('You are setting ___wasm_call_ctors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fflush')) {
        Object.defineProperty(Module['ready'], '_fflush', { configurable: true, get: function() { abort('You are getting _fflush on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fflush', { configurable: true, set: function() { abort('You are setting _fflush on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '___errno_location')) {
        Object.defineProperty(Module['ready'], '___errno_location', { configurable: true, get: function() { abort('You are getting ___errno_location on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '___errno_location', { configurable: true, set: function() { abort('You are setting ___errno_location on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_malloc')) {
        Object.defineProperty(Module['ready'], '_malloc', { configurable: true, get: function() { abort('You are getting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_malloc', { configurable: true, set: function() { abort('You are setting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_free')) {
        Object.defineProperty(Module['ready'], '_free', { configurable: true, get: function() { abort('You are getting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_free', { configurable: true, set: function() { abort('You are setting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_setThrew')) {
        Object.defineProperty(Module['ready'], '_setThrew', { configurable: true, get: function() { abort('You are getting _setThrew on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_setThrew', { configurable: true, set: function() { abort('You are setting _setThrew on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZSt18uncaught_exceptionv')) {
        Object.defineProperty(Module['ready'], '__ZSt18uncaught_exceptionv', { configurable: true, get: function() { abort('You are getting __ZSt18uncaught_exceptionv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZSt18uncaught_exceptionv', { configurable: true, set: function() { abort('You are setting __ZSt18uncaught_exceptionv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], 'onRuntimeInitialized')) {
        Object.defineProperty(Module['ready'], 'onRuntimeInitialized', { configurable: true, get: function() { abort('You are getting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], 'onRuntimeInitialized', { configurable: true, set: function() { abort('You are setting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)
// {{PRE_JSES}}

// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = {};
var key;
for (key in Module) {
  if (Module.hasOwnProperty(key)) {
    moduleOverrides[key] = Module[key];
  }
}

var arguments_ = [];
var thisProgram = './this.program';
var quit_ = function(status, toThrow) {
  throw toThrow;
};

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

var ENVIRONMENT_IS_WEB = false;
var ENVIRONMENT_IS_WORKER = false;
var ENVIRONMENT_IS_NODE = false;
var ENVIRONMENT_IS_SHELL = false;
ENVIRONMENT_IS_WEB = typeof window === 'object';
ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
// N.b. Electron.js environment is simultaneously a NODE-environment, but
// also a web environment.
ENVIRONMENT_IS_NODE = typeof process === 'object' && typeof process.versions === 'object' && typeof process.versions.node === 'string';
ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

if (Module['ENVIRONMENT']) {
  throw new Error('Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)');
}

// `/` should be present at the end if `scriptDirectory` is not empty
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var read_,
    readAsync,
    readBinary,
    setWindowTitle;

var nodeFS;
var nodePath;

if (ENVIRONMENT_IS_NODE) {
  if (ENVIRONMENT_IS_WORKER) {
    scriptDirectory = require('path').dirname(scriptDirectory) + '/';
  } else {
    scriptDirectory = __dirname + '/';
  }

// include: node_shell_read.js


read_ = function shell_read(filename, binary) {
  var ret = tryParseAsDataURI(filename);
  if (ret) {
    return binary ? ret : ret.toString();
  }
  if (!nodeFS) nodeFS = require('fs');
  if (!nodePath) nodePath = require('path');
  filename = nodePath['normalize'](filename);
  return nodeFS['readFileSync'](filename, binary ? null : 'utf8');
};

readBinary = function readBinary(filename) {
  var ret = read_(filename, true);
  if (!ret.buffer) {
    ret = new Uint8Array(ret);
  }
  assert(ret.buffer);
  return ret;
};

// end include: node_shell_read.js
  if (process['argv'].length > 1) {
    thisProgram = process['argv'][1].replace(/\\/g, '/');
  }

  arguments_ = process['argv'].slice(2);

  // MODULARIZE will export the module in the proper place outside, we don't need to export here

  process['on']('uncaughtException', function(ex) {
    // suppress ExitStatus exceptions from showing an error
    if (!(ex instanceof ExitStatus)) {
      throw ex;
    }
  });

  process['on']('unhandledRejection', abort);

  quit_ = function(status) {
    process['exit'](status);
  };

  Module['inspect'] = function () { return '[Emscripten Module object]'; };

} else
if (ENVIRONMENT_IS_SHELL) {

  if (typeof read != 'undefined') {
    read_ = function shell_read(f) {
      var data = tryParseAsDataURI(f);
      if (data) {
        return intArrayToString(data);
      }
      return read(f);
    };
  }

  readBinary = function readBinary(f) {
    var data;
    data = tryParseAsDataURI(f);
    if (data) {
      return data;
    }
    if (typeof readbuffer === 'function') {
      return new Uint8Array(readbuffer(f));
    }
    data = read(f, 'binary');
    assert(typeof data === 'object');
    return data;
  };

  if (typeof scriptArgs != 'undefined') {
    arguments_ = scriptArgs;
  } else if (typeof arguments != 'undefined') {
    arguments_ = arguments;
  }

  if (typeof quit === 'function') {
    quit_ = function(status) {
      quit(status);
    };
  }

  if (typeof print !== 'undefined') {
    // Prefer to use print/printErr where they exist, as they usually work better.
    if (typeof console === 'undefined') console = /** @type{!Console} */({});
    console.log = /** @type{!function(this:Console, ...*): undefined} */ (print);
    console.warn = console.error = /** @type{!function(this:Console, ...*): undefined} */ (typeof printErr !== 'undefined' ? printErr : print);
  }

} else

// Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) { // Check worker, not web, since window could be polyfilled
    scriptDirectory = self.location.href;
  } else if (typeof document !== 'undefined' && document.currentScript) { // web
    scriptDirectory = document.currentScript.src;
  }
  // When MODULARIZE, this JS may be executed later, after document.currentScript
  // is gone, so we saved it, and we use it here instead of any other info.
  if (_scriptDir) {
    scriptDirectory = _scriptDir;
  }
  // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
  // otherwise, slice off the final part of the url to find the script directory.
  // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
  // and scriptDirectory will correctly be replaced with an empty string.
  if (scriptDirectory.indexOf('blob:') !== 0) {
    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf('/')+1);
  } else {
    scriptDirectory = '';
  }

  // Differentiate the Web Worker from the Node Worker case, as reading must
  // be done differently.
  {

// include: web_or_worker_shell_read.js


  read_ = function shell_read(url) {
    try {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.send(null);
      return xhr.responseText;
    } catch (err) {
      var data = tryParseAsDataURI(url);
      if (data) {
        return intArrayToString(data);
      }
      throw err;
    }
  };

  if (ENVIRONMENT_IS_WORKER) {
    readBinary = function readBinary(url) {
      try {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.responseType = 'arraybuffer';
        xhr.send(null);
        return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));
      } catch (err) {
        var data = tryParseAsDataURI(url);
        if (data) {
          return data;
        }
        throw err;
      }
    };
  }

  readAsync = function readAsync(url, onload, onerror) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function xhr_onload() {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
        return;
      }
      var data = tryParseAsDataURI(url);
      if (data) {
        onload(data.buffer);
        return;
      }
      onerror();
    };
    xhr.onerror = onerror;
    xhr.send(null);
  };

// end include: web_or_worker_shell_read.js
  }

  setWindowTitle = function(title) { document.title = title };
} else
{
  throw new Error('environment detection error');
}

// Set up the out() and err() hooks, which are how we can print to stdout or
// stderr, respectively.
var out = Module['print'] || console.log.bind(console);
var err = Module['printErr'] || console.warn.bind(console);

// Merge back in the overrides
for (key in moduleOverrides) {
  if (moduleOverrides.hasOwnProperty(key)) {
    Module[key] = moduleOverrides[key];
  }
}
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = null;

// Emit code to handle expected values on the Module object. This applies Module.x
// to the proper local x. This has two benefits: first, we only emit it if it is
// expected to arrive, and second, by using a local everywhere else that can be
// minified.
if (Module['arguments']) arguments_ = Module['arguments'];if (!Object.getOwnPropertyDescriptor(Module, 'arguments')) Object.defineProperty(Module, 'arguments', { configurable: true, get: function() { abort('Module.arguments has been replaced with plain arguments_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });
if (Module['thisProgram']) thisProgram = Module['thisProgram'];if (!Object.getOwnPropertyDescriptor(Module, 'thisProgram')) Object.defineProperty(Module, 'thisProgram', { configurable: true, get: function() { abort('Module.thisProgram has been replaced with plain thisProgram (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });
if (Module['quit']) quit_ = Module['quit'];if (!Object.getOwnPropertyDescriptor(Module, 'quit')) Object.defineProperty(Module, 'quit', { configurable: true, get: function() { abort('Module.quit has been replaced with plain quit_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });

// perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message
// Assertions on removed incoming Module JS APIs.
assert(typeof Module['memoryInitializerPrefixURL'] === 'undefined', 'Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['pthreadMainPrefixURL'] === 'undefined', 'Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['cdInitializerPrefixURL'] === 'undefined', 'Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['filePackagePrefixURL'] === 'undefined', 'Module.filePackagePrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['read'] === 'undefined', 'Module.read option was removed (modify read_ in JS)');
assert(typeof Module['readAsync'] === 'undefined', 'Module.readAsync option was removed (modify readAsync in JS)');
assert(typeof Module['readBinary'] === 'undefined', 'Module.readBinary option was removed (modify readBinary in JS)');
assert(typeof Module['setWindowTitle'] === 'undefined', 'Module.setWindowTitle option was removed (modify setWindowTitle in JS)');
assert(typeof Module['TOTAL_MEMORY'] === 'undefined', 'Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY');
if (!Object.getOwnPropertyDescriptor(Module, 'read')) Object.defineProperty(Module, 'read', { configurable: true, get: function() { abort('Module.read has been replaced with plain read_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });
if (!Object.getOwnPropertyDescriptor(Module, 'readAsync')) Object.defineProperty(Module, 'readAsync', { configurable: true, get: function() { abort('Module.readAsync has been replaced with plain readAsync (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });
if (!Object.getOwnPropertyDescriptor(Module, 'readBinary')) Object.defineProperty(Module, 'readBinary', { configurable: true, get: function() { abort('Module.readBinary has been replaced with plain readBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });
if (!Object.getOwnPropertyDescriptor(Module, 'setWindowTitle')) Object.defineProperty(Module, 'setWindowTitle', { configurable: true, get: function() { abort('Module.setWindowTitle has been replaced with plain setWindowTitle (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });
var IDBFS = 'IDBFS is no longer included by default; build with -lidbfs.js';
var PROXYFS = 'PROXYFS is no longer included by default; build with -lproxyfs.js';
var WORKERFS = 'WORKERFS is no longer included by default; build with -lworkerfs.js';
var NODEFS = 'NODEFS is no longer included by default; build with -lnodefs.js';




var STACK_ALIGN = 16;

function alignMemory(size, factor) {
  if (!factor) factor = STACK_ALIGN; // stack alignment (16-byte) by default
  return Math.ceil(size / factor) * factor;
}

function getNativeTypeSize(type) {
  switch (type) {
    case 'i1': case 'i8': return 1;
    case 'i16': return 2;
    case 'i32': return 4;
    case 'i64': return 8;
    case 'float': return 4;
    case 'double': return 8;
    default: {
      if (type[type.length-1] === '*') {
        return 4; // A pointer
      } else if (type[0] === 'i') {
        var bits = Number(type.substr(1));
        assert(bits % 8 === 0, 'getNativeTypeSize invalid bits ' + bits + ', type ' + type);
        return bits / 8;
      } else {
        return 0;
      }
    }
  }
}

function warnOnce(text) {
  if (!warnOnce.shown) warnOnce.shown = {};
  if (!warnOnce.shown[text]) {
    warnOnce.shown[text] = 1;
    err(text);
  }
}

// include: runtime_functions.js


// Wraps a JS function as a wasm function with a given signature.
function convertJsFunctionToWasm(func, sig) {

  // If the type reflection proposal is available, use the new
  // "WebAssembly.Function" constructor.
  // Otherwise, construct a minimal wasm module importing the JS function and
  // re-exporting it.
  if (typeof WebAssembly.Function === "function") {
    var typeNames = {
      'i': 'i32',
      'j': 'i64',
      'f': 'f32',
      'd': 'f64'
    };
    var type = {
      parameters: [],
      results: sig[0] == 'v' ? [] : [typeNames[sig[0]]]
    };
    for (var i = 1; i < sig.length; ++i) {
      type.parameters.push(typeNames[sig[i]]);
    }
    return new WebAssembly.Function(type, func);
  }

  // The module is static, with the exception of the type section, which is
  // generated based on the signature passed in.
  var typeSection = [
    0x01, // id: section,
    0x00, // length: 0 (placeholder)
    0x01, // count: 1
    0x60, // form: func
  ];
  var sigRet = sig.slice(0, 1);
  var sigParam = sig.slice(1);
  var typeCodes = {
    'i': 0x7f, // i32
    'j': 0x7e, // i64
    'f': 0x7d, // f32
    'd': 0x7c, // f64
  };

  // Parameters, length + signatures
  typeSection.push(sigParam.length);
  for (var i = 0; i < sigParam.length; ++i) {
    typeSection.push(typeCodes[sigParam[i]]);
  }

  // Return values, length + signatures
  // With no multi-return in MVP, either 0 (void) or 1 (anything else)
  if (sigRet == 'v') {
    typeSection.push(0x00);
  } else {
    typeSection = typeSection.concat([0x01, typeCodes[sigRet]]);
  }

  // Write the overall length of the type section back into the section header
  // (excepting the 2 bytes for the section id and length)
  typeSection[1] = typeSection.length - 2;

  // Rest of the module is static
  var bytes = new Uint8Array([
    0x00, 0x61, 0x73, 0x6d, // magic ("\0asm")
    0x01, 0x00, 0x00, 0x00, // version: 1
  ].concat(typeSection, [
    0x02, 0x07, // import section
      // (import "e" "f" (func 0 (type 0)))
      0x01, 0x01, 0x65, 0x01, 0x66, 0x00, 0x00,
    0x07, 0x05, // export section
      // (export "f" (func 0 (type 0)))
      0x01, 0x01, 0x66, 0x00, 0x00,
  ]));

   // We can compile this wasm module synchronously because it is very small.
  // This accepts an import (at "e.f"), that it reroutes to an export (at "f")
  var module = new WebAssembly.Module(bytes);
  var instance = new WebAssembly.Instance(module, {
    'e': {
      'f': func
    }
  });
  var wrappedFunc = instance.exports['f'];
  return wrappedFunc;
}

var freeTableIndexes = [];

// Weak map of functions in the table to their indexes, created on first use.
var functionsInTableMap;

function getEmptyTableSlot() {
  // Reuse a free index if there is one, otherwise grow.
  if (freeTableIndexes.length) {
    return freeTableIndexes.pop();
  }
  // Grow the table
  try {
    wasmTable.grow(1);
  } catch (err) {
    if (!(err instanceof RangeError)) {
      throw err;
    }
    throw 'Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.';
  }
  return wasmTable.length - 1;
}

// Add a wasm function to the table.
function addFunctionWasm(func, sig) {
  // Check if the function is already in the table, to ensure each function
  // gets a unique index. First, create the map if this is the first use.
  if (!functionsInTableMap) {
    functionsInTableMap = new WeakMap();
    for (var i = 0; i < wasmTable.length; i++) {
      var item = wasmTable.get(i);
      // Ignore null values.
      if (item) {
        functionsInTableMap.set(item, i);
      }
    }
  }
  if (functionsInTableMap.has(func)) {
    return functionsInTableMap.get(func);
  }

  // It's not in the table, add it now.

  var ret = getEmptyTableSlot();

  // Set the new value.
  try {
    // Attempting to call this with JS function will cause of table.set() to fail
    wasmTable.set(ret, func);
  } catch (err) {
    if (!(err instanceof TypeError)) {
      throw err;
    }
    assert(typeof sig !== 'undefined', 'Missing signature argument to addFunction: ' + func);
    var wrapped = convertJsFunctionToWasm(func, sig);
    wasmTable.set(ret, wrapped);
  }

  functionsInTableMap.set(func, ret);

  return ret;
}

function removeFunction(index) {
  functionsInTableMap.delete(wasmTable.get(index));
  freeTableIndexes.push(index);
}

// 'sig' parameter is required for the llvm backend but only when func is not
// already a WebAssembly function.
function addFunction(func, sig) {
  assert(typeof func !== 'undefined');

  return addFunctionWasm(func, sig);
}

// end include: runtime_functions.js
// include: runtime_debug.js


// end include: runtime_debug.js
function makeBigInt(low, high, unsigned) {
  return unsigned ? ((+((low>>>0)))+((+((high>>>0)))*4294967296.0)) : ((+((low>>>0)))+((+((high|0)))*4294967296.0));
}

var tempRet0 = 0;

var setTempRet0 = function(value) {
  tempRet0 = value;
};

var getTempRet0 = function() {
  return tempRet0;
};

function getCompilerSetting(name) {
  throw 'You must build with -s RETAIN_COMPILER_SETTINGS=1 for getCompilerSetting or emscripten_get_compiler_setting to work';
}



// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

var wasmBinary;if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];if (!Object.getOwnPropertyDescriptor(Module, 'wasmBinary')) Object.defineProperty(Module, 'wasmBinary', { configurable: true, get: function() { abort('Module.wasmBinary has been replaced with plain wasmBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });
var noExitRuntime;if (Module['noExitRuntime']) noExitRuntime = Module['noExitRuntime'];if (!Object.getOwnPropertyDescriptor(Module, 'noExitRuntime')) Object.defineProperty(Module, 'noExitRuntime', { configurable: true, get: function() { abort('Module.noExitRuntime has been replaced with plain noExitRuntime (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });

if (typeof WebAssembly !== 'object') {
  abort('no native wasm support detected');
}

// include: runtime_safe_heap.js


// In MINIMAL_RUNTIME, setValue() and getValue() are only available when building with safe heap enabled, for heap safety checking.
// In traditional runtime, setValue() and getValue() are always available (although their use is highly discouraged due to perf penalties)

/** @param {number} ptr
    @param {number} value
    @param {string} type
    @param {number|boolean=} noSafe */
function setValue(ptr, value, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': HEAP8[((ptr)>>0)]=value; break;
      case 'i8': HEAP8[((ptr)>>0)]=value; break;
      case 'i16': HEAP16[((ptr)>>1)]=value; break;
      case 'i32': HEAP32[((ptr)>>2)]=value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)]=tempI64[0],HEAP32[(((ptr)+(4))>>2)]=tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)]=value; break;
      case 'double': HEAPF64[((ptr)>>3)]=value; break;
      default: abort('invalid type for setValue: ' + type);
    }
}

/** @param {number} ptr
    @param {string} type
    @param {number|boolean=} noSafe */
function getValue(ptr, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': return HEAP8[((ptr)>>0)];
      case 'i8': return HEAP8[((ptr)>>0)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      default: abort('invalid type for getValue: ' + type);
    }
  return null;
}

// end include: runtime_safe_heap.js
// Wasm globals

var wasmMemory;

//========================================
// Runtime essentials
//========================================

// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS;

/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed: ' + text);
  }
}

// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function getCFunc(ident) {
  var func = Module['_' + ident]; // closure exported function
  assert(func, 'Cannot call unknown function ' + ident + ', make sure it is exported');
  return func;
}

// C calling interface.
/** @param {string|null=} returnType
    @param {Array=} argTypes
    @param {Arguments|Array=} args
    @param {Object=} opts */
function ccall(ident, returnType, argTypes, args, opts) {
  // For fast lookup of conversion functions
  var toC = {
    'string': function(str) {
      var ret = 0;
      if (str !== null && str !== undefined && str !== 0) { // null string
        // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
        var len = (str.length << 2) + 1;
        ret = stackAlloc(len);
        stringToUTF8(str, ret, len);
      }
      return ret;
    },
    'array': function(arr) {
      var ret = stackAlloc(arr.length);
      writeArrayToMemory(arr, ret);
      return ret;
    }
  };

  function convertReturnValue(ret) {
    if (returnType === 'string') return UTF8ToString(ret);
    if (returnType === 'boolean') return Boolean(ret);
    return ret;
  }

  var func = getCFunc(ident);
  var cArgs = [];
  var stack = 0;
  assert(returnType !== 'array', 'Return type should not be "array".');
  if (args) {
    for (var i = 0; i < args.length; i++) {
      var converter = toC[argTypes[i]];
      if (converter) {
        if (stack === 0) stack = stackSave();
        cArgs[i] = converter(args[i]);
      } else {
        cArgs[i] = args[i];
      }
    }
  }
  var ret = func.apply(null, cArgs);

  ret = convertReturnValue(ret);
  if (stack !== 0) stackRestore(stack);
  return ret;
}

/** @param {string=} returnType
    @param {Array=} argTypes
    @param {Object=} opts */
function cwrap(ident, returnType, argTypes, opts) {
  return function() {
    return ccall(ident, returnType, argTypes, arguments, opts);
  }
}

// We used to include malloc/free by default in the past. Show a helpful error in
// builds with assertions.

var ALLOC_NORMAL = 0; // Tries to use _malloc()
var ALLOC_STACK = 1; // Lives for the duration of the current function call

// allocate(): This is for internal use. You can use it yourself as well, but the interface
//             is a little tricky (see docs right below). The reason is that it is optimized
//             for multiple syntaxes to save space in generated code. So you should
//             normally not use allocate(), and instead allocate memory using _malloc(),
//             initialize it with setValue(), and so forth.
// @slab: An array of data.
// @allocator: How to allocate memory, see ALLOC_*
/** @type {function((Uint8Array|Array<number>), number)} */
function allocate(slab, allocator) {
  var ret;
  assert(typeof allocator === 'number', 'allocate no longer takes a type argument')
  assert(typeof slab !== 'number', 'allocate no longer takes a number as arg0')

  if (allocator == ALLOC_STACK) {
    ret = stackAlloc(slab.length);
  } else {
    ret = _malloc(slab.length);
  }

  if (slab.subarray || slab.slice) {
    HEAPU8.set(/** @type {!Uint8Array} */(slab), ret);
  } else {
    HEAPU8.set(new Uint8Array(slab), ret);
  }
  return ret;
}

// include: runtime_strings.js


// runtime_strings.js: Strings related runtime functions that are part of both MINIMAL_RUNTIME and regular runtime.

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
// a copy of that string as a Javascript String object.

var UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : undefined;

/**
 * @param {number} idx
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ArrayToString(heap, idx, maxBytesToRead) {
  var endIdx = idx + maxBytesToRead;
  var endPtr = idx;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  // (As a tiny code save trick, compare endPtr against endIdx using a negation, so that undefined means Infinity)
  while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr;

  if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
    return UTF8Decoder.decode(heap.subarray(idx, endPtr));
  } else {
    var str = '';
    // If building with TextDecoder, we have already computed the string length above, so test loop end condition against that
    while (idx < endPtr) {
      // For UTF8 byte structure, see:
      // http://en.wikipedia.org/wiki/UTF-8#Description
      // https://www.ietf.org/rfc/rfc2279.txt
      // https://tools.ietf.org/html/rfc3629
      var u0 = heap[idx++];
      if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
      var u1 = heap[idx++] & 63;
      if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
      var u2 = heap[idx++] & 63;
      if ((u0 & 0xF0) == 0xE0) {
        u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
      } else {
        if ((u0 & 0xF8) != 0xF0) warnOnce('Invalid UTF-8 leading byte 0x' + u0.toString(16) + ' encountered when deserializing a UTF-8 string on the asm.js/wasm heap to a JS string!');
        u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heap[idx++] & 63);
      }

      if (u0 < 0x10000) {
        str += String.fromCharCode(u0);
      } else {
        var ch = u0 - 0x10000;
        str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
      }
    }
  }
  return str;
}

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns a
// copy of that string as a Javascript String object.
// maxBytesToRead: an optional length that specifies the maximum number of bytes to read. You can omit
//                 this parameter to scan the string until the first \0 byte. If maxBytesToRead is
//                 passed, and the string at [ptr, ptr+maxBytesToReadr[ contains a null byte in the
//                 middle, then the string will cut short at that byte index (i.e. maxBytesToRead will
//                 not produce a string of exact length [ptr, ptr+maxBytesToRead[)
//                 N.B. mixing frequent uses of UTF8ToString() with and without maxBytesToRead may
//                 throw JS JIT optimizations off, so it is worth to consider consistently using one
//                 style or the other.
/**
 * @param {number} ptr
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ToString(ptr, maxBytesToRead) {
  return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
}

// Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
// encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   heap: the array to copy to. Each index in this array is assumed to be one 8-byte element.
//   outIdx: The starting offset in the array to begin the copying.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array.
//                    This count should include the null terminator,
//                    i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
//                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
  if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
    return 0;

  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) {
      var u1 = str.charCodeAt(++i);
      u = 0x10000 + ((u & 0x3FF) << 10) | (u1 & 0x3FF);
    }
    if (u <= 0x7F) {
      if (outIdx >= endIdx) break;
      heap[outIdx++] = u;
    } else if (u <= 0x7FF) {
      if (outIdx + 1 >= endIdx) break;
      heap[outIdx++] = 0xC0 | (u >> 6);
      heap[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0xFFFF) {
      if (outIdx + 2 >= endIdx) break;
      heap[outIdx++] = 0xE0 | (u >> 12);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    } else {
      if (outIdx + 3 >= endIdx) break;
      if (u >= 0x200000) warnOnce('Invalid Unicode code point 0x' + u.toString(16) + ' encountered when serializing a JS string to an UTF-8 string on the asm.js/wasm heap! (Valid unicode code points should be in range 0-0x1FFFFF).');
      heap[outIdx++] = 0xF0 | (u >> 18);
      heap[outIdx++] = 0x80 | ((u >> 12) & 63);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    }
  }
  // Null-terminate the pointer to the buffer.
  heap[outIdx] = 0;
  return outIdx - startIdx;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8(str, outPtr, maxBytesToWrite) {
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.
function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) ++len;
    else if (u <= 0x7FF) len += 2;
    else if (u <= 0xFFFF) len += 3;
    else len += 4;
  }
  return len;
}

// end include: runtime_strings.js
// include: runtime_strings_extra.js


// runtime_strings_extra.js: Strings related runtime functions that are available only in regular runtime.

// Given a pointer 'ptr' to a null-terminated ASCII-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function AsciiToString(ptr) {
  var str = '';
  while (1) {
    var ch = HEAPU8[((ptr++)>>0)];
    if (!ch) return str;
    str += String.fromCharCode(ch);
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in ASCII form. The copy will require at most str.length+1 bytes of space in the HEAP.

function stringToAscii(str, outPtr) {
  return writeAsciiToMemory(str, outPtr, false);
}

// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

var UTF16Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-16le') : undefined;

function UTF16ToString(ptr, maxBytesToRead) {
  assert(ptr % 2 == 0, 'Pointer passed to UTF16ToString must be aligned to two bytes!');
  var endPtr = ptr;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  var idx = endPtr >> 1;
  var maxIdx = idx + maxBytesToRead / 2;
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
  endPtr = idx << 1;

  if (endPtr - ptr > 32 && UTF16Decoder) {
    return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
  } else {
    var str = '';

    // If maxBytesToRead is not passed explicitly, it will be undefined, and the for-loop's condition
    // will always evaluate to true. The loop is then terminated on the first null char.
    for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
      var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
      if (codeUnit == 0) break;
      // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
      str += String.fromCharCode(codeUnit);
    }

    return str;
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16 form. The copy will require at most str.length*4+2 bytes of space in the HEAP.
// Use the function lengthBytesUTF16() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=2, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<2 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF16(str, outPtr, maxBytesToWrite) {
  assert(outPtr % 2 == 0, 'Pointer passed to stringToUTF16 must be aligned to two bytes!');
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 2) return 0;
  maxBytesToWrite -= 2; // Null terminator.
  var startPtr = outPtr;
  var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;
  for (var i = 0; i < numCharsToWrite; ++i) {
    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    HEAP16[((outPtr)>>1)]=codeUnit;
    outPtr += 2;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP16[((outPtr)>>1)]=0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF16(str) {
  return str.length*2;
}

function UTF32ToString(ptr, maxBytesToRead) {
  assert(ptr % 4 == 0, 'Pointer passed to UTF32ToString must be aligned to four bytes!');
  var i = 0;

  var str = '';
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(i >= maxBytesToRead / 4)) {
    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
    if (utf32 == 0) break;
    ++i;
    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    if (utf32 >= 0x10000) {
      var ch = utf32 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
  return str;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32 form. The copy will require at most str.length*4+4 bytes of space in the HEAP.
// Use the function lengthBytesUTF32() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=4, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<4 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF32(str, outPtr, maxBytesToWrite) {
  assert(outPtr % 4 == 0, 'Pointer passed to stringToUTF32 must be aligned to four bytes!');
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 4) return 0;
  var startPtr = outPtr;
  var endPtr = startPtr + maxBytesToWrite - 4;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
      var trailSurrogate = str.charCodeAt(++i);
      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
    }
    HEAP32[((outPtr)>>2)]=codeUnit;
    outPtr += 4;
    if (outPtr + 4 > endPtr) break;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP32[((outPtr)>>2)]=0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF32(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i);
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.
    len += 4;
  }

  return len;
}

// Allocate heap space for a JS string, and write it there.
// It is the responsibility of the caller to free() that memory.
function allocateUTF8(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = _malloc(size);
  if (ret) stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Allocate stack space for a JS string, and write it there.
function allocateUTF8OnStack(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = stackAlloc(size);
  stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Deprecated: This function should not be called because it is unsafe and does not provide
// a maximum length limit of how many bytes it is allowed to write. Prefer calling the
// function stringToUTF8Array() instead, which takes in a maximum length that can be used
// to be secure from out of bounds writes.
/** @deprecated
    @param {boolean=} dontAddNull */
function writeStringToMemory(string, buffer, dontAddNull) {
  warnOnce('writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!');

  var /** @type {number} */ lastChar, /** @type {number} */ end;
  if (dontAddNull) {
    // stringToUTF8Array always appends null. If we don't want to do that, remember the
    // character that existed at the location where the null will be placed, and restore
    // that after the write (below).
    end = buffer + lengthBytesUTF8(string);
    lastChar = HEAP8[end];
  }
  stringToUTF8(string, buffer, Infinity);
  if (dontAddNull) HEAP8[end] = lastChar; // Restore the value under the null character.
}

function writeArrayToMemory(array, buffer) {
  assert(array.length >= 0, 'writeArrayToMemory array must have a length (should be an array or typed array)')
  HEAP8.set(array, buffer);
}

/** @param {boolean=} dontAddNull */
function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; ++i) {
    assert(str.charCodeAt(i) === str.charCodeAt(i)&0xff);
    HEAP8[((buffer++)>>0)]=str.charCodeAt(i);
  }
  // Null-terminate the pointer to the HEAP.
  if (!dontAddNull) HEAP8[((buffer)>>0)]=0;
}

// end include: runtime_strings_extra.js
// Memory management

function alignUp(x, multiple) {
  if (x % multiple > 0) {
    x += multiple - (x % multiple);
  }
  return x;
}

var HEAP,
/** @type {ArrayBuffer} */
  buffer,
/** @type {Int8Array} */
  HEAP8,
/** @type {Uint8Array} */
  HEAPU8,
/** @type {Int16Array} */
  HEAP16,
/** @type {Uint16Array} */
  HEAPU16,
/** @type {Int32Array} */
  HEAP32,
/** @type {Uint32Array} */
  HEAPU32,
/** @type {Float32Array} */
  HEAPF32,
/** @type {Float64Array} */
  HEAPF64;

function updateGlobalBufferAndViews(buf) {
  buffer = buf;
  Module['HEAP8'] = HEAP8 = new Int8Array(buf);
  Module['HEAP16'] = HEAP16 = new Int16Array(buf);
  Module['HEAP32'] = HEAP32 = new Int32Array(buf);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(buf);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(buf);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(buf);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(buf);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(buf);
}

var TOTAL_STACK = 5242880;
if (Module['TOTAL_STACK']) assert(TOTAL_STACK === Module['TOTAL_STACK'], 'the stack size can no longer be determined at runtime')

var INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 16777216;if (!Object.getOwnPropertyDescriptor(Module, 'INITIAL_MEMORY')) Object.defineProperty(Module, 'INITIAL_MEMORY', { configurable: true, get: function() { abort('Module.INITIAL_MEMORY has been replaced with plain INITIAL_MEMORY (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });

assert(INITIAL_MEMORY >= TOTAL_STACK, 'INITIAL_MEMORY should be larger than TOTAL_STACK, was ' + INITIAL_MEMORY + '! (TOTAL_STACK=' + TOTAL_STACK + ')');

// check for full engine support (use string 'subarray' to avoid closure compiler confusion)
assert(typeof Int32Array !== 'undefined' && typeof Float64Array !== 'undefined' && Int32Array.prototype.subarray !== undefined && Int32Array.prototype.set !== undefined,
       'JS engine does not provide full typed array support');

// If memory is defined in wasm, the user can't provide it.
assert(!Module['wasmMemory'], 'Use of `wasmMemory` detected.  Use -s IMPORTED_MEMORY to define wasmMemory externally');
assert(INITIAL_MEMORY == 16777216, 'Detected runtime INITIAL_MEMORY setting.  Use -s IMPORTED_MEMORY to define wasmMemory dynamically');

// include: runtime_init_table.js
// In regular non-RELOCATABLE mode the table is exported
// from the wasm module and this will be assigned once
// the exports are available.
var wasmTable;

// end include: runtime_init_table.js
// include: runtime_stack_check.js


// Initializes the stack cookie. Called at the startup of main and at the startup of each thread in pthreads mode.
function writeStackCookie() {
  var max = _emscripten_stack_get_end();
  assert((max & 3) == 0);
  // The stack grows downwards
  HEAPU32[(max >> 2)+1] = 0x2135467;
  HEAPU32[(max >> 2)+2] = 0x89BACDFE;
  // Also test the global address 0 for integrity.
  HEAP32[0] = 0x63736d65; /* 'emsc' */
}

function checkStackCookie() {
  if (ABORT) return;
  var max = _emscripten_stack_get_end();
  var cookie1 = HEAPU32[(max >> 2)+1];
  var cookie2 = HEAPU32[(max >> 2)+2];
  if (cookie1 != 0x2135467 || cookie2 != 0x89BACDFE) {
    abort('Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x' + cookie2.toString(16) + ' ' + cookie1.toString(16));
  }
  // Also test the global address 0 for integrity.
  if (HEAP32[0] !== 0x63736d65 /* 'emsc' */) abort('Runtime error: The application has corrupted its heap memory area (address zero)!');
}

// end include: runtime_stack_check.js
// include: runtime_assertions.js


// Endianness check (note: assumes compiler arch was little-endian)
(function() {
  var h16 = new Int16Array(1);
  var h8 = new Int8Array(h16.buffer);
  h16[0] = 0x6373;
  if (h8[0] !== 0x73 || h8[1] !== 0x63) throw 'Runtime error: expected the system to be little-endian!';
})();

function abortFnPtrError(ptr, sig) {
	abort("Invalid function pointer " + ptr + " called with signature '" + sig + "'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this). Build with ASSERTIONS=2 for more info.");
}

// end include: runtime_assertions.js
var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATMAIN__    = []; // functions called when main() is to be run
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the main() is called

var runtimeInitialized = false;
var runtimeExited = false;

function preRun() {

  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
  checkStackCookie();
  assert(!runtimeInitialized);
  runtimeInitialized = true;
  
  callRuntimeCallbacks(__ATINIT__);
}

function preMain() {
  checkStackCookie();
  
  callRuntimeCallbacks(__ATMAIN__);
}

function exitRuntime() {
  checkStackCookie();
  runtimeExited = true;
}

function postRun() {
  checkStackCookie();

  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}

function addOnPreMain(cb) {
  __ATMAIN__.unshift(cb);
}

function addOnExit(cb) {
}

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}

// include: runtime_math.js


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc

assert(Math.imul, 'This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.fround, 'This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.clz32, 'This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.trunc, 'This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');

// end include: runtime_math.js
// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// Module.preRun (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled
var runDependencyTracking = {};

function getUniqueRunDependency(id) {
  var orig = id;
  while (1) {
    if (!runDependencyTracking[id]) return id;
    id = orig + Math.random();
  }
}

function addRunDependency(id) {
  runDependencies++;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (id) {
    assert(!runDependencyTracking[id]);
    runDependencyTracking[id] = 1;
    if (runDependencyWatcher === null && typeof setInterval !== 'undefined') {
      // Check for missing dependencies every few seconds
      runDependencyWatcher = setInterval(function() {
        if (ABORT) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
          return;
        }
        var shown = false;
        for (var dep in runDependencyTracking) {
          if (!shown) {
            shown = true;
            err('still waiting on run dependencies:');
          }
          err('dependency: ' + dep);
        }
        if (shown) {
          err('(end of list)');
        }
      }, 10000);
    }
  } else {
    err('warning: run dependency added without ID');
  }
}

function removeRunDependency(id) {
  runDependencies--;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (id) {
    assert(runDependencyTracking[id]);
    delete runDependencyTracking[id];
  } else {
    err('warning: run dependency removed without ID');
  }
  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}

Module["preloadedImages"] = {}; // maps url to image data
Module["preloadedAudios"] = {}; // maps url to audio data

/** @param {string|number=} what */
function abort(what) {
  if (Module['onAbort']) {
    Module['onAbort'](what);
  }

  what += '';
  err(what);

  ABORT = true;
  EXITSTATUS = 1;

  var output = 'abort(' + what + ') at ' + stackTrace();
  what = output;

  // Use a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.
  var e = new WebAssembly.RuntimeError(what);

  readyPromiseReject(e);
  // Throw the error whether or not MODULARIZE is set because abort is used
  // in code paths apart from instantiation where an exception is expected
  // to be thrown when abort is called.
  throw e;
}

// {{MEM_INITIALIZER}}

// include: memoryprofiler.js


// end include: memoryprofiler.js
// show errors on likely calls to FS when it was not included
var FS = {
  error: function() {
    abort('Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with  -s FORCE_FILESYSTEM=1');
  },
  init: function() { FS.error() },
  createDataFile: function() { FS.error() },
  createPreloadedFile: function() { FS.error() },
  createLazyFile: function() { FS.error() },
  open: function() { FS.error() },
  mkdev: function() { FS.error() },
  registerDevice: function() { FS.error() },
  analyzePath: function() { FS.error() },
  loadFilesFromDB: function() { FS.error() },

  ErrnoError: function ErrnoError() { FS.error() },
};
Module['FS_createDataFile'] = FS.createDataFile;
Module['FS_createPreloadedFile'] = FS.createPreloadedFile;

// include: URIUtils.js


function hasPrefix(str, prefix) {
  return String.prototype.startsWith ?
      str.startsWith(prefix) :
      str.indexOf(prefix) === 0;
}

// Prefix of data URIs emitted by SINGLE_FILE and related options.
var dataURIPrefix = 'data:application/octet-stream;base64,';

// Indicates whether filename is a base64 data URI.
function isDataURI(filename) {
  return hasPrefix(filename, dataURIPrefix);
}

var fileURIPrefix = "file://";

// Indicates whether filename is delivered via file protocol (as opposed to http/https)
function isFileURI(filename) {
  return hasPrefix(filename, fileURIPrefix);
}

// end include: URIUtils.js
function createExportWrapper(name, fixedasm) {
  return function() {
    var displayName = name;
    var asm = fixedasm;
    if (!fixedasm) {
      asm = Module['asm'];
    }
    assert(runtimeInitialized, 'native function `' + displayName + '` called before runtime initialization');
    assert(!runtimeExited, 'native function `' + displayName + '` called after runtime exit (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    if (!asm[name]) {
      assert(asm[name], 'exported native function `' + displayName + '` not found');
    }
    return asm[name].apply(null, arguments);
  };
}

var wasmBinaryFile = 'data:application/octet-stream;base64,AGFzbQEAAAABpIOAgAA5YAF/AX9gAn9/AX9gAAF/YAJ/fwBgAX8AYAN/f38Bf2ADf39/AGAEf39/fwBgBX9/f39/AGAAAGAEf39/fwF/YAZ/f39/f38AYAF8AXxgAAF8YAV/f398fABgBH9/fHwAYAJ/fAF8YAN/f3wAYAV/f39/fwF/YAF8AX9gA39+fwF+YAF8AX5gAnx8AXxgBX9/f398AGAEf35+fwBgBX9/fHx8AX9gBn98f39/fwF/YAJ+fwF/YAR/fHx8AXxgAnx/AXxgB39/f39/f38AYAh/f39/f39/fwBgB39/f39/f3wAYAZ/f39/f3wAYAd/f39/f3x8AGAEf39/fABgAn98AGAHf39/f39/fwF/YAR/f398AX9gBX9/f3x8AX9gA39/fAF/YAd/f3x8fHx8AX9gA398fwF/YAR/fHx8AX9gBX98fHx8AX9gCH98fHx8fHx8AX9gA35/fwF/YAJ8fwF/YAx8fHx8fHx8fHx8fHwBf2ABfwF+YAR/f35/AX5gAX8BfGACf38BfGAEf398fAF8YAJ+fgF8YAN8fH8BfGADfHx8AXwC04WAgAAcA2VudhFfX2N4YV9iZWdpbl9jYXRjaAAAA2VudhhfX2N4YV9hbGxvY2F0ZV9leGNlcHRpb24AAANlbnYLX19jeGFfdGhyb3cABgNlbnYVX2VtYmluZF9yZWdpc3Rlcl92b2lkAAMDZW52FV9lbWJpbmRfcmVnaXN0ZXJfYm9vbAAIA2VudhtfZW1iaW5kX3JlZ2lzdGVyX3N0ZF9zdHJpbmcAAwNlbnYcX2VtYmluZF9yZWdpc3Rlcl9zdGRfd3N0cmluZwAGA2VudhZfZW1iaW5kX3JlZ2lzdGVyX2VtdmFsAAMDZW52GF9lbWJpbmRfcmVnaXN0ZXJfaW50ZWdlcgAIA2VudhZfZW1iaW5kX3JlZ2lzdGVyX2Zsb2F0AAYDZW52HF9lbWJpbmRfcmVnaXN0ZXJfbWVtb3J5X3ZpZXcABgNlbnYKaW52b2tlX3ZpaQAGA2VudhtfX2N4YV9maW5kX21hdGNoaW5nX2NhdGNoXzMAAANlbnYLZ2V0VGVtcFJldDAAAgNlbnYIaW52b2tlX3YABANlbnYbX19jeGFfZmluZF9tYXRjaGluZ19jYXRjaF8yAAIDZW52EV9fcmVzdW1lRXhjZXB0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IFYgXxCwBCBWKAIAIWAgWSBgNgIAQZABIWEgBiBhaiFiIGIhY0HIACFkIAYgZGohZSBlIWYgYygCACFnIGYgZzYCACAGKAJ8IWggBigCWCFpIGggaWshaiAGKAJQIWsgBigCSCFsIBMgayBsIGoQsQQgBigCXCFtIAYgbTYCfAtBACFuIAYoAnwhbyBvIXAgbiFxIHAgcUohckEBIXMgciBzcSF0AkAgdEUNAEGYASF1IAYgdWohdiB2IXdBwAAheCAGIHhqIXkgeSF6IAYoAogBIXsgBigCaCF8IAYoAogBIX0gBigCbCF+QdAAIX8gfiB/bCGAASB9IIABaiGBASATIHsgfCCBARCyBCB3KAIAIYIBIHogggE2AgBB4AAhgwEgBiCDAWohhAEghAEhhQFBOCGGASAGIIYBaiGHASCHASGIASCFASgCACGJASCIASCJATYCACAGKAKIASGKASAGKAJAIYsBIAYoAjghjAEgiwEgjAEgigEQswQaCwwBC0GYASGNASAGII0BaiGOASCOASGPAUEYIZABIAYgkAFqIZEBIJEBIZIBQSAhkwEgBiCTAWohlAEglAEhlQEgExCPAiGWASAGIJYBNgI0IBMQjAIhlwEgBigCfCGYASCXASCYAWohmQEgEyCZARDxAiGaASAGKAKIASGbASATKAIAIZwBIJsBIJwBayGdAUHQACGeASCdASCeAW0hnwEgBigCNCGgASCVASCaASCfASCgARDyAhogjwEoAgAhoQEgkgEgoQE2AgBBkAEhogEgBiCiAWohowEgowEhpAFBECGlASAGIKUBaiGmASCmASGnASCkASgCACGoASCnASCoATYCAEEgIakBIAYgqQFqIaoBIKoBIasBIAYoAhghrAEgBigCECGtASCrASCsASCtARC0BEEgIa4BIAYgrgFqIa8BIK8BIbABIAYoAogBIbEBIBMgsAEgsQEQtQQhsgFBICGzASAGILMBaiG0ASC0ASG1ASAGILIBNgKIASC1ARD0AhoLCyAGKAKIASG2ASATILYBEE0htwEgBiC3ATYCqAEgBigCqAEhuAFBsAEhuQEgBiC5AWohugEgugEkACC4AQ8LQgEGfyMAIQFBECECIAEgAmshAyADJAAgAyAANgIMIAMoAgwhBCAEEOsDIAQQ7AMaQRAhBSADIAVqIQYgBiQAIAQP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AkACQCABQf//7/4DSw0AIAFBgICA8gNJDQJBfyECQQEhAQwBCyAAEOEHIQACQAJAIAFB///L/wNLDQACQCABQf//l/8DSw0AIAAgAKBEAAAAAAAA8L+gIABEAAAAAAAAAECgoyEAQQAhAUEAIQIMAwsgAEQAAAAAAADwv6AgAEQAAAAAAADwP6CjIQBBASECDAELAkAgAUH//42ABEsNACAARAAAAAAAAPi/oCAARAAAAAAAAPg/okQAAAAAAADwP6CjIQBBAiECDAELRAAAAAAAAPC/IACjIQBBAyECC0EAIQELIAAgAKIiBCAEoiIFIAUgBSAFIAVEL2xqLES0or+iRJr93lIt3q2/oKJEbZp0r/Kws7+gokRxFiP+xnG8v6CiRMTrmJmZmcm/oKIhBiAEIAUgBSAFIAUgBUQR2iLjOq2QP6JE6w12JEt7qT+gokRRPdCgZg2xP6CiRG4gTMXNRbc/oKJE/4MAkiRJwj+gokQNVVVVVVXVP6CiIQUCQCABRQ0AIAAgACAGIAWgoqEPCyACQQN0IgFBkDRqKwMAIAAgBiAFoKIgAUGwNGorAwChIAChoSIAIACaIANCf1UbIQALIAAPCyAARBgtRFT7Ifk/IACmIAAQ5QdC////////////AINCgICAgICAgPj/AFYbCwUAIAC9CwUAIACfC8UCAwN/A34BfCMAQSBrIgIkACAAvUL///////////8AgyIFIAG9Qv///////////wCDIgYgBSAGVBsiB78hAAJAIAdCNIinIgNB/w9GDQAgBSAGIAUgBlYbIgW/IQECQCAHUA0AIAVCNIinIgRB/w9GDQACQCAEIANrQcEASA0AIAEgAKAhAAwCCwJAAkAgBEH+C0kNACAARAAAAAAAADAUoiEAIAFEAAAAAAAAMBSiIQFEAAAAAAAAsGshCAwBC0QAAAAAAADwPyEIIANBvARLDQAgAEQAAAAAAACwa6IhACABRAAAAAAAALBroiEBRAAAAAAAADAUIQgLIAJBGGogAkEQaiABEOgHIAJBCGogAiAAEOgHIAggAisDACACKwMQoCACKwMIoCACKwMYoBDmB6IhAAwBCyABIQALIAJBIGokACAAC0UBAnwgACACIAKiIgM5AwAgASACIAJEAAAAAgAAoEGiIgQgAiAEoaAiBKEiAiACoiAEIASiIAOhIAQgBKAgAqKgoDkDAAuSAQEDfEQAAAAAAADwPyAAIACiIgJEAAAAAAAA4D+iIgOhIgREAAAAAAAA8D8gBKEgA6EgAiACIAIgAkSQFcsZoAH6PqJEd1HBFmzBVr+gokRMVVVVVVWlP6CiIAIgAqIiAyADoiACIAJE1DiIvun6qL2iRMSxtL2e7iE+oKJErVKcgE9+kr6goqCiIAAgAaKhoKALBQAgAJwLzwEBAn8jAEEQayIBJAACQAJAIAC9QiCIp0H/////B3EiAkH7w6T/A0sNACACQYCAwPIDSQ0BIABEAAAAAAAAAABBABDfByEADAELAkAgAkGAgMD/B0kNACAAIAChIQAMAQsCQAJAAkACQCAAIAEQ3gdBA3EOAwABAgMLIAErAwAgASsDCEEBEN8HIQAMAwsgASsDACABKwMIEOkHIQAMAgsgASsDACABKwMIQQEQ3weaIQAMAQsgASsDACABKwMIEOkHmiEACyABQRBqJAAgAAsdAAJAQQAoApRKDQBBACABNgKYSkEAIAA2ApRKCwsIABDuB0EASgsEABATCxYAAkAgAkUNACAAIAEgAhCeCRoLIAALBgBBnMoACxYAAkAgAA0AQQAPCxDwByAANgIAQX8L2AIBB38jAEEgayIDJAAgAyAAKAIcIgQ2AhAgACgCFCEFIAMgAjYCHCADIAE2AhggAyAFIARrIgE2AhQgASACaiEGQQIhByADQRBqIQECQAJAAkACQCAAKAI8IANBEGpBAiADQQxqEBUQ8QcNAANAIAYgAygCDCIERg0CIARBf0wNAyABIAQgASgCBCIISyIFQQN0aiIJIAkoAgAgBCAIQQAgBRtrIghqNgIAIAFBDEEEIAUbaiIJIAkoAgAgCGs2AgAgBiAEayEGIAAoAjwgAUEIaiABIAUbIgEgByAFayIHIANBDGoQFRDxB0UNAAsLIAZBf0cNAQsgACAAKAIsIgE2AhwgACABNgIUIAAgASAAKAIwajYCECACIQQMAQtBACEEIABBADYCHCAAQgA3AxAgACAAKAIAQSByNgIAIAdBAkYNACACIAEoAgRrIQQLIANBIGokACAECwQAQQALBABCAAsCAAsCAAsNAEGo0gAQ9QdBsNIACwkAQajSABD2Bwu2AQECfwJAAkAgAEUNAAJAIAAoAkxBf0oNACAAEPoHDwsgABCkCSEBIAAQ+gchAiABRQ0BIAAQpQkgAg8LQQAhAgJAQQAoAphIRQ0AQQAoAphIEPkHIQILAkAQ9wcoAgAiAEUNAANAQQAhAQJAIAAoAkxBAEgNACAAEKQJIQELAkAgACgCFCAAKAIcTQ0AIAAQ+gcgAnIhAgsCQCABRQ0AIAAQpQkLIAAoAjgiAA0ACwsQ+AcLIAILawECfwJAIAAoAhQgACgCHE0NACAAQQBBACAAKAIkEQUAGiAAKAIUDQBBfw8LAkAgACgCBCIBIAAoAggiAk8NACAAIAEgAmusQQEgACgCKBEUABoLIABBADYCHCAAQgA3AxAgAEIANwIEQQALCgAgAEFQakEKSQtTAQF+AkACQCADQcAAcUUNACABIANBQGqthiECQgAhAQwBCyADRQ0AIAFBwAAgA2utiCACIAOtIgSGhCECIAEgBIYhAQsgACABNwMAIAAgAjcDCAtTAQF+AkACQCADQcAAcUUNACACIANBQGqtiCEBQgAhAgwBCyADRQ0AIAJBwAAgA2uthiABIAOtIgSIhCEBIAIgBIghAgsgACABNwMAIAAgAjcDCAvqAwICfwJ+IwBBIGsiAiQAAkACQCABQv///////////wCDIgRCgICAgICAwP9DfCAEQoCAgICAgMCAvH98Wg0AIABCPIggAUIEhoQhBAJAIABC//////////8PgyIAQoGAgICAgICACFQNACAEQoGAgICAgICAwAB8IQUMAgsgBEKAgICAgICAgMAAfCEFIABCgICAgICAgIAIhUIAUg0BIAUgBEIBg3whBQwBCwJAIABQIARCgICAgICAwP//AFQgBEKAgICAgIDA//8AURsNACAAQjyIIAFCBIaEQv////////8Dg0KAgICAgICA/P8AhCEFDAELQoCAgICAgID4/wAhBSAEQv///////7//wwBWDQBCACEFIARCMIinIgNBkfcASQ0AIAJBEGogACABQv///////z+DQoCAgICAgMAAhCIEIANB/4h/ahD8ByACIAAgBEGB+AAgA2sQ/QcgAikDACIEQjyIIAJBCGopAwBCBIaEIQUCQCAEQv//////////D4MgAikDECACQRBqQQhqKQMAhEIAUq2EIgRCgYCAgICAgIAIVA0AIAVCAXwhBQwBCyAEQoCAgICAgICACIVCAFINACAFQgGDIAV8IQULIAJBIGokACAFIAFCgICAgICAgICAf4OEvwsGAEGcyAAL5wEBAn8gAkEARyEDAkACQAJAIAJFDQAgAEEDcUUNACABQf8BcSEEA0AgAC0AACAERg0CIABBAWohACACQX9qIgJBAEchAyACRQ0BIABBA3ENAAsLIANFDQELAkAgAC0AACABQf8BcUYNACACQQRJDQAgAUH/AXFBgYKECGwhBANAIAAoAgAgBHMiA0F/cyADQf/9+3dqcUGAgYKEeHENASAAQQRqIQAgAkF8aiICQQNLDQALCyACRQ0AIAFB/wFxIQMDQAJAIAAtAAAgA0cNACAADwsgAEEBaiEAIAJBf2oiAg0ACwtBAAtZAQJ/IAEtAAAhAgJAIAAtAAAiA0UNACADIAJB/wFxRw0AA0AgAS0AASECIAAtAAEiA0UNASABQQFqIQEgAEEBaiEAIAMgAkH/AXFGDQALCyADIAJB/wFxawukAgEBf0EBIQMCQAJAIABFDQAgAUH/AE0NAQJAAkAQ/wcoAqwBKAIADQAgAUGAf3FBgL8DRg0DEPAHQRk2AgAMAQsCQCABQf8PSw0AIAAgAUE/cUGAAXI6AAEgACABQQZ2QcABcjoAAEECDwsCQAJAIAFBgLADSQ0AIAFBgEBxQYDAA0cNAQsgACABQT9xQYABcjoAAiAAIAFBDHZB4AFyOgAAIAAgAUEGdkE/cUGAAXI6AAFBAw8LAkAgAUGAgHxqQf//P0sNACAAIAFBP3FBgAFyOgADIAAgAUESdkHwAXI6AAAgACABQQZ2QT9xQYABcjoAAiAAIAFBDHZBP3FBgAFyOgABQQQPCxDwB0EZNgIAC0F/IQMLIAMPCyAAIAE6AABBAQsVAAJAIAANAEEADwsgACABQQAQgggLjwECAX8BfgJAIAC9IgNCNIinQf8PcSICQf8PRg0AAkAgAg0AAkACQCAARAAAAAAAAAAAYg0AQQAhAgwBCyAARAAAAAAAAPBDoiABEIQIIQAgASgCAEFAaiECCyABIAI2AgAgAA8LIAEgAkGCeGo2AgAgA0L/////////h4B/g0KAgICAgICA8D+EvyEACyAAC44DAQN/IwBB0AFrIgUkACAFIAI2AswBQQAhAiAFQaABakEAQSgQnwkaIAUgBSgCzAE2AsgBAkACQEEAIAEgBUHIAWogBUHQAGogBUGgAWogAyAEEIYIQQBODQBBfyEBDAELAkAgACgCTEEASA0AIAAQpAkhAgsgACgCACEGAkAgACwASkEASg0AIAAgBkFfcTYCAAsgBkEgcSEGAkACQCAAKAIwRQ0AIAAgASAFQcgBaiAFQdAAaiAFQaABaiADIAQQhgghAQwBCyAAQdAANgIwIAAgBUHQAGo2AhAgACAFNgIcIAAgBTYCFCAAKAIsIQcgACAFNgIsIAAgASAFQcgBaiAFQdAAaiAFQaABaiADIAQQhgghASAHRQ0AIABBAEEAIAAoAiQRBQAaIABBADYCMCAAIAc2AiwgAEEANgIcIABBADYCECAAKAIUIQMgAEEANgIUIAFBfyADGyEBCyAAIAAoAgAiAyAGcjYCAEF/IAEgA0EgcRshASACRQ0AIAAQpQkLIAVB0AFqJAAgAQukEgIPfwF+IwBB0ABrIgckACAHIAE2AkwgB0E3aiEIIAdBOGohCUEAIQpBACELQQAhAQJAA0ACQCALQQBIDQACQCABQf////8HIAtrTA0AEPAHQT02AgBBfyELDAELIAEgC2ohCwsgBygCTCIMIQECQAJAAkACQAJAIAwtAAAiDUUNAANAAkACQAJAIA1B/wFxIg0NACABIQ0MAQsgDUElRw0BIAEhDQNAIAEtAAFBJUcNASAHIAFBAmoiDjYCTCANQQFqIQ0gAS0AAiEPIA4hASAPQSVGDQALCyANIAxrIQECQCAARQ0AIAAgDCABEIcICyABDQcgBygCTCwAARD7ByEBIAcoAkwhDQJAAkAgAUUNACANLQACQSRHDQAgDUEDaiEBIA0sAAFBUGohEEEBIQoMAQsgDUEBaiEBQX8hEAsgByABNgJMQQAhEQJAAkAgASwAACIPQWBqIg5BH00NACABIQ0MAQtBACERIAEhDUEBIA50Ig5BidEEcUUNAANAIAcgAUEBaiINNgJMIA4gEXIhESABLAABIg9BYGoiDkEgTw0BIA0hAUEBIA50Ig5BidEEcQ0ACwsCQAJAIA9BKkcNAAJAAkAgDSwAARD7B0UNACAHKAJMIg0tAAJBJEcNACANLAABQQJ0IARqQcB+akEKNgIAIA1BA2ohASANLAABQQN0IANqQYB9aigCACESQQEhCgwBCyAKDQZBACEKQQAhEgJAIABFDQAgAiACKAIAIgFBBGo2AgAgASgCACESCyAHKAJMQQFqIQELIAcgATYCTCASQX9KDQFBACASayESIBFBgMAAciERDAELIAdBzABqEIgIIhJBAEgNBCAHKAJMIQELQX8hEwJAIAEtAABBLkcNAAJAIAEtAAFBKkcNAAJAIAEsAAIQ+wdFDQAgBygCTCIBLQADQSRHDQAgASwAAkECdCAEakHAfmpBCjYCACABLAACQQN0IANqQYB9aigCACETIAcgAUEEaiIBNgJMDAILIAoNBQJAAkAgAA0AQQAhEwwBCyACIAIoAgAiAUEEajYCACABKAIAIRMLIAcgBygCTEECaiIBNgJMDAELIAcgAUEBajYCTCAHQcwAahCICCETIAcoAkwhAQtBACENA0AgDSEOQX8hFCABLAAAQb9/akE5Sw0JIAcgAUEBaiIPNgJMIAEsAAAhDSAPIQEgDSAOQTpsakGvNGotAAAiDUF/akEISQ0ACwJAAkACQCANQRNGDQAgDUUNCwJAIBBBAEgNACAEIBBBAnRqIA02AgAgByADIBBBA3RqKQMANwNADAILIABFDQkgB0HAAGogDSACIAYQiQggBygCTCEPDAILQX8hFCAQQX9KDQoLQQAhASAARQ0ICyARQf//e3EiFSARIBFBgMAAcRshDUEAIRRB1DQhECAJIRECQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQCAPQX9qLAAAIgFBX3EgASABQQ9xQQNGGyABIA4bIgFBqH9qDiEEFRUVFRUVFRUOFQ8GDg4OFQYVFRUVAgUDFRUJFQEVFQQACyAJIRECQCABQb9/ag4HDhULFQ4ODgALIAFB0wBGDQkMEwtBACEUQdQ0IRAgBykDQCEWDAULQQAhAQJAAkACQAJAAkACQAJAIA5B/wFxDggAAQIDBBsFBhsLIAcoAkAgCzYCAAwaCyAHKAJAIAs2AgAMGQsgBygCQCALrDcDAAwYCyAHKAJAIAs7AQAMFwsgBygCQCALOgAADBYLIAcoAkAgCzYCAAwVCyAHKAJAIAusNwMADBQLIBNBCCATQQhLGyETIA1BCHIhDUH4ACEBC0EAIRRB1DQhECAHKQNAIAkgAUEgcRCKCCEMIA1BCHFFDQMgBykDQFANAyABQQR2QdQ0aiEQQQIhFAwDC0EAIRRB1DQhECAHKQNAIAkQiwghDCANQQhxRQ0CIBMgCSAMayIBQQFqIBMgAUobIRMMAgsCQCAHKQNAIhZCf1UNACAHQgAgFn0iFjcDQEEBIRRB1DQhEAwBCwJAIA1BgBBxRQ0AQQEhFEHVNCEQDAELQdY0QdQ0IA1BAXEiFBshEAsgFiAJEIwIIQwLIA1B//97cSANIBNBf0obIQ0gBykDQCEWAkAgEw0AIBZQRQ0AQQAhEyAJIQwMDAsgEyAJIAxrIBZQaiIBIBMgAUobIRMMCwtBACEUIAcoAkAiAUHeNCABGyIMQQAgExCACCIBIAwgE2ogARshESAVIQ0gASAMayATIAEbIRMMCwsCQCATRQ0AIAcoAkAhDgwCC0EAIQEgAEEgIBJBACANEI0IDAILIAdBADYCDCAHIAcpA0A+AgggByAHQQhqNgJAQX8hEyAHQQhqIQ4LQQAhAQJAA0AgDigCACIPRQ0BAkAgB0EEaiAPEIMIIg9BAEgiDA0AIA8gEyABa0sNACAOQQRqIQ4gEyAPIAFqIgFLDQEMAgsLQX8hFCAMDQwLIABBICASIAEgDRCNCAJAIAENAEEAIQEMAQtBACEPIAcoAkAhDgNAIA4oAgAiDEUNASAHQQRqIAwQgwgiDCAPaiIPIAFKDQEgACAHQQRqIAwQhwggDkEEaiEOIA8gAUkNAAsLIABBICASIAEgDUGAwABzEI0IIBIgASASIAFKGyEBDAkLIAAgBysDQCASIBMgDSABIAURGgAhAQwICyAHIAcpA0A8ADdBASETIAghDCAJIREgFSENDAULIAcgAUEBaiIONgJMIAEtAAEhDSAOIQEMAAsACyALIRQgAA0FIApFDQNBASEBAkADQCAEIAFBAnRqKAIAIg1FDQEgAyABQQN0aiANIAIgBhCJCEEBIRQgAUEBaiIBQQpHDQAMBwsAC0EBIRQgAUEKTw0FA0AgBCABQQJ0aigCAA0BQQEhFCABQQFqIgFBCkYNBgwACwALQX8hFAwECyAJIRELIABBICAUIBEgDGsiDyATIBMgD0gbIhFqIg4gEiASIA5IGyIBIA4gDRCNCCAAIBAgFBCHCCAAQTAgASAOIA1BgIAEcxCNCCAAQTAgESAPQQAQjQggACAMIA8QhwggAEEgIAEgDiANQYDAAHMQjQgMAQsLQQAhFAsgB0HQAGokACAUCxkAAkAgAC0AAEEgcQ0AIAEgAiAAEKIJGgsLSwEDf0EAIQECQCAAKAIALAAAEPsHRQ0AA0AgACgCACICLAAAIQMgACACQQFqNgIAIAMgAUEKbGpBUGohASACLAABEPsHDQALCyABC7sCAAJAIAFBFEsNAAJAAkACQAJAAkACQAJAAkACQAJAIAFBd2oOCgABAgMEBQYHCAkKCyACIAIoAgAiAUEEajYCACAAIAEoAgA2AgAPCyACIAIoAgAiAUEEajYCACAAIAE0AgA3AwAPCyACIAIoAgAiAUEEajYCACAAIAE1AgA3AwAPCyACIAIoAgBBB2pBeHEiAUEIajYCACAAIAEpAwA3AwAPCyACIAIoAgAiAUEEajYCACAAIAEyAQA3AwAPCyACIAIoAgAiAUEEajYCACAAIAEzAQA3AwAPCyACIAIoAgAiAUEEajYCACAAIAEwAAA3AwAPCyACIAIoAgAiAUEEajYCACAAIAExAAA3AwAPCyACIAIoAgBBB2pBeHEiAUEIajYCACAAIAErAwA5AwAPCyAAIAIgAxEDAAsLNQACQCAAUA0AA0AgAUF/aiIBIACnQQ9xQcA4ai0AACACcjoAACAAQgSIIgBCAFINAAsLIAELLgACQCAAUA0AA0AgAUF/aiIBIACnQQdxQTByOgAAIABCA4giAEIAUg0ACwsgAQuIAQIDfwF+AkACQCAAQoCAgIAQWg0AIAAhBQwBCwNAIAFBf2oiASAAIABCCoAiBUIKfn2nQTByOgAAIABC/////58BViECIAUhACACDQALCwJAIAWnIgJFDQADQCABQX9qIgEgAiACQQpuIgNBCmxrQTByOgAAIAJBCUshBCADIQIgBA0ACwsgAQtzAQF/IwBBgAJrIgUkAAJAIAIgA0wNACAEQYDABHENACAFIAFB/wFxIAIgA2siAkGAAiACQYACSSIDGxCfCRoCQCADDQADQCAAIAVBgAIQhwggAkGAfmoiAkH/AUsNAAsLIAAgBSACEIcICyAFQYACaiQACw8AIAAgASACQRFBEhCFCAuqGAMSfwJ+AXwjAEGwBGsiBiQAQQAhByAGQQA2AiwCQAJAIAEQkQgiGEJ/VQ0AQQEhCEHQOCEJIAGaIgEQkQghGAwBC0EBIQgCQCAEQYAQcUUNAEHTOCEJDAELQdY4IQkgBEEBcQ0AQQAhCEEBIQdB0TghCQsCQAJAIBhCgICAgICAgPj/AINCgICAgICAgPj/AFINACAAQSAgAiAIQQNqIgogBEH//3txEI0IIAAgCSAIEIcIIABB6zhB7zggBUEgcSILG0HjOEHnOCALGyABIAFiG0EDEIcIIABBICACIAogBEGAwABzEI0IDAELIAZBEGohDAJAAkACQAJAIAEgBkEsahCECCIBIAGgIgFEAAAAAAAAAABhDQAgBiAGKAIsIgtBf2o2AiwgBUEgciINQeEARw0BDAMLIAVBIHIiDUHhAEYNAkEGIAMgA0EASBshDiAGKAIsIQ8MAQsgBiALQWNqIg82AixBBiADIANBAEgbIQ4gAUQAAAAAAACwQaIhAQsgBkEwaiAGQdACaiAPQQBIGyIQIREDQAJAAkAgAUQAAAAAAADwQWMgAUQAAAAAAAAAAGZxRQ0AIAGrIQsMAQtBACELCyARIAs2AgAgEUEEaiERIAEgC7ihRAAAAABlzc1BoiIBRAAAAAAAAAAAYg0ACwJAAkAgD0EBTg0AIA8hAyARIQsgECESDAELIBAhEiAPIQMDQCADQR0gA0EdSBshAwJAIBFBfGoiCyASSQ0AIAOtIRlCACEYA0AgCyALNQIAIBmGIBhC/////w+DfCIYIBhCgJTr3AOAIhhCgJTr3AN+fT4CACALQXxqIgsgEk8NAAsgGKciC0UNACASQXxqIhIgCzYCAAsCQANAIBEiCyASTQ0BIAtBfGoiESgCAEUNAAsLIAYgBigCLCADayIDNgIsIAshESADQQBKDQALCwJAIANBf0oNACAOQRlqQQltQQFqIRMgDUHmAEYhFANAQQlBACADayADQXdIGyEKAkACQCASIAtJDQAgEiASQQRqIBIoAgAbIRIMAQtBgJTr3AMgCnYhFUF/IAp0QX9zIRZBACEDIBIhEQNAIBEgESgCACIXIAp2IANqNgIAIBcgFnEgFWwhAyARQQRqIhEgC0kNAAsgEiASQQRqIBIoAgAbIRIgA0UNACALIAM2AgAgC0EEaiELCyAGIAYoAiwgCmoiAzYCLCAQIBIgFBsiESATQQJ0aiALIAsgEWtBAnUgE0obIQsgA0EASA0ACwtBACERAkAgEiALTw0AIBAgEmtBAnVBCWwhEUEKIQMgEigCACIXQQpJDQADQCARQQFqIREgFyADQQpsIgNPDQALCwJAIA5BACARIA1B5gBGG2sgDkEARyANQecARnFrIgMgCyAQa0ECdUEJbEF3ak4NACADQYDIAGoiF0EJbSIVQQJ0IAZBMGpBBHIgBkHUAmogD0EASBtqQYBgaiEKQQohAwJAIBcgFUEJbGsiF0EHSg0AA0AgA0EKbCEDIBdBAWoiF0EIRw0ACwsgCigCACIVIBUgA24iFiADbGshFwJAAkAgCkEEaiITIAtHDQAgF0UNAQtEAAAAAAAA4D9EAAAAAAAA8D9EAAAAAAAA+D8gFyADQQF2IhRGG0QAAAAAAAD4PyATIAtGGyAXIBRJGyEaRAEAAAAAAEBDRAAAAAAAAEBDIBZBAXEbIQECQCAHDQAgCS0AAEEtRw0AIBqaIRogAZohAQsgCiAVIBdrIhc2AgAgASAaoCABYQ0AIAogFyADaiIRNgIAAkAgEUGAlOvcA0kNAANAIApBADYCAAJAIApBfGoiCiASTw0AIBJBfGoiEkEANgIACyAKIAooAgBBAWoiETYCACARQf+T69wDSw0ACwsgECASa0ECdUEJbCERQQohAyASKAIAIhdBCkkNAANAIBFBAWohESAXIANBCmwiA08NAAsLIApBBGoiAyALIAsgA0sbIQsLAkADQCALIgMgEk0iFw0BIANBfGoiCygCAEUNAAsLAkACQCANQecARg0AIARBCHEhFgwBCyARQX9zQX8gDkEBIA4bIgsgEUogEUF7SnEiChsgC2ohDkF/QX4gChsgBWohBSAEQQhxIhYNAEF3IQsCQCAXDQAgA0F8aigCACIKRQ0AQQohF0EAIQsgCkEKcA0AA0AgCyIVQQFqIQsgCiAXQQpsIhdwRQ0ACyAVQX9zIQsLIAMgEGtBAnVBCWwhFwJAIAVBX3FBxgBHDQBBACEWIA4gFyALakF3aiILQQAgC0EAShsiCyAOIAtIGyEODAELQQAhFiAOIBEgF2ogC2pBd2oiC0EAIAtBAEobIgsgDiALSBshDgsgDiAWciIUQQBHIRcCQAJAIAVBX3EiFUHGAEcNACARQQAgEUEAShshCwwBCwJAIAwgESARQR91IgtqIAtzrSAMEIwIIgtrQQFKDQADQCALQX9qIgtBMDoAACAMIAtrQQJIDQALCyALQX5qIhMgBToAACALQX9qQS1BKyARQQBIGzoAACAMIBNrIQsLIABBICACIAggDmogF2ogC2pBAWoiCiAEEI0IIAAgCSAIEIcIIABBMCACIAogBEGAgARzEI0IAkACQAJAAkAgFUHGAEcNACAGQRBqQQhyIRUgBkEQakEJciERIBAgEiASIBBLGyIXIRIDQCASNQIAIBEQjAghCwJAAkAgEiAXRg0AIAsgBkEQak0NAQNAIAtBf2oiC0EwOgAAIAsgBkEQaksNAAwCCwALIAsgEUcNACAGQTA6ABggFSELCyAAIAsgESALaxCHCCASQQRqIhIgEE0NAAsCQCAURQ0AIABB8zhBARCHCAsgEiADTw0BIA5BAUgNAQNAAkAgEjUCACAREIwIIgsgBkEQak0NAANAIAtBf2oiC0EwOgAAIAsgBkEQaksNAAsLIAAgCyAOQQkgDkEJSBsQhwggDkF3aiELIBJBBGoiEiADTw0DIA5BCUohFyALIQ4gFw0ADAMLAAsCQCAOQQBIDQAgAyASQQRqIAMgEksbIRUgBkEQakEIciEQIAZBEGpBCXIhAyASIREDQAJAIBE1AgAgAxCMCCILIANHDQAgBkEwOgAYIBAhCwsCQAJAIBEgEkYNACALIAZBEGpNDQEDQCALQX9qIgtBMDoAACALIAZBEGpLDQAMAgsACyAAIAtBARCHCCALQQFqIQsCQCAWDQAgDkEBSA0BCyAAQfM4QQEQhwgLIAAgCyADIAtrIhcgDiAOIBdKGxCHCCAOIBdrIQ4gEUEEaiIRIBVPDQEgDkF/Sg0ACwsgAEEwIA5BEmpBEkEAEI0IIAAgEyAMIBNrEIcIDAILIA4hCwsgAEEwIAtBCWpBCUEAEI0ICyAAQSAgAiAKIARBgMAAcxCNCAwBCyAJQQlqIAkgBUEgcSIRGyEOAkAgA0ELSw0AQQwgA2siC0UNAEQAAAAAAAAgQCEaA0AgGkQAAAAAAAAwQKIhGiALQX9qIgsNAAsCQCAOLQAAQS1HDQAgGiABmiAaoaCaIQEMAQsgASAaoCAaoSEBCwJAIAYoAiwiCyALQR91IgtqIAtzrSAMEIwIIgsgDEcNACAGQTA6AA8gBkEPaiELCyAIQQJyIRYgBigCLCESIAtBfmoiFSAFQQ9qOgAAIAtBf2pBLUErIBJBAEgbOgAAIARBCHEhFyAGQRBqIRIDQCASIQsCQAJAIAGZRAAAAAAAAOBBY0UNACABqiESDAELQYCAgIB4IRILIAsgEkHAOGotAAAgEXI6AAAgASASt6FEAAAAAAAAMECiIQECQCALQQFqIhIgBkEQamtBAUcNAAJAIBcNACADQQBKDQAgAUQAAAAAAAAAAGENAQsgC0EuOgABIAtBAmohEgsgAUQAAAAAAAAAAGINAAsCQAJAIANFDQAgEiAGQRBqa0F+aiADTg0AIAMgDGogFWtBAmohCwwBCyAMIAZBEGprIBVrIBJqIQsLIABBICACIAsgFmoiCiAEEI0IIAAgDiAWEIcIIABBMCACIAogBEGAgARzEI0IIAAgBkEQaiASIAZBEGprIhIQhwggAEEwIAsgEiAMIBVrIhFqa0EAQQAQjQggACAVIBEQhwggAEEgIAIgCiAEQYDAAHMQjQgLIAZBsARqJAAgAiAKIAogAkgbCysBAX8gASABKAIAQQ9qQXBxIgJBEGo2AgAgACACKQMAIAIpAwgQ/gc5AwALBQAgAL0LuwEBAn8jAEGgAWsiBCQAIARBCGpB+DhBkAEQngkaAkACQAJAIAFBf2pB/////wdJDQAgAQ0BIARBnwFqIQBBASEBCyAEIAA2AjQgBCAANgIcIARBfiAAayIFIAEgASAFSxsiATYCOCAEIAAgAWoiADYCJCAEIAA2AhggBEEIaiACIAMQjgghACABRQ0BIAQoAhwiASABIAQoAhhGa0EAOgAADAELEPAHQT02AgBBfyEACyAEQaABaiQAIAALNAEBfyAAKAIUIgMgASACIAAoAhAgA2siAyADIAJLGyIDEJ4JGiAAIAAoAhQgA2o2AhQgAgsqAQF/IwBBEGsiBCQAIAQgAzYCDCAAIAEgAiADEJIIIQMgBEEQaiQAIAMLCgAgABC/AiABagsLACAAIAEgAhCXCAs9AEEAQQA2ApRKQRQgASACQQEQF0EAKAKUSiEBQQBBADYClEoCQCABQQFGDQAPC0EAEAwhARANGiABEHwACwcAIAAQmQgLBwAgABCaCAsEACAACy0BAX9BCiEBAkAgAEELSQ0AIABBAWoQnAgiACAAQX9qIgAgAEELRhshAQsgAQsKACAAQQ9qQXBxCwsAIAAgAUEAEJ4ICx0AAkAgABDeAiABTw0AQYg6EI8BAAsgAUEBEJABCwwAIAAQwAEgATYCAAsTACAAEMABIAFBgICAgHhyNgIICwIACwkAIAAgARCkCAscAAJAIAAQtQFFDQAgACABENoCDwsgACABENsCCwcAIAEgAGsLrQEBBH8jAEEQayIDJAACQCABIAIQoggiBCAAEKkCSw0AAkACQCAEQQpLDQAgACAEENsCIAAQwgIhBQwBCyAEEJsIIQUgACAAEJgIIAVBAWoiBhCdCCIFEJ8IIAAgBhCgCCAAIAQQ2gILAkADQCABIAJGDQEgBSABENkCIAVBAWohBSABQQFqIQEMAAsACyADQQA6AA8gBSADQQ9qENkCIANBEGokAA8LIAAQwQgACxUAQfDWwAIkAkHw1gBBD2pBcHEkAQsHACMAIwFrCwQAIwELBAAgAAsDAAALAwAACz0BAX8CQCAAQQhqIgFBAhCtCA0AIAAgACgCACgCEBEEAA8LAkAgARD7AUF/Rw0AIAAgACgCACgCEBEEAAsLFwACQCABQX9qDgUAAAAAAAALIAAoAgALBABBAAtFAQF/IABBASAAGyEBAkADQCABEJcJIgANAQJAEOcIIgBFDQAgABEJAAwBCwtBBBABIgAQ7AgaIABB6MAAQRgQAgALIAALBwAgABCYCQtuAQJ/IwBBEGsiAiQAIAFBBCABQQRLGyEBIABBASAAGyEDAkADQCACQQxqIAEgAxCaCUUNAQJAEOcIIgBFDQAgABEJAAwBCwtBBBABIgAQ7AgaIABB6MAAQRgQAgALIAIoAgwhACACQRBqJAAgAAsHACAAEJgJCzwBAn8gARCmCSICQQ1qEK8IIgNBADYCCCADIAI2AgQgAyACNgIAIAAgAxC0CCABIAJBAWoQngk2AgAgAAsHACAAQQxqC1cBAX8gABDOAiECIABB/MAANgIAQQBBADYClEpBGSAAQQRqIAEQERpBACgClEohAUEAQQA2ApRKAkAgAUEBRg0AIAAPCxAPIQAQDRogAhDpCBogABAQAAsEAEEBC10BAX8gABDOAiECIABBkMEANgIAIAEQRCEBQQBBADYClEpBGSAAQQRqIAEQERpBACgClEohAUEAQQA2ApRKAkAgAUEBRg0AIAAPCxAPIQAQDRogAhDpCBogABAQAAtXAQF/IAAQzgIhAiAAQZDBADYCAEEAQQA2ApRKQRkgAEEEaiABEBEaQQAoApRKIQFBAEEANgKUSgJAIAFBAUYNACAADwsQDyEAEA0aIAIQ6QgaIAAQEAALTAEBfwJAIABB/8HXL0sNACABIAAQuggPCyABIABBgMLXL24iAhC7CCAAIAJBgMLXL2xrIgBBkM4AbiIBELwIIAAgAUGQzgBsaxC8CAszAQF/AkAgAUGPzgBLDQAgACABEL0IDwsgACABQZDOAG4iAhC9CCABIAJBkM4AbGsQvAgLGwACQCABQQlLDQAgACABEL4IDwsgACABEL8ICx0BAX8gACABQeQAbiICEL8IIAEgAkHkAGxrEL8ICy8AAkAgAUHjAEsNACAAIAEQuwgPCwJAIAFB5wdLDQAgACABEMAIDwsgACABELwICxEAIAAgAUEwajoAACAAQQFqCxgAIAAgAUEBdEHgO2ovAQA7AAAgAEECagsdAQF/IAAgAUHkAG4iAhC+CCABIAJB5ABsaxC/CAsJAEGoPRCPAQALCQBBqD0QwwgAC1ABAX9BCBABIQFBAEEANgKUSkEaIAEgABARGkEAKAKUSiEAQQBBADYClEoCQCAAQQFGDQAgAUGUwgBBAhACAAsQDyEAEA0aIAEQFCAAEBAACxUAIAAgARC1CBogAEH0wQA2AgAgAAuRAQEDfyMAQRBrIgMkAAJAIAAQqQIgAkkNAAJAAkAgAkEKSw0AIAAgAhDbAiAAEMICIQQMAQsgAhCbCCEEIAAgABCYCCAEQQFqIgUQnQgiBBCfCCAAIAUQoAggACACENoCCyAEEMACIAEgAhDvBxogA0EAOgAPIAQgAmogA0EPahDZAiADQRBqJAAPCyAAEMEIAAshAAJAIAAQtQFFDQAgABCYCCAAEMECIAAQxQIQlggLIAALFgACQCACRQ0AIAAgASACEKAJGgsgAAu5AgEDfyMAQRBrIggkAAJAIAAQqQIiCSABQX9zaiACSQ0AIAAQvwIhCgJAAkAgCUEBdkFwaiABTQ0AIAggAUEBdDYCCCAIIAIgAWo2AgwgCEEMaiAIQQhqEOACKAIAEJsIIQIMAQsgCUF/aiECCyAAEJgIIAJBAWoiCRCdCCECIAAQ2AICQCAERQ0AIAIQwAIgChDAAiAEEO8HGgsCQCAGRQ0AIAIQwAIgBGogByAGEO8HGgsCQCADIAVrIgMgBGsiB0UNACACEMACIARqIAZqIAoQwAIgBGogBWogBxDvBxoLAkAgAUEBaiIEQQtGDQAgABCYCCAKIAQQlggLIAAgAhCfCCAAIAkQoAggACADIAZqIgQQ2gIgCEEAOgAHIAIgBGogCEEHahDZAiAIQRBqJAAPCyAAEMEIAAsoAQF/AkAgABCyASIDIAFPDQAgACABIANrIAIQyggaDwsgACABEMsIC4IBAQR/IwBBEGsiAyQAAkAgAUUNACAAEL0CIQQgABCyASIFIAFqIQYCQCAEIAVrIAFPDQAgACAEIAYgBGsgBSAFQQBBABDMCAsgABC/AiIEEMACIAVqIAEgAhDNCBogACAGEKMIIANBADoADyAEIAZqIANBD2oQ2QILIANBEGokACAAC28BAn8jAEEQayICJAACQAJAIAAQtQFFDQAgABDBAiEDIAJBADoADyADIAFqIAJBD2oQ2QIgACABENoCDAELIAAQwgIhAyACQQA6AA4gAyABaiACQQ5qENkCIAAgARDbAgsgACABEKEIIAJBEGokAAv8AQEDfyMAQRBrIgckAAJAIAAQqQIiCCABayACSQ0AIAAQvwIhCQJAAkAgCEEBdkFwaiABTQ0AIAcgAUEBdDYCCCAHIAIgAWo2AgwgB0EMaiAHQQhqEOACKAIAEJsIIQIMAQsgCEF/aiECCyAAEJgIIAJBAWoiCBCdCCECIAAQ2AICQCAERQ0AIAIQwAIgCRDAAiAEEO8HGgsCQCADIAVrIARrIgNFDQAgAhDAAiAEaiAGaiAJEMACIARqIAVqIAMQ7wcaCwJAIAFBAWoiAUELRg0AIAAQmAggCSABEJYICyAAIAIQnwggACAIEKAIIAdBEGokAA8LIAAQwQgACxkAAkAgAUUNACAAIAIQvAIgARCfCRoLIAALhQEBA38jAEEQayIDJAACQAJAIAAQvQIiBCAAELIBIgVrIAJJDQAgAkUNASAAEL8CEMACIgQgBWogASACEO8HGiAAIAUgAmoiAhCjCCADQQA6AA8gBCACaiADQQ9qENkCDAELIAAgBCAFIAJqIARrIAUgBUEAIAIgARDICAsgA0EQaiQAIAALDgAgACABIAEQpQEQzggL0QEBBX8jAEEQayIEJAACQCAAELIBIgUgAUkNAAJAAkAgABC9AiIGIAVrIANJDQAgA0UNASAAEL8CEMACIQYCQCAFIAFrIgdFDQAgBiABaiIIIANqIAggBxDHCBogAiADaiACIAYgBWogAksbIAIgCCACTRshAgsgBiABaiACIAMQxwgaIAAgBSADaiIDEKMIIARBADoADyAGIANqIARBD2oQ2QIMAQsgACAGIAUgA2ogBmsgBSABQQAgAyACEMgICyAEQRBqJAAgAA8LIAAQwggACxAAIAAgASACIAIQpQEQ0AgLLAEBfyMAQRBrIgMkACAAIANBCGogAxCkARogACABIAIQpQggA0EQaiQAIAALCQAgACABENQICzgBAX8jAEEgayICJAAgAkEIaiACQRVqIAJBIGogARDVCCAAIAJBFWogAigCCBDSCBogAkEgaiQACw0AIAAgASACIAMQ2QgLTAEBfyAAEKACIgAQvQIhAUEAQQA2ApRKQRsgACABEAtBACgClEohAUEAQQA2ApRKAkAgAUEBRw0AEA8hARANGiAAEMYIGiABEBAACwteAQF/IwBBEGsiAiQAIAIQ1ghBAEEANgKUSkEcIAAgAiABEBhBACgClEohAEEAQQA2ApRKAkAgAEEBRg0AIAIQxggaIAJBEGokAA8LEA8hABANGiACEMYIGiAAEBAAC30BA38jAEEQayIDJAAgARCyASEEAkADQCABQQAQlQghBSADIAI5AwACQAJAIAUgBEEBakG1PSADEJQIIgVBAEgNACAFIARNDQMgBSEEDAELIARBAXRBAXIhBAsgASAEEL4CDAALAAsgASAFEL4CIAAgARCqARogA0EQaiQAC0cBAX8CQAJAAkAgAiABayIEQQlKDQAgAxDaCCAESg0BCyAAIAMgARDbCDYCAEEAIQEMAQsgACACNgIAQT0hAQsgACABNgIECykBAX9BICAAQQFyZ2tB0QlsQQx2IgEgAUECdEHAPWooAgAgAEtrQQFqCwkAIAAgARC5CAsJAEHoPRCPAQALCQBB6D0QwwgACwMAAAsGAEH00gAL/wEBBH8jAEEwayIAJAACQAJAEN8IIgFFDQAgASgCACIBRQ0AAkAgAUEwaiICEOIIRQ0AAkACQCACEOEIQoHWrJn0yJOmwwBSDQAgASgCLCECDAELIAFB0ABqIQILIAAgAjYCLCABKAIAIgIQ1gYhAUHQwAAgAiAAQSxqQQAoAtBAKAIQEQUADQIgACABNgIUIABBACgChEo2AhBBnD4gAEEQahDeCAALIABBACgChEo2AiBBxT4gAEEgahDeCAALQes+QQAQ3ggAC0EAKAKESiECIAAgACgCLCIDIAMoAgAoAggRAAA2AgggACABNgIEIAAgAjYCAEHvPSAAEN4IAAsHACAAKQMACxcAIAAQ4QhCgH6DQoDWrJn0yJOmwwBRCwcA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AggLC1YBAn9BACgCiEoiASAAQQNqQXxxIgJqIQACQAJAIAJBAUgNACAAIAFNDQELAkAgAD8AQRB0TQ0AIAAQGUUNAQtBACAANgKISiABDwsQ8AdBMDYCAEF/C64BAAJAAkAgAUGACEgNACAARAAAAAAAAOB/oiEAAkAgAUH/D04NACABQYF4aiEBDAILIABEAAAAAAAA4H+iIQAgAUH9FyABQf0XSBtBgnBqIQEMAQsgAUGBeEoNACAARAAAAAAAABAAoiEAAkAgAUGDcEwNACABQf4HaiEBDAELIABEAAAAAAAAEACiIQAgAUGGaCABQYZoShtB/A9qIQELIAAgAUH/B2qtQjSGv6ILkQQBA38CQCACQYAESQ0AIAAgASACEBoaIAAPCyAAIAJqIQMCQAJAIAEgAHNBA3ENAAJAAkAgAkEBTg0AIAAhAgwBCwJAIABBA3ENACAAIQIMAQsgACECA0AgAiABLQAAOgAAIAFBAWohASACQQFqIgIgA08NASACQQNxDQALCwJAIANBfHEiBEHAAEkNACACIARBQGoiBUsNAANAIAIgASgCADYCACACIAEoAgQ2AgQgAiABKAIINgIIIAIgASgCDDYCDCACIAEoAhA2AhAgAiABKAIUNgIUIAIgASgCGDYCGCACIAEoAhw2AhwgAiABKAIgNgIgIAIgASgCJDYCJCACIAEoAig2AiggAiABKAIsNgIsIAIgASgCMDYCMCACIAEoAjQ2AjQgAiABKAI4NgI4IAIgASgCPDYCPCABQcAAaiEBIAJBwABqIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQAMAgsACwJAIANBBE8NACAAIQIMAQsCQCADQXxqIgQgAE8NACAAIQIMAQsgACECA0AgAiABLQAAOgAAIAIgAS0AAToAASACIAEtAAI6AAIgAiABLQADOgADIAFBBGohASACQQRqIgIgBE0NAAsLAkAgAiADTw0AA0AgAiABLQAAOgAAIAFBAWohASACQQFqIgIgA0cNAAsLIAAL8wICA38BfgJAIAJFDQAgAiAAaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIFayICQSBJDQAgAa0iBkIghiAGhCEGIAMgBWohAQNAIAEgBjcDGCABIAY3AxAgASAGNwMIIAEgBjcDACABQSBqIQEgAkFgaiICQR9LDQALCyAAC/gCAQF/AkAgACABRg0AAkAgASAAayACa0EAIAJBAXRrSw0AIAAgASACEJ4JDwsgASAAc0EDcSEDAkACQAJAIAAgAU8NAAJAIANFDQAgACEDDAMLAkAgAEEDcQ0AIAAhAwwCCyAAIQMDQCACRQ0EIAMgAS0AADoAACABQQFqIQEgAkF/aiECIANBAWoiA0EDcUUNAgwACwALAkAgAw0AAkAgACACakEDcUUNAANAIAJFDQUgACACQX9qIgJqIgMgASACai0AADoAACADQQNxDQALCyACQQNNDQADQCAAIAJBfGoiAmogASACaigCADYCACACQQNLDQALCyACRQ0CA0AgACACQX9qIgJqIAEgAmotAAA6AAAgAg0ADAMLAAsgAkEDTQ0AA0AgAyABKAIANgIAIAFBBGohASADQQRqIQMgAkF8aiICQQNLDQALCyACRQ0AA0AgAyABLQAAOgAAIANBAWohAyABQQFqIQEgAkF/aiICDQALCyAAC1wBAX8gACAALQBKIgFBf2ogAXI6AEoCQCAAKAIAIgFBCHFFDQAgACABQSByNgIAQX8PCyAAQgA3AgQgACAAKAIsIgE2AhwgACABNgIUIAAgASAAKAIwajYCEEEAC84BAQN/AkACQCACKAIQIgMNAEEAIQQgAhChCQ0BIAIoAhAhAwsCQCADIAIoAhQiBWsgAU8NACACIAAgASACKAIkEQUADwsCQAJAIAIsAEtBAE4NAEEAIQMMAQsgASEEA0ACQCAEIgMNAEEAIQMMAgsgACADQX9qIgRqLQAAQQpHDQALIAIgACADIAIoAiQRBQAiBCADSQ0BIAAgA2ohACABIANrIQEgAigCFCEFCyAFIAAgARCeCRogAiACKAIUIAFqNgIUIAMgAWohBAsgBAssAQF/IwBBEGsiAiQAIAIgATYCDEEAKALQNCAAIAEQjgghASACQRBqJAAgAQsEAEEBCwIAC5sBAQN/IAAhAQJAAkAgAEEDcUUNAAJAIAAtAAANACAAIABrDwsgACEBA0AgAUEBaiIBQQNxRQ0BIAEtAABFDQIMAAsACwNAIAEiAkEEaiEBIAIoAgAiA0F/cyADQf/9+3dqcUGAgYKEeHFFDQALAkAgA0H/AXENACACIABrDwsDQCACLQABIQMgAkEBaiIBIQIgAw0ACwsgASAAawsEACMACwYAIAAkAAsSAQJ/IwAgAGtBcHEiASQAIAELDQAgASACIAMgABEUAAskAQF+IAAgASACrSADrUIghoQgBBCqCSEFIAVCIIinEBsgBacLC5jCgIAAAgBBgAgLhD8AJXMKAGFsbG9jYXRvcjxUPjo6YWxsb2NhdGUoc2l6ZV90IG4pICduJyBleGNlZWRzIG1heGltdW0gc3VwcG9ydGVkIHNpemUAewAsIAB9AFByb2ZpbGVQb2ludDogewAsIHdoZWVsczogACwgazogACwgdDogAENvbnRyb2xWZWN0b3I6IHsALCB2OiAALCBhOiAALCBqOiAAUG9zZToge3g6IAAsIHk6IAAsIHlhdzogAAAAAAAAHAUAAAMAAAAEAAAABQAAAAYAAAAHAAAATlN0M19fMjIwX19zaGFyZWRfcHRyX2VtcGxhY2VJTjlzcXVpZ2dsZXM5VGFua01vZGVsRU5TXzlhbGxvY2F0b3JJUzJfRUVFRQAAANQiAADQBAAAwB0AAGFsbG9jYXRvcjxUPjo6YWxsb2NhdGUoc2l6ZV90IG4pICduJyBleGNlZWRzIG1heGltdW0gc3VwcG9ydGVkIHNpemUAQ291bGQgbm90IGZpbmQgYSB2YWxpZCBwYXRoIHdpdGhpbiB0aGUgY29uc3RyYWludHMAU29tZXRoaW5nIHdlbnQgd3JvbmcgYXQgaXRlcmF0aW9uIAAgb2YgdGltZSBwYXJhbWV0ZXJpemF0aW9uLgBUaGUgY29uc3RyYWludCdzIG1pbiBhY2NlbCB3YXMgZ3JlYXRlciB0aGFuIGl0cyBtYXggYWNjZWwuIFRvIGRlYnVnIHRoaXMsIHJlbW92ZSBhbGwgY29uc3RyYWludHMgZnJvbSB0aGUgY29uZmlnIGFuZCBhZGQgZWFjaCBvbmUgaW5kaXZpZHVhbGx5LklmIHRoZSBvZmZlbmRpbmcgY29uc3RyYWludCB3YXMgcGFja2FnZWQgd2l0aCBSb2JvdFNxdWlnZ2xlcywgcGxlYXNlIGZpbGUgYSBidWcgcmVwb3J0LgBhbGxvY2F0b3I8VD46OmFsbG9jYXRlKHNpemVfdCBuKSAnbicgZXhjZWVkcyBtYXhpbXVtIHN1cHBvcnRlZCBzaXplAAAAAABsBwAACQAAAAoAAAALAAAAVGFua01vZGVsIHt3OiAALCAAfQBOOXNxdWlnZ2xlczlUYW5rTW9kZWxFAE45c3F1aWdnbGVzMTNQaHlzaWNhbE1vZGVsRQAArCIAAEcHAADUIgAAMAcAAGQHAAAAAAAAZAcAAAwAAAAMAAAADAAAAENvbnN0cmFpbnRzOiB7bWF4X3ZlbDogACwgbWF4X2FjY2VsOiAALCBtYXhfamVyazogACwgbWluX2FjY2VsOiAAdm9pZABib29sAGNoYXIAc2lnbmVkIGNoYXIAdW5zaWduZWQgY2hhcgBzaG9ydAB1bnNpZ25lZCBzaG9ydABpbnQAdW5zaWduZWQgaW50AGxvbmcAdW5zaWduZWQgbG9uZwBmbG9hdABkb3VibGUAc3RkOjpzdHJpbmcAc3RkOjpiYXNpY19zdHJpbmc8dW5zaWduZWQgY2hhcj4Ac3RkOjp3c3RyaW5nAHN0ZDo6dTE2c3RyaW5nAHN0ZDo6dTMyc3RyaW5nAGVtc2NyaXB0ZW46OnZhbABlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxjaGFyPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxzaWduZWQgY2hhcj4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgY2hhcj4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8c2hvcnQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVuc2lnbmVkIHNob3J0PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVuc2lnbmVkIGludD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8bG9uZz4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgbG9uZz4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8aW50OF90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1aW50OF90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQxNl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1aW50MTZfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8aW50MzJfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dWludDMyX3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGZsb2F0PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxkb3VibGU+AE5TdDNfXzIxMmJhc2ljX3N0cmluZ0ljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUVFAE5TdDNfXzIyMV9fYmFzaWNfc3RyaW5nX2NvbW1vbklMYjFFRUUArCIAACILAAAwIwAA4woAAAAAAAABAAAASAsAAAAAAABOU3QzX18yMTJiYXNpY19zdHJpbmdJaE5TXzExY2hhcl90cmFpdHNJaEVFTlNfOWFsbG9jYXRvckloRUVFRQAAMCMAAGgLAAAAAAAAAQAAAEgLAAAAAAAATlN0M19fMjEyYmFzaWNfc3RyaW5nSXdOU18xMWNoYXJfdHJhaXRzSXdFRU5TXzlhbGxvY2F0b3JJd0VFRUUAADAjAADACwAAAAAAAAEAAABICwAAAAAAAE5TdDNfXzIxMmJhc2ljX3N0cmluZ0lEc05TXzExY2hhcl90cmFpdHNJRHNFRU5TXzlhbGxvY2F0b3JJRHNFRUVFAAAAMCMAABgMAAAAAAAAAQAAAEgLAAAAAAAATlN0M19fMjEyYmFzaWNfc3RyaW5nSURpTlNfMTFjaGFyX3RyYWl0c0lEaUVFTlNfOWFsbG9jYXRvcklEaUVFRUUAAAAwIwAAdAwAAAAAAAABAAAASAsAAAAAAABOMTBlbXNjcmlwdGVuM3ZhbEUAAKwiAADQDAAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJY0VFAACsIgAA7AwAAE4xMGVtc2NyaXB0ZW4xMW1lbW9y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';
if (!isDataURI(wasmBinaryFile)) {
  wasmBinaryFile = locateFile(wasmBinaryFile);
}

function getBinary() {
  try {
    if (wasmBinary) {
      return new Uint8Array(wasmBinary);
    }

    var binary = tryParseAsDataURI(wasmBinaryFile);
    if (binary) {
      return binary;
    }
    if (readBinary) {
      return readBinary(wasmBinaryFile);
    } else {
      throw "both async and sync fetching of the wasm failed";
    }
  }
  catch (err) {
    abort(err);
  }
}

function getBinaryPromise() {
  // If we don't have the binary yet, and have the Fetch api, use that;
  // in some environments, like Electron's render process, Fetch api may be present, but have a different context than expected, let's only use it on the Web
  if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && typeof fetch === 'function'
      // Let's not use fetch to get objects over file:// as it's most likely Cordova which doesn't support fetch for file://
      && !isFileURI(wasmBinaryFile)
      ) {
    return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function(response) {
      if (!response['ok']) {
        throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
      }
      return response['arrayBuffer']();
    }).catch(function () {
      return getBinary();
    });
  }
  // Otherwise, getBinary should be able to get it synchronously
  return Promise.resolve().then(getBinary);
}

// Create the wasm instance.
// Receives the wasm imports, returns the exports.
function createWasm() {
  // prepare imports
  var info = {
    'env': asmLibraryArg,
    'wasi_snapshot_preview1': asmLibraryArg,
  };
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  /** @param {WebAssembly.Module=} module*/
  function receiveInstance(instance, module) {
    var exports = instance.exports;

    Module['asm'] = exports;

    wasmMemory = Module['asm']['memory'];
    assert(wasmMemory, "memory not found in wasm exports");
    // This assertion doesn't hold when emscripten is run in --post-link
    // mode.
    // TODO(sbc): Read INITIAL_MEMORY out of the wasm file in post-link mode.
    //assert(wasmMemory.buffer.byteLength === 16777216);
    updateGlobalBufferAndViews(wasmMemory.buffer);

    wasmTable = Module['asm']['__indirect_function_table'];
    assert(wasmTable, "table not found in wasm exports");

    removeRunDependency('wasm-instantiate');
  }
  // we can't run yet (except in a pthread, where we have a custom sync instantiator)
  addRunDependency('wasm-instantiate');

  // Async compilation can be confusing when an error on the page overwrites Module
  // (for example, if the order of elements is wrong, and the one defining Module is
  // later), so we save Module and check it later.
  var trueModule = Module;
  function receiveInstantiatedSource(output) {
    // 'output' is a WebAssemblyInstantiatedSource object which has both the module and instance.
    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
    assert(Module === trueModule, 'the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?');
    trueModule = null;
    // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
    // When the regression is fixed, can restore the above USE_PTHREADS-enabled path.
    receiveInstance(output['instance']);
  }

  function instantiateArrayBuffer(receiver) {
    return getBinaryPromise().then(function(binary) {
      return WebAssembly.instantiate(binary, info);
    }).then(receiver, function(reason) {
      err('failed to asynchronously prepare wasm: ' + reason);

      abort(reason);
    });
  }

  // Prefer streaming instantiation if available.
  function instantiateAsync() {
    if (!wasmBinary &&
        typeof WebAssembly.instantiateStreaming === 'function' &&
        !isDataURI(wasmBinaryFile) &&
        // Don't use streaming for file:// delivered objects in a webview, fetch them synchronously.
        !isFileURI(wasmBinaryFile) &&
        typeof fetch === 'function') {
      return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function (response) {
        var result = WebAssembly.instantiateStreaming(response, info);
        return result.then(receiveInstantiatedSource, function(reason) {
            // We expect the most common failure cause to be a bad MIME type for the binary,
            // in which case falling back to ArrayBuffer instantiation should work.
            err('wasm streaming compile failed: ' + reason);
            err('falling back to ArrayBuffer instantiation');
            return instantiateArrayBuffer(receiveInstantiatedSource);
          });
      });
    } else {
      return instantiateArrayBuffer(receiveInstantiatedSource);
    }
  }
  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to run the instantiation parallel
  // to any other async startup actions they are performing.
  if (Module['instantiateWasm']) {
    try {
      var exports = Module['instantiateWasm'](info, receiveInstance);
      return exports;
    } catch(e) {
      err('Module.instantiateWasm callback failed with error: ' + e);
      return false;
    }
  }

  // If instantiation fails, reject the module ready promise.
  instantiateAsync().catch(readyPromiseReject);
  return {}; // no exports yet; we'll fill them in later
}

// Globals used by JS i64 conversions
var tempDouble;
var tempI64;

// === Body ===

var ASM_CONSTS = {
  
};






  function abortStackOverflow(allocSize) {
      abort('Stack overflow! Attempted to allocate ' + allocSize + ' bytes on the stack, but stack has only ' + (_emscripten_stack_get_free() + allocSize) + ' bytes available!');
    }

  function callRuntimeCallbacks(callbacks) {
      while(callbacks.length > 0) {
        var callback = callbacks.shift();
        if (typeof callback == 'function') {
          callback(Module); // Pass the module as the first argument.
          continue;
        }
        var func = callback.func;
        if (typeof func === 'number') {
          if (callback.arg === undefined) {
            wasmTable.get(func)();
          } else {
            wasmTable.get(func)(callback.arg);
          }
        } else {
          func(callback.arg === undefined ? null : callback.arg);
        }
      }
    }

  function demangle(func) {
      warnOnce('warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling');
      return func;
    }

  function demangleAll(text) {
      var regex =
        /\b_Z[\w\d_]+/g;
      return text.replace(regex,
        function(x) {
          var y = demangle(x);
          return x === y ? x : (y + ' [' + x + ']');
        });
    }

  function jsStackTrace() {
      var error = new Error();
      if (!error.stack) {
        // IE10+ special cases: It does have callstack info, but it is only populated if an Error object is thrown,
        // so try that as a special-case.
        try {
          throw new Error();
        } catch(e) {
          error = e;
        }
        if (!error.stack) {
          return '(no stack trace available)';
        }
      }
      return error.stack.toString();
    }

  function stackTrace() {
      var js = jsStackTrace();
      if (Module['extraStackTrace']) js += '\n' + Module['extraStackTrace']();
      return demangleAll(js);
    }

  var ExceptionInfoAttrs={DESTRUCTOR_OFFSET:0,REFCOUNT_OFFSET:4,TYPE_OFFSET:8,CAUGHT_OFFSET:12,RETHROWN_OFFSET:13,SIZE:16};
  function ___cxa_allocate_exception(size) {
      // Thrown object is prepended by exception metadata block
      return _malloc(size + ExceptionInfoAttrs.SIZE) + ExceptionInfoAttrs.SIZE;
    }

  function ExceptionInfo(excPtr) {
      this.excPtr = excPtr;
      this.ptr = excPtr - ExceptionInfoAttrs.SIZE;
  
      this.set_type = function(type) {
        HEAP32[(((this.ptr)+(ExceptionInfoAttrs.TYPE_OFFSET))>>2)]=type;
      };
  
      this.get_type = function() {
        return HEAP32[(((this.ptr)+(ExceptionInfoAttrs.TYPE_OFFSET))>>2)];
      };
  
      this.set_destructor = function(destructor) {
        HEAP32[(((this.ptr)+(ExceptionInfoAttrs.DESTRUCTOR_OFFSET))>>2)]=destructor;
      };
  
      this.get_destructor = function() {
        return HEAP32[(((this.ptr)+(ExceptionInfoAttrs.DESTRUCTOR_OFFSET))>>2)];
      };
  
      this.set_refcount = function(refcount) {
        HEAP32[(((this.ptr)+(ExceptionInfoAttrs.REFCOUNT_OFFSET))>>2)]=refcount;
      };
  
      this.set_caught = function (caught) {
        caught = caught ? 1 : 0;
        HEAP8[(((this.ptr)+(ExceptionInfoAttrs.CAUGHT_OFFSET))>>0)]=caught;
      };
  
      this.get_caught = function () {
        return HEAP8[(((this.ptr)+(ExceptionInfoAttrs.CAUGHT_OFFSET))>>0)] != 0;
      };
  
      this.set_rethrown = function (rethrown) {
        rethrown = rethrown ? 1 : 0;
        HEAP8[(((this.ptr)+(ExceptionInfoAttrs.RETHROWN_OFFSET))>>0)]=rethrown;
      };
  
      this.get_rethrown = function () {
        return HEAP8[(((this.ptr)+(ExceptionInfoAttrs.RETHROWN_OFFSET))>>0)] != 0;
      };
  
      // Initialize native structure fields. Should be called once after allocated.
      this.init = function(type, destructor) {
        this.set_type(type);
        this.set_destructor(destructor);
        this.set_refcount(0);
        this.set_caught(false);
        this.set_rethrown(false);
      }
  
      this.add_ref = function() {
        var value = HEAP32[(((this.ptr)+(ExceptionInfoAttrs.REFCOUNT_OFFSET))>>2)];
        HEAP32[(((this.ptr)+(ExceptionInfoAttrs.REFCOUNT_OFFSET))>>2)]=value + 1;
      };
  
      // Returns true if last reference released.
      this.release_ref = function() {
        var prev = HEAP32[(((this.ptr)+(ExceptionInfoAttrs.REFCOUNT_OFFSET))>>2)];
        HEAP32[(((this.ptr)+(ExceptionInfoAttrs.REFCOUNT_OFFSET))>>2)]=prev - 1;
        assert(prev > 0);
        return prev === 1;
      };
    }
  function CatchInfo(ptr) {
  
      this.free = function() {
        _free(this.ptr);
        this.ptr = 0;
      };
  
      this.set_base_ptr = function(basePtr) {
        HEAP32[((this.ptr)>>2)]=basePtr;
      };
  
      this.get_base_ptr = function() {
        return HEAP32[((this.ptr)>>2)];
      };
  
      this.set_adjusted_ptr = function(adjustedPtr) {
        var ptrSize = 4;
        HEAP32[(((this.ptr)+(ptrSize))>>2)]=adjustedPtr;
      };
  
      this.get_adjusted_ptr = function() {
        var ptrSize = 4;
        return HEAP32[(((this.ptr)+(ptrSize))>>2)];
      };
  
      // Get pointer which is expected to be received by catch clause in C++ code. It may be adjusted
      // when the pointer is casted to some of the exception object base classes (e.g. when virtual
      // inheritance is used). When a pointer is thrown this method should return the thrown pointer
      // itself.
      this.get_exception_ptr = function() {
        // Work around a fastcomp bug, this code is still included for some reason in a build without
        // exceptions support.
        var isPointer = ___cxa_is_pointer_type(
          this.get_exception_info().get_type());
        if (isPointer) {
          return HEAP32[((this.get_base_ptr())>>2)];
        }
        var adjusted = this.get_adjusted_ptr();
        if (adjusted !== 0) return adjusted;
        return this.get_base_ptr();
      };
  
      this.get_exception_info = function() {
        return new ExceptionInfo(this.get_base_ptr());
      };
  
      if (ptr === undefined) {
        this.ptr = _malloc(8);
        this.set_adjusted_ptr(0);
      } else {
        this.ptr = ptr;
      }
    }
  
  var exceptionCaught= [];
  
  function exception_addRef(info) {
      info.add_ref();
    }
  
  var uncaughtExceptionCount=0;
  function ___cxa_begin_catch(ptr) {
      var catchInfo = new CatchInfo(ptr);
      var info = catchInfo.get_exception_info();
      if (!info.get_caught()) {
        info.set_caught(true);
        uncaughtExceptionCount--;
      }
      info.set_rethrown(false);
      exceptionCaught.push(catchInfo);
      exception_addRef(info);
      return catchInfo.get_exception_ptr();
    }

  var exceptionLast=0;
  
  function ___cxa_free_exception(ptr) {
      try {
        return _free(new ExceptionInfo(ptr).ptr);
      } catch(e) {
        err('exception during cxa_free_exception: ' + e);
      }
    }
  function exception_decRef(info) {
      // A rethrown exception can reach refcount 0; it must not be discarded
      // Its next handler will clear the rethrown flag and addRef it, prior to
      // final decRef and destruction here
      if (info.release_ref() && !info.get_rethrown()) {
        var destructor = info.get_destructor();
        if (destructor) {
          // In Wasm, destructors return 'this' as in ARM
          wasmTable.get(destructor)(info.excPtr);
        }
        ___cxa_free_exception(info.excPtr);
      }
    }
  function ___cxa_end_catch() {
      // Clear state flag.
      _setThrew(0);
      assert(exceptionCaught.length > 0);
      // Call destructor if one is registered then clear it.
      var catchInfo = exceptionCaught.pop();
  
      exception_decRef(catchInfo.get_exception_info());
      catchInfo.free();
      exceptionLast = 0; // XXX in decRef?
    }

  function ___resumeException(catchInfoPtr) {
      var catchInfo = new CatchInfo(catchInfoPtr);
      var ptr = catchInfo.get_base_ptr();
      if (!exceptionLast) { exceptionLast = ptr; }
      catchInfo.free();
      throw ptr;
    }
  function ___cxa_find_matching_catch_2() {
      var thrown = exceptionLast;
      if (!thrown) {
        // just pass through the null ptr
        setTempRet0((0) | 0); return ((0)|0);
      }
      var info = new ExceptionInfo(thrown);
      var thrownType = info.get_type();
      var catchInfo = new CatchInfo();
      catchInfo.set_base_ptr(thrown);
      if (!thrownType) {
        // just pass through the thrown ptr
        setTempRet0((0) | 0); return ((catchInfo.ptr)|0);
      }
      var typeArray = Array.prototype.slice.call(arguments);
  
      // can_catch receives a **, add indirection
      var stackTop = stackSave();
      var exceptionThrowBuf = stackAlloc(4);
      HEAP32[((exceptionThrowBuf)>>2)]=thrown;
      // The different catch blocks are denoted by different types.
      // Due to inheritance, those types may not precisely match the
      // type of the thrown object. Find one which matches, and
      // return the type of the catch block which should be called.
      for (var i = 0; i < typeArray.length; i++) {
        var caughtType = typeArray[i];
        if (caughtType === 0 || caughtType === thrownType) {
          // Catch all clause matched or exactly the same type is caught
          break;
        }
        if (___cxa_can_catch(caughtType, thrownType, exceptionThrowBuf)) {
          var adjusted = HEAP32[((exceptionThrowBuf)>>2)];
          if (thrown !== adjusted) {
            catchInfo.set_adjusted_ptr(adjusted);
          }
          setTempRet0((caughtType) | 0); return ((catchInfo.ptr)|0);
        }
      }
      stackRestore(stackTop);
      setTempRet0((thrownType) | 0); return ((catchInfo.ptr)|0);
    }

  function ___cxa_find_matching_catch_3() {
      var thrown = exceptionLast;
      if (!thrown) {
        // just pass through the null ptr
        setTempRet0((0) | 0); return ((0)|0);
      }
      var info = new ExceptionInfo(thrown);
      var thrownType = info.get_type();
      var catchInfo = new CatchInfo();
      catchInfo.set_base_ptr(thrown);
      if (!thrownType) {
        // just pass through the thrown ptr
        setTempRet0((0) | 0); return ((catchInfo.ptr)|0);
      }
      var typeArray = Array.prototype.slice.call(arguments);
  
      // can_catch receives a **, add indirection
      var stackTop = stackSave();
      var exceptionThrowBuf = stackAlloc(4);
      HEAP32[((exceptionThrowBuf)>>2)]=thrown;
      // The different catch blocks are denoted by different types.
      // Due to inheritance, those types may not precisely match the
      // type of the thrown object. Find one which matches, and
      // return the type of the catch block which should be called.
      for (var i = 0; i < typeArray.length; i++) {
        var caughtType = typeArray[i];
        if (caughtType === 0 || caughtType === thrownType) {
          // Catch all clause matched or exactly the same type is caught
          break;
        }
        if (___cxa_can_catch(caughtType, thrownType, exceptionThrowBuf)) {
          var adjusted = HEAP32[((exceptionThrowBuf)>>2)];
          if (thrown !== adjusted) {
            catchInfo.set_adjusted_ptr(adjusted);
          }
          setTempRet0((caughtType) | 0); return ((catchInfo.ptr)|0);
        }
      }
      stackRestore(stackTop);
      setTempRet0((thrownType) | 0); return ((catchInfo.ptr)|0);
    }


  function ___cxa_throw(ptr, type, destructor) {
      var info = new ExceptionInfo(ptr);
      // Initialize ExceptionInfo content after it was allocated in __cxa_allocate_exception.
      info.init(type, destructor);
      exceptionLast = ptr;
      uncaughtExceptionCount++;
      throw ptr;
    }

  function ___cxa_uncaught_exceptions() {
      return uncaughtExceptionCount;
    }


  function getShiftFromSize(size) {
      switch (size) {
          case 1: return 0;
          case 2: return 1;
          case 4: return 2;
          case 8: return 3;
          default:
              throw new TypeError('Unknown type size: ' + size);
      }
    }
  
  function embind_init_charCodes() {
      var codes = new Array(256);
      for (var i = 0; i < 256; ++i) {
          codes[i] = String.fromCharCode(i);
      }
      embind_charCodes = codes;
    }
  var embind_charCodes=undefined;
  function readLatin1String(ptr) {
      var ret = "";
      var c = ptr;
      while (HEAPU8[c]) {
          ret += embind_charCodes[HEAPU8[c++]];
      }
      return ret;
    }
  
  var awaitingDependencies={};
  
  var registeredTypes={};
  
  var typeDependencies={};
  
  var char_0=48;
  
  var char_9=57;
  function makeLegalFunctionName(name) {
      if (undefined === name) {
          return '_unknown';
      }
      name = name.replace(/[^a-zA-Z0-9_]/g, '$');
      var f = name.charCodeAt(0);
      if (f >= char_0 && f <= char_9) {
          return '_' + name;
      } else {
          return name;
      }
    }
  function createNamedFunction(name, body) {
      name = makeLegalFunctionName(name);
      /*jshint evil:true*/
      return new Function(
          "body",
          "return function " + name + "() {\n" +
          "    \"use strict\";" +
          "    return body.apply(this, arguments);\n" +
          "};\n"
      )(body);
    }
  function extendError(baseErrorType, errorName) {
      var errorClass = createNamedFunction(errorName, function(message) {
          this.name = errorName;
          this.message = message;
  
          var stack = (new Error(message)).stack;
          if (stack !== undefined) {
              this.stack = this.toString() + '\n' +
                  stack.replace(/^Error(:[^\n]*)?\n/, '');
          }
      });
      errorClass.prototype = Object.create(baseErrorType.prototype);
      errorClass.prototype.constructor = errorClass;
      errorClass.prototype.toString = function() {
          if (this.message === undefined) {
              return this.name;
          } else {
              return this.name + ': ' + this.message;
          }
      };
  
      return errorClass;
    }
  var BindingError=undefined;
  function throwBindingError(message) {
      throw new BindingError(message);
    }
  
  var InternalError=undefined;
  function throwInternalError(message) {
      throw new InternalError(message);
    }
  function whenDependentTypesAreResolved(myTypes, dependentTypes, getTypeConverters) {
      myTypes.forEach(function(type) {
          typeDependencies[type] = dependentTypes;
      });
  
      function onComplete(typeConverters) {
          var myTypeConverters = getTypeConverters(typeConverters);
          if (myTypeConverters.length !== myTypes.length) {
              throwInternalError('Mismatched type converter count');
          }
          for (var i = 0; i < myTypes.length; ++i) {
              registerType(myTypes[i], myTypeConverters[i]);
          }
      }
  
      var typeConverters = new Array(dependentTypes.length);
      var unregisteredTypes = [];
      var registered = 0;
      dependentTypes.forEach(function(dt, i) {
          if (registeredTypes.hasOwnProperty(dt)) {
              typeConverters[i] = registeredTypes[dt];
          } else {
              unregisteredTypes.push(dt);
              if (!awaitingDependencies.hasOwnProperty(dt)) {
                  awaitingDependencies[dt] = [];
              }
              awaitingDependencies[dt].push(function() {
                  typeConverters[i] = registeredTypes[dt];
                  ++registered;
                  if (registered === unregisteredTypes.length) {
                      onComplete(typeConverters);
                  }
              });
          }
      });
      if (0 === unregisteredTypes.length) {
          onComplete(typeConverters);
      }
    }
  /** @param {Object=} options */
  function registerType(rawType, registeredInstance, options) {
      options = options || {};
  
      if (!('argPackAdvance' in registeredInstance)) {
          throw new TypeError('registerType registeredInstance requires argPackAdvance');
      }
  
      var name = registeredInstance.name;
      if (!rawType) {
          throwBindingError('type "' + name + '" must have a positive integer typeid pointer');
      }
      if (registeredTypes.hasOwnProperty(rawType)) {
          if (options.ignoreDuplicateRegistrations) {
              return;
          } else {
              throwBindingError("Cannot register type '" + name + "' twice");
          }
      }
  
      registeredTypes[rawType] = registeredInstance;
      delete typeDependencies[rawType];
  
      if (awaitingDependencies.hasOwnProperty(rawType)) {
          var callbacks = awaitingDependencies[rawType];
          delete awaitingDependencies[rawType];
          callbacks.forEach(function(cb) {
              cb();
          });
      }
    }
  function __embind_register_bool(rawType, name, size, trueValue, falseValue) {
      var shift = getShiftFromSize(size);
  
      name = readLatin1String(name);
      registerType(rawType, {
          name: name,
          'fromWireType': function(wt) {
              // ambiguous emscripten ABI: sometimes return values are
              // true or false, and sometimes integers (0 or 1)
              return !!wt;
          },
          'toWireType': function(destructors, o) {
              return o ? trueValue : falseValue;
          },
          'argPackAdvance': 8,
          'readValueFromPointer': function(pointer) {
              // TODO: if heap is fixed (like in asm.js) this could be executed outside
              var heap;
              if (size === 1) {
                  heap = HEAP8;
              } else if (size === 2) {
                  heap = HEAP16;
              } else if (size === 4) {
                  heap = HEAP32;
              } else {
                  throw new TypeError("Unknown boolean type size: " + name);
              }
              return this['fromWireType'](heap[pointer >> shift]);
          },
          destructorFunction: null, // This type does not need a destructor
      });
    }

  var emval_free_list=[];
  
  var emval_handle_array=[{},{value:undefined},{value:null},{value:true},{value:false}];
  function __emval_decref(handle) {
      if (handle > 4 && 0 === --emval_handle_array[handle].refcount) {
          emval_handle_array[handle] = undefined;
          emval_free_list.push(handle);
      }
    }
  
  function count_emval_handles() {
      var count = 0;
      for (var i = 5; i < emval_handle_array.length; ++i) {
          if (emval_handle_array[i] !== undefined) {
              ++count;
          }
      }
      return count;
    }
  
  function get_first_emval() {
      for (var i = 5; i < emval_handle_array.length; ++i) {
          if (emval_handle_array[i] !== undefined) {
              return emval_handle_array[i];
          }
      }
      return null;
    }
  function init_emval() {
      Module['count_emval_handles'] = count_emval_handles;
      Module['get_first_emval'] = get_first_emval;
    }
  function __emval_register(value) {
  
      switch(value){
        case undefined :{ return 1; }
        case null :{ return 2; }
        case true :{ return 3; }
        case false :{ return 4; }
        default:{
          var handle = emval_free_list.length ?
              emval_free_list.pop() :
              emval_handle_array.length;
  
          emval_handle_array[handle] = {refcount: 1, value: value};
          return handle;
          }
        }
    }
  
  function simpleReadValueFromPointer(pointer) {
      return this['fromWireType'](HEAPU32[pointer >> 2]);
    }
  function __embind_register_emval(rawType, name) {
      name = readLatin1String(name);
      registerType(rawType, {
          name: name,
          'fromWireType': function(handle) {
              var rv = emval_handle_array[handle].value;
              __emval_decref(handle);
              return rv;
          },
          'toWireType': function(destructors, value) {
              return __emval_register(value);
          },
          'argPackAdvance': 8,
          'readValueFromPointer': simpleReadValueFromPointer,
          destructorFunction: null, // This type does not need a destructor
  
          // TODO: do we need a deleteObject here?  write a test where
          // emval is passed into JS via an interface
      });
    }

  function _embind_repr(v) {
      if (v === null) {
          return 'null';
      }
      var t = typeof v;
      if (t === 'object' || t === 'array' || t === 'function') {
          return v.toString();
      } else {
          return '' + v;
      }
    }
  
  function floatReadValueFromPointer(name, shift) {
      switch (shift) {
          case 2: return function(pointer) {
              return this['fromWireType'](HEAPF32[pointer >> 2]);
          };
          case 3: return function(pointer) {
              return this['fromWireType'](HEAPF64[pointer >> 3]);
          };
          default:
              throw new TypeError("Unknown float type: " + name);
      }
    }
  function __embind_register_float(rawType, name, size) {
      var shift = getShiftFromSize(size);
      name = readLatin1String(name);
      registerType(rawType, {
          name: name,
          'fromWireType': function(value) {
              return value;
          },
          'toWireType': function(destructors, value) {
              // todo: Here we have an opportunity for -O3 level "unsafe" optimizations: we could
              // avoid the following if() and assume value is of proper type.
              if (typeof value !== "number" && typeof value !== "boolean") {
                  throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name);
              }
              return value;
          },
          'argPackAdvance': 8,
          'readValueFromPointer': floatReadValueFromPointer(name, shift),
          destructorFunction: null, // This type does not need a destructor
      });
    }

  function integerReadValueFromPointer(name, shift, signed) {
      // integers are quite common, so generate very specialized functions
      switch (shift) {
          case 0: return signed ?
              function readS8FromPointer(pointer) { return HEAP8[pointer]; } :
              function readU8FromPointer(pointer) { return HEAPU8[pointer]; };
          case 1: return signed ?
              function readS16FromPointer(pointer) { return HEAP16[pointer >> 1]; } :
              function readU16FromPointer(pointer) { return HEAPU16[pointer >> 1]; };
          case 2: return signed ?
              function readS32FromPointer(pointer) { return HEAP32[pointer >> 2]; } :
              function readU32FromPointer(pointer) { return HEAPU32[pointer >> 2]; };
          default:
              throw new TypeError("Unknown integer type: " + name);
      }
    }
  function __embind_register_integer(primitiveType, name, size, minRange, maxRange) {
      name = readLatin1String(name);
      if (maxRange === -1) { // LLVM doesn't have signed and unsigned 32-bit types, so u32 literals come out as 'i32 -1'. Always treat those as max u32.
          maxRange = 4294967295;
      }
  
      var shift = getShiftFromSize(size);
  
      var fromWireType = function(value) {
          return value;
      };
  
      if (minRange === 0) {
          var bitshift = 32 - 8*size;
          fromWireType = function(value) {
              return (value << bitshift) >>> bitshift;
          };
      }
  
      var isUnsignedType = (name.indexOf('unsigned') != -1);
  
      registerType(primitiveType, {
          name: name,
          'fromWireType': fromWireType,
          'toWireType': function(destructors, value) {
              // todo: Here we have an opportunity for -O3 level "unsafe" optimizations: we could
              // avoid the following two if()s and assume value is of proper type.
              if (typeof value !== "number" && typeof value !== "boolean") {
                  throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name);
              }
              if (value < minRange || value > maxRange) {
                  throw new TypeError('Passing a number "' + _embind_repr(value) + '" from JS side to C/C++ side to an argument of type "' + name + '", which is outside the valid range [' + minRange + ', ' + maxRange + ']!');
              }
              return isUnsignedType ? (value >>> 0) : (value | 0);
          },
          'argPackAdvance': 8,
          'readValueFromPointer': integerReadValueFromPointer(name, shift, minRange !== 0),
          destructorFunction: null, // This type does not need a destructor
      });
    }

  function __embind_register_memory_view(rawType, dataTypeIndex, name) {
      var typeMapping = [
          Int8Array,
          Uint8Array,
          Int16Array,
          Uint16Array,
          Int32Array,
          Uint32Array,
          Float32Array,
          Float64Array,
      ];
  
      var TA = typeMapping[dataTypeIndex];
  
      function decodeMemoryView(handle) {
          handle = handle >> 2;
          var heap = HEAPU32;
          var size = heap[handle]; // in elements
          var data = heap[handle + 1]; // byte offset into emscripten heap
          return new TA(buffer, data, size);
      }
  
      name = readLatin1String(name);
      registerType(rawType, {
          name: name,
          'fromWireType': decodeMemoryView,
          'argPackAdvance': 8,
          'readValueFromPointer': decodeMemoryView,
      }, {
          ignoreDuplicateRegistrations: true,
      });
    }

  function __embind_register_std_string(rawType, name) {
      name = readLatin1String(name);
      var stdStringIsUTF8
      //process only std::string bindings with UTF8 support, in contrast to e.g. std::basic_string<unsigned char>
      = (name === "std::string");
  
      registerType(rawType, {
          name: name,
          'fromWireType': function(value) {
              var length = HEAPU32[value >> 2];
  
              var str;
              if (stdStringIsUTF8) {
                  var decodeStartPtr = value + 4;
                  // Looping here to support possible embedded '0' bytes
                  for (var i = 0; i <= length; ++i) {
                      var currentBytePtr = value + 4 + i;
                      if (i == length || HEAPU8[currentBytePtr] == 0) {
                          var maxRead = currentBytePtr - decodeStartPtr;
                          var stringSegment = UTF8ToString(decodeStartPtr, maxRead);
                          if (str === undefined) {
                              str = stringSegment;
                          } else {
                              str += String.fromCharCode(0);
                              str += stringSegment;
                          }
                          decodeStartPtr = currentBytePtr + 1;
                      }
                  }
              } else {
                  var a = new Array(length);
                  for (var i = 0; i < length; ++i) {
                      a[i] = String.fromCharCode(HEAPU8[value + 4 + i]);
                  }
                  str = a.join('');
              }
  
              _free(value);
  
              return str;
          },
          'toWireType': function(destructors, value) {
              if (value instanceof ArrayBuffer) {
                  value = new Uint8Array(value);
              }
  
              var getLength;
              var valueIsOfTypeString = (typeof value === 'string');
  
              if (!(valueIsOfTypeString || value instanceof Uint8Array || value instanceof Uint8ClampedArray || value instanceof Int8Array)) {
                  throwBindingError('Cannot pass non-string to std::string');
              }
              if (stdStringIsUTF8 && valueIsOfTypeString) {
                  getLength = function() {return lengthBytesUTF8(value);};
              } else {
                  getLength = function() {return value.length;};
              }
  
              // assumes 4-byte alignment
              var length = getLength();
              var ptr = _malloc(4 + length + 1);
              HEAPU32[ptr >> 2] = length;
              if (stdStringIsUTF8 && valueIsOfTypeString) {
                  stringToUTF8(value, ptr + 4, length + 1);
              } else {
                  if (valueIsOfTypeString) {
                      for (var i = 0; i < length; ++i) {
                          var charCode = value.charCodeAt(i);
                          if (charCode > 255) {
                              _free(ptr);
                              throwBindingError('String has UTF-16 code units that do not fit in 8 bits');
                          }
                          HEAPU8[ptr + 4 + i] = charCode;
                      }
                  } else {
                      for (var i = 0; i < length; ++i) {
                          HEAPU8[ptr + 4 + i] = value[i];
                      }
                  }
              }
  
              if (destructors !== null) {
                  destructors.push(_free, ptr);
              }
              return ptr;
          },
          'argPackAdvance': 8,
          'readValueFromPointer': simpleReadValueFromPointer,
          destructorFunction: function(ptr) { _free(ptr); },
      });
    }

  function __embind_register_std_wstring(rawType, charSize, name) {
      name = readLatin1String(name);
      var decodeString, encodeString, getHeap, lengthBytesUTF, shift;
      if (charSize === 2) {
          decodeString = UTF16ToString;
          encodeString = stringToUTF16;
          lengthBytesUTF = lengthBytesUTF16;
          getHeap = function() { return HEAPU16; };
          shift = 1;
      } else if (charSize === 4) {
          decodeString = UTF32ToString;
          encodeString = stringToUTF32;
          lengthBytesUTF = lengthBytesUTF32;
          getHeap = function() { return HEAPU32; };
          shift = 2;
      }
      registerType(rawType, {
          name: name,
          'fromWireType': function(value) {
              // Code mostly taken from _embind_register_std_string fromWireType
              var length = HEAPU32[value >> 2];
              var HEAP = getHeap();
              var str;
  
              var decodeStartPtr = value + 4;
              // Looping here to support possible embedded '0' bytes
              for (var i = 0; i <= length; ++i) {
                  var currentBytePtr = value + 4 + i * charSize;
                  if (i == length || HEAP[currentBytePtr >> shift] == 0) {
                      var maxReadBytes = currentBytePtr - decodeStartPtr;
                      var stringSegment = decodeString(decodeStartPtr, maxReadBytes);
                      if (str === undefined) {
                          str = stringSegment;
                      } else {
                          str += String.fromCharCode(0);
                          str += stringSegment;
                      }
                      decodeStartPtr = currentBytePtr + charSize;
                  }
              }
  
              _free(value);
  
              return str;
          },
          'toWireType': function(destructors, value) {
              if (!(typeof value === 'string')) {
                  throwBindingError('Cannot pass non-string to C++ string type ' + name);
              }
  
              // assumes 4-byte alignment
              var length = lengthBytesUTF(value);
              var ptr = _malloc(4 + length + charSize);
              HEAPU32[ptr >> 2] = length >> shift;
  
              encodeString(value, ptr + 4, length + charSize);
  
              if (destructors !== null) {
                  destructors.push(_free, ptr);
              }
              return ptr;
          },
          'argPackAdvance': 8,
          'readValueFromPointer': simpleReadValueFromPointer,
          destructorFunction: function(ptr) { _free(ptr); },
      });
    }

  function __embind_register_void(rawType, name) {
      name = readLatin1String(name);
      registerType(rawType, {
          isVoid: true, // void return values can be optimized out sometimes
          name: name,
          'argPackAdvance': 0,
          'fromWireType': function() {
              return undefined;
          },
          'toWireType': function(destructors, o) {
              // TODO: assert if anything else is given?
              return undefined;
          },
      });
    }

  function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.copyWithin(dest, src, src + num);
    }

  function _emscripten_get_heap_size() {
      return HEAPU8.length;
    }
  
  function abortOnCannotGrowMemory(requestedSize) {
      abort('Cannot enlarge memory arrays to size ' + requestedSize + ' bytes (OOM). Either (1) compile with  -s INITIAL_MEMORY=X  with X higher than the current value ' + HEAP8.length + ', (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ');
    }
  function _emscripten_resize_heap(requestedSize) {
      requestedSize = requestedSize >>> 0;
      abortOnCannotGrowMemory(requestedSize);
    }

  function flush_NO_FILESYSTEM() {
      // flush anything remaining in the buffers during shutdown
      if (typeof _fflush !== 'undefined') _fflush(0);
      var buffers = SYSCALLS.buffers;
      if (buffers[1].length) SYSCALLS.printChar(1, 10);
      if (buffers[2].length) SYSCALLS.printChar(2, 10);
    }
  
  var SYSCALLS={mappings:{},buffers:[null,[],[]],printChar:function(stream, curr) {
        var buffer = SYSCALLS.buffers[stream];
        assert(buffer);
        if (curr === 0 || curr === 10) {
          (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));
          buffer.length = 0;
        } else {
          buffer.push(curr);
        }
      },varargs:undefined,get:function() {
        assert(SYSCALLS.varargs != undefined);
        SYSCALLS.varargs += 4;
        var ret = HEAP32[(((SYSCALLS.varargs)-(4))>>2)];
        return ret;
      },getStr:function(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },get64:function(low, high) {
        if (low >= 0) assert(high === 0);
        else assert(high === -1);
        return low;
      }};
  function _fd_write(fd, iov, iovcnt, pnum) {
      // hack to support printf in SYSCALLS_REQUIRE_FILESYSTEM=0
      var num = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAP32[(((iov)+(i*8))>>2)];
        var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
        for (var j = 0; j < len; j++) {
          SYSCALLS.printChar(fd, HEAPU8[ptr+j]);
        }
        num += len;
      }
      HEAP32[((pnum)>>2)]=num
      return 0;
    }

  function _getTempRet0() {
      return (getTempRet0() | 0);
    }

  function _setTempRet0($i) {
      setTempRet0(($i) | 0);
    }
embind_init_charCodes();
BindingError = Module['BindingError'] = extendError(Error, 'BindingError');;
InternalError = Module['InternalError'] = extendError(Error, 'InternalError');;
init_emval();;
var ASSERTIONS = true;



/** @type {function(string, boolean=, number=)} */
function intArrayFromString(stringy, dontAddNull, length) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
}

function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
      if (ASSERTIONS) {
        assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
      }
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}


// Copied from https://github.com/strophe/strophejs/blob/e06d027/src/polyfills.js#L149

// This code was written by Tyler Akins and has been placed in the
// public domain.  It would be nice if you left this header intact.
// Base64 code from Tyler Akins -- http://rumkin.com

/**
 * Decodes a base64 string.
 * @param {string} input The string to decode.
 */
var decodeBase64 = typeof atob === 'function' ? atob : function (input) {
  var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

  var output = '';
  var chr1, chr2, chr3;
  var enc1, enc2, enc3, enc4;
  var i = 0;
  // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
  do {
    enc1 = keyStr.indexOf(input.charAt(i++));
    enc2 = keyStr.indexOf(input.charAt(i++));
    enc3 = keyStr.indexOf(input.charAt(i++));
    enc4 = keyStr.indexOf(input.charAt(i++));

    chr1 = (enc1 << 2) | (enc2 >> 4);
    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
    chr3 = ((enc3 & 3) << 6) | enc4;

    output = output + String.fromCharCode(chr1);

    if (enc3 !== 64) {
      output = output + String.fromCharCode(chr2);
    }
    if (enc4 !== 64) {
      output = output + String.fromCharCode(chr3);
    }
  } while (i < input.length);
  return output;
};

// Converts a string of base64 into a byte array.
// Throws error on invalid input.
function intArrayFromBase64(s) {
  if (typeof ENVIRONMENT_IS_NODE === 'boolean' && ENVIRONMENT_IS_NODE) {
    var buf;
    try {
      // TODO: Update Node.js externs, Closure does not recognize the following Buffer.from()
      /**@suppress{checkTypes}*/
      buf = Buffer.from(s, 'base64');
    } catch (_) {
      buf = new Buffer(s, 'base64');
    }
    return new Uint8Array(buf['buffer'], buf['byteOffset'], buf['byteLength']);
  }

  try {
    var decoded = decodeBase64(s);
    var bytes = new Uint8Array(decoded.length);
    for (var i = 0 ; i < decoded.length ; ++i) {
      bytes[i] = decoded.charCodeAt(i);
    }
    return bytes;
  } catch (_) {
    throw new Error('Converting base64 string to bytes failed.');
  }
}

// If filename is a base64 data URI, parses and returns data (Buffer on node,
// Uint8Array otherwise). If filename is not a base64 data URI, returns undefined.
function tryParseAsDataURI(filename) {
  if (!isDataURI(filename)) {
    return;
  }

  return intArrayFromBase64(filename.slice(dataURIPrefix.length));
}



__ATINIT__.push({ func: function() { ___wasm_call_ctors() } });
var asmLibraryArg = {
  "__cxa_allocate_exception": ___cxa_allocate_exception,
  "__cxa_begin_catch": ___cxa_begin_catch,
  "__cxa_end_catch": ___cxa_end_catch,
  "__cxa_find_matching_catch_2": ___cxa_find_matching_catch_2,
  "__cxa_find_matching_catch_3": ___cxa_find_matching_catch_3,
  "__cxa_free_exception": ___cxa_free_exception,
  "__cxa_throw": ___cxa_throw,
  "__cxa_uncaught_exceptions": ___cxa_uncaught_exceptions,
  "__resumeException": ___resumeException,
  "_embind_register_bool": __embind_register_bool,
  "_embind_register_emval": __embind_register_emval,
  "_embind_register_float": __embind_register_float,
  "_embind_register_integer": __embind_register_integer,
  "_embind_register_memory_view": __embind_register_memory_view,
  "_embind_register_std_string": __embind_register_std_string,
  "_embind_register_std_wstring": __embind_register_std_wstring,
  "_embind_register_void": __embind_register_void,
  "emscripten_memcpy_big": _emscripten_memcpy_big,
  "emscripten_resize_heap": _emscripten_resize_heap,
  "fd_write": _fd_write,
  "getTempRet0": _getTempRet0,
  "invoke_i": invoke_i,
  "invoke_iii": invoke_iii,
  "invoke_v": invoke_v,
  "invoke_vii": invoke_vii,
  "invoke_viid": invoke_viid,
  "invoke_viii": invoke_viii,
  "setTempRet0": _setTempRet0
};
var asm = createWasm();
/** @type {function(...*):?} */
var ___wasm_call_ctors = Module["___wasm_call_ctors"] = createExportWrapper("__wasm_call_ctors");

/** @type {function(...*):?} */
var _linvels = Module["_linvels"] = createExportWrapper("linvels");

/** @type {function(...*):?} */
var _generate = Module["_generate"] = createExportWrapper("generate");

/** @type {function(...*):?} */
var ___getTypeName = Module["___getTypeName"] = createExportWrapper("__getTypeName");

/** @type {function(...*):?} */
var ___embind_register_native_and_builtin_types = Module["___embind_register_native_and_builtin_types"] = createExportWrapper("__embind_register_native_and_builtin_types");

/** @type {function(...*):?} */
var ___errno_location = Module["___errno_location"] = createExportWrapper("__errno_location");

/** @type {function(...*):?} */
var _malloc = Module["_malloc"] = createExportWrapper("malloc");

/** @type {function(...*):?} */
var _fflush = Module["_fflush"] = createExportWrapper("fflush");

/** @type {function(...*):?} */
var stackSave = Module["stackSave"] = createExportWrapper("stackSave");

/** @type {function(...*):?} */
var stackRestore = Module["stackRestore"] = createExportWrapper("stackRestore");

/** @type {function(...*):?} */
var stackAlloc = Module["stackAlloc"] = createExportWrapper("stackAlloc");

/** @type {function(...*):?} */
var _emscripten_stack_init = Module["_emscripten_stack_init"] = function() {
  return (_emscripten_stack_init = Module["_emscripten_stack_init"] = Module["asm"]["emscripten_stack_init"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _emscripten_stack_get_free = Module["_emscripten_stack_get_free"] = function() {
  return (_emscripten_stack_get_free = Module["_emscripten_stack_get_free"] = Module["asm"]["emscripten_stack_get_free"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _emscripten_stack_get_end = Module["_emscripten_stack_get_end"] = function() {
  return (_emscripten_stack_get_end = Module["_emscripten_stack_get_end"] = Module["asm"]["emscripten_stack_get_end"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _setThrew = Module["_setThrew"] = createExportWrapper("setThrew");

/** @type {function(...*):?} */
var __ZSt18uncaught_exceptionv = Module["__ZSt18uncaught_exceptionv"] = createExportWrapper("_ZSt18uncaught_exceptionv");

/** @type {function(...*):?} */
var _free = Module["_free"] = createExportWrapper("free");

/** @type {function(...*):?} */
var dynCall_jiji = Module["dynCall_jiji"] = createExportWrapper("dynCall_jiji");


function invoke_vii(index,a1,a2) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_v(index) {
  var sp = stackSave();
  try {
    wasmTable.get(index)();
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_iii(index,a1,a2) {
  var sp = stackSave();
  try {
    return wasmTable.get(index)(a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_i(index) {
  var sp = stackSave();
  try {
    return wasmTable.get(index)();
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viii(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viid(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}




// === Auto-generated postamble setup entry stuff ===

if (!Object.getOwnPropertyDescriptor(Module, "intArrayFromString")) Module["intArrayFromString"] = function() { abort("'intArrayFromString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "intArrayToString")) Module["intArrayToString"] = function() { abort("'intArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
Module["ccall"] = ccall;
Module["cwrap"] = cwrap;
if (!Object.getOwnPropertyDescriptor(Module, "setValue")) Module["setValue"] = function() { abort("'setValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getValue")) Module["getValue"] = function() { abort("'getValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "allocate")) Module["allocate"] = function() { abort("'allocate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UTF8ArrayToString")) Module["UTF8ArrayToString"] = function() { abort("'UTF8ArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UTF8ToString")) Module["UTF8ToString"] = function() { abort("'UTF8ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF8Array")) Module["stringToUTF8Array"] = function() { abort("'stringToUTF8Array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF8")) Module["stringToUTF8"] = function() { abort("'stringToUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF8")) Module["lengthBytesUTF8"] = function() { abort("'lengthBytesUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackTrace")) Module["stackTrace"] = function() { abort("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnPreRun")) Module["addOnPreRun"] = function() { abort("'addOnPreRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnInit")) Module["addOnInit"] = function() { abort("'addOnInit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnPreMain")) Module["addOnPreMain"] = function() { abort("'addOnPreMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnExit")) Module["addOnExit"] = function() { abort("'addOnExit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnPostRun")) Module["addOnPostRun"] = function() { abort("'addOnPostRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeStringToMemory")) Module["writeStringToMemory"] = function() { abort("'writeStringToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeArrayToMemory")) Module["writeArrayToMemory"] = function() { abort("'writeArrayToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeAsciiToMemory")) Module["writeAsciiToMemory"] = function() { abort("'writeAsciiToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addRunDependency")) Module["addRunDependency"] = function() { abort("'addRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "removeRunDependency")) Module["removeRunDependency"] = function() { abort("'removeRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createFolder")) Module["FS_createFolder"] = function() { abort("'FS_createFolder' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createPath")) Module["FS_createPath"] = function() { abort("'FS_createPath' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createDataFile")) Module["FS_createDataFile"] = function() { abort("'FS_createDataFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createPreloadedFile")) Module["FS_createPreloadedFile"] = function() { abort("'FS_createPreloadedFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createLazyFile")) Module["FS_createLazyFile"] = function() { abort("'FS_createLazyFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createLink")) Module["FS_createLink"] = function() { abort("'FS_createLink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createDevice")) Module["FS_createDevice"] = function() { abort("'FS_createDevice' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_unlink")) Module["FS_unlink"] = function() { abort("'FS_unlink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "getLEB")) Module["getLEB"] = function() { abort("'getLEB' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getFunctionTables")) Module["getFunctionTables"] = function() { abort("'getFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "alignFunctionTables")) Module["alignFunctionTables"] = function() { abort("'alignFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerFunctions")) Module["registerFunctions"] = function() { abort("'registerFunctions' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addFunction")) Module["addFunction"] = function() { abort("'addFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "removeFunction")) Module["removeFunction"] = function() { abort("'removeFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getFuncWrapper")) Module["getFuncWrapper"] = function() { abort("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "prettyPrint")) Module["prettyPrint"] = function() { abort("'prettyPrint' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "makeBigInt")) Module["makeBigInt"] = function() { abort("'makeBigInt' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "dynCall")) Module["dynCall"] = function() { abort("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getCompilerSetting")) Module["getCompilerSetting"] = function() { abort("'getCompilerSetting' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "print")) Module["print"] = function() { abort("'print' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "printErr")) Module["printErr"] = function() { abort("'printErr' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getTempRet0")) Module["getTempRet0"] = function() { abort("'getTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setTempRet0")) Module["setTempRet0"] = function() { abort("'setTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "callMain")) Module["callMain"] = function() { abort("'callMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "abort")) Module["abort"] = function() { abort("'abort' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToNewUTF8")) Module["stringToNewUTF8"] = function() { abort("'stringToNewUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setFileTime")) Module["setFileTime"] = function() { abort("'setFileTime' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "abortOnCannotGrowMemory")) Module["abortOnCannotGrowMemory"] = function() { abort("'abortOnCannotGrowMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscripten_realloc_buffer")) Module["emscripten_realloc_buffer"] = function() { abort("'emscripten_realloc_buffer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ENV")) Module["ENV"] = function() { abort("'ENV' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_CODES")) Module["ERRNO_CODES"] = function() { abort("'ERRNO_CODES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_MESSAGES")) Module["ERRNO_MESSAGES"] = function() { abort("'ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setErrNo")) Module["setErrNo"] = function() { abort("'setErrNo' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "DNS")) Module["DNS"] = function() { abort("'DNS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getHostByName")) Module["getHostByName"] = function() { abort("'getHostByName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GAI_ERRNO_MESSAGES")) Module["GAI_ERRNO_MESSAGES"] = function() { abort("'GAI_ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "Protocols")) Module["Protocols"] = function() { abort("'Protocols' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "Sockets")) Module["Sockets"] = function() { abort("'Sockets' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getRandomDevice")) Module["getRandomDevice"] = function() { abort("'getRandomDevice' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "traverseStack")) Module["traverseStack"] = function() { abort("'traverseStack' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UNWIND_CACHE")) Module["UNWIND_CACHE"] = function() { abort("'UNWIND_CACHE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "withBuiltinMalloc")) Module["withBuiltinMalloc"] = function() { abort("'withBuiltinMalloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readAsmConstArgsArray")) Module["readAsmConstArgsArray"] = function() { abort("'readAsmConstArgsArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readAsmConstArgs")) Module["readAsmConstArgs"] = function() { abort("'readAsmConstArgs' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "mainThreadEM_ASM")) Module["mainThreadEM_ASM"] = function() { abort("'mainThreadEM_ASM' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "jstoi_q")) Module["jstoi_q"] = function() { abort("'jstoi_q' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "jstoi_s")) Module["jstoi_s"] = function() { abort("'jstoi_s' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getExecutableName")) Module["getExecutableName"] = function() { abort("'getExecutableName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "listenOnce")) Module["listenOnce"] = function() { abort("'listenOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "autoResumeAudioContext")) Module["autoResumeAudioContext"] = function() { abort("'autoResumeAudioContext' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "dynCallLegacy")) Module["dynCallLegacy"] = function() { abort("'dynCallLegacy' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getDynCaller")) Module["getDynCaller"] = function() { abort("'getDynCaller' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "dynCall")) Module["dynCall"] = function() { abort("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "callRuntimeCallbacks")) Module["callRuntimeCallbacks"] = function() { abort("'callRuntimeCallbacks' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "abortStackOverflow")) Module["abortStackOverflow"] = function() { abort("'abortStackOverflow' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "reallyNegative")) Module["reallyNegative"] = function() { abort("'reallyNegative' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "unSign")) Module["unSign"] = function() { abort("'unSign' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "reSign")) Module["reSign"] = function() { abort("'reSign' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "formatString")) Module["formatString"] = function() { abort("'formatString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "PATH")) Module["PATH"] = function() { abort("'PATH' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "PATH_FS")) Module["PATH_FS"] = function() { abort("'PATH_FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SYSCALLS")) Module["SYSCALLS"] = function() { abort("'SYSCALLS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "syscallMmap2")) Module["syscallMmap2"] = function() { abort("'syscallMmap2' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "syscallMunmap")) Module["syscallMunmap"] = function() { abort("'syscallMunmap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "JSEvents")) Module["JSEvents"] = function() { abort("'JSEvents' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "specialHTMLTargets")) Module["specialHTMLTargets"] = function() { abort("'specialHTMLTargets' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "maybeCStringToJsString")) Module["maybeCStringToJsString"] = function() { abort("'maybeCStringToJsString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "findEventTarget")) Module["findEventTarget"] = function() { abort("'findEventTarget' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "findCanvasEventTarget")) Module["findCanvasEventTarget"] = function() { abort("'findCanvasEventTarget' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "polyfillSetImmediate")) Module["polyfillSetImmediate"] = function() { abort("'polyfillSetImmediate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "demangle")) Module["demangle"] = function() { abort("'demangle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "demangleAll")) Module["demangleAll"] = function() { abort("'demangleAll' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "jsStackTrace")) Module["jsStackTrace"] = function() { abort("'jsStackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackTrace")) Module["stackTrace"] = function() { abort("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getEnvStrings")) Module["getEnvStrings"] = function() { abort("'getEnvStrings' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "checkWasiClock")) Module["checkWasiClock"] = function() { abort("'checkWasiClock' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "flush_NO_FILESYSTEM")) Module["flush_NO_FILESYSTEM"] = function() { abort("'flush_NO_FILESYSTEM' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64")) Module["writeI53ToI64"] = function() { abort("'writeI53ToI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Clamped")) Module["writeI53ToI64Clamped"] = function() { abort("'writeI53ToI64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Signaling")) Module["writeI53ToI64Signaling"] = function() { abort("'writeI53ToI64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Clamped")) Module["writeI53ToU64Clamped"] = function() { abort("'writeI53ToU64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Signaling")) Module["writeI53ToU64Signaling"] = function() { abort("'writeI53ToU64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readI53FromI64")) Module["readI53FromI64"] = function() { abort("'readI53FromI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readI53FromU64")) Module["readI53FromU64"] = function() { abort("'readI53FromU64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "convertI32PairToI53")) Module["convertI32PairToI53"] = function() { abort("'convertI32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "convertU32PairToI53")) Module["convertU32PairToI53"] = function() { abort("'convertU32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "uncaughtExceptionCount")) Module["uncaughtExceptionCount"] = function() { abort("'uncaughtExceptionCount' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "exceptionLast")) Module["exceptionLast"] = function() { abort("'exceptionLast' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "exceptionCaught")) Module["exceptionCaught"] = function() { abort("'exceptionCaught' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ExceptionInfoAttrs")) Module["ExceptionInfoAttrs"] = function() { abort("'ExceptionInfoAttrs' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ExceptionInfo")) Module["ExceptionInfo"] = function() { abort("'ExceptionInfo' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "CatchInfo")) Module["CatchInfo"] = function() { abort("'CatchInfo' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "exception_addRef")) Module["exception_addRef"] = function() { abort("'exception_addRef' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "exception_decRef")) Module["exception_decRef"] = function() { abort("'exception_decRef' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "Browser")) Module["Browser"] = function() { abort("'Browser' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "funcWrappers")) Module["funcWrappers"] = function() { abort("'funcWrappers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getFuncWrapper")) Module["getFuncWrapper"] = function() { abort("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setMainLoop")) Module["setMainLoop"] = function() { abort("'setMainLoop' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "FS")) Module["FS"] = function() { abort("'FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "mmapAlloc")) Module["mmapAlloc"] = function() { abort("'mmapAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "MEMFS")) Module["MEMFS"] = function() { abort("'MEMFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "TTY")) Module["TTY"] = function() { abort("'TTY' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "PIPEFS")) Module["PIPEFS"] = function() { abort("'PIPEFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SOCKFS")) Module["SOCKFS"] = function() { abort("'SOCKFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "tempFixedLengthArray")) Module["tempFixedLengthArray"] = function() { abort("'tempFixedLengthArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "miniTempWebGLFloatBuffers")) Module["miniTempWebGLFloatBuffers"] = function() { abort("'miniTempWebGLFloatBuffers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "heapObjectForWebGLType")) Module["heapObjectForWebGLType"] = function() { abort("'heapObjectForWebGLType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "heapAccessShiftForWebGLHeap")) Module["heapAccessShiftForWebGLHeap"] = function() { abort("'heapAccessShiftForWebGLHeap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GL")) Module["GL"] = function() { abort("'GL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGet")) Module["emscriptenWebGLGet"] = function() { abort("'emscriptenWebGLGet' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "computeUnpackAlignedImageSize")) Module["computeUnpackAlignedImageSize"] = function() { abort("'computeUnpackAlignedImageSize' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetTexPixelData")) Module["emscriptenWebGLGetTexPixelData"] = function() { abort("'emscriptenWebGLGetTexPixelData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetUniform")) Module["emscriptenWebGLGetUniform"] = function() { abort("'emscriptenWebGLGetUniform' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetVertexAttrib")) Module["emscriptenWebGLGetVertexAttrib"] = function() { abort("'emscriptenWebGLGetVertexAttrib' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeGLArray")) Module["writeGLArray"] = function() { abort("'writeGLArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "AL")) Module["AL"] = function() { abort("'AL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_unicode")) Module["SDL_unicode"] = function() { abort("'SDL_unicode' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_ttfContext")) Module["SDL_ttfContext"] = function() { abort("'SDL_ttfContext' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_audio")) Module["SDL_audio"] = function() { abort("'SDL_audio' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL")) Module["SDL"] = function() { abort("'SDL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_gfx")) Module["SDL_gfx"] = function() { abort("'SDL_gfx' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLUT")) Module["GLUT"] = function() { abort("'GLUT' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "EGL")) Module["EGL"] = function() { abort("'EGL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLFW_Window")) Module["GLFW_Window"] = function() { abort("'GLFW_Window' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLFW")) Module["GLFW"] = function() { abort("'GLFW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLEW")) Module["GLEW"] = function() { abort("'GLEW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "IDBStore")) Module["IDBStore"] = function() { abort("'IDBStore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "runAndAbortIfError")) Module["runAndAbortIfError"] = function() { abort("'runAndAbortIfError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emval_handle_array")) Module["emval_handle_array"] = function() { abort("'emval_handle_array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emval_free_list")) Module["emval_free_list"] = function() { abort("'emval_free_list' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emval_symbols")) Module["emval_symbols"] = function() { abort("'emval_symbols' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "init_emval")) Module["init_emval"] = function() { abort("'init_emval' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "count_emval_handles")) Module["count_emval_handles"] = function() { abort("'count_emval_handles' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "get_first_emval")) Module["get_first_emval"] = function() { abort("'get_first_emval' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getStringOrSymbol")) Module["getStringOrSymbol"] = function() { abort("'getStringOrSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "requireHandle")) Module["requireHandle"] = function() { abort("'requireHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emval_newers")) Module["emval_newers"] = function() { abort("'emval_newers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "craftEmvalAllocator")) Module["craftEmvalAllocator"] = function() { abort("'craftEmvalAllocator' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emval_get_global")) Module["emval_get_global"] = function() { abort("'emval_get_global' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emval_methodCallers")) Module["emval_methodCallers"] = function() { abort("'emval_methodCallers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "InternalError")) Module["InternalError"] = function() { abort("'InternalError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "BindingError")) Module["BindingError"] = function() { abort("'BindingError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UnboundTypeError")) Module["UnboundTypeError"] = function() { abort("'UnboundTypeError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "PureVirtualError")) Module["PureVirtualError"] = function() { abort("'PureVirtualError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "init_embind")) Module["init_embind"] = function() { abort("'init_embind' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "throwInternalError")) Module["throwInternalError"] = function() { abort("'throwInternalError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "throwBindingError")) Module["throwBindingError"] = function() { abort("'throwBindingError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "throwUnboundTypeError")) Module["throwUnboundTypeError"] = function() { abort("'throwUnboundTypeError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ensureOverloadTable")) Module["ensureOverloadTable"] = function() { abort("'ensureOverloadTable' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "exposePublicSymbol")) Module["exposePublicSymbol"] = function() { abort("'exposePublicSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "replacePublicSymbol")) Module["replacePublicSymbol"] = function() { abort("'replacePublicSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "extendError")) Module["extendError"] = function() { abort("'extendError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "createNamedFunction")) Module["createNamedFunction"] = function() { abort("'createNamedFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registeredInstances")) Module["registeredInstances"] = function() { abort("'registeredInstances' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getBasestPointer")) Module["getBasestPointer"] = function() { abort("'getBasestPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerInheritedInstance")) Module["registerInheritedInstance"] = function() { abort("'registerInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "unregisterInheritedInstance")) Module["unregisterInheritedInstance"] = function() { abort("'unregisterInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getInheritedInstance")) Module["getInheritedInstance"] = function() { abort("'getInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getInheritedInstanceCount")) Module["getInheritedInstanceCount"] = function() { abort("'getInheritedInstanceCount' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getLiveInheritedInstances")) Module["getLiveInheritedInstances"] = function() { abort("'getLiveInheritedInstances' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registeredTypes")) Module["registeredTypes"] = function() { abort("'registeredTypes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "awaitingDependencies")) Module["awaitingDependencies"] = function() { abort("'awaitingDependencies' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "typeDependencies")) Module["typeDependencies"] = function() { abort("'typeDependencies' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registeredPointers")) Module["registeredPointers"] = function() { abort("'registeredPointers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerType")) Module["registerType"] = function() { abort("'registerType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "whenDependentTypesAreResolved")) Module["whenDependentTypesAreResolved"] = function() { abort("'whenDependentTypesAreResolved' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "embind_charCodes")) Module["embind_charCodes"] = function() { abort("'embind_charCodes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "embind_init_charCodes")) Module["embind_init_charCodes"] = function() { abort("'embind_init_charCodes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readLatin1String")) Module["readLatin1String"] = function() { abort("'readLatin1String' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getTypeName")) Module["getTypeName"] = function() { abort("'getTypeName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "heap32VectorToArray")) Module["heap32VectorToArray"] = function() { abort("'heap32VectorToArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "requireRegisteredType")) Module["requireRegisteredType"] = function() { abort("'requireRegisteredType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getShiftFromSize")) Module["getShiftFromSize"] = function() { abort("'getShiftFromSize' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "integerReadValueFromPointer")) Module["integerReadValueFromPointer"] = function() { abort("'integerReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "enumReadValueFromPointer")) Module["enumReadValueFromPointer"] = function() { abort("'enumReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "floatReadValueFromPointer")) Module["floatReadValueFromPointer"] = function() { abort("'floatReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "simpleReadValueFromPointer")) Module["simpleReadValueFromPointer"] = function() { abort("'simpleReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "runDestructors")) Module["runDestructors"] = function() { abort("'runDestructors' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "new_")) Module["new_"] = function() { abort("'new_' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "craftInvokerFunction")) Module["craftInvokerFunction"] = function() { abort("'craftInvokerFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "embind__requireFunction")) Module["embind__requireFunction"] = function() { abort("'embind__requireFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "tupleRegistrations")) Module["tupleRegistrations"] = function() { abort("'tupleRegistrations' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "structRegistrations")) Module["structRegistrations"] = function() { abort("'structRegistrations' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "genericPointerToWireType")) Module["genericPointerToWireType"] = function() { abort("'genericPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "constNoSmartPtrRawPointerToWireType")) Module["constNoSmartPtrRawPointerToWireType"] = function() { abort("'constNoSmartPtrRawPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "nonConstNoSmartPtrRawPointerToWireType")) Module["nonConstNoSmartPtrRawPointerToWireType"] = function() { abort("'nonConstNoSmartPtrRawPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "init_RegisteredPointer")) Module["init_RegisteredPointer"] = function() { abort("'init_RegisteredPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer")) Module["RegisteredPointer"] = function() { abort("'RegisteredPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_getPointee")) Module["RegisteredPointer_getPointee"] = function() { abort("'RegisteredPointer_getPointee' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_destructor")) Module["RegisteredPointer_destructor"] = function() { abort("'RegisteredPointer_destructor' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_deleteObject")) Module["RegisteredPointer_deleteObject"] = function() { abort("'RegisteredPointer_deleteObject' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_fromWireType")) Module["RegisteredPointer_fromWireType"] = function() { abort("'RegisteredPointer_fromWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "runDestructor")) Module["runDestructor"] = function() { abort("'runDestructor' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "releaseClassHandle")) Module["releaseClassHandle"] = function() { abort("'releaseClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "finalizationGroup")) Module["finalizationGroup"] = function() { abort("'finalizationGroup' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "detachFinalizer_deps")) Module["detachFinalizer_deps"] = function() { abort("'detachFinalizer_deps' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "detachFinalizer")) Module["detachFinalizer"] = function() { abort("'detachFinalizer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "attachFinalizer")) Module["attachFinalizer"] = function() { abort("'attachFinalizer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "makeClassHandle")) Module["makeClassHandle"] = function() { abort("'makeClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "init_ClassHandle")) Module["init_ClassHandle"] = function() { abort("'init_ClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle")) Module["ClassHandle"] = function() { abort("'ClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_isAliasOf")) Module["ClassHandle_isAliasOf"] = function() { abort("'ClassHandle_isAliasOf' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "throwInstanceAlreadyDeleted")) Module["throwInstanceAlreadyDeleted"] = function() { abort("'throwInstanceAlreadyDeleted' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_clone")) Module["ClassHandle_clone"] = function() { abort("'ClassHandle_clone' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_delete")) Module["ClassHandle_delete"] = function() { abort("'ClassHandle_delete' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "deletionQueue")) Module["deletionQueue"] = function() { abort("'deletionQueue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_isDeleted")) Module["ClassHandle_isDeleted"] = function() { abort("'ClassHandle_isDeleted' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_deleteLater")) Module["ClassHandle_deleteLater"] = function() { abort("'ClassHandle_deleteLater' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "flushPendingDeletes")) Module["flushPendingDeletes"] = function() { abort("'flushPendingDeletes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "delayFunction")) Module["delayFunction"] = function() { abort("'delayFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setDelayFunction")) Module["setDelayFunction"] = function() { abort("'setDelayFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "RegisteredClass")) Module["RegisteredClass"] = function() { abort("'RegisteredClass' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "shallowCopyInternalPointer")) Module["shallowCopyInternalPointer"] = function() { abort("'shallowCopyInternalPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "downcastPointer")) Module["downcastPointer"] = function() { abort("'downcastPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "upcastPointer")) Module["upcastPointer"] = function() { abort("'upcastPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "validateThis")) Module["validateThis"] = function() { abort("'validateThis' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "char_0")) Module["char_0"] = function() { abort("'char_0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "char_9")) Module["char_9"] = function() { abort("'char_9' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "makeLegalFunctionName")) Module["makeLegalFunctionName"] = function() { abort("'makeLegalFunctionName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "warnOnce")) Module["warnOnce"] = function() { abort("'warnOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackSave")) Module["stackSave"] = function() { abort("'stackSave' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackRestore")) Module["stackRestore"] = function() { abort("'stackRestore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackAlloc")) Module["stackAlloc"] = function() { abort("'stackAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "AsciiToString")) Module["AsciiToString"] = function() { abort("'AsciiToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToAscii")) Module["stringToAscii"] = function() { abort("'stringToAscii' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UTF16ToString")) Module["UTF16ToString"] = function() { abort("'UTF16ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF16")) Module["stringToUTF16"] = function() { abort("'stringToUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF16")) Module["lengthBytesUTF16"] = function() { abort("'lengthBytesUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UTF32ToString")) Module["UTF32ToString"] = function() { abort("'UTF32ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF32")) Module["stringToUTF32"] = function() { abort("'stringToUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF32")) Module["lengthBytesUTF32"] = function() { abort("'lengthBytesUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8")) Module["allocateUTF8"] = function() { abort("'allocateUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8OnStack")) Module["allocateUTF8OnStack"] = function() { abort("'allocateUTF8OnStack' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
Module["writeStackCookie"] = writeStackCookie;
Module["checkStackCookie"] = checkStackCookie;
if (!Object.getOwnPropertyDescriptor(Module, "intArrayFromBase64")) Module["intArrayFromBase64"] = function() { abort("'intArrayFromBase64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "tryParseAsDataURI")) Module["tryParseAsDataURI"] = function() { abort("'tryParseAsDataURI' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_NORMAL")) Object.defineProperty(Module, "ALLOC_NORMAL", { configurable: true, get: function() { abort("'ALLOC_NORMAL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") } });
if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_STACK")) Object.defineProperty(Module, "ALLOC_STACK", { configurable: true, get: function() { abort("'ALLOC_STACK' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") } });

var calledRun;

/**
 * @constructor
 * @this {ExitStatus}
 */
function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + status + ")";
  this.status = status;
}

var calledMain = false;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!calledRun) run();
  if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
};

/** @type {function(Array=)} */
function run(args) {
  args = args || arguments_;

  if (runDependencies > 0) {
    return;
  }

  // This is normally called automatically during __wasm_call_ctors but need to
  // get these values before even running any of the ctors so we call it redundantly
  // here.
  // TODO(sbc): Move writeStackCookie to native to to avoid this.
  _emscripten_stack_init();
  writeStackCookie();

  preRun();

  if (runDependencies > 0) return; // a preRun added a dependency, run will be called later

  function doRun() {
    // run may have just been called through dependencies being fulfilled just in this very frame,
    // or while the async setStatus time below was happening
    if (calledRun) return;
    calledRun = true;
    Module['calledRun'] = true;

    if (ABORT) return;

    initRuntime();

    preMain();

    readyPromiseResolve(Module);
    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

    assert(!Module['_main'], 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else
  {
    doRun();
  }
  checkStackCookie();
}
Module['run'] = run;

function checkUnflushedContent() {
  // Compiler settings do not allow exiting the runtime, so flushing
  // the streams is not possible. but in ASSERTIONS mode we check
  // if there was something to flush, and if so tell the user they
  // should request that the runtime be exitable.
  // Normally we would not even include flush() at all, but in ASSERTIONS
  // builds we do so just for this check, and here we see if there is any
  // content to flush, that is, we check if there would have been
  // something a non-ASSERTIONS build would have not seen.
  // How we flush the streams depends on whether we are in SYSCALLS_REQUIRE_FILESYSTEM=0
  // mode (which has its own special function for this; otherwise, all
  // the code is inside libc)
  var oldOut = out;
  var oldErr = err;
  var has = false;
  out = err = function(x) {
    has = true;
  }
  try { // it doesn't matter if it fails
    var flush = flush_NO_FILESYSTEM;
    if (flush) flush();
  } catch(e) {}
  out = oldOut;
  err = oldErr;
  if (has) {
    warnOnce('stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the FAQ), or make sure to emit a newline when you printf etc.');
    warnOnce('(this may also be due to not including full filesystem support - try building with -s FORCE_FILESYSTEM=1)');
  }
}

/** @param {boolean|number=} implicit */
function exit(status, implicit) {
  checkUnflushedContent();

  // if this is just main exit-ing implicitly, and the status is 0, then we
  // don't need to do anything here and can just leave. if the status is
  // non-zero, though, then we need to report it.
  // (we may have warned about this earlier, if a situation justifies doing so)
  if (implicit && noExitRuntime && status === 0) {
    return;
  }

  if (noExitRuntime) {
    // if exit() was called, we may warn the user if the runtime isn't actually being shut down
    if (!implicit) {
      var msg = 'program exited (with status: ' + status + '), but EXIT_RUNTIME is not set, so halting execution but not exiting the runtime or preventing further async execution (build with EXIT_RUNTIME=1, if you want a true shutdown)';
      readyPromiseReject(msg);
      err(msg);
    }
  } else {

    EXITSTATUS = status;

    exitRuntime();

    if (Module['onExit']) Module['onExit'](status);

    ABORT = true;
  }

  quit_(status, new ExitStatus(status));
}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

noExitRuntime = true;

run();







  return squiggles.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = squiggles;
else if (typeof define === 'function' && define['amd'])
  define([], function() { return squiggles; });
else if (typeof exports === 'object')
  exports["squiggles"] = squiggles;
