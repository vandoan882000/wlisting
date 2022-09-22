import { ListingCard2 } from 'components/ListingCard2/ListingCard2';
import { Popover } from 'components/Popover/Popover';
import { listings_data } from 'data/listings_data';
import { CSSProperties, FC } from 'react';
import { ListingCardData } from 'types/Listing';

interface CustomMarkerProps {
  lat: number;
  lng: number;
  listingId: number;
  style?: CSSProperties;
}

export const CustomMarker2: FC<CustomMarkerProps> = ({ listingId, style = {} }) => {
  const getListing = (id: number) => {
    const current_listing = listings_data.find((listing: ListingCardData) => listing.listingId === id);
    return current_listing ? current_listing : listings_data[0];
  };
  const listing = getListing(listingId);
  return (
    <>
      <Popover
        variant="variant2"
        placement="top"
        style={{
          background: 'transparent',
          border: 'none',
          marginTop: '8px',
          marginBottom: '8px',
        }}
      >
        <Popover.Toggle>
          <div
            className="flex justify-center items-center w-40 h-40 rounded-1/2 text-light relative bg-center bg-cover aspect-1/1 z-100 bg-tertiary text-25"
            style={style}
          >
            <i className="fal fa-map-marker-alt"></i>
          </div>
        </Popover.Toggle>
        <Popover.Content>
          <ListingCard2>
            <ListingCard2.Header listingRatingScore={listing.listingRatingScore} listingUserId={listing.listingUserId} />
            <ListingCard2.Body
              isInWishlist={listing.isInWishlist}
              listingLocations={listing.listingLocations}
              listingCategoryId={listing.listingCategoryId}
              listingGallery={listing.listingGallery}
              listingLink={listing.listingLink}
              listingTitle={listing.listingTitle}
            />
          </ListingCard2>
        </Popover.Content>
      </Popover>
    </>
  );
};
