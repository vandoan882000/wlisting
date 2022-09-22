import React, { FC } from 'react';
import { ListingImage, ListingLocation } from 'types/Listing';

interface ListingCardBodyProps {
  listingLink: string;
  listingGallery: ListingImage[];
  listingTitle: string;
  listingLocations: ListingLocation[];
}

export const ListingCardBody: FC<ListingCardBodyProps> = ({ listingLink, listingGallery, listingTitle, listingLocations }) => {
  return (
    <>
      <a href={listingLink} className="block w-100% relative bg-cover bg-center cursor-pointer aspect-304/195 rounded-15">
        <img className="absolute inline-block w-100% h-100% top-0 left-0 object-cover rounded-15" src={listingGallery[0].listingImageUrl} />
      </a>
      <div>
        <div className="text-16 font-medium text-gray8 text-left mt-5">{listingTitle}</div>
        <div className="font-normal text-14 text-gray6 mt-2 lines">{listingLocations[0].address}</div>
      </div>
    </>
  );
};
