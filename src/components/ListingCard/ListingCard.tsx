import { Avatar } from 'components/Avatar/Avatar';
import { MiniCategory } from 'components/MiniCategory/MiniCategory';
import { OpenStatusButton } from 'components/OpenStatusButton/OpenStatusButton';
import { WishListButton } from 'components/WishListButton/WishListButton';
import { categories_data, CategoryData } from 'data/categories_data';
import { ListingDateStatus, ListingImage } from 'data/listings_data';
import { User, users_data } from 'data/users_data';
import { FC } from 'react';

import { Rate } from '../Rate/Rate';

interface ListingCardProps {
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
export const ListingCard: FC<ListingCardProps> = ({
  listingTitle,
  listingAddress,
  listingCategoryId,
  listingUserId,
  listingRatingScore,
  isInWishlist,
  listingLink,
  listingGallery,
}) => {
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
    <div className="flex flex-col justify-start items-start min-h-338 rounded-15">
      <a href={listingLink} className="block w-100% relative bg-cover bg-center cursor-pointer aspect-4/3 rounded-15">
        <img
          className="absolute inline-block w-100% h-100% top-0 left-0 object-cover rounded-15"
          src={listingGallery[0].listingImageUrl}
          alt={listingTitle}
        />
        <div className="absolute top-10 left-10 ">
          <Avatar userAvatar={current_user.userAvatar} userName={current_user.userName} />
        </div>
        <Rate score={listingRatingScore} />
      </a>
      <div>
        <div className="text-16 font-medium text-gray8 text-left mt-5">{listingTitle}</div>
        <div className="font-normal text-14 text-gray6 mt-2 lines">{listingAddress}</div>
      </div>
      <div className="flex justify-between w-100% mt-8">
        <MiniCategory
          categoryColor={categoryColor}
          categoryIcon={categoryIcon}
          categoryLink={categoryLink}
          categoryName={categoryName}
          textColor={'#27262b'}
        />
        <div className="flex items-center">
          <OpenStatusButton isOpen={true} />
          <WishListButton isInWishList={isInWishlist} color={'#0f0f36'} border={true} />
        </div>
      </div>
    </div>
  );
};
