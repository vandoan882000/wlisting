import { AuthorInfo } from 'components/AuthorInfo/AuthorInfo';
import { BusinessInfo } from 'components/BusinessInfo/BusinessInfo';
import { Content2 } from 'components/Content2/Content2';
import { Content3 } from 'components/Content3/Content3';
import { Hours } from 'components/Hours/Hours';
import { LocationTab } from 'components/LocationTab/LocationTab';
import { PriceRange } from 'components/PriceRange/PriceRange';
import { ReviewCard } from 'components/ReviewCard/ReviewCard';
import { categories_data, CategoryData } from 'data/categories_data';
import { ListingCardData, listings_data } from 'data/listings_data';
import { review_data } from 'data/review_data';
import { User, users_data } from 'data/users_data';
import { FC } from 'react';

import { AmenitiesCards } from '../AmenitiesCards/AmenitiesCards';
import { Tours } from '../Tours/Tours';
import { ListingDetailContentHead } from './ListingDetailContentHead';

interface ListingDetailContentProps {
  listingId: number;
}
export const ListingDetailContent: FC<ListingDetailContentProps> & {
  Header: typeof ListingDetailContentHead;
} = ({ listingId }) => {
  const getListing = (listingId: number) => {
    const listing = listings_data.find((listing: ListingCardData) => listing.listingId === listingId);
    return listing ? listing : listings_data[0];
  };

  const getCategory = (categoryId: number) => {
    const category = categories_data.find((category: CategoryData) => category.categoryId === categoryId);
    return category ? category : categories_data[0];
  };
  const getAuthor = (userId: number) => {
    const user = users_data.find((user: User) => user.userId === userId);
    return user ? user : users_data[0];
  };

  const listing = getListing(listingId);
  const category = getCategory(listing.listingCategoryId);
  const author = getAuthor(listing.listingUserId);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-9 pb-30">
          <ListingDetailContent.Header {...listing} {...category} />
          <Content3 title="Description">
            <div className="text-14 font-normal text-gray6 mt-5 leading-1">{listing.listingDescription}</div>
          </Content3>
          <Content3 title="Amenities">
            <AmenitiesCards />
          </Content3>
          <Content3 title="Location">
            <LocationTab />
          </Content3>
          <Content3 title="Tour this hotel">
            <Tours />
          </Content3>
          <Content3 title="Reviews">
            {review_data.map(review => {
              return listing.listingReviewsIds.includes(review.reviewId) && <ReviewCard key={review.reviewId} reviewId={review.reviewId} />;
            })}
          </Content3>
        </div>
        <div className="col-lg-3 pb-30">
          <Content2 title="Price Range">
            <PriceRange min={listing.listingMinPrice} max={listing.listingMaxPrice} />
          </Content2>
          <Content2 title="Business Info">
            <BusinessInfo />
          </Content2>
          <Content2 title="Hours">
            <Hours listingOpenStatus={listing.listingOpenStatus} />
          </Content2>
          <Content2>
            <AuthorInfo {...author} />
          </Content2>
          <a href="#" className="flex items-center mt-17">
            <i className="fab fa-font-awesome-flag mr-5 text-gray6 text-16 font-medium"></i>
            <div className="text-14 font-normal text-gray6">Report this listing</div>
          </a>
        </div>
      </div>
    </div>
  );
};
ListingDetailContent.Header = ListingDetailContentHead;
