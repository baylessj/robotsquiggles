import React, { useState } from "react";
import { Field, DrawNewPath } from "./components";

export const App = (props: any) => {
  const [placingPoint, setPlacingPoint] = useState(false);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto 10rem",
        gridTemplateRows: "100vmin 100vmin",
        gap: "0",
        justifyItems: "start",
        alignItems: "start",
        // justifyItems: "start",
        // alignItems: "start",
        // justifyContent: "start",
        // alignContent: "start",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          gridColumn: "1 / 2",
          gridRow: "1 / 2",
        }}
      >
        {/* <Field /> */}
        <DrawNewPath />
      </div>
    </div>
  );
};
