async function generate({ msg, payload }) {
  const lib = await squiggles();
  let code;
  try {
    code = lib.ccall(
      "generate",
      "number",
      [
        "number",
        "number",
        "number",
        "number",
        "number",
        "number",
        "number",
        "number",
        "number",
        "number",
        "number",
        "number",
        "number",
      ],
      [
        payload.sx,
        payload.sy,
        payload.syaw,
        payload.sv,
        payload.gx,
        payload.gy,
        payload.gyaw,
        payload.gv,
        payload.max_vel,
        payload.max_accel,
        payload.max_jerk,
        payload.track_width,
      ]
    );
  } catch (e) {
    code = 1;
  }
  postMessage({ msg, payload: code });
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
    case "generate":
      return generate(e.data);
    default:
      break;
  }
};
