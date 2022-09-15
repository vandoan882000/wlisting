import { FC } from 'react';

interface WishListButtonProps {
  isInWishList: boolean;
  color: string;
  fontSize?: number;
}
export const WishListButton: FC<WishListButtonProps> = ({ isInWishList, color, fontSize = 13 }) => {
  return (
    <>
      {isInWishList ? (
        <span className={`text-tertiary text-13 z-2 ease-linear flex justify-center items-center cursor-pointer`}>
          <i className="fas fa-heart" style={{ fontSize: `${fontSize}px` }}></i>
        </span>
      ) : (
        <span
          className={`text-light text-13 z-2 ease-linear flex items-center justify-center cursor-pointe
          }`}
          style={{ color: `${color}` }}
        >
          <i className="fal fa-heart" style={{ fontSize: `${fontSize}px` }}></i>
        </span>
      )}
    </>
  );
};
