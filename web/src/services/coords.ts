import { FIELD_METERS } from "./units";

export const squigglesCoords = (
  canvasX: number,
  canvasY: number,
  x: number,
  y: number,
  yaw: number,
  vel?: number
) => ({
  // TODO: check if the starting position is top left
  // Make (0, 0) be the bottom left, then X is up and Y is right for Okapi
  x: (x / canvasX) * FIELD_METERS,
  y: (1 - y / canvasY) * FIELD_METERS,
  yaw: -1 * (yaw + Math.PI / 2),
  vel: vel
    ? (vel / Math.sqrt(Math.pow(canvasX, 2) + Math.pow(canvasY, 2))) *
      FIELD_METERS
    : 0,
});

export const okapiCoords = (
  canvasX: number,
  canvasY: number,
  x: number,
  y: number,
  yaw: number
) => ({
  // TODO: check if the starting position is top left
  // Make (0, 0) be the bottom left, then X is up and Y is right for Okapi
  x: (1 - y / canvasY) * FIELD_METERS,
  y: (x / canvasX) * FIELD_METERS,
  yaw: yaw,
});
