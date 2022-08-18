import { MiniCategory } from 'components/MiniCategory/MiniCategory';
import { Rate } from 'components/Rate/Rate';
import { WishListButton } from 'components/WishListButton/WishListButton';
import { ListingCardData } from 'data/listings_data';
import { FC } from 'react';

import { categories_data, CategoryData } from '../../data/categories_data';
import { User, users_data } from '../../data/users_data';
import Avatar from '../Avatar/Avatar';

interface CollectionCardProps {
  data: ListingCardData;
}

export const CollectionCard: FC<CollectionCardProps> = props => {
  const { data } = props;
  const {
    listing_title,
    listing_address,
    listing_category_id,
    listing_user_id,
    listing_rating_score,
    listing_image,
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
    <div className="group flex flex-col justify-end relative bg-cover bg-center aspect-16/9 rounded-15 p-20 cursor-pointer">
      <img className="absolute top-0 left-0 w-100% h-100% inline-block object-cover rounded-15" src={listing_image} alt="" />
      <Avatar data={current_user} />
      <Rate score={listing_rating_score} />
      <MiniCategory
        category_color={category_color}
        category_icon={category_icon}
        category_link={category_link}
        category_name={category_name}
        textColor={'#ffffff'}
      />
      <div className="text-18 font-medium text-light mt-9 z-2 line-clamp-1">{listing_title}</div>
      <div className="text-14 font-normal text-gray4 mt-2 z-2">{listing_address}</div>
      <a
        href={listing_link}
        className="absolute top-0 left-0 w-100% h-100% bg-gray7 z-1 opacity-0 rounded-15 group-hover:opacity-20 ease-linear duration-200"
      ></a>
      <div className="text-light absolute bottom-27 right-20 opacity-0 group-hover:opacity-100 z-2 ease-linear duration-300">
        <WishListButton isInWishList={isInWishlist} color={'#ffffff'} />
      </div>
    </div>
  );
};
