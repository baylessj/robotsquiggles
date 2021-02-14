import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import pathsReducer from "./slice";
import { PathsState } from "./state";

const store = configureStore({
  reducer: {
    paths: pathsReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActionPaths: ["payload"],
      ignoredPaths: ["paths"],
    },
  }).concat(logger),
});

export default store;

export type RootState = {
  paths: PathsState;
};
