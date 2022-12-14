import { Content3 } from 'components/Content3/Content3';
import { Divider } from 'components/Divider/Divider';
import { LocationTab } from 'components/LocationTab/LocationTab';
import { Modal } from 'components/Modal/Modal';
import { Rate1 } from 'components/Rate1/Rate1';
import { Rate2 } from 'components/Rate2/Rate2';
import { ReviewCard } from 'components/ReviewCard/ReviewCard';
import { Select } from 'components/Select/Select';
import { ReviewPage } from 'containers/ReviewPage/ReviewPage';
import { review_data } from 'data/review_data';
import { FC, Fragment, useContext, useState } from 'react';

import { DetailsContext } from '../ListingDetailPage';
import { Tours } from '../Tours/Tours';
import { UtilitiesCards } from '../UtilitiesCards/UtilitiesCards';

const selectSortReview = ['Date time', 'az', 'za'];
export const ListingDetailContent: FC = () => {
  const { listing } = useContext(DetailsContext);
  const [visibleModalReview, setVisibleModalReview] = useState(false);

  const reviewList = review_data.filter(review => listing.listingReviewsIds.includes(review.reviewId));
  const searchReview = (search: string) => {
    return reviewList.filter(review => {
      return review.reviewContent.includes(search);
    });
  };
  const [reviewData, setReviewData] = useState(searchReview(''));
  return (
    <>
      <div className="relative w-100% bg-cover bg-left aspect-740/290 asp flex flex-col rounded-6 mt-30">
        <img className="w-100% h-100% absolute top-0 left-0 object-cover z-_1 rounded-6" src="/assets/saleimg.png" alt="" />
      </div>
      <Content3 title="Description">
        <div className="text-14 font-normal text-gray6 mt-5 leading-1">{listing.listingDescription}</div>
      </Content3>
      <Content3 title="Amenities">
        <UtilitiesCards listingAmenitiesId={listing.listingAmenitiesIds} listingName={listing.listingTitle} />
      </Content3>
      <Content3 title="Location">
        <LocationTab listingLocation={listing.listingLocations} listingId={listing.listingId} />
      </Content3>
      <Tours listingId={listing.listingId} />
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
              className="flex justify-center items-center bg-primary rounded-4 mr-10 px-15 pt-8 pb-7 cursor-pointer mb-10 whitespace-nowrap"
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
        <Divider />
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
        {reviewData.map((review, index) => {
          return (
            <Fragment key={index}>
              <ReviewCard key={review.reviewId} reviewId={review.reviewId} listingId={listing.listingId} listingTitle={listing.listingTitle} />
              {index != reviewData.length - 1 && <Divider />}
            </Fragment>
          );
        })}
        <div
          className="fz-15 fw-400 text-primary cursor-pointer"
          onClick={() => {
            setVisibleModalReview(visible => !visible);
            document.body.classList.add('scroll-hidden');
          }}
        >
          Show {reviewData.length} Reviews
          <i className="fal fa-chevron-right ml-10"></i>
        </div>
      </Content3>
    </>
  );
};
