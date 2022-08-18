export type Role = 'guest' | 'admin' | 'user' | 'partner' | 'dev';

export interface Page {
  path: string;
  exact?: boolean;
  title?: string;
  roles: Role[];
}
