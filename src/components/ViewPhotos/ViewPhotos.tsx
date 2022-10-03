import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Modal } from 'components/Modal/Modal';
import { listings_data } from 'data/listings_data';
import { review_data } from 'data/review_data';
import { FC, useState } from 'react';
import { A11y, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ListingCardData } from 'types/Listing';

interface ViewPhotosProps {
  title: string;
  handleBack: () => void;
  listingId: number;
  type: string;
}

export const ViewPhotos: FC<ViewPhotosProps> = ({ title, handleBack, listingId, type }) => {
  const [enableTypeImage, setEnableTypeImage] = useState(type);

  const getListing = (listingId: number) => {
    const listing = listings_data.find((listing: ListingCardData) => listing.listingId === listingId);
    return listing ? listing : listings_data[0];
  };
  const listing = getListing(listingId);

  const currentReviews = review_data.filter(review => listing.listingReviewsIds.includes(review.reviewId));
  let currentGallery = [] as string[];
  currentReviews.forEach(item => {
    currentGallery = [...currentGallery, ...item.reviewGallery];
  });

  const listingTypeImage: string[] = [];
  listing.listingGallery.forEach(image => {
    if (!listingTypeImage.includes(image.listingImageName)) {
      listingTypeImage.push(image.listingImageName);
    }
  });
  return (
    <Modal
      onBack={() => {
        handleBack();
        document.body.classList.remove('scroll-hidden');
      }}
      title={title}
      visible={true}
      navigation={
        <div className="flex justify-end flex-wrap">
          {listingTypeImage.map((typeImage, index) => {
            return (
              <div
                className={`flex justify-center items-center text-14 font-medium px-20 hover:text-primary ${
                  typeImage == enableTypeImage ? 'text-primary border-b-2 border-b-primary' : 'text-gray9'
                } cursor-pointer select-none`}
                key={index}
                onClick={() => setEnableTypeImage(typeImage)}
              >
                {typeImage}
              </div>
            );
          })}
          <div
            className={`flex justify-center items-center text-14 font-medium px-20 ${
              enableTypeImage == 'Review' ? 'text-primary border-b-2 border-b-primary' : 'text-gray9'
            } hover:text-primary cursor-pointer select-none`}
            onClick={() => setEnableTypeImage('Review')}
          >
            Review photos
          </div>
        </div>
      }
    >
      <div className="flex justify-center">
        <div className="sm-max:w-100% w-60%">
          <Swiper
            className="!pb-90"
            modules={[Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{
              clickable: true,
              renderBullet: (index: number, className: string) => {
                if (enableTypeImage != 'Review') {
                  const listingCurrent = listing.listingGallery.filter(item => item.listingImageName == enableTypeImage);
                  return `<div class='${className} relative !w-60 !h-60 bg-cover bg-center cursor-pointer aspect-1/1 !rounded-none'><img class='absolute inset-0 w-100% h-100% object-cover' src='${listingCurrent[index].listingImageUrl}' /></div>`;
                } else {
                }
                return `<div class='${className} relative !w-60 !h-60 bg-cover bg-center cursor-pointer aspect-1/1 !rounded-none'><img src='${currentGallery[index]}' /></div>`;
              },
            }}
            scrollbar={{ draggable: true }}
            onSwiper={() => {}}
            onSlideChange={() => {}}
          >
            {enableTypeImage != 'Review' &&
              listing.listingGallery.map((image, index) => {
                return (
                  image.listingImageName == enableTypeImage && (
                    <SwiperSlide key={index}>
                      <div className="relative w-100% h-100% bg-cover bg-center cursor-pointer aspect-16/9">
                        <img className="absolute inset-0 w-100% h-100% object-cover" src={image.listingImageUrl} alt="" />
                      </div>
                    </SwiperSlide>
                  )
                );
              })}
            {enableTypeImage == 'Review' &&
              currentGallery.map((image, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="relative w-100% h-100% bg-cover bg-center cursor-pointer aspect-16/9">
                      <img className="absolute inset-0 w-100% h-100% object-cover" src={image} />
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </Modal>
  );
};
