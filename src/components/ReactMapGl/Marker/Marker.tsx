import _ from 'lodash';
import MapboxGl from 'mapbox-gl';
import { CSSProperties } from 'react';
import { createPortal } from 'react-dom';
import { Point } from 'types/Point';

import { checkPropsChange, extractEventHandlers, getExactEventHandlerName } from '../common/utils';
import MappedComponent from '../MappedComponent';

export interface MarkerProps {
  coordinates: Point<any>['geometry']['coordinates'];
  properties: any;
  children: any;
  style?: CSSProperties;
  className?: string;
  onClick?: (...args: any) => void;
  onMouseDown?: (...args: any) => void;
  onMouseEnter?: (...args: any) => void;
  onMouseLeave?: (...args: any) => void;
  onMouseMove?: (...args: any) => void;
  onMouseOut?: (...args: any) => void;
  onMouseOver?: (...args: any) => void;
  onMouseUp?: (...args: any) => void;
}

interface MarkerState {
  isMounted: boolean;
  element?: HTMLElement;
}

class Marker extends MappedComponent<MarkerProps, MarkerState> {
  layer!: any;
  element!: any;
  realHandlers!: any;

  state: MarkerState = {
    isMounted: false,
    element: undefined,
  };

  componentDidMount() {
    const node = this.attachChildren(this.props);
    this.layer = new MapboxGl.Marker(node).setLngLat(this.props.coordinates).addTo(this.getMapInstance());
  }

  componentDidUpdate(prevProps: any) {
    if (prevProps.coordinates !== this.props.coordinates) {
      this.layer.setLngLat(prevProps.coordinates);
    }
    if (prevProps.children !== this.props.children || checkPropsChange(this.props, prevProps, ['style', 'className'])) {
      this.attachChildren(prevProps);
    }
  }

  componentWillUnmount() {
    if (!this.layer) {
      return;
    }
    this.layer.remove();
    delete this.layer;
  }

  attachChildren(props = this.props) {
    const { children } = props;

    if (children) {
      if (!this.element) {
        this.element = document.createElement('div');
        this.setState(state => ({ ...state, element: this.element }));
      } else {
        this._unbindEvents();
      }

      const style = this.getStyle(this.props);
      this.element.className = this.getContainerClassName(props);
      Object.keys(style).forEach(s => {
        this.element.style[s] = style[s];
      });
      this._bindEvents();
    }

    return this.element;
  }

  getContainerClassName(props: any) {
    console.log(props);
    return 'mapboxgl-marker';
  }

  getContent(props: any) {
    const { children } = props;
    return <div className="nio-marker-content f-width f-height">{children}</div>;
  }

  getProperties() {
    return this.props.properties;
  }

  getOffset() {
    return [0, 0];
  }

  getStyle(props: any) {
    return _.clone(props.style) || {};
  }

  _bindEvents() {
    const events = extractEventHandlers(this.props);
    this.realHandlers = {};
    _.forEach(events, (_handler, name) => {
      const realHandler = this._generateEventHander(name);
      this.element.addEventListener(getExactEventHandlerName(name), realHandler);
      this.realHandlers[name] = realHandler;
    });
    this.element.addEventListener('mousedown', this._disableMapDragPan);
    this.element.addEventListener('mouseup', this._enableMapDragPan);
  }

  _disableMapDragPan = () => {
    const map = this.getMapInstance();
    if (map) {
      map.dragPan.disable();
    }
  };

  _enableMapDragPan = () => {
    const map = this.getMapInstance();
    if (map) {
      map.dragPan.enable();
    }
  };

  _generateEventHander = (eventName: any) => (e: any) => {
    const handler = (this.props as any)[eventName];
    if (_.isFunction(handler)) {
      const { coordinates } = this.props;
      const properties = this.getProperties();
      handler(properties, coordinates, this.getOffset(), e);
    }
  };

  _unbindEvents() {
    const events = extractEventHandlers(this.props);
    this.element.removeEventListener('mousedown', this._disableMapDragPan);
    this.element.removeEventListener('mouseup', this._enableMapDragPan);
    _.forEach(events, (handler, name) => {
      const realHandler = this.realHandlers[name];
      this.element.removeEventListener(getExactEventHandlerName(name), realHandler);
    });

    delete this.realHandlers;
  }

  render() {
    const { element } = this.state;
    if (!element) {
      return null;
    }
    return createPortal(this.getContent(this.props), element);
  }
}

export default Marker;
