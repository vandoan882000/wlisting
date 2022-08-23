import { ListingCard } from 'components/ListingCard/ListingCard';
import { listings_data } from 'data/listings_data';

export function ListingCards() {
  return (
    <div className="container mt-45 mb-20">
      <div className="font-bold text-22 text-gray8 text-left mb-10">Popular Listings In Our Directory</div>
      <div className="row">
        {listings_data.slice(0, 4).map(listing => (
          <div key={listing.listingId} className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            <ListingCard {...listing} />
          </div>
        ))}
      </div>
    </div>
  );
}
