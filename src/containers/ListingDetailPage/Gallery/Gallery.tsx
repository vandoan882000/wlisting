import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { ViewPhotos } from 'components/ViewPhotos/ViewPhotos';
import { listings_data } from 'data/listings_data';
import { FC, useState } from 'react';
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
      </div>
      {visibleModal && (
        <ViewPhotos handleBack={() => setVisibleModal(prev => !prev)} listingId={listingId} title={listing.listingTitle} type={enableTypeImage} />
      )}
    </div>
  );
};
