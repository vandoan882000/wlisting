import { AuthorInfo } from 'components/AuthorInfo/AuthorInfo';
import { BusinessInfo } from 'components/BusinessInfo/BusinessInfo';
import { Content2 } from 'components/Content2/Content2';
import { Content3 } from 'components/Content3/Content3';
import { Devider } from 'components/Divider/Devider';
import { Hours } from 'components/Hours/Hours';
import { LocationTab } from 'components/LocationTab/LocationTab';
import { Modal } from 'components/Modal/Modal';
import { PriceRange } from 'components/PriceRange/PriceRange';
import { Rate1 } from 'components/Rate1/Rate1';
import { Rate2 } from 'components/Rate2/Rate2';
import { ReviewCard } from 'components/ReviewCard/ReviewCard';
import { Select } from 'components/Select/Select';
import { ReviewPage } from 'containers/ReviewPage/ReviewPage';
import { categories_data } from 'data/categories_data';
import { listings_data } from 'data/listings_data';
import { review_data } from 'data/review_data';
import { users_data } from 'data/users_data';
import { FC, useState } from 'react';
import { CategoryData } from 'types/Category';
import { ListingCardData } from 'types/Listing';
import { User } from 'types/User';

import { Tours } from '../Tours/Tours';
import { UtilitiesCards } from '../UtilitiesCards/UtilitiesCards';
import { ListingDetailContentHead } from './ListingDetailContentHead';

interface ListingDetailContentProps {
  listingId: number;
}
const selectSortReview = ['Date time', 'az', 'za'];
export const ListingDetailContent: FC<ListingDetailContentProps> & {
  Header: typeof ListingDetailContentHead;
} = ({ listingId }) => {
  const [visibleModalReview, setVisibleModalReview] = useState(false);

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
  const reviewList = review_data.filter(review => listing.listingReviewsIds.includes(review.reviewId));
  const searchReview = (search: string) => {
    return reviewList.filter(review => {
      return review.reviewContent.includes(search);
    });
  };
  const [reviewData, setReviewData] = useState(searchReview(''));
  console.log(reviewData);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-9 pb-30 pt-10 md:pr-57">
          <ListingDetailContent.Header {...listing} {...category} />
          <Content3 title="Description">
            <div className="text-14 font-normal text-gray6 mt-5 leading-1">{listing.listingDescription}</div>
          </Content3>
          <Content3 title="Amenities">
            <UtilitiesCards listingAmenitiesId={listing.listingAmenitiesIds} listingName={listing.listingTitle} />
          </Content3>
          <Content3 title="Location">
            <LocationTab listingLocation={listing.listingLocations} listingId={listingId} />
          </Content3>
          <Tours listingTitle={listing.listingTitle} listingGallery={listing.listingGallery} />
          <Content3 title="Reviews">
            <div className="flex justify-between flex-wrap">
              <div className="flex justify-center items-center mb-10">
                <Rate1>{7.8}</Rate1>
                <div className="w-1 h-14 bg-gray4 mx-10"></div>
                <div className="text-18 font-normal text-gray6">{reviewList.length} Reviews</div>
              </div>
              <div className="flex flex-wrap">
                <div className="h-36 border-1 border-gray4 pr-10 rounded-4 mr-10 mb-10">
                  <input
                    className="w-120 h-100% border-0 outline-none focus:outline-none focus:border-0 focus:shadow-none text-14 rounded-4"
                    type="text"
                    placeholder="Search reviews"
                    style={{ boxShadow: 'none' }}
                  />
                  <i
                    className="far fa-search cursor-pointer"
                    onClick={() => {
                      setReviewData(searchReview('fringilla'));
                    }}
                  ></i>
                </div>
                <Select
                  items={selectSortReview}
                  style={{ width: 'clamp(100px, 20vw + 30px, 154px)', height: '36px', color: '#75737c', fontSize: '14px' }}
                ></Select>
                <div
                  className="flex justify-center items-center bg-primary rounded-4 mr-10 px-15 py-8 cursor-pointer mb-10 whitespace-nowrap"
                  onClick={() => {
                    setVisibleModalReview(visible => !visible);
                    document.body.classList.add('scroll-hidden');
                  }}
                >
                  <i className="fal fa-star text-light mr-5 text-14"></i>
                  <span className="text-light text-14 font-medium">Write a review</span>
                </div>
                <Modal
                  title={listing.listingTitle}
                  visible={visibleModalReview}
                  onBack={() => {
                    setVisibleModalReview(visible => !visible);
                    document.body.classList.remove('scroll-hidden');
                  }}
                >
                  <ReviewPage />
                </Modal>
              </div>
            </div>
            <Devider />
            <div className="flex flex-wrap">
              <div className="w-50% pr-10">
                <Rate2 title="Check-in" score={6.0} />
              </div>
              <div className="w-50% pl-10">
                <Rate2 title="Cleanliness" score={4.4} />
              </div>
              <div className="w-50% pr-10">
                <Rate2 title="Accuracy" score={8.2} />
              </div>
              <div className="w-50% pl-10">
                <Rate2 title="Location" score={5.5} />
              </div>
            </div>
            {reviewData.map(review => {
              return <ReviewCard key={review.reviewId} reviewId={review.reviewId} />;
            })}
          </Content3>
        </div>
        <div className="col-lg-3 pb-30 pt-10">
          <Content2 title="Price Range">
            <PriceRange min={listing.listingMinPrice} max={listing.listingMaxPrice} />
          </Content2>
          <Content2 title="Business Info">
            <BusinessInfo email={listing.listingEmail} phone={listing.listingPhone} social={listing.listingSocials} />
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
