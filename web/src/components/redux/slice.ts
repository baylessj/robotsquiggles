/**
 * Manages app state for the shared state of all drawn paths.
 */
import { createSlice } from "@reduxjs/toolkit";
import { PathsState } from "./state";

const initialState: PathsState = { paths: {} };

export const nextChar = (str: string) => {
  return (
    str.substring(0, str.length - 1) +
    String.fromCharCode(str.charCodeAt(str.length - 1) + 1)
  );
};

export const curPathKey = (state: PathsState) => {
  let curKey = "A";
  for (const k of Object.keys(state.paths)) {
    if (k.charCodeAt(0) > curKey.charCodeAt(0)) {
      curKey = k;
    }
  }
  return curKey;
};

const _initPath = (state: PathsState, nextPath: string) => {
  state.paths[nextPath] = {
    waypoints: [],
    vectors: [],
    path: null,
  };
};

const addPoint = (state: PathsState, payload: any) => {
  state.paths[payload.pathKey] = {
    ...state.paths[payload.pathKey],
    waypoints: [payload.point.id, ...state.paths[payload.pathKey].waypoints],
  };
};

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
      state.paths[action.payload.pathKey] = {
        ...state.paths[action.payload.pathKey],
        vectors: action.payload.vectors,
        path: action.payload.path,
      };
      state.actionNeeded = undefined;
      // let updatedVec;
      // if (action.payload.idx) {
      //   updatedVec = Array.from(state.paths[action.payload.pathKey]?.vectors);
      //   updatedVec.splice(action.payload.idx, 0, action.payload.newVec);
      // } else {
      //   state.paths[action.payload.pathKey].vectors.push(action.payload.newVec);
      // }
      // state.paths[action.payload.pathKey] = {
      //   ...state.paths[action.payload.pathKey],
      //   vectors: action.payload.vectors,
      //   path: action.payload.path,
      // };
    },
    initPath(state: PathsState, action) {
      state.paths[action.payload.pathKey] = {
        waypoints: [],
        vectors: [],
        path: null,
      };
    },
    initNextPath(state: PathsState, action) {
      const nextPath = nextChar(curPathKey(state));
      state.paths[nextPath] = {
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
    createPoints(state: PathsState, action) {
      if (Object.keys(state.paths).length === 0) {
        _initPath(state, "A");
      }
      const pathKey = curPathKey(state);
      addPoint(state, { pathKey: pathKey, point: action.payload.point });

      if (state.paths[pathKey]?.waypoints?.length > 1) {
        state.actionNeeded = "CREATE_PATH";
      }
    },
  },
});

export default pathsSlice.reducer;
export const {
  updateVectorP,
  updateVectorR,
  createPath,
  initNextPath,
  deletePoint,
  deletePath,
  createPoints,
} = pathsSlice.actions;
export const selectPaths = (state: any) => state.paths.paths;
export const selectPathsAction = (state: any) => state.paths.actionNeeded;
