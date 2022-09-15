import { ListingCard } from 'components/ListingCard/ListingCard';
import { listings_data } from 'data/listings_data';
import { FC } from 'react';

export const ListingCards: FC = () => {
  return (
    <div className="container mt-45 mb-20">
      <div className="font-medium text-22 text-gray8 text-left mb-10">Popular Listings In Our Directory</div>
      <div className="row">
        {listings_data.slice(0, 4).map(listing => (
          <div key={listing.listingId} className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            <ListingCard variant="variant1">
              <ListingCard.Header variant="variant1" listingRatingScore={listing.listingRatingScore} listingUserId={listing.listingUserId} />
              <ListingCard.Body
                listingAddress={listing.listingAddress}
                listingGallery={listing.listingGallery}
                listingLink={listing.listingLink}
                listingTitle={listing.listingTitle}
              />
              <ListingCard.Footer
                isInWishlist={listing.isInWishlist}
                listingCategoryId={listing.listingCategoryId}
                listingOpenStatus={listing.listingOpenStatus}
              />
            </ListingCard>
          </div>
        ))}
      </div>
    </div>
  );
};
