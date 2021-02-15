// export interface Vector {
//   s: ,
//   g: ,
//   p: ,
//   r: ,
// }

export interface Path {
  waypoints: any[];
  vectors: any[];
  path: any;
}

export interface PathsState {
  paths: Record<string, Path>;
  actionNeeded?: string;
}
