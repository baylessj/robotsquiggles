import { useEffect, useRef, useState } from "react";
import squiggles from "../services/squiggles";

export default function Page() {
  /**
   * What we will do in the onClick event is capture a frame within
   * the video to pass this image on our service.
   */
  async function onClick() {
    // Load the model
    await squiggles.load();
    // Processing image
    // const processedImage = await cv.imageProcessing(image)
    const val = await squiggles.test();
    console.log(val);
    // Render the processed image to the canvas
    // ctx.putImageData(processedImage.data.payload, 0, 0);
  }

  /**
   * What we're going to render is:
   *
   * 1. A video component for the user to see what he sees on the camera.
   *
   * 2. A simple button, that with the onClick we will generate an image of
   *  the video, we will load OpenCV and we will treat the image.
   *
   * 3. A canvas, which will allow us to capture the image of the video
   * while showing the user what image has been taken from the video after
   * pressing the button.
   *
   */
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <button style={{ width: 200, padding: 10 }} onClick={onClick}>
        {"Take a photo"}
      </button>
    </div>
  );
}
