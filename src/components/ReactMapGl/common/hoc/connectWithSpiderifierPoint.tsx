// @ts-ignore
import './spiderifier.css';

import { getCoord } from '@turf/invariant';
import _ from 'lodash';
import React from 'react';
// @ts-ignore
import { ReactMapboxGlSpiderifier } from 'react-mapbox-gl-spiderifier';

import MappedComponent, { MappedComponentProps } from '../../MappedComponent';
import { ClusterOptions } from '../constants/ClusterOptions';
import { checkPropsChange, findPointsWithSameLocation, groupNearestPointsByRadius } from '../utils';

const SPIDERIFIER_PROPS = [
  'coordinates',
  'circleSpiralSwitchover',
  'circleFootSeparation',
  'spiralFootSeparation',
  'spiralLengthStart',
  'spiralLengthFactor',
  'animate',
  'animationSpeed',
  'transformSpiderLeft',
  'transformSpiderTop',
  'showingLegs',
  'onClick',
  'onMouseDown',
  'onMouseEnter',
  'onMouseLeave',
  'onMouseMove',
  'onMouseOut',
  'onMouseOver',
  'onMouseUp',
];
const MARKER_PROPS = [
  'data',
  'radius',
  'minZoom',
  'maxZoom',
  'extent',
  'nodeSize',
  'pointClassName',
  'pointStyles',
  'clusterClassName',
  'clusterStyle',
  'markerComponent',
  'onMouseLeave',
  'onClick',
  'onClusterClick',
  'onClusterMouseEnter',
  'onClusterMouseLeave',
  'clusterClickEnabled',
];

interface Props extends MappedComponentProps {
  // Indicate if the spiderifier should be shown for the first overlapped point onload
  showInitialSpiderifier: boolean;
  // Indicate if the spiderifier should be shown without wrapped component
  onlySpiderifier: boolean;
  // Handler to transform the properties of each point
  spiderifyPropsProcessor: (...args: any[]) => void;
  // Callback when a spiderifier shown
  onShowSpiderifier: (...args: any[]) => void;
  //  Handle when user do zoom/move to change the map and made the points on the map changed and don't have overlapped points anymore
  onSpiderifierRemoved?: (...args: any[]) => void;
  // Allow to customize the spiral component;
  spiralComponent: any;
  overlappedPointsGroup: any;
}

type State = any;

const connectWithSpiderifierPoint = (WrappedComponent: any) => {
  class ConnectedWithSpiderifierComponent extends MappedComponent<Props, State> {
    registeredEvents!: any;
    _spiderifieredLocations!: any;

    constructor(props: any) {
      super(props);
      this.state = {
        overlappedPointsGroup: null,
      };
      this.registeredEvents = false;
    }

    componentDidUpdate(prevProps: any) {
      this._checkAndUpdatePoints(prevProps);
      this.bindEvents();
    }

    shouldComponentUpdate(nextProps: any, nextState: any) {
      return (
        checkPropsChange(
          this.props,
          nextProps,
          ['data', 'showInitialSpiderifier', 'onlySpiderifier', 'circleFootSeparation', 'transformSpiderLeft', 'showingLegs'],
          _.isEqual,
        ) || !_.isEqual(this.state, nextState)
      );
    }

    componentWillUnmount() {
      this.unbindEvents();
    }

    bindEvents() {
      const map = this.getMapInstance();
      if (map && !this.registeredEvents) {
        map.on('zoomend', this.onMapChange);
        this.registeredEvents = true;
      }
    }
    unbindEvents() {
      const map = this.getMapInstance();
      if (map) {
        map.off('zoomend', this.onMapChange);
      }
    }

    onClickOverlappedPoints = (points: any, coordinates: any) => {
      this._updateSpiderifierProps([points], coordinates);
    };

    onSpiderifierRemoved(lngLat: any) {
      const { overlappedPointsGroup } = this.state;
      if (_.isArray(overlappedPointsGroup)) {
        const removedIndex = overlappedPointsGroup.findIndex(({ coordinates }) => _.isEqual(coordinates, lngLat));

        if (removedIndex > -1) {
          const newGroup = [...overlappedPointsGroup.slice(0, removedIndex), ...overlappedPointsGroup.slice(removedIndex + 1)];
          this.setState({ overlappedPointsGroup: newGroup });
        }
      }

      const { onSpiderifierRemoved } = this.props;
      if (_.isFunction(onSpiderifierRemoved)) {
        onSpiderifierRemoved(lngLat);
      }
    }

    onMapChange = () => {
      const { onlySpiderifier } = this.props;
      if (!onlySpiderifier && _.isArray(this._spiderifieredLocations)) {
        const { data, radius } = this.props as any;
        const map = this.getMapInstance();
        this._spiderifieredLocations.forEach(lngLat => {
          const points = findPointsWithSameLocation(data, lngLat, map, radius);

          if (!points) {
            this.onSpiderifierRemoved(lngLat);
          }
        });
      }
    };

    _checkAndUpdatePoints(prevProps: any) {
      if (checkPropsChange(this.props, prevProps, ['data', 'showInitialSpiderifier', 'onlySpiderifier'], _.isEqual)) {
        this._updatePoints();
      }
    }

    _getComponentProps(keys: any) {
      return _.pick(this.props, keys);
    }

    _getWrappedComponentProps() {
      return this._getComponentProps(MARKER_PROPS);
    }

    _getSpiderifierComponentProps() {
      return this._getComponentProps(SPIDERIFIER_PROPS);
    }

    _groupNearestPoint(props: any) {
      const { data, showInitialSpiderifier, onlySpiderifier } = props;
      const map = this.getMapInstance();
      const groupedPoints = groupNearestPointsByRadius(data, map, ClusterOptions.NearestPointsRadius);

      if (groupedPoints.length > 0) {
        if (onlySpiderifier && groupedPoints.length === 1) {
          this._updateSpiderifierProps(groupedPoints);
        } else if (showInitialSpiderifier) {
          let firstGroup = groupedPoints.find(group => group.length > 1);

          if (firstGroup == null) {
            firstGroup = groupedPoints[0];
          }

          this._updateSpiderifierProps([firstGroup]);
        }
      }
    }

    _processSpiderifyProperties(props: any) {
      const { spiderifyPropsProcessor } = this.props;
      if (_.isFunction(spiderifyPropsProcessor)) {
        return spiderifyPropsProcessor(props);
      }

      return props;
    }

    _renderSpiderifierContent(key: any, properties: any) {
      const { spiralComponent: SpiralComponent } = this.props;
      if (SpiralComponent) {
        return <SpiralComponent key={key} properties={properties} />;
      }
      return (
        // @ts-ignore
        <div className="spiderifier-marker-content" key={key} properties={properties}>
          <div>{properties.label}</div>
        </div>
      );
    }

    _renderSpiderifier() {
      const { overlappedPointsGroup } = this.state;

      if (overlappedPointsGroup && overlappedPointsGroup.length > 0) {
        const spiderifierComponentProps = this._getSpiderifierComponentProps();

        return overlappedPointsGroup.map((overlappedPoints: any, index: number) => {
          const { coordinates, markers } = overlappedPoints;

          return (
            <ReactMapboxGlSpiderifier key={index} {...spiderifierComponentProps} coordinates={coordinates}>
              {markers.map((marker: any, index: number) => this._renderSpiderifierContent(index, marker))}
            </ReactMapboxGlSpiderifier>
          );
        });
      }

      return null;
    }

    _shouldRenderClusterLayer() {
      const { onlySpiderifier, overlappedPointsGroup } = this.props;
      return !onlySpiderifier || !overlappedPointsGroup || overlappedPointsGroup.length > 1;
    }

    _updatePoints(props = this.props) {
      const { data, showInitialSpiderifier, onlySpiderifier } = props as any;
      if (data != null && (showInitialSpiderifier || onlySpiderifier)) {
        this._groupNearestPoint(props);
      }
    }

    _updateSpiderifierProps(group: any, coordinates?: any) {
      this._spiderifieredLocations = [];
      if (group.length > 0) {
        const overlappedPointsGroup = group.map((points: any) => {
          if (points.length > 0) {
            const properties = points.map((feature: any) => feature.properties);
            let coords = coordinates;

            if (coords == null) {
              coords = getCoord(points[0]);
            }
            return {
              markers: this._processSpiderifyProperties(properties),
              coordinates: coords,
            };
          }

          return null;
        });

        const { onShowSpiderifier } = this.props;
        overlappedPointsGroup.forEach((group: any) => {
          const { coordinates, markers } = group;

          this._spiderifieredLocations.push(coordinates);
          if (_.isFunction(onShowSpiderifier)) {
            onShowSpiderifier(coordinates, markers);
          }
        });

        this.setState({
          overlappedPointsGroup,
        });
      }
    }

    render() {
      const wrappedComponentProps = this._getWrappedComponentProps();

      return (
        <div>
          {this._shouldRenderClusterLayer() && <WrappedComponent {...wrappedComponentProps} onClickOverlappedPoints={this.onClickOverlappedPoints} />}
          {this._renderSpiderifier()}
        </div>
      );
    }
  }

  (ConnectedWithSpiderifierComponent as any).defaultProps = {
    ...WrappedComponent.defaultProps,
    ...ReactMapboxGlSpiderifier.defaultProps,
  };

  return ConnectedWithSpiderifierComponent;
};

export default connectWithSpiderifierPoint;
