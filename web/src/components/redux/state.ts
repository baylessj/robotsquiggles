import { Path } from "../models";

export interface PathsState {
  paths: Record<string, Path>;
  actionNeeded?: string;
}
