import { CustomSwiper } from 'components/CustomSwiper/CustomSwiper';
import { Modal } from 'components/Modal/Modal';
import { TourCard } from 'components/TourCard/TourCard';
import { ReviewPage } from 'containers/ReviewPage/ReviewPage';
import { FC, useState } from 'react';
import { A11y, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ListingImage } from 'types/Listing';

interface ToursProps {
  listingTitle: string;
  listingGallery: ListingImage[];
}

export const Tours: FC<ToursProps> = ({ listingTitle, listingGallery }) => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [enableTypeImage, setEnableTypeImage] = useState('Living room');
  const [visibleModalReview, setVisibleModalReview] = useState(false);
  const listingTypeImage: string[] = [];
  listingGallery.forEach(image => {
    if (!listingTypeImage.includes(image.listingImageName)) {
      listingTypeImage.push(image.listingImageName);
    }
  });
  const listingGalleryItems = (name: string) => {
    return listingGallery.filter(image => image.listingImageName == name);
  };
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
      <Modal
        onBack={() => {
          setVisibleModal(visible => !visible);
          document.body.classList.remove('scroll-hidden');
        }}
        title={listingTitle}
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
              onClick={() => {
                setVisibleModalReview(visible => !visible);
                document.body.classList.add('scroll-hidden');
              }}
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
                  const listingCurrent = listingGallery.filter(item => item.listingImageName == enableTypeImage);
                  return (
                    '<div class="' +
                    className +
                    ' relative !w-60  !h-60 bg-cover bg-center cursor-pointer aspect-1/1"' +
                    'key="' +
                    listingCurrent[index].listingImageId +
                    '">' +
                    '<img class="absolute inset-0 w-100% h-100% object-cover"' +
                    ' src=' +
                    listingCurrent[index].listingImageUrl +
                    'alt="" />' +
                    '</div>'
                  );
                },
              }}
              scrollbar={{ draggable: true }}
              onSwiper={() => {}}
              onSlideChange={() => console.log('slide change')}
            >
              {listingGallery.map(image => {
                return (
                  image.listingImageName == enableTypeImage && (
                    <SwiperSlide key={image.listingImageId}>
                      <div className="relative w-100% h-100% bg-cover bg-center cursor-pointer aspect-16/9">
                        <img className="absolute inset-0 w-100% h-100% object-cover" src={image.listingImageUrl} alt="" />
                      </div>
                    </SwiperSlide>
                  )
                );
              })}
            </Swiper>
          </div>
        </div>
      </Modal>
      <Modal
        title={'View all photos'}
        visible={visibleModalReview}
        onBack={() => {
          setVisibleModalReview(visible => !visible);
          document.body.classList.remove('scroll-hidden');
        }}
      >
        <ReviewPage />
      </Modal>
    </div>
  );
};
