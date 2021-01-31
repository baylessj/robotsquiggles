async function test({ msg, payload }) {
  console.log("testfn");
  const lib = await squiggles();
  console.log(lib.ccall("linvels"));
  console.log("testfn");
  postMessage({ msg, payload: payload });
}

async function generate({ msg, payload }) {
  console.log("testfn");
  const lib = await squiggles();
  console.log(lib.ccall("linvels"));
  console.log("testfn");
  postMessage({ msg, payload: payload });
}

/**
 *  Here we will check from time to time if we can access the Squiggles
 *  functions. We will return in a callback if it has been resolved
 *  well (true) or if there has been a timeout (false).
 */
function waitForWasm(callbackFn, waitTimeMs = 30000, stepTimeMs = 100) {
  if (squiggles) callbackFn(true);

  let timeSpentMs = 0;
  const interval = setInterval(() => {
    const limitReached = timeSpentMs > waitTimeMs;
    if (squiggles || limitReached) {
      clearInterval(interval);
      return callbackFn(!limitReached);
    } else {
      timeSpentMs += stepTimeMs;
    }
  }, stepTimeMs);
}

/**
 * This exists to capture all the events that are thrown out of the worker
 * into the worker. Without this, there would be no communication possible
 * with our project.
 */
onmessage = function (e) {
  switch (e.data.msg) {
    case "load": {
      // Import Webassembly script
      self.importScripts("./squiggles.js");
      waitForWasm(function (success) {
        if (success) postMessage({ msg: e.data.msg });
        else throw new Error("Error on loading Squiggles lib");
      });
      break;
    }
    case "asdfghjkl":
      return test(e.data);
    case "generate":
      return generate(e.data);
    default:
      break;
  }
};
