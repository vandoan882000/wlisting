import { ListingCard } from 'components/ListingCard/ListingCard';
import { listings_data } from 'data/listings_data';
import { FC } from 'react';

interface SearchContent1Props {
  onClick: () => void;
  location: string;
  category: number;
}

export const SearchContent1: FC<SearchContent1Props> = ({ category, location, onClick = () => {} }) => {
  console.log(category, location, onClick);
  return (
    <div className="container">
      <div className="row">
        {listings_data.map(
          listing =>
            (listing.listingCategoryId == category || category == undefined) &&
            (listing.listingLocations[0].longName
              .toLowerCase()
              .trim()
              .includes(location) ||
              location == 'all') && (
              <div key={listing.listingId} className="col-lg-2">
                <ListingCard variant="variant1">
                  <ListingCard.Header variant="variant1" listingRatingScore={listing.listingRatingScore} listingUserId={listing.listingUserId} />
                  <ListingCard.Body
                    listingLocations={listing.listingLocations}
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
            ),
        )}
        <div className="flex justify-center items-center mt-40">
          <div className="flex justify-center items-center w-36 h-36 text-light bg-primary text-16 font-medium rounded-1/2 mr-8 cursor-pointer">
            1
          </div>
          <div className="flex justify-center items-center w-36 h-36 text-gray8 bg-light border-1 border-gray4 rounded-1/2 text-16 font-medium mr-8 cursor-pointer">
            2
          </div>
          <div className="flex justify-center items-center w-36 h-36  text-gray8 bg-light border-1 border-gray4 font-medium rounded-1/2 mr-8 cursor-pointer">
            3
          </div>
          <div className="flex justify-center items-center w-36 h-36 text-gray8 font-medium rounded-1/2 mr-8 cursor-pointer">...</div>
          <div className="flex justify-center items-center  h-36 px-13 text-gray8 bg-light border-1 border-gray4 font-medium rounded-18 mr-8 cursor-pointer">
            <span className="mr-10">Next</span>
            <span>
              <i className="far fa-chevron-right"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
