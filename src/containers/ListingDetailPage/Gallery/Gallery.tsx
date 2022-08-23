import { ListingCardData, listings_data } from 'data/listings_data';
import { FC } from 'react';

interface GalleryProps {
  listingId: number;
}

export const Gallery: FC<GalleryProps> = ({ listingId }) => {
  const getListing = (listingId: number) => {
    const listing = listings_data.find((listing: ListingCardData) => listing.listingId === listingId);
    return listing ? listing : listings_data[0];
  };
  const listing = getListing(listingId);
  return (
    <div className="container">
      <div className="row h-500 flex relative">
        <div className="col-lg-6 pl-10 pt-5 pr-5 pb-5 bg-cover bg-center relative">
          <img className="absolute top-0 left-0 object-cover w-100% h-100% cursor-pointer" src={`${listing.listingGallery[0].listingImageUrl}`}></img>
        </div>
        <div className="col-lg-6 pl-5 pr-5 flex flex-wrap">
          <div className="w-50% h-50% p-5">
            <div
              className="w-100% h-100% bg-[url('https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center cursor-pointer"
              style={{ backgroundImage: `url('${listing.listingGallery[1].listingImageUrl}')` }}
            ></div>
          </div>
          <div className="w-50% h-50% p-5">
            <div
              className="w-100% h-100% bg-[url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center cursor-pointer"
              style={{ backgroundImage: `url('${listing.listingGallery[2].listingImageUrl}')` }}
            ></div>
          </div>
          <div className="w-50% h-50% p-5">
            <div
              className="w-100% h-100% bg-[url('https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center cursor-pointer"
              style={{ backgroundImage: `url('${listing.listingGallery[3].listingImageUrl}')` }}
            ></div>
          </div>
          <div className="w-50% h-50% p-5">
            <div
              className="w-100% h-100% bg-[url('https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center cursor-pointer"
              style={{ backgroundImage: `url('${listing.listingGallery[4].listingImageUrl}')` }}
            ></div>
          </div>
        </div>
        <div className="absolute flex justify-center items-center w-fit h-36 bg-light rounded-4 bottom-10 right-25 cursor-pointer">
          <span className="mr-5">
            <i className="far fa-image"></i>
          </span>
          <div>View Photos</div>
        </div>
      </div>
    </div>
  );
};
