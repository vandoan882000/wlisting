import './ClusterLayer.css';

import { getCoord } from '@turf/invariant';
import React, { CSSProperties, PureComponent } from 'react';
import { Cluster } from 'react-mapbox-gl';
import { MapGeneralProps } from 'types/MapProps';

import { extractEventHandlers } from '../common/utils';
import { Marker } from '../Marker';

type ClusterProps = Omit<MapGeneralProps<any>, 'clusterClickEnabled'>;

class ClusterLayer extends PureComponent<ClusterProps> {
  static defaultProps: { radius: number; minZoom: number; maxZoom: number; extent: number };

  _clusterMarkerFactory = (coordinates: any, pointCount: any, getLeaves: any) => {
    const { clusterStyle } = this.props;
    const className = 'cluster cluster-layer--cluster';
    const points = getLeaves();
    const pointsProps = this._getPointsProps(points);
    const clusterEventHandlers = extractEventHandlers(this.props, /^onCluster(.+)$/i);

    return (
      <Marker
        key={coordinates.toString()}
        coordinates={coordinates}
        className="cluster-layer-container"
        properties={pointsProps}
        {...clusterEventHandlers}
      >
        <div className={className} style={clusterStyle}>
          <div>{pointCount}</div>
        </div>
      </Marker>
    );
  };

  _getClusterProps() {
    const { radius, minZoom, maxZoom, extent } = this.props;

    return {
      radius,
      minZoom,
      maxZoom,
      extent,
      nodeSize: 64,
      // nodeSize
    };
  }

  _getPointsProps(points: any[]) {
    return points.map((point: any) => {
      const feature = point.props['data-feature'];
      const { properties } = feature;
      return {
        ...properties,
        coordinates: getCoord(feature),
      };
    });
  }

  _renderMarkers() {
    const { data, pointClassName, pointStyles = {}, markerComponent } = this.props;
    const markerClassName = `cluster-layer--point ${pointClassName}`;

    return data.map((feature, key) => {
      const { onClick = () => {} } = this.props;
      const { geometry, properties, id } = feature;
      const { coordinates } = geometry;
      const { style } = properties;
      const eventHandlers = extractEventHandlers(this.props);
      const cssObject: CSSProperties = {
        ...pointStyles,
        ...style,
      };

      return (
        <Marker
          key={`cluster-layer-point${key}`}
          coordinates={coordinates}
          data-feature={feature}
          properties={properties}
          {...eventHandlers}
          onClick={() => {
            const { coordinates } = geometry;
            const [lng, lat] = coordinates;
            onClick?.({
              id,
              coordinates: {
                lat,
                lng,
              },
            });
          }}
        >
          {markerComponent({
            className: markerClassName,
            styles: cssObject,
            properties,
          })}
        </Marker>
      );
    });
  }

  render() {
    const clusterProps = this._getClusterProps();

    return (
      <Cluster ClusterMarkerFactory={this._clusterMarkerFactory} {...clusterProps}>
        {this._renderMarkers()}
      </Cluster>
    );
  }
}

ClusterLayer.defaultProps = {
  radius: 60,
  minZoom: 0,
  maxZoom: 20,
  extent: 512,
};

export default ClusterLayer;
