import { Component, CSSProperties, ReactElement } from 'react';
import { MapContext } from 'react-mapbox-gl';
import { MapGeneralProps } from 'types/MapProps';
import { Point } from 'types/Point';

export type MarkerComponentRenderProps = ({
  properties,
  className,
  cssObject,
}: {
  properties: Point<any>['properties'];
  className: string;
  cssObject: CSSProperties;
}) => ReactElement;

export interface ViewportResult {
  south: number;
  north: number;
  west: number;
  east: number;
  zoom: number;
}
export type MappedComponentProps = MapGeneralProps<any>;
class MappedComponent<P = MapGeneralProps<any>, S = Record<any, any>> extends Component<P, S> {
  static contextType = MapContext;

  getMapInstance() {
    return this.context;
  }
}

export default MappedComponent;
