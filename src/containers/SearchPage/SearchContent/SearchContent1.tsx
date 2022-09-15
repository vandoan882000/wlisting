import { ListingCard } from 'components/ListingCard/ListingCard';
import { listings_data } from 'data/listings_data';
import { FC } from 'react';

interface SearchContent1Props {
  onClick: () => void;
}

export const SearchContent1: FC<SearchContent1Props> = () => {
  return (
    <div className="container">
      <div className="row">
        {listings_data.slice(0, 10).map(listing => (
          <div key={listing.listingId} className="col-lg-2">
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
