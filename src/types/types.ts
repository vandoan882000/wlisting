export type Role = 'guest' | 'admin' | 'user' | 'partner' | 'dev';

export interface Page {
  path: string;
  /** Making the `exact` property optional. */
  exact?: boolean;
  /** Making the title property optional. */
  title?: string;
  roles: Role[];
}
