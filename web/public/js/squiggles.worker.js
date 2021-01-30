/**
 * With OpenCV we have to work the images as cv.Mat (matrices),
 * so the first thing we have to do is to transform the
 * ImageData to a type that openCV can recognize.
 */
function imageProcessing({ msg, payload }) {
  // const img = cv.matFromImageData(payload);
  // let result = new cv.Mat();

  // // What this does is convert the image to a grey scale.
  // cv.cvtColor(img, result, cv.COLOR_BGR2GRAY);
  // postMessage({ msg, payload: imageDataFromMat(result) });
  console.log(msg);
  postMessage({ msg });
}

async function test({ msg, payload }) {
  console.log("testfn");
  const lib = await squiggles();
  console.log(lib.ccall("asdfghjkl"));
  console.log("testfn");
  postMessage({ msg, payload: payload });
}

/**
 *  Here we will check from time to time if we can access the OpenCV
 *  functions. We will return in a callback if it has been resolved
 *  well (true) or if there has been a timeout (false).
 */
function waitForOpencv(callbackFn, waitTimeMs = 30000, stepTimeMs = 100) {
  if (squiggles) callbackFn(true);
  // if (cv.Mat) callbackFn(true);

  let timeSpentMs = 0;
  const interval = setInterval(() => {
    const limitReached = timeSpentMs > waitTimeMs;
    // if (cv.Mat || limitReached) {
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
      waitForOpencv(function (success) {
        console.log(e.data.msg);
        if (success) postMessage({ msg: e.data.msg });
        else throw new Error("Error on loading OpenCV");
      });
      break;
    }
    case "imageProcessing":
      return imageProcessing(e.data);
    case "asdfghjkl":
      return test(e.data);
    default:
      break;
  }
};
