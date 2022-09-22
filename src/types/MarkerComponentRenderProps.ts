import { CSSProperties, ReactElement, ReactNode } from 'react';

import { Point } from './Point';

export type MarkerComponentRenderProps<T> = ({
  properties,
  className,
  styles,
  isShow,
  children,
}: {
  properties: Point<T>['properties'];
  className: string;
  styles: CSSProperties;
  isShow?: boolean;
  children?: ReactNode;
}) => ReactElement;
