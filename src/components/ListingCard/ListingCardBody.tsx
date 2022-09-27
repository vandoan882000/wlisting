import React, { FC } from 'react';
import { ListingImage, ListingLocation } from 'types/Listing';

interface ListingCardBodyProps {
  listingLink: string;
  listingGallery: ListingImage[];
  listingTitle: string;
  listingLocations: ListingLocation[];
  listingVerify: boolean;
  listingAds: boolean;
}

export const ListingCardBody: FC<ListingCardBodyProps> = ({
  listingLink,
  listingGallery,
  listingTitle,
  listingLocations,
  listingVerify,
  listingAds,
}) => {
  return (
    <>
      <a href={listingLink} className="block w-100% relative bg-cover bg-center cursor-pointer aspect-304/195 rounded-15">
        <img className="absolute inline-block w-100% h-100% top-0 left-0 object-cover rounded-15" src={listingGallery[0].listingImageUrl} />
      </a>
      <div>
        <div className="flex items-center text-16 font-medium text-gray9 text-left mt-5">
          {!!listingAds && (
            <div className="py-1 px-4 mr-5 text-9 font-bold text-light rounded-3" style={{ background: '#5bc7b2' }}>
              ADS
            </div>
          )}
          <div className="mr-5">{listingTitle}</div>
          {listingVerify && (
            <div className="flex justify-center items-center w-16 h-16 rounded-1/2 text-light text-12" style={{ background: '#4ea7f3' }}>
              <i className="fal fa-check"></i>
            </div>
          )}
        </div>
        <div className="font-normal text-14 text-gray6 mt-2 lines">{listingLocations[0].address}</div>
      </div>
    </>
  );
};
