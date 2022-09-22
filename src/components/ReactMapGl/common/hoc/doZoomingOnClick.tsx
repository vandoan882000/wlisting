import _ from 'lodash';
import React from 'react';

import MappedComponent from '../../MappedComponent';
import { calculateNextZoomLevel } from '../utils';

const doZoomingOnClick = (WrappedComponent: any) => {
  class ZoomableComponent extends MappedComponent {
    onClusterClick = (properties: any, lngLat: any, event: any, meta: any) => {
      const { onClusterClick, clusterClickEnabled } = this.props as any;
      if (!clusterClickEnabled) {
        return;
      }

      const map = this.getMapInstance();
      const currentZoom = map.getZoom();
      const maxZoom = map.getMaxZoom();
      const zoom = calculateNextZoomLevel(currentZoom, maxZoom);

      map.flyTo({ center: lngLat, zoom });

      this._handleClick(properties, lngLat, event, meta, onClusterClick);
      onClusterClick?.({ lat: lngLat[1], lng: lngLat[0] });
    };

    _handleClick(properties: any, lngLat: any, event: any, meta: any, callback: any) {
      if (_.isFunction(callback)) {
        callback(properties, lngLat, event, meta);
      }
    }

    render() {
      const props = {
        ...this.props,
        onClusterClick: this.onClusterClick,
      };

      return <WrappedComponent {...props} />;
    }
  }

  (ZoomableComponent as any).defaultProps = {
    ...WrappedComponent.defaultProps,
    clusterClickEnabled: true,
  };

  return ZoomableComponent;
};

export default doZoomingOnClick;
