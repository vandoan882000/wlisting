import { Avatar } from 'components/Avatar/Avatar';
import { MiniCategory } from 'components/MiniCategory/MiniCategory';
import { Rate } from 'components/Rate/Rate';
import { WishListButton } from 'components/WishListButton/WishListButton';
import { ListingDateStatus, ListingImage } from 'data/listings_data';
import { FC, useState } from 'react';

import { categories_data, CategoryData } from '../../data/categories_data';
import { User, users_data } from '../../data/users_data';

interface CollectionCardProps {
  listingId: number;
  listingTitle: string;
  listingAddress: string;
  listingCategoryId: number;
  listingUserId: number;
  listingRatingScore: number;
  listingLink: string;
  isInWishlist: boolean;
  listingDescription: string;
  listingAmenitiesIds: number[];
  listingGallery: ListingImage[];
  listingOpenStatus: ListingDateStatus[];
  listingMaxPrice: string;
  listingMinPrice: string;
}

export const CollectionCard: FC<CollectionCardProps> = ({
  listingTitle,
  listingAddress,
  listingCategoryId,
  listingUserId,
  listingRatingScore,
  isInWishlist,
  listingGallery,
  listingLink,
}) => {
  const [wishlist, setWishlist] = useState(isInWishlist);
  const getUser = (userId: number) => {
    const current_user = users_data.find((user: User) => user.userId === userId);
    return current_user ? current_user : users_data[0];
  };

  const getCategory = (categoryId: number) => {
    const category = categories_data.find((category: CategoryData) => category.categoryId === categoryId);
    return category ? category : categories_data[0];
  };

  const current_user = getUser(listingUserId);
  const currentCategory = getCategory(listingCategoryId);
  const { categoryName, categoryIcon, categoryColor, categoryLink } = currentCategory;

  return (
    <div className="group flex flex-col justify-end relative bg-cover bg-center aspect-16/9 rounded-15 p-20 cursor-pointer">
      <img className="absolute top-0 left-0 w-100% h-100% inline-block object-cover rounded-15" src={listingGallery[0].listingImageUrl} alt="" />
      <div className="absolute top-10 left-10 ">
        <Avatar userAvatar={current_user.userAvatar} userName={current_user.userName} />
      </div>
      <Rate score={listingRatingScore} />
      <MiniCategory
        categoryColor={categoryColor}
        categoryIcon={categoryIcon}
        categoryLink={categoryLink}
        categoryName={categoryName}
        textColor={'#ffffff'}
      />
      <div className="text-18 font-medium text-light mt-9 z-2 line-clamp-1">{listingTitle}</div>
      <div className="text-14 font-normal text-gray4 mt-2 z-2">{listingAddress}</div>
      <a
        href={listingLink}
        className="absolute top-0 left-0 w-100% h-100% bg-gray7 z-1 opacity-0 rounded-15 group-hover:opacity-20 ease-linear duration-200"
      ></a>
      <div
        className="text-light absolute bottom-27 right-20 opacity-0 group-hover:opacity-100 z-2 ease-linear duration-300"
        onClick={() => {
          setWishlist(!wishlist);
        }}
      >
        <WishListButton isInWishList={wishlist} color={'#ffffff'} border={false} />
      </div>
    </div>
  );
};
