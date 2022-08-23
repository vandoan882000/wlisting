import { ListingCard } from 'components/ListingCard/ListingCard';
import { listings_data } from 'data/listings_data';
import React from 'react';

export function ListingCards2() {
  return (
    <div className="container mt-45 mb-20">
      <div className="font-bold text-22 text-gray8 text-left mb-10">New York City</div>
      <div className="row">
        {listings_data.slice(0, 10).map(listing => (
          <div key={listing.listingId} className="col-lg-2">
            <ListingCard {...listing} />
          </div>
        ))}
      </div>
    </div>
  );
}
