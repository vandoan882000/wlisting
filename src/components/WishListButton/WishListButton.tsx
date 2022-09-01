import { FC } from 'react';

interface WishListButtonProps {
  isInWishList: boolean;
  color: string;
  border: boolean;
  size?: number;
}
export const WishListButton: FC<WishListButtonProps> = ({ isInWishList, color, border, size = 13 }) => {
  return (
    <>
      {isInWishList ? (
        <span
          className={`text-tertiary text-13 z-2 ease-linear w-28 h-28 flex justify-center items-center ${
            border ? 'border-1 border-gray3 rounded-6 bg-light cursor-pointer' : ''
          }`}
        >
          <i className="fas fa-heart" style={{ fontSize: `${size}px` }}></i>
        </span>
      ) : (
        <span
          className={`text-light text-13 z-2 ease-linear w-28 h-28 flex items-center justify-center  ${
            border ? 'border-1 border-gray3 rounded-6 bg-light cursor-pointer' : ''
          }`}
          style={{ color: `${color}` }}
        >
          <i className="fal fa-heart" style={{ fontSize: `${size}px` }}></i>
        </span>
      )}
    </>
  );
};
