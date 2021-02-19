export interface Point {
  id: string;
  x: number;
  y: number;
}

export interface VectorHead {
  id: string;
  x: number;
  y: number;
  yaw: number;
}

export interface Vector {
  p: Point;
  r: VectorHead;
  s: string | null; // robotsquare
  g: Point;
}

export interface Path {
  waypoints: Point[];
  vectors: Vector[];
  path: string | null;
}
