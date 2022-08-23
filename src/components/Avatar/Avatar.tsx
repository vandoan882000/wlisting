import { FC } from 'react';

interface AvatarProps {
  userName: string;
  userAvatar: string;
}
export const Avatar: FC<AvatarProps> = ({ userName, userAvatar }) => {
  return (
    <div className="flex items-center justify-center px-5 py-5 rounded-20 bg-light cursor-pointer z-100">
      <div
        className="w-22 h-22 aspect-1/1 bg-cover bg-center mr-5 rounded-1/2"
        style={{
          backgroundImage: `url(${userAvatar})`,
        }}
      ></div>
      <div className="text-12 text-medium text-gray7">{userName}</div>
    </div>
  );
};
