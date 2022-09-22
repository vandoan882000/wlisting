import { Category } from 'components/Category/Category';
import { CheckBox1 } from 'components/CheckBox1/CheckBox1';
import { Popover } from 'components/Popover/Popover';
import { Rate1 } from 'components/Rate1/Rate1';
import { WishListButton } from 'components/WishListButton/WishListButton';
import { review_data, ReviewData } from 'data/review_data';
import { FC, useState } from 'react';
import { ListingLocation } from 'types/Listing';

interface ListingDetailContentHead {
  categoryName: string;
  categoryIcon: string;
  categoryColor: string;
  categoryLink: string;
  listingTitle: string;
  listingRatingScore: number;
  listingLink: string;
  listingLocations: ListingLocation[];
  listingReviewsIds: number[];
}

export const ListingDetailContentHead: FC<ListingDetailContentHead> = ({
  categoryName,
  categoryIcon,
  categoryColor,
  categoryLink,
  listingReviewsIds,
  listingTitle,
  listingRatingScore,
  listingLocations,
}) => {
  const [wishlist, setWishlist] = useState(true);
  const getQuantityReview = (listingReviewsIds: number[]) => {
    return review_data.filter((review: ReviewData) => listingReviewsIds.includes(review.reviewId));
  };
  const quantityReview = getQuantityReview(listingReviewsIds);
  return (
    <>
      <div className="flex items-center justify-between flex-wrap mt-21">
        <div className="w-fit mb-5">
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
        <div className="flex justify-center items-center mb-5">
          <Popover title="" variant="variant2">
            <Popover.Toggle>
              <div className="flex items-center m-0 px-10 py-3 border-1 text-14 font-medium text-gray8 border-gray4 rounded-4 mr-5 cursor-pointer whitespace-nowrap select-none">
                <i className="fal fa-share mr-5"></i>Share
              </div>
            </Popover.Toggle>
            <Popover.Content>
              <div className="flex flex-col rounded-10 py-9 bg-light z-100">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?app_id=1217981644879628&u=${window.location.href}?utm_source=ig_web_button_share_sheet`}
                  className="flex items-center w-100% h-29 hover:bg-gray2 pl-12 pr-21 cursor-pointer"
                >
                  <i className="far fa-pen text-12 mr-8 text-gray5"></i>
                  <span className="text-13 font-normal text-gray7 whitespace-nowrap">Facebook</span>
                </a>
                <a
                  href={`https://www.facebook.com/dialog/send?app_id=1217981644879628&link=${window.location.href}?utm_source=ig_web_button_share_sheet&redirect_uri=${window.location.href}?utm_source=ig_web_button_share_sheet`}
                  className="flex items-center w-100% h-29 hover:bg-gray2 pl-12 pr-21 cursor-pointer"
                >
                  <i className="far fa-star text-12 mr-8 text-gray5"></i>
                  <span className="text-13 font-normal text-gray7 whitespace-nowrap">Messenger</span>
                </a>
                <a
                  href={`https://twitter.com/share?url=${window.location.href}?utm_source=ig_web_button_share_sheet`}
                  className="flex items-center w-100% h-29 hover:bg-gray2 pl-12 pr-21 cursor-pointer"
                >
                  <i className="far fa-trash-alt text-12 mr-8 text-gray5"></i>
                  <span className="text-13 font-normal text-gray7 whitespace-nowrap">Twitter</span>
                </a>
                <a
                  href={`mailto:?subject=${window.location.href}&body=${window.location.href}`}
                  className="flex items-center w-100% h-29 hover:bg-gray2 pl-12 pr-21 cursor-pointer"
                >
                  <i className="far fa-flag text-12 mr-8 text-gray5"></i>
                  <span className="text-13 font-normal text-gray7 whitespace-nowrap">Email</span>
                </a>
              </div>
            </Popover.Content>
          </Popover>

          <div
            className="flex items-center px-12 py-3 mr-10 border-1 border-gray4 rounded-4 ml-5 font-medium text-14 cursor-pointer select-none"
            onClick={() => setWishlist(!wishlist)}
          >
            <WishListButton color={'#0f0f36'} isInWishList={wishlist} fontSize={14} /> <span className="ml-5">Save</span>
          </div>
          <Popover title="" variant="variant2">
            <Popover.Toggle>
              <div className="px-12 py-2 border-1 text-gray8 border-gray4 rounded-4">
                <i className="far fa-ellipsis-v"></i>
              </div>
            </Popover.Toggle>
            <Popover.Content>
              <div className="flex flex-col rounded-10 py-9 bg-light z-100">
                <div className="flex items-center w-100% h-29 hover:bg-gray2 pl-12 pr-21 cursor-pointer">
                  <i className="far fa-pen text-12 mr-8 text-gray5"></i>
                  <span className="text-13 font-normal text-gray7 whitespace-nowrap">Edit</span>
                </div>
                <div className="flex items-center w-100% h-29 hover:bg-gray2 pl-12 pr-21 cursor-pointer">
                  <i className="far fa-star text-12 mr-8 text-gray5"></i>
                  <span className="text-13 font-normal text-gray7 whitespace-nowrap">Write a review</span>
                </div>
                <div className="flex items-center w-100% h-29 hover:bg-gray2 pl-12 pr-21 cursor-pointer">
                  <i className="far fa-trash-alt text-12 mr-8 text-gray5"></i>
                  <span className="text-13 font-normal text-gray7 whitespace-nowrap">Delete</span>
                </div>
                <div className="flex items-center w-100% h-29 hover:bg-gray2 pl-12 pr-21 cursor-pointer">
                  <i className="far fa-flag text-12 mr-8 text-gray5"></i>
                  <span className="text-13 font-normal text-gray7 whitespace-nowrap">Report</span>
                </div>
              </div>
            </Popover.Content>
          </Popover>
        </div>
      </div>
      <div className="flex items-center justify-between flex-wrap">
        <div className="flex justify-start items-center flex-wrap">
          <div className="text-gray8 text-28 font-medium mr-15">{listingTitle}</div>
          <div className="flex justify-center items-center text-13 font-normal text-gray7">
            <CheckBox1 fontSize={12} size={16} color={'#ffffff'} background={'#4ea7f3'} />
            <span className="ml-4">Claimed</span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Rate1>{listingRatingScore.toFixed(1)}</Rate1>
          <div className="w-1 h-14 bg-gray4 ml-10 mr-10"></div>
          <div className="flex justify-center items-center flex-nowrap whitespace-nowrap text-18 font-normal text-gray6">
            <span className="mr-5">{quantityReview.length}</span> <span>Reviews</span>
          </div>
        </div>
      </div>
      <div className="flex items-start border-b-gray3 border-b-1 pb-30 flex-wrap">
        <div className="flex">
          <span>
            <i className="far fa-map-marker-alt mr-5 text-primary"></i>
          </span>
          <div className="text-gray6 text-16 font-normal mr-5">{listingLocations[0].address}</div>
        </div>
        <div className="text-14 font-400 text-tertiary underline whitespace-nowrap">
          {listingLocations.length > 1 ? `+${listingLocations.length - 1}` : listingLocations.length} Locations
        </div>
      </div>
      <div className="relative w-100% bg-cover bg-left aspect-740/290 asp flex flex-col rounded-6 mt-30">
        <img className="w-100% h-100% absolute top-0 left-0 object-cover z-_1 rounded-6" src="/assets/saleimg.png" alt="" />
      </div>
    </>
  );
};
