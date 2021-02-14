/**
 * Manages app state for the shared state of all drawn paths.
 */
import { createSlice } from "@reduxjs/toolkit";
import { PathsState } from "./state";

const initialState: PathsState = { paths: {} };

const pathsSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    updateVectorP(state: PathsState, action) {
      state.paths[action.payload.pathKey] = {
        ...state.paths[action.payload.pathKey],
        vectors:
          state.paths[action.payload.pathKey]?.vectors.map((v) =>
            v.p.id === action.payload.point.id
              ? { s: v.s, g: v.g, p: action.payload.point.id, r: v.r }
              : v
          ) ?? [],
      };
    },
    updateVectorR(state: PathsState, action) {
      state.paths[action.payload.pathKey] = {
        ...state.paths[action.payload.pathKey],
        vectors:
          state.paths[action.payload.pathKey]?.vectors.map((v) =>
            v.p.id === action.payload.point.id
              ? { s: v.s, g: v.g, p: v.p, r: action.payload.point.id }
              : v
          ) ?? [],
      };
    },
    createPath(state: PathsState, action) {
      let updatedVec;
      if (action.payload.idx) {
        updatedVec = Array.from(state.paths[action.payload.pathKey]?.vectors);
        updatedVec.splice(action.payload.idx, 0, action.payload.newVec);
      } else {
        state.paths[action.payload.pathKey].vectors.push(action.payload.newVec);
      }
      state.paths[action.payload.pathKey] = {
        ...state.paths[action.payload.pathKey],
        vectors: action.payload.vector,
        path: action.payload.path,
      };
    },
    addPoint(state: PathsState, action) {
      // Causes recursion errors, likely as a result of the non-serializable Two
      // Need to first identify the parts of the Two point that we
      console.log(action.payload.point);
      state.paths[action.payload.pathKey] = {
        ...state.paths[action.payload.pathKey],
        waypoints: [
          action.payload.point.id,
          ...state.paths[action.payload.pathKey].waypoints,
        ],
      };
    },
    initNextPath(state: PathsState, action) {
      state.paths[action.payload.pathKey] = {
        waypoints: [],
        vectors: [],
        path: null,
      };
    },
    deletePoint(state: PathsState, action) {
      state.paths[action.payload.pathKey].vectors.pop();
      state.paths[action.payload.pathKey].path = action.payload.path.id;
    },
    deletePath(state: PathsState, action) {
      delete state.paths[action.payload.pathKey];
    },
  },
});

export default pathsSlice.reducer;
export const {
  updateVectorP,
  updateVectorR,
  createPath,
  addPoint,
  initNextPath,
  deletePoint,
  deletePath,
} = pathsSlice.actions;
export const selectPaths = (state: any) => state.paths.paths;
