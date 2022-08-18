import { MiniCategory } from 'components/MiniCategory/MiniCategory';
import { OpenStatusButton } from 'components/OpenStatusButton/OpenStatusButton';
import { WishListButton } from 'components/WishListButton/WishListButton';
import { categories_data, CategoryData } from 'data/categories_data';
import { ListingCardData } from 'data/listings_data';
import { User, users_data } from 'data/users_data';
import { FC } from 'react';

import Avatar from '../Avatar/Avatar';
import { Rate } from '../Rate/Rate';

interface ListingCardProps {
  data: ListingCardData;
}
export const ListingCard: FC<ListingCardProps> = props => {
  const { data } = props;
  const {
    listing_title,
    listing_address,
    listing_category_id,
    listing_user_id,
    listing_rating_score,
    listing_image,
    isOpen,
    isInWishlist,
    listing_link,
  } = data;

  const getUser = (user_id: number) => {
    const current_user = users_data.find((user: User) => user.user_id === user_id);
    return current_user ? current_user : users_data[0];
  };

  const getCategory = (category_id: number) => {
    const category = categories_data.find((category: CategoryData) => category.category_id === category_id);
    return category ? category : categories_data[0];
  };

  const current_user = getUser(listing_user_id);
  const currentCategory = getCategory(listing_category_id);
  const { category_name, category_icon, category_color, category_link } = currentCategory;

  return (
    <div className="flex flex-col justify-start items-start min-h-338 rounded-15">
      <a href={listing_link} className="block w-100% relative bg-cover bg-center cursor-pointer aspect-4/3 rounded-15">
        <img className="absolute inline-block w-100% h-100% top-0 left-0 object-cover rounded-15" src={listing_image} alt={listing_title} />
        <Avatar data={current_user} />
        <Rate score={listing_rating_score} />
      </a>
      <div>
        <div className="text-16 font-medium text-gray8 text-left mt-5">{listing_title}</div>
        <div className="font-normal text-14 text-gray6 mt-2 lines">{listing_address}</div>
      </div>
      <div className="flex justify-between w-100% mt-8">
        <MiniCategory
          category_color={category_color}
          category_icon={category_icon}
          category_link={category_link}
          category_name={category_name}
          textColor={'#27262b'}
        />
        <div className="flex items-center">
          <OpenStatusButton isOpen={isOpen} />
          <div className="w-28 h-28 flex justify-center items-center text-14 font-medium p-5 rounded-6 border-gray3 bg-light border-1 cursor-pointer">
            <WishListButton isInWishList={isInWishlist} color={'#0f0f36'} />
          </div>
        </div>
      </div>
    </div>
  );
};
