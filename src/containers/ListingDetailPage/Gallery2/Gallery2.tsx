import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Category } from 'components/Category/Category';
import CheckBox1 from 'components/CheckBox1/CheckBox1';
import { Popover } from 'components/Popover/Popover';
import { Rate1 } from 'components/Rate1/Rate1';
import { ViewPhotos } from 'components/ViewPhotos/ViewPhotos';
import { WishListButton } from 'components/WishListButton/WishListButton';
import { review_data } from 'data/review_data';
import { FC, useContext, useState } from 'react';

import { DetailsContext } from '../ListingDetailPage';

export const Gallery2: FC = () => {
  const { listing, category } = useContext(DetailsContext);
  const [visibleModal, setVisibleModal] = useState(false);
  const [enableTypeImage, setEnableTypeImage] = useState('Living room');
  const [wishlist, setWishlist] = useState(true);
  const getQuantityReview = (listingReviewsIds: number[]) => {
    return review_data.filter(review => listingReviewsIds.includes(review.reviewId));
  };
  const quantityReview = getQuantityReview(listing.listingReviewsIds);
  return (
    <div className="container max-w-none">
      <div className="row h-449 flex relative">
        <div className="col-sm-12 col-md-12 col-lg-4 pt-30 px-22 pb-17 bg-cover bg-center relative lg-max:!w-100% bg-gray9 flex flex-col justify-between">
          <div>
            <div className="w-fit mb-5">
              <Category
                categoryId={1}
                categoryCount={1}
                categoryColor={category.categoryColor}
                categoryIcon={category.categoryIcon}
                categoryLink={category.categoryLink}
                textColor="light"
                categoryName={category.categoryName}
                variant="variant2"
              />
            </div>
            <div className="flex items-center justify-between flex-wrap">
              <div className="flex justify-start items-center flex-wrap">
                <div className="text-light text-28 font-medium mr-15">{listing.listingTitle}</div>
                {listing.listingVerify && (
                  <div className="flex justify-center items-center text-13 font-normal text-gray8">
                    <CheckBox1 fontSize={11} size={16} color={'#ffffff'} background={'#4ea7f3'} />
                    <span className="ml-4">Claimed</span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-start pb-30 flex-wrap">
              <div className="flex">
                <span>
                  <i className="far fa-map-marker-alt mr-5 text-primary"></i>
                </span>
                <div className="text-light text-16 font-normal mr-5">{listing.listingLocations[0].address}</div>
              </div>
              <div className="text-14 font-400 text-tertiary underline whitespace-nowrap">
                {listing.listingLocations.length > 1 ? `+${listing.listingLocations.length - 1}` : listing.listingLocations.length} Locations
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center flex-wrap">
            <div className="flex justify-center items-center mb-5">
              <Rate1>{listing.listingRatingScore.toFixed(1)}</Rate1>
              <div className="w-1 h-14 bg-gray4 ml-10 mr-10"></div>
              <div className="flex justify-center items-center flex-nowrap whitespace-nowrap text-18 font-normal text-gray6">
                <span className="mr-5">{quantityReview.length}</span> <span>Reviews</span>
              </div>
            </div>
            <div className="flex justify-center items-center mb-5">
              <Popover title="" variant="variant2">
                <Popover.Toggle>
                  <div className="flex items-center m-0 px-10 pt-4 pb-3 border-1 text-14 font-medium text-light border-gray4 rounded-4 mr-5 cursor-pointer whitespace-nowrap select-none">
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
                      <span className="text-13 font-normal text-gray8 whitespace-nowrap">Facebook</span>
                    </a>
                    <a
                      href={`https://www.facebook.com/dialog/send?app_id=1217981644879628&link=${window.location.href}?utm_source=ig_web_button_share_sheet&redirect_uri=${window.location.href}?utm_source=ig_web_button_share_sheet`}
                      className="flex items-center w-100% h-29 hover:bg-gray2 pl-12 pr-21 cursor-pointer"
                    >
                      <i className="far fa-star text-12 mr-8 text-gray5"></i>
                      <span className="text-13 font-normal text-gray8 whitespace-nowrap">Messenger</span>
                    </a>
                    <a
                      href={`https://twitter.com/share?url=${window.location.href}?utm_source=ig_web_button_share_sheet`}
                      className="flex items-center w-100% h-29 hover:bg-gray2 pl-12 pr-21 cursor-pointer"
                    >
                      <i className="far fa-trash-alt text-12 mr-8 text-gray5"></i>
                      <span className="text-13 font-normal text-gray8 whitespace-nowrap">Twitter</span>
                    </a>
                    <a
                      href={`mailto:?subject=${window.location.href}&body=${window.location.href}`}
                      className="flex items-center w-100% h-29 hover:bg-gray2 pl-12 pr-21 cursor-pointer"
                    >
                      <i className="far fa-flag text-12 mr-8 text-gray5"></i>
                      <span className="text-13 font-normal text-gray8 whitespace-nowrap">Email</span>
                    </a>
                  </div>
                </Popover.Content>
              </Popover>

              <div
                className="flex items-center px-12 pt-4 pb-3 mr-10 border-1 border-gray4 rounded-4 ml-5 font-medium text-14 cursor-pointer select-none"
                onClick={() => setWishlist(!wishlist)}
              >
                <WishListButton color={'#0f0f36'} isInWishList={wishlist} fontSize={14} /> <span className="ml-5 text-light">Save</span>
              </div>
              <Popover title="" variant="variant2" style={{ marginTop: '10px' }}>
                <Popover.Toggle>
                  <div className="px-12 py-2 border-1 text-light border-gray4 rounded-4">
                    <i className="far fa-ellipsis-v"></i>
                  </div>
                </Popover.Toggle>
                <Popover.Content>
                  <div className="flex flex-col rounded-10 py-9 bg-light z-100">
                    <div className="flex items-center w-100% h-29 hover:bg-gray2 pl-12 pr-21 cursor-pointer">
                      <span className="flex items-center w-26">
                        <i className="far fa-pen text-12 text-gray5"></i>
                      </span>
                      <span className="text-13 font-normal text-gray8 whitespace-nowrap">Edit</span>
                    </div>
                    <div className="flex items-center w-100% h-29 hover:bg-gray2 pl-12 pr-21 cursor-pointer">
                      <span className="flex items-center w-26">
                        <i className="far fa-star text-12 text-gray5"></i>
                      </span>
                      <span className="text-13 font-normal text-gray8 whitespace-nowrap">Write a review</span>
                    </div>
                    <div className="flex items-center w-100% h-29 hover:bg-gray2 pl-12 pr-21 cursor-pointer">
                      <span className="flex items-center w-26">
                        <i className="far fa-trash-alt text-12 text-gray5"></i>
                      </span>
                      <span className="text-13 font-normal text-gray8 whitespace-nowrap">Delete</span>
                    </div>
                    <div className="flex items-center w-100% h-29 hover:bg-gray2 pl-12 pr-21 cursor-pointer">
                      <span className="flex items-center w-26">
                        <i className="far fa-flag text-12 text-gray5"></i>
                      </span>
                      <span className="text-13 font-normal text-gray8 whitespace-nowrap">Report</span>
                    </div>
                  </div>
                </Popover.Content>
              </Popover>
            </div>
          </div>
        </div>
        <div className="lg-max:hidden col-lg-8 pl-5 !pr-0 flex flex-wrap">
          <div className="w-100% h-100% pl-5">
            <div
              className="w-100% h-100% bg-[url('https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center cursor-pointer"
              onClick={() => {
                setVisibleModal(visible => !visible);
                setEnableTypeImage(listing.listingGallery[0].listingImageName);
                document.body.classList.add('scroll-hidden');
              }}
              style={{ backgroundImage: `url('${listing.listingGallery[0].listingImageUrl}')` }}
            ></div>
          </div>
        </div>
        <div
          className="lg-max:hidden absolute flex justify-center items-center w-fit h-36 text-14 font-medium bg-light rounded-4 bottom-10 right-10 cursor-pointer"
          onClick={() => {
            setVisibleModal(visible => !visible);
            setEnableTypeImage('Living Room');
            document.body.classList.add('scroll-hidden');
          }}
        >
          <span className="mr-5 text-16">
            <i className="far fa-image"></i>
          </span>
          <span>View Photos</span>
        </div>
      </div>
      {visibleModal && (
        <ViewPhotos
          handleBack={() => setVisibleModal(prev => !prev)}
          listingId={listing.listingId}
          title={listing.listingTitle}
          type={enableTypeImage}
        />
      )}
    </div>
  );
};
