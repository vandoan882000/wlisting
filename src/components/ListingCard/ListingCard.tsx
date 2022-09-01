import { Avatar } from 'components/Avatar/Avatar';
import { Category } from 'components/Category/Category';
import { OpenStatusButton } from 'components/OpenStatusButton/OpenStatusButton';
import { WishListButton } from 'components/WishListButton/WishListButton';
import { categories_data } from 'data/categories_data';
import { users_data } from 'data/users_data';
import { FC, useState } from 'react';
import { CategoryData } from 'types/Category';
import { ListingCardData, ListingDateStatus } from 'types/Listing';
import { User } from 'types/User';

import { Rate } from '../Rate/Rate';

interface ListingCardProps extends ListingCardData {
  isHover?: boolean;
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
  listingOpenStatus,
  isHover = false,
}) => {
  const [wishlist, setWishlist] = useState(isInWishlist);
  const getDateStatus = (listingOpenStatus: ListingDateStatus[]) => {
    let state = false;
    const dates = Date.now();
    const currentDate = new Date(dates);
    const currentDay = currentDate.getDay();

    listingOpenStatus.forEach((open: ListingDateStatus) => {
      const openDateTime = new Date();
      openDateTime.setHours(Number(open.listingOpenTime.split(':')[0]), Number(open.listingOpenTime.split(':')[1]), 0, 0);

      const closeDateTime = new Date();
      closeDateTime.setHours(Number(open.listingCloseTime.split(':')[0]), Number(open.listingCloseTime.split(':')[1]), 0, 0);
      if (open.listingDayId == currentDay && currentDate >= openDateTime && currentDate <= closeDateTime) {
        state = true;
      }
    });
    return state;
  };
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
    <div className={`${isHover ? 'group' : ''} flex flex-col justify-start items-start min-h-338 rounded-15`}>
      <a href={listingLink} className="block w-100% relative bg-cover bg-center cursor-pointer aspect-4/3 rounded-15">
        <img
          className="absolute inline-block w-100% h-100% top-0 left-0 object-cover rounded-15"
          src={listingGallery[0].listingImageUrl}
          alt={listingTitle}
        />
        <div
          className={`${
            isHover ? 'group-hover:opacity-100 opacity-0 transition-all delay-100' : ''
          } absolute top-10 left-10 px-5 py-5 rounded-20 bg-light`}
        >
          <Avatar avatar={current_user.userAvatar} name={current_user.userName} size={22} fontSize={12} />
        </div>
        <Rate score={listingRatingScore} />
      </a>
      <div>
        <div className="text-16 font-medium text-gray8 text-left mt-5">{listingTitle}</div>
        <div className="font-normal text-14 text-gray6 mt-2 lines">{listingAddress}</div>
      </div>
      <div className="flex justify-between w-100% mt-8">
        <div className="w-fit">
          <Category
            categoryColor={categoryColor}
            categoryIcon={categoryIcon}
            categoryLink={categoryLink}
            categoryName={categoryName}
            categoryCount={1}
            categoryId={1}
            variant="variant2"
          />
        </div>
        <div className="flex items-center">
          <OpenStatusButton isOpen={getDateStatus(listingOpenStatus)} />
          <div onClick={() => setWishlist(!wishlist)}>
            <WishListButton isInWishList={wishlist} color={'#0f0f36'} border={true} />
          </div>
        </div>
      </div>
    </div>
  );
};
