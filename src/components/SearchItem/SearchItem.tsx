import { Rate1 } from 'components/Rate1/Rate1';
import { WishListButton } from 'components/WishListButton/WishListButton';
import { categories_data } from 'data/categories_data';
import { listings_data } from 'data/listings_data';
import { review_data } from 'data/review_data';
import { users_data } from 'data/users_data';
import { FC, useState } from 'react';
import { ListingCardData, ListingDateStatus } from 'types/Listing';
import { User } from 'types/User';

interface SearchItemProps {
  listingId: number;
}

export const SearchItem: FC<SearchItemProps> = ({ listingId }) => {
  const getListing = (id: number) => {
    return listings_data.filter((listing: ListingCardData) => listing.listingId === id)[0];
  };
  const listing = getListing(listingId);
  const [wishlist, setWishlist] = useState(listing.isInWishlist);
  const getUser = (userId: number) => {
    const current_user = users_data.find((user: User) => user.userId === userId);
    return current_user ? current_user : users_data[0];
  };
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
  const user = getUser(listing.listingUserId);
  const categoryList = categories_data.filter(cate => cate.categoryId === listing.listingCategoryId);
  const category = categoryList[0];
  const reviewList = review_data.filter(review => listing.listingReviewsIds.includes(review.reviewId));
  const authorComment = getUser(reviewList[0].reviewAuthorId);
  const openStatus = getDateStatus(listing.listingOpenStatus);
  return (
    <div className="flex pb-20 flex-wrap">
      <a href={listing.listingLink} className="w-100% sm-max:mb-10 sm:w-40% min-w-280 relative bg-center bg-cover aspect-4/3 rounded-14">
        <img className="absolute inset-0 w-100% h-100% object-cover rounded-14" src={listing.listingGallery[0].listingImageUrl} />
      </a>
      <div className="w:100% sm:w-60% sm:pl-20">
        <div className="flex justify-between">
          <div className="text-11 font-bold text-primary uppercase">{category.categoryName}</div>
          <div className="flex items-center">
            <Rate1 style={{ color: '#6060c3' }}>{listing.listingRatingScore.toFixed(1)}</Rate1>
            <div className="text-18 font-normal text-gray5 ml-3">({reviewList.length})</div>
          </div>
        </div>
        <a href={listing.listingLink} className="inline-block text-18 font-medium text-gray9 mb-5">
          {listing.listingTitle}
        </a>
        <div className="text-14 font-normal text-gray6 mb-10">
          <i className="fal fa-map-marker-alt mr-5 text-primary"></i>
          {listing.listingLocations[0].address}
        </div>
        <div className="text-14 font-normal text-gray6 mb-10">
          <i className="fal fa-phone-alt mr-5 text-primary"></i>
          {listing.listingPhone}
        </div>
        <div className="flex mb-10">
          <div className="relative bg-cover bg-center rounded-1/2 mr-10 min-w-22 w-22 h-22">
            <img className="absolute inset-0 w-100% h-100% top-0 left-0 object-cover rounded-1/2" src={authorComment.userAvatar} alt="" />
          </div>
          <div className="text-13 font-normal text-gray6 line-clamp-2">
            <span className="text-13 text-gray9 font-bold mr-5">{authorComment.userName}</span>
            {reviewList[0].reviewContent}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="relative bg-cover bg-center rounded-1/2 mr-12 w-22 h-22">
              <img className="absolute inset-0 w-100% h-100% top-0 left-0 object-cover rounded-1/2" src={user.userAvatar} alt="" />
            </div>
            <div className="text-12 text-gray8 font-medium">{user.userName}</div>
            <div className="text-13 flex items-center justify-center">
              <i className="fas fa-circle text-3 mx-10 text-gray6"></i> <span className="text-gray6 text-12 font-medium">$$</span>{' '}
              <i className="fas fa-circle text-3 mx-10 text-gray6"></i>{' '}
              <span className="text-secondary font-semibold">{openStatus ? 'Open Now' : 'Close'}</span>
            </div>
          </div>
          <div className="cursor-pointer" onClick={() => setWishlist(!wishlist)}>
            <WishListButton color={'#929099'} fontSize={20} isInWishList={wishlist} />
          </div>
        </div>
      </div>
    </div>
  );
};
