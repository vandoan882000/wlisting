import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/dist/styles.min.css';
import './ClusterLayer.css';

import React from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { ReactLeafletProps } from 'types/MapProps';

import { createIcon } from './createIcon';

// https://www.npmjs.com/package/react-leaflet-markercluster#api
const ReactLeaflet = <T extends any>({
  data = [],
  markerComponent,
  mapImageUrl,
  pointClassName = '',
  pointStyles = {},
  containerClassName,
  containerStyle,
  defaultCenter = { lat: 19.1, lng: 51.0 },
  defaultZoom = 4,
  maxZoom = 18,
  minZoom = 1,
  onClick,
}: ReactLeafletProps<T>) => {
  const _renderMarker = () => {
    return data.map(({ geometry, id, properties }) => {
      return (
        <Marker
          eventHandlers={{
            click: () => {
              const { coordinates } = geometry;
              const [lng, lat] = coordinates;
              onClick?.({
                id,
                coordinates: {
                  lat,
                  lng,
                },
              });
            },
          }}
          icon={createIcon(
            markerComponent({
              properties,
              className: pointClassName,
              styles: pointStyles,
            }),
          )}
          position={{
            lat: geometry.coordinates[1],
            lng: geometry.coordinates[0],
          }}
          key={id}
        />
      );
    });
  };

  const _renderCluster = () => {
    return (
      // @ts-ignore
      <MarkerClusterGroup showCoverageOnHover={false}>{_renderMarker()}</MarkerClusterGroup>
    );
  };

  return (
    <MapContainer
      className={containerClassName}
      center={defaultCenter}
      zoom={defaultZoom}
      maxZoom={maxZoom}
      style={{ height: '100vh', ...containerStyle }}
      minZoom={minZoom}
    >
      <TileLayer url={mapImageUrl} />
      {_renderCluster()}
    </MapContainer>
  );
};

export default ReactLeaflet;
