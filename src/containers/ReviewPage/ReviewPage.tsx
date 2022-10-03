import { Content2 } from 'components/Content2/Content2';
import { Divider } from 'components/Divider/Divider';
import { ImageInputFile } from 'components/ImageInputFile/ImageInputFile';
import { PopUp } from 'components/PopUp/PopUp';
import { Rate1 } from 'components/Rate1/Rate1';
import { Rate2 } from 'components/Rate2/Rate2';
import { Rating } from 'components/Rating/Rating';
import { ReviewCard } from 'components/ReviewCard/ReviewCard';
import { Select } from 'components/Select/Select';
import { listings_data } from 'data/listings_data';
import { review_data } from 'data/review_data';
import { debounce } from 'lodash';
import { ChangeEvent, FC, Fragment, useState } from 'react';
import { useParams } from 'react-router';
import { ListingCardData } from 'types/Listing';

const selectSortReview = ['Date time', 'az', 'za'];
export const ReviewPage: FC = () => {
  const { id } = useParams();
  const [writeReviewData, setWriteReviewData] = useState({});
  const getListing = (listingId: number) => {
    const listing = listings_data.find((listing: ListingCardData) => listing.listingId === listingId);
    return listing ? listing : listings_data[0];
  };
  const listing = getListing(Number(id));
  const reviewList = review_data.filter(review => listing.listingReviewsIds.includes(review.reviewId));
  const handleChangeMessage = (event: ChangeEvent) => {
    setWriteReviewData(prev => ({ ...prev, message: (event.target as HTMLInputElement).value }));
  };
  const searchReview = (search: string) => {
    return reviewList.filter(review => {
      return review.reviewContent.includes(search);
    });
  };
  const [reviewData, setReviewData] = useState(searchReview(''));
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-9">
          <div className="flex justify-between mt-50">
            <div className="text-22 font-medium text-gray9">Review</div>
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
            </div>
          </div>
          <Divider style={{ marginBottom: '8px' }} />
          {reviewData.map((review, index) => {
            return (
              <Fragment key={index}>
                <ReviewCard key={review.reviewId} reviewId={review.reviewId} listingId={listing.listingId} listingTitle={listing.listingTitle} />
                {index != reviewData.length - 1 && <Divider />}
              </Fragment>
            );
          })}
        </div>
        <div className="col-lg-3 mt-45">
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
          <PopUp onApply={() => console.log(writeReviewData)} title={'Write a review'} containerStyle={{ maxWidth: '521px' }}>
            <PopUp.Toggle>
              <div className="w-100% py-11 flex justify-center items-center rounded-6 bg-primary text-light text-16 font-medium mt-20 cursor-pointer">
                Write a review
              </div>
            </PopUp.Toggle>
            <PopUp.Content>
              <div className="pb-15">
                <Rating name="checkin" handleChange={value => setWriteReviewData(prev => ({ ...prev, checkin: value }))}>
                  Check-in
                </Rating>
                <Rating name="accuracy" handleChange={value => setWriteReviewData(prev => ({ ...prev, accuracy: value }))}>
                  Accuracy
                </Rating>
                <Rating name="cleanliness" handleChange={value => setWriteReviewData(prev => ({ ...prev, cleanliness: value }))}>
                  Cleanliness
                </Rating>
                <Rating name="location" handleChange={value => setWriteReviewData(prev => ({ ...prev, location: value }))}>
                  Location
                </Rating>
                <div className="text-14 text-gray9 font-medium">Message</div>
                <textarea
                  className="w-100% rounded-4 border-1 border-gray4 h-95 mt-7 focus:border-gray4 focus:outline-none"
                  style={{ boxShadow: 'none' }}
                  name="messageReview"
                  onChange={debounce(handleChangeMessage)}
                ></textarea>
                <div className="text-14 text-gray9 font-medium mb-7">Image</div>
                <ImageInputFile name="imageReview" getData={data => setWriteReviewData(prev => ({ ...prev, image: data }))} />
              </div>
            </PopUp.Content>
          </PopUp>
        </div>
      </div>
    </div>
  );
};
