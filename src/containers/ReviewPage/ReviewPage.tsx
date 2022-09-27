import { Content2 } from 'components/Content2/Content2';
import { ImageInputFile } from 'components/ImageInputFile/ImageInputFile';
import { PopUp } from 'components/PopUp/PopUp';
import { Rate1 } from 'components/Rate1/Rate1';
import { Rate2 } from 'components/Rate2/Rate2';
import { Rating } from 'components/Rating/Rating';
import { ReviewCard } from 'components/ReviewCard/ReviewCard';
import { listings_data } from 'data/listings_data';
import { review_data } from 'data/review_data';
import { FC } from 'react';
import { useParams } from 'react-router';
import { ListingCardData } from 'types/Listing';

export const ReviewPage: FC = () => {
  const { id } = useParams();
  console.log(id);
  const getListing = (listingId: number) => {
    const listing = listings_data.find((listing: ListingCardData) => listing.listingId === listingId);
    return listing ? listing : listings_data[0];
  };
  const listing = getListing(Number(id));
  const reviewList = review_data.filter(review => listing.listingReviewsIds.includes(review.reviewId));
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-9">
          {reviewList.map(review => {
            return <ReviewCard key={review.reviewId} reviewId={review.reviewId} />;
          })}
        </div>
        <div className="col-lg-3">
          <Content2>
            <div className="flex items-center">
              <span>
                <Rate1>7.5</Rate1>
              </span>
              <div className="w-1 h-14 bg-gray4 ml-10 mr-10"></div>
              <span className="text-gray6 font-normal text-18">{reviewList.length} Reviews</span>
            </div>
            <Rate2 title={'Check-in'} score={6.1} />
            <Rate2 title={'Accuracy'} score={8.2} />
            <Rate2 title={'Cleanliness'} score={4.4} />
            <Rate2 title={'Location'} score={5.5} />
          </Content2>
          <PopUp onApply={() => {}} title={'Write a review'}>
            <PopUp.Toggle>
              <div className="w-100% py-11 flex justify-center items-center rounded-6 bg-primary text-light text-16 font-medium mt-20 cursor-pointer">
                Write a review
              </div>
            </PopUp.Toggle>
            <PopUp.Content>
              <div className="pb-15">
                <Rating>Check-in</Rating>
                <Rating>Accuracy</Rating>
                <Rating>Cleanliness</Rating>
                <Rating>Location</Rating>
                <div className="text-14 text-gray9 font-medium">Message</div>
                <textarea
                  className="w-100% rounded-4 border-1 border-gray4 h-95 mt-7 focus:border-gray4 focus:outline-none"
                  style={{ boxShadow: 'none' }}
                  name="messageReview"
                ></textarea>
                <div className="text-14 text-gray9 font-medium mb-7">Image</div>
                <ImageInputFile name="imageReview" />
              </div>
            </PopUp.Content>
          </PopUp>
        </div>
      </div>
    </div>
  );
};
