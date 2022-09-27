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

interface GalleryProps {
  listingId: number;
}

export const Gallery: FC<GalleryProps> = ({ listingId }) => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [enableTypeImage, setEnableTypeImage] = useState('Living room');
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
  console.log(currentGallery);
  const listingTypeImage: string[] = [];
  listing.listingGallery.forEach(image => {
    if (!listingTypeImage.includes(image.listingImageName)) {
      listingTypeImage.push(image.listingImageName);
    }
  });
  return (
    <div className="container max-w-none">
      <div className="row h-500 flex relative">
        <div
          className="col-sm-12 col-md-12 col-lg-6 pl-10 pt-5 pr-5 pb-5 bg-cover bg-center relative lg-max:!w-100%"
          onClick={() => {
            setVisibleModal(visible => !visible);
            setEnableTypeImage(listing.listingGallery[0].listingImageName);
            document.body.classList.add('scroll-hidden');
          }}
        >
          <img className="absolute top-0 left-0 object-cover w-100% h-100% cursor-pointer" src={`${listing.listingGallery[0].listingImageUrl}`}></img>
        </div>
        <div className="lg-max:hidden col-lg-6 pl-5 !pr-0 flex flex-wrap">
          <div className="w-50% h-50% px-5 pb-5">
            <div
              className="w-100% h-100% bg-[url('https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center cursor-pointer"
              onClick={() => {
                setVisibleModal(visible => !visible);
                setEnableTypeImage(listing.listingGallery[1].listingImageName);
                document.body.classList.add('scroll-hidden');
              }}
              style={{ backgroundImage: `url('${listing.listingGallery[1].listingImageUrl}')` }}
            ></div>
          </div>
          <div className="w-50% h-50% pl-5 pb-5">
            <div
              className="w-100% h-100% bg-[url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center cursor-pointer"
              onClick={() => {
                setVisibleModal(visible => !visible);
                setEnableTypeImage(listing.listingGallery[2].listingImageName);
                document.body.classList.add('scroll-hidden');
              }}
              style={{ backgroundImage: `url('${listing.listingGallery[2].listingImageUrl}')` }}
            ></div>
          </div>
          <div className="w-50% h-50% px-5 pt-5">
            <div
              className="w-100% h-100% bg-[url('https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center cursor-pointer"
              onClick={() => {
                setVisibleModal(visible => !visible);
                setEnableTypeImage(listing.listingGallery[3].listingImageName);
                document.body.classList.add('scroll-hidden');
              }}
              style={{ backgroundImage: `url('${listing.listingGallery[3].listingImageUrl}')` }}
            ></div>
          </div>
          <div className="w-50% h-50% pt-5 pl-5">
            <div
              className="w-100% h-100% bg-[url('https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center cursor-pointer"
              onClick={() => {
                setVisibleModal(visible => !visible);
                setEnableTypeImage(listing.listingGallery[4].listingImageName);
                document.body.classList.add('scroll-hidden');
              }}
              style={{ backgroundImage: `url('${listing.listingGallery[4].listingImageUrl}')` }}
            ></div>
          </div>
        </div>
        <div
          className="absolute flex justify-center items-center w-fit h-36 text-14 font-medium bg-light rounded-4 bottom-10 right-10 cursor-pointer"
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
        <Modal
          onBack={() => {
            setVisibleModal(visible => !visible);
            document.body.classList.remove('scroll-hidden');
          }}
          title={listing.listingTitle}
          visible={visibleModal}
          navigation={
            <div className="flex justify-end flex-wrap">
              {listingTypeImage.map((typeImage, index) => {
                return (
                  <div
                    className={`flex justify-center items-center text-14 font-medium px-20 hover:text-primary ${
                      typeImage == enableTypeImage ? 'text-primary border-b-2 border-b-primary' : 'text-gray9'
                    } cursor-pointer`}
                    key={index}
                    onClick={() => setEnableTypeImage(typeImage)}
                  >
                    {typeImage}
                  </div>
                );
              })}
              <div
                className={`flex justify-center items-center text-14 font-medium px-20 hover:text-primary cursor-pointer `}
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
                      return (
                        '<div class="' +
                        className +
                        ' relative !w-60 !h-60 bg-cover bg-center cursor-pointer aspect-1/1 !rounded-none">' +
                        '<img class="absolute inset-0 w-100% h-100% object-cover"' +
                        ' src=' +
                        listingCurrent[index].listingImageUrl +
                        ' />' +
                        '</div>'
                      );
                    } else {
                      return (
                        '<div class="' +
                        className +
                        ' relative !w-60 !h-60 bg-cover bg-center cursor-pointer aspect-1/1 !rounded-none">' +
                        '<img class="absolute inset-0 w-100% h-100% object-cover"' +
                        ' src=' +
                        currentGallery[index] +
                        ' ' +
                        ' />' +
                        '</div>'
                      );
                    }
                  },
                }}
                scrollbar={{ draggable: true }}
                onSwiper={() => {}}
                onSlideChange={() => console.log('slide change')}
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
      </div>
    </div>
  );
};
