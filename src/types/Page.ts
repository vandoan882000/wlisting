import { ComponentType } from 'react';
import { LocationStates } from 'routes/LocationStates';

export type PathName = keyof LocationStates;

/**
 * Page type
 */
export interface Page {
  /**
    path name
   */
  path: PathName | Omit<string, PathName>;
  /**
    Page Component
   */
  component: ComponentType;
  /**
    array role user
   */
  roles: Role[];
}
/**
 * Role user
 */
export type Role = 'admin' | 'user' | 'guest';
