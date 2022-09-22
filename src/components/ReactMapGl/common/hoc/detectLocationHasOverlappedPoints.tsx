import { featureCollection as createFeatureCollection, point as createPoint } from '@turf/helpers';
import _ from 'lodash';
import React from 'react';

import MappedComponent, { MappedComponentProps } from '../../MappedComponent';
import { ClusterOptions } from '../constants/ClusterOptions';
import { findPointsWithSameLocation } from '../utils';

interface Props extends MappedComponentProps {
  onClickOverlappedPoints: (...args: any[]) => void;
}

const detectLocationHasOverlappedPoints = (WrappedComponent: any) => {
  class LayerWithOverlappedPointComponent extends MappedComponent<Props> {
    onClick = (properties: any, lngLat: any, event: any, meta: any) => {
      const { onClick } = this.props;
      this._handleClick(properties, lngLat, event, meta, onClick);
    };

    onClusterClick = (properties: any, lngLat: any, event: any, meta: any) => {
      const { onClusterClick } = this.props as any;
      this._handleClick(properties, lngLat, event, meta, onClusterClick);
    };
    static defaultProps: any;

    _handleClick(properties: any, lngLat: any, event: any, meta: any, callback: any) {
      if (!_.isArray(properties)) {
        if (_.isFunction(callback)) {
          callback(properties, lngLat, event, meta);
        }

        return true;
      }
      const { onClickOverlappedPoints } = this.props;
      const map = this.getMapInstance();
      const features = properties.map(prop => createPoint(prop.coordinates, prop));
      const data = createFeatureCollection(features);
      const points = findPointsWithSameLocation(data, lngLat, map, ClusterOptions.NearestPointsRadius, ClusterOptions.ZoomLevel);
      if (points) {
        if (_.isFunction(onClickOverlappedPoints)) {
          onClickOverlappedPoints(features, lngLat, event, meta);
          return false;
        }
      } else if (_.isFunction(callback)) {
        callback(properties, lngLat, event, meta);
      }

      return true;
    }

    render() {
      const props = {
        ...this.props,
        onClick: this.onClick,
        onClusterClick: this.onClusterClick,
      };

      return <WrappedComponent {...props} />;
    }
  }

  LayerWithOverlappedPointComponent.defaultProps = {
    ...WrappedComponent.defaultProps,
  };

  return LayerWithOverlappedPointComponent;
};

export default detectLocationHasOverlappedPoints;
