interface PointGeometry {
  type: 'Point';
  coordinates: [number, number];
}

export interface Point<T> {
  type: 'Feature';
  id: string;
  geometry: PointGeometry;
  properties: T;
}
