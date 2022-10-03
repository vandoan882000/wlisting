import { CustomSwiper } from 'components/CustomSwiper/CustomSwiper';
import { TourCard } from 'components/TourCard/TourCard';
import { ViewPhotos } from 'components/ViewPhotos/ViewPhotos';
import { listings_data } from 'data/listings_data';
import { review_data } from 'data/review_data';
import { FC, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import { ListingCardData } from 'types/Listing';

interface ToursProps {
  listingId: number;
}

export const Tours: FC<ToursProps> = ({ listingId }) => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [enableTypeImage, setEnableTypeImage] = useState('Living room');
  const getListing = (listingId: number) => {
    const listing = listings_data.find((listing: ListingCardData) => listing.listingId === listingId);
    return listing ? listing : listings_data[0];
  };
  const listing = getListing(listingId);
  const listingTypeImage: string[] = [];
  listing.listingGallery.forEach(image => {
    if (!listingTypeImage.includes(image.listingImageName)) {
      listingTypeImage.push(image.listingImageName);
    }
  });
  const listingGalleryItems = (name: string) => {
    return listing.listingGallery.filter(image => image.listingImageName == name);
  };

  const currentReviews = review_data.filter(review => listing.listingReviewsIds.includes(review.reviewId));
  let currentGallery = [] as string[];
  currentReviews.forEach(item => {
    currentGallery = [...currentGallery, ...item.reviewGallery];
  });
  return (
    <div className="container px-0">
      <div className="row">
        <CustomSwiper title="Tour this hotel" titleFontWeight={500} link="#">
          <CustomSwiper.Button iconNext={<i className="fal fa-angle-right"></i>} iconPrev={<i className="fal fa-angle-left"></i>} />
          {listingTypeImage.map((name, index) => {
            const currentItem = listingGalleryItems(name);
            return (
              <SwiperSlide
                key={index}
                onClick={() => {
                  setEnableTypeImage(name);
                  setVisibleModal(visible => !visible);
                  document.body.classList.add('scroll-hidden');
                }}
              >
                <TourCard image={currentItem[0].listingImageUrl} name={currentItem[0].listingImageName} length={currentItem.length} />
              </SwiperSlide>
            );
          })}
        </CustomSwiper>
        <div
          className="text-15 text-primary font-normal !mt-10 ml-5 cursor-pointer w-fit"
          onClick={() => {
            setEnableTypeImage('Living Room');
            setVisibleModal(visible => !visible);
            document.body.classList.add('scroll-hidden');
          }}
        >
          <span className="mr-5">Show all photos</span>
          <span>
            <i className="fas fa-chevron-right"></i>
          </span>
        </div>
      </div>
      {visibleModal && (
        <ViewPhotos handleBack={() => setVisibleModal(prev => !prev)} listingId={listingId} title={listing.listingTitle} type={enableTypeImage} />
      )}
    </div>
  );
};
