import { Content1 } from 'components/Content1/Content1';
import { Content6 } from 'components/Content6/Content6';
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
import { Tours1 } from '../Tours1/Tours1';
import { UtilitiesCards } from '../UtilitiesCards/UtilitiesCards';

const selectSortReview = ['Date time', 'az', 'za'];
export const ListingDetailContent1: FC = () => {
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
      <Content6 title="Description">
        <div className="text-gray6 text-14 font-normal">{listing.listingDescription}</div>
      </Content6>
      <Content6 title="Price Range">
        <div className="text-gray6 text-14 font-normal">Sed dapibus porttitor nisl, sit amet finibus libero ultricies tincidunt.</div>
        <div className="flex justify-start items-center mt-5">
          <div className="text-26 font-normal text-primary">{listing.listingMinPrice}</div>
          <div className="text-26 font-normal text-primary">- {listing.listingMaxPrice}</div>
        </div>
      </Content6>
      <Content6 title="Business Info">
        <div className="container px-0">
          <div className="row">
            <div className="col-lg-4">
              <Content1 link={`mailto:${listing.listingEmail}`}>
                <div className="flex flex-col items-center w-100% pt-5">
                  <div className="flex justify-center items-center w-33 h-33 rounded-10 bg-primary text-light">
                    <i className="far fa-link"></i>
                  </div>
                  <div className="mt-10 text-14 text-gray7 font-normal">{listing.listingEmail}</div>
                </div>
              </Content1>
            </div>
            <div className="col-lg-4">
              <Content1 link={`tel:${listing.listingPhone}`}>
                <div className="flex flex-col items-center w-100% pt-5">
                  <div className="flex justify-center items-center w-33 h-33 rounded-10 bg-primary text-light">
                    <i className="far fa-phone-alt"></i>
                  </div>
                  <div className="mt-10 text-14 text-gray7 font-normal">{listing.listingPhone}</div>
                </div>
              </Content1>
            </div>
            <div className="col-lg-4">
              <Content1 link="">
                <div className="flex flex-col items-center w-100% pt-5">
                  <div className="flex justify-center items-center w-33 h-33 rounded-10 bg-primary text-light">
                    <i className="far fa-comments-alt"></i>
                  </div>
                  <div className="mt-10 text-14 text-gray7 font-normal">Message the business</div>
                </div>
              </Content1>
            </div>
            {listing.listingSocials.map((social, index) => {
              return (
                <a href={social.value} className="col-lg-6 flex mt-20" key={index}>
                  {social.name === 'facebook' && (
                    <div className="flex justify-center items-center w-30 h-30 rounded-1/2 text-light" style={{ background: '#325d94' }}>
                      <i className="fab fa-facebook-square"></i>
                    </div>
                  )}
                  {social.name === 'switter' && (
                    <div className="flex justify-center items-center w-30 h-30 rounded-1/2 text-light" style={{ background: '#00aadb' }}>
                      <i className="fab fa-twitter"></i>
                    </div>
                  )}
                  {social.name === 'tumblr' && (
                    <div className="flex justify-center items-center w-30 h-30 rounded-1/2 text-light" style={{ background: '#2f4e6b' }}>
                      <i className="fab fa-tumblr"></i>
                    </div>
                  )}
                  {social.name === 'flickr' && (
                    <div className="flex justify-center items-center w-30 h-30 rounded-1/2 text-light" style={{ background: '#ff0084' }}>
                      <i className="fab fa-flickr"></i>
                    </div>
                  )}
                  <div className="ml-8">
                    <div className="text-14 font-medium text-gray7 capitalize">{social.name}</div>
                    <div className="text-12 text-gray5 font-normal">{social.value}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </Content6>
      <Content6 title="Amenities">
        <UtilitiesCards listingAmenitiesId={listing.listingAmenitiesIds} listingName={listing.listingTitle} />
      </Content6>
      <Content6 title="Location">
        <LocationTab listingLocation={listing.listingLocations} listingId={listing.listingId} />
      </Content6>
      <Content6 title="Tour this hotel">
        <Tours1 listingId={listing.listingId} />
      </Content6>
      <Content6 title="Reviews">
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
      </Content6>
    </>
  );
};
