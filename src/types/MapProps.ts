import { CSSProperties } from 'react';
import { FactoryParameters, Props as ReactMapboxGlProps } from 'react-mapbox-gl/lib/map';

import { Coordinate } from './Coordinate';
import { MarkerComponentRenderProps } from './MarkerComponentRenderProps';
import { Point } from './Point';
import { ViewportResult } from './ViewportResult';

export interface MapGeneralProps<T> {
  /** Properties của điểm trên map */
  data: Point<T>[];
  /** Component hiển thị các điểm */
  markerComponent: MarkerComponentRenderProps<T>;
  /** map container style */
  containerStyle?: CSSProperties;
  /** map container class name */
  containerClassName?: string;
  /** className component marker */
  pointClassName?: string;
  /** style component marker */
  pointStyles?: CSSProperties;
  /** className component nhóm */
  clusterClassName?: string;
  /** style component nhóm */
  clusterStyle?: CSSProperties;
  /** Zoom lớn nhất */
  maxZoom?: number;
  /** Zoom nhỏ nhất */
  minZoom?: number;
  /** Liên quan đến bán kính gộp */
  radius?: number;
  /** Liên quan đến bán kính gộp */
  extent?: number;
  /** tâm map mặc định ban đầu */
  defaultCenter?: Coordinate;
  /** zoom mặc định ban đầu */
  defaultZoom?: number;
  /** Thực hiện khi thao tác zoom, di chuyển map */
  onChange?: (result: ViewportResult) => void;
  /** Thực hiện khi click vào component marker */
  onClick?: (result: { id: Point<T>['id']; coordinates: Coordinate }) => void;
  /** Thực hiện khi map đã được load */
  onLoaded?: () => void;
}

export interface ReactMapGLProps<T> extends MapGeneralProps<T> {
  /** MapGL config */
  accessToken: FactoryParameters['accessToken'];
  /** MapGL config */
  mapStyle: ReactMapboxGlProps['style'];
  /** MapGL config */
  apiUrl?: FactoryParameters['apiUrl'];
}
