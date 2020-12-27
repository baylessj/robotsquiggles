import React, { useState } from "react";
import { DrawNewPath } from "./components";

export const App = (props: any) => {
  const [placingPoint, setPlacingPoint] = useState(false);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "10rem auto",
        gridTemplateRows: "100vmin 100vmin",
        gap: "0",
        justifyItems: "start",
        alignItems: "start",
      }}
    >
      <div
        style={{
          backgroundColor: "#f00",
          width: "100%",
          height: "100%",
          gridColumn: "1 / 2",
          gridRow: "1 / 2",
        }}
      />
      <div
        style={{
          height: "100%",
          width: "100%",
          gridColumn: "2 / 3",
          gridRow: "1 / 2",
        }}
      >
        <DrawNewPath />
      </div>
    </div>
  );
};
