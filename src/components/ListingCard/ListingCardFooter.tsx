import { Category } from 'components/Category/Category';
import { OpenStatusButton } from 'components/OpenStatusButton/OpenStatusButton';
import { WishListButton } from 'components/WishListButton/WishListButton';
import { categories_data } from 'data/categories_data';
import { FC, useState } from 'react';
import { CategoryData } from 'types/Category';
import { ListingDateStatus } from 'types/Listing';

type VariantType = 'variant1' | 'variant2';
interface ListingCardFooterProps {
  listingCategoryId: number;
  listingOpenStatus: ListingDateStatus[];
  isInWishlist: boolean;
  variant: VariantType;
}

export const ListingCardFooter: FC<ListingCardFooterProps> = ({ listingCategoryId, listingOpenStatus, isInWishlist, variant }) => {
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
  const getCategory = (categoryId: number) => {
    const category = categories_data.find((category: CategoryData) => category.categoryId === categoryId);
    return category ? category : categories_data[0];
  };

  const currentCategory = getCategory(listingCategoryId);
  const { categoryName, categoryIcon, categoryColor, categoryLink } = currentCategory;
  return (
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
        {variant == 'variant1' && (
          <div
            className="flex justify-center items-center ml-10 border-1 border-gray3 rounded-6 bg-light w-28 h-28 cursor-pointer"
            onClick={() => setWishlist(!wishlist)}
          >
            <WishListButton isInWishList={wishlist} color={'#0f0f36'} />
          </div>
        )}
      </div>
    </div>
  );
};
