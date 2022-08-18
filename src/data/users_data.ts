export type Role = 'admin' | 'user';
export interface User {
  user_id: number;
  user_name: string;
  user_description: string;
  user_username: string;
  user_password: string;
  user_role: Role;
  user_avatar: string;
}
export const users_data: User[] = [
  {
    user_id: 1,
    user_name: 'Gutterface',
    user_description: 'Account 1 description',
    user_username: 'user1',
    user_password: 'password1',
    user_role: 'admin',
    user_avatar: 'https://images.pexels.com/photos/1136575/pexels-photo-1136575.jpeg?cs=srgb&dl=pexels-brenoanp-1136575.jpg&w=500&fm=jpg',
  },
  {
    user_id: 2,
    user_name: 'Orca Cursor',
    user_description: 'Account 1 description',
    user_username: 'user1',
    user_password: 'password1',
    user_role: 'admin',
    user_avatar:
      'https://images.pexels.com/photos/11293719/pexels-photo-11293719.jpeg?cs=srgb&dl=pexels-vietnam-photographer-11293719.jpg&w=500&fm=jpg',
  },
  {
    user_id: 3,
    user_name: 'Bakery Babies',
    user_description: 'Account 1 description',
    user_username: 'user1',
    user_password: 'password1',
    user_role: 'admin',
    user_avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&w=500&fm=jpg',
  },
  {
    user_id: 4,
    user_name: 'Mobi Mint',
    user_description: 'Account 1 description',
    user_username: 'user1',
    user_password: 'password1',
    user_role: 'admin',
    user_avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-733872.jpg&w=500&fm=jpg',
  },
];
