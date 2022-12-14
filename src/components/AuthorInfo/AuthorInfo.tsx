import { Avatar } from 'components/Avatar/Avatar';
import { FC } from 'react';

interface AuthorInfoProps {
  userName: string;
  userDescription: string;
  userUsername: string;
  userAvatar: string;
  userQuantityReviews: number;
  userQuantityPhotos: number;
}
export const AuthorInfo: FC<AuthorInfoProps> = ({ userAvatar, userDescription, userName, userQuantityReviews, userQuantityPhotos }) => {
  return (
    <>
      <div className="w-fit">
        <Avatar
          variant="variant2"
          name={userName}
          avatar={userAvatar}
          size={50}
          fontSize={22}
          detail={true}
          userQuantityReviews={userQuantityReviews}
          userQuantityPhotos={userQuantityPhotos}
        />
      </div>
      <div className="text-14 font-normal text-gray6 mt-5">{userDescription}</div>
      <div className="relative w-40% bg-cover bg-center aspect-162/44 mt-16">
        <img
          className="w-100% h-100% absolute top-0 left-0 object-cover"
          src="https://images.pexels.com/photos/1570264/pexels-photo-1570264.jpeg?cs=srgb&dl=pexels-reafon-gates-1570264.jpg&fm=jpg&w=500"
          alt=""
        />
      </div>
    </>
  );
};
