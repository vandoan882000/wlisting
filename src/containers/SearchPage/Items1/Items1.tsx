import { ListingCard } from 'components/ListingCard/ListingCard';
import { FC } from 'react';
import { ListingCardData } from 'types/Listing';

interface ItemsProps {
  currentItems: ListingCardData[];
}

export const Items1: FC<ItemsProps> = ({ currentItems }) => {
  return (
    <>
      {currentItems &&
        currentItems.map(item => (
          <div key={item.listingId} className="col-lg-2">
            <ListingCard variant="variant1">
              <ListingCard.Header variant="variant1" listingRatingScore={item.listingRatingScore} listingUserId={item.listingUserId} />
              <ListingCard.Body
                listingAds={item.listingAds}
                listingVerify={item.listingVerify}
                listingLocations={item.listingLocations}
                listingGallery={item.listingGallery}
                listingLink={item.listingLink}
                listingTitle={item.listingTitle}
              />
              <ListingCard.Footer
                variant="variant1"
                isInWishlist={item.isInWishlist}
                listingCategoryId={item.listingCategoryId}
                listingOpenStatus={item.listingOpenStatus}
              />
            </ListingCard>
          </div>
        ))}
    </>
  );
};
