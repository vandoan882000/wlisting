import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { ViewPhotos } from 'components/ViewPhotos/ViewPhotos';
import { FC, useContext, useState } from 'react';

import { DetailsContext } from '../ListingDetailPage';

export const Gallery3: FC = () => {
  const { listing } = useContext(DetailsContext);
  const [visibleModal, setVisibleModal] = useState(false);
  const [enableTypeImage, setEnableTypeImage] = useState('Living room');

  return (
    <div className="container max-w-none px-12 mt-30">
      <div className="row h-449 flex relative">
        <div
          className="col-sm-12 col-md-12 col-lg-12 pt-5 px-0 pb-5 bg-cover bg-center relative lg-max:!w-100%"
          onClick={() => {
            setVisibleModal(visible => !visible);
            setEnableTypeImage(listing.listingGallery[0].listingImageName);
            document.body.classList.add('scroll-hidden');
          }}
        >
          <img
            className="absolute top-0 left-0 object-cover w-100% h-100% cursor-pointer rounded-6"
            src={`${listing.listingGallery[0].listingImageUrl}`}
          ></img>
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
