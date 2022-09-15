import { ListingCard } from 'components/ListingCard/ListingCard';
import { Select } from 'components/Select/Select';
import { listings_data } from 'data/listings_data';
import { FC, useState } from 'react';

export const ListingCards2: FC = () => {
  const [location, setLocation] = useState('The Bronx');
  return (
    <div className="container mt-55 mb-20">
      <div className="font-medium text-22 text-gray8 text-left mb-10">New York City</div>
      <div className="flex justify-between w-100%">
        <div className="flex items-center mb-15">
          <div
            className={`text-14 font-medium  px-19 py-6 cursor-pointer hover:text-primary ${
              location == 'The Bronx' ? 'text-primary border-b-2 border-b-primary' : 'text-gray8 border-b-2 border-b-transparent'
            }`}
            onClick={() => setLocation('The Bronx')}
          >
            The Bronx
          </div>
          <div
            className={`text-14 font-medium  px-19 py-6 cursor-pointer hover:text-primary ${
              location == 'Brooklyn' ? 'text-primary border-b-2 border-b-primary' : 'text-gray8 border-b-2 border-b-transparent'
            }`}
            onClick={() => setLocation('Brooklyn')}
          >
            Brooklyn
          </div>
          <div
            className={`text-14 font-medium  px-19 py-6 cursor-pointer hover:text-primary ${
              location == 'Manhattan' ? 'text-primary border-b-2 border-b-primary' : 'text-gray8 border-b-2 border-b-transparent'
            }`}
            onClick={() => setLocation('Manhattan')}
          >
            Manhattan
          </div>
          <div
            className={`text-14 font-medium  px-19 py-6 cursor-pointer hover:text-primary ${
              location == 'Queens' ? 'text-primary border-b-2 border-b-primary' : 'text-gray8 border-b-2 border-b-transparent'
            }`}
            onClick={() => setLocation('Queens')}
          >
            Queens
          </div>
          <div
            className={`text-14 font-medium  px-19 py-6 cursor-pointer hover:text-primary ${
              location == 'Staten' ? 'text-primary border-b-2 border-b-primary' : 'text-gray8 border-b-2 border-b-transparent'
            }`}
            onClick={() => setLocation('Staten')}
          >
            Staten
          </div>
        </div>
        <Select
          items={['All Categories', 'Restaurant', 'Destination', 'Hotel', 'Shopping', 'Yoga']}
          style={{ width: '198px', height: '36px', borderRadius: '4px', border: '1px solid #dbdade', color: '#75737c' }}
        />
      </div>
      <div className="row">
        {listings_data.slice(0, 10).map(listing => (
          <div key={listing.listingId} className="col-lg-2">
            <ListingCard variant="variant2">
              <ListingCard.Header variant="variant2" listingRatingScore={listing.listingRatingScore} listingUserId={listing.listingUserId} />
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
