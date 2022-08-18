import { ComponentType } from 'react';

import { LocationStates } from './LocationStates';

export type PathName = keyof LocationStates;

export interface Page {
  path: PathName;
  component: ComponentType;
  roles: Role[];
}
export type Role = 'admin' | 'user' | 'guest';
