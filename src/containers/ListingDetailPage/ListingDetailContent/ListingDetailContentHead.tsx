import { Category } from 'components/Category/Category';
import { DropDownItem } from 'components/DropDownItem/DropDownItem';
import { Rate1 } from 'components/Rate1/Rate1';
import { WishListButton } from 'components/WishListButton/WishListButton';
import { review_data, ReviewData } from 'data/review_data';
import { FC, useState } from 'react';

interface ListingDetailContentHead {
  categoryName: string;
  categoryIcon: string;
  categoryColor: string;
  categoryLink: string;
  listingTitle: string;
  listingAddress: string;
  listingRatingScore: number;
  listingLink: string;
  listingReviewsIds: number[];
}

export const ListingDetailContentHead: FC<ListingDetailContentHead> = ({
  categoryName,
  categoryIcon,
  categoryColor,
  categoryLink,
  listingReviewsIds,
  listingTitle,
  listingAddress,
  listingRatingScore,
}) => {
  const [wishlist, setWishlist] = useState(true);
  const getQuantityReview = (listingReviewsIds: number[]) => {
    return review_data.filter((review: ReviewData) => listingReviewsIds.includes(review.reviewId));
  };
  const quantityReview = getQuantityReview(listingReviewsIds);
  return (
    <>
      <div className="flex items-center justify-between mt-21">
        <div className="w-fit">
          <Category
            categoryId={1}
            categoryCount={1}
            categoryColor={categoryColor}
            categoryIcon={categoryIcon}
            categoryLink={categoryLink}
            textColor="dark"
            categoryName={categoryName}
            variant="variant2"
          />
        </div>
        <div className="flex justify-center items-center">
          <div className="px-10 py-5 border-1 border-gray4 rounded-4 ml-5 mr-5">
            <i className="fas fa-share mr-5"></i>Share
          </div>
          <div
            className="flex items-center px-10 py-5 border-1 border-gray4 rounded-4 ml-5 mr-5 cursor-pointer select-none"
            onClick={() => setWishlist(!wishlist)}
          >
            <WishListButton border={false} color={'#0f0f36'} isInWishList={wishlist} size={18} /> Save
          </div>
          <DropDownItem>
            <div className="px-10 py-5 border-1 border-gray4 rounded-4">
              <i className="far fa-ellipsis-v"></i>
            </div>
          </DropDownItem>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex justify-start items-center">
          <div className="text-gray8 text-28 font-medium">{listingTitle}</div>
          <div className="text-13 font-normal text-gray7 ml-5">Claimed</div>
        </div>
        <div className="flex justify-center items-center">
          <Rate1>{listingRatingScore}</Rate1>
          <div className="text-18 font-normal text-gray6 pl-10">{quantityReview.length} Reviews</div>
        </div>
      </div>
      <div className="flex items-start border-b-gray3 border-b-1 pb-30">
        <span>
          <i className="far fa-map-marker-alt mr-5 text-primary"></i>
        </span>
        <div className="text-gray6 text-16 font-normal mr-5">{listingAddress}</div>
        <div className="text-14 font-400 text-tertiary underline">+3 Locations</div>
      </div>
      <div className="relative w-100% bg-cover bg-left aspect-740/290 asp flex flex-col rounded-6 mt-30">
        <img className="w-100% h-100% absolute top-0 left-0 object-cover z-_1 rounded-6" src="/assets/saleimg.png" alt="" />
      </div>
    </>
  );
};
