import React, { useState } from "react";
import { Field, Path } from "./components";
import { DrawNewPath } from "./components/new_path";

export const App = (props: any) => {
  const [placingPoint, setPlacingPoint] = useState(false);

  return (
    <>
      <Field />
      {/* <Path /> */}
      <DrawNewPath />
    </>
  );
};
