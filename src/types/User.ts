export type Role = 'admin' | 'user';
export interface User {
  userId: number;
  userName: string;
  userDescription: string;
  userUsername: string;
  userPassword: string;
  userRole: Role;
  userAvatar: string;
  userQuantityReviews: number;
  userQuantityPhotos: number;
}
