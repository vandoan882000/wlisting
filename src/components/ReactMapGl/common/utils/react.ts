import _ from 'lodash';
import React from 'react';

const isFunctionComponent = (component: any) => component && _.isFunction(component.type) && String(component.type).includes('createElement');

/**
 * Check if a component is a custom class React component or native DOM elements (e.g. div, span)
 * @param {*} component
 * @return {bool} True if the input component is React component
 */
export const isReactComponent = (component: any) => {
  const isReactComponent = _.get(component, 'type.prototype.isReactComponent');
  const isPureReactComponent = _.get(component, 'type.prototype.isPureReactComponent');
  const isFunctionalComponent = isFunctionComponent(component);
  const isFragmentComponent = _.toString(_.get(component, 'type')) === 'Symbol(react.fragment)';
  const isReactMemoComponent = _.toString(_.get(component, '$$typeof')) === 'Symbol(react.memo)';

  return (
    isReactMemoComponent ||
    (React.isValidElement(component) && (isReactComponent || isPureReactComponent || isFunctionalComponent || isFragmentComponent))
  );
};
