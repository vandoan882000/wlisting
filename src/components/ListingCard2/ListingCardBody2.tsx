import { Category } from 'components/Category/Category';
import { WishListButton } from 'components/WishListButton/WishListButton';
import { categories_data } from 'data/categories_data';
import { FC, useState } from 'react';
import { CategoryData } from 'types/Category';
import { ListingImage, ListingLocation } from 'types/Listing';

interface ListingCardBody2Props {
  isInWishlist: boolean;
  listingCategoryId: number;
  listingGallery: ListingImage[];
  listingTitle: string;
  listingLocations: ListingLocation[];
  listingLink: string;
}

export const ListingCardBody2: FC<ListingCardBody2Props> = ({
  isInWishlist,
  listingCategoryId,
  listingGallery,
  listingTitle,
  listingLocations,
  listingLink,
}) => {
  const [wishlist, setWishlist] = useState(isInWishlist);
  const getCategory = (categoryId: number) => {
    const category = categories_data.find((category: CategoryData) => category.categoryId === categoryId);
    return category ? category : categories_data[0];
  };
  const currentCategory = getCategory(listingCategoryId);
  const { categoryName, categoryIcon, categoryColor, categoryLink } = currentCategory;
  return (
    <>
      <img className="absolute top-0 left-0 w-100% h-100% inline-block object-cover rounded-15" src={listingGallery[0].listingImageUrl} alt="" />
      <div className="w-fit">
        <Category
          categoryCount={1}
          categoryId={1}
          categoryColor={categoryColor}
          categoryIcon={categoryIcon}
          categoryLink={categoryLink}
          categoryName={categoryName}
          variant="variant2"
          textColor="light"
        />
      </div>
      <div className="text-18 font-medium text-light mt-9 z-2 line-clamp-1">{listingTitle}</div>
      <div className="text-14 font-normal text-gray4 mt-2 z-2">{listingLocations[0].address}</div>
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
        <WishListButton isInWishList={wishlist} fontSize={25} color={'#ffffff'} />
      </div>
    </>
  );
};
