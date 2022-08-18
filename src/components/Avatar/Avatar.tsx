import { User } from 'data/users_data';
import { FC } from 'react';

interface AvatarProps {
  data: User;
}
const Avatar: FC<AvatarProps> = props => {
  const { data } = props;
  const { user_name, user_avatar } = data;
  return (
    <div className="absolute top-10 left-10 flex items-center justify-center px-5 py-5 rounded-20 bg-light cursor-pointer z-100">
      <div
        className="w-22 h-22 aspect-1/1 bg-cover bg-center mr-5 rounded-1/2"
        style={{
          backgroundImage: `url(${user_avatar})`,
        }}
      ></div>
      <div className="text-12 text-medium text-gray7">{user_name}</div>
    </div>
  );
};
export default Avatar;
