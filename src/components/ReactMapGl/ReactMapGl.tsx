import 'mapbox-gl/src/css/mapbox-gl.css';

import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import { MapEvent } from 'react-mapbox-gl/lib/map-events';
import { ReactMapGLProps } from 'types/MapProps';

import ReactMapboxGlCluster from './ReactMapboxGlCluster/MapboxGlCluster';

const ReactMapGl = <T extends any>({
  data,
  mapStyle,
  defaultCenter,
  defaultZoom,
  onChange,
  onLoaded,
  markerComponent,
  containerStyle,
  containerClassName,
  pointClassName,
  pointStyles,
  clusterClassName,
  clusterStyle,
  onClick,
  radius,
  minZoom,
  maxZoom,
  extent,
  accessToken,
  apiUrl,
}: ReactMapGLProps<T>) => {
  const Map = ReactMapboxGl({
    accessToken,
    apiUrl,
    minZoom,
    maxZoom,
  });

  const handleChange: MapEvent = map => {
    const mapBounds = map.getBounds();
    onChange?.({
      south: mapBounds.getSouth(),
      north: mapBounds.getNorth(),
      east: mapBounds.getEast(),
      west: mapBounds.getWest(),
      zoom: map.getZoom(),
    });
  };

  const ReactMapboxGlClusterProps = {
    data,
    markerComponent,
    containerStyle,
    containerClassName,
    pointClassName,
    pointStyles,
    clusterClassName,
    clusterStyle,
    onClick,
    radius,
    extent,
  };

  return (
    <Map
      style={mapStyle}
      zoom={defaultZoom ? [defaultZoom] : undefined}
      center={defaultCenter ? [defaultCenter.lng, defaultCenter.lat] : undefined}
      onStyleLoad={onLoaded}
      onZoomEnd={handleChange}
      onRotateEnd={handleChange}
      onDragEnd={handleChange}
      containerStyle={{ height: '100vh', ...containerStyle }}
    >
      <ReactMapboxGlCluster {...({} as any)} {...ReactMapboxGlClusterProps} />
    </Map>
  );
};

export default ReactMapGl;
