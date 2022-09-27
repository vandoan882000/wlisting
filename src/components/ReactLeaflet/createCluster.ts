import { divIcon } from 'leaflet';
import { CSSProperties } from 'react';

export interface CreateClusterParams {
  cluster: any;
  style?: CSSProperties;
}

export const createCluster = function({ cluster }: CreateClusterParams) {
  return divIcon({
    html: `<div>${cluster.getChildCount()}</div>`,
    className: 'cluster',
  });
};
