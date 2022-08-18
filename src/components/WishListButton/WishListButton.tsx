import { FC, useState } from 'react';

interface WishListButtonProps {
  isInWishList: boolean;
  color: string;
}
export const WishListButton: FC<WishListButtonProps> = ({ isInWishList, color }) => {
  const [isWishList, setWishList] = useState(isInWishList);
  const handleClick = () => {
    setWishList(!isWishList);
  };
  return (
    <>
      {isWishList ? (
        <span onClick={handleClick} className="text-tertiary z-2 ease-linear">
          <i className="fas fa-heart"></i>
        </span>
      ) : (
        <span onClick={handleClick} className="text-light z-2 ease-linear" style={{ color: `${color}` }}>
          <i className="fal fa-heart"></i>
        </span>
      )}
    </>
  );
};
