import { ListingCard } from 'components/ListingCard/ListingCard';
import { Select } from 'components/Select/Select';
import { categories_data } from 'data/categories_data';
import { listings_data } from 'data/listings_data';
import { FC, useState } from 'react';

export const ListingCards2: FC = () => {
  const getLongNameLocation = () => {
    const data = [] as string[];
    listings_data.forEach(listing => {
      if (!data.includes(listing.listingLocations[0].longName)) {
        data.push(listing.listingLocations[0].longName);
      }
    });
    return data;
  };
  const categories = categories_data.map(item => {
    return item.categoryName;
  });
  categories.unshift('All categories');
  const lstLongName = getLongNameLocation();
  const [location, setLocation] = useState(lstLongName[0]);
  const [category, setCategory] = useState(0);
  const currentCategoryId = categories_data.filter(item => item.categoryName === categories[category])[0];

  return (
    <div className="container mt-55 mb-20">
      <div className="font-medium text-22 text-gray9 text-left mb-10">New York City</div>
      <div className="flex justify-between w-100% flex-wrap">
        <div className="flex items-center mb-15 flex-wrap">
          {lstLongName.map((name, index) => {
            return (
              <div
                className={`text-14 font-medium  px-19 py-6 cursor-pointer hover:text-primary whitespace-nowrap ${
                  location == name ? 'text-primary border-b-2 border-b-primary' : 'text-gray9 border-b-2 border-b-transparent'
                }`}
                key={index}
                onClick={() => setLocation(name)}
              >
                {name}
              </div>
            );
          })}
        </div>
        <Select
          items={categories}
          style={{ width: '198px', height: '36px', borderRadius: '4px', border: '1px solid #dbdade', color: '#75737c' }}
          onChange={index => setCategory(Number(index))}
        />
      </div>
      <div className="row">
        {listings_data.slice(0, 10).map(listing => {
          return (
            listing.listingLocations[0].longName == location &&
            (listing.listingCategoryId === currentCategoryId?.categoryId || currentCategoryId == undefined) && (
              <div key={listing.listingId} className="col-lg-2">
                <ListingCard variant="variant2">
                  <ListingCard.Header variant="variant2" listingRatingScore={listing.listingRatingScore} listingUserId={listing.listingUserId} />
                  <ListingCard.Body
                    listingAds={listing.listingAds}
                    listingVerify={listing.listingVerify}
                    listingLocations={listing.listingLocations}
                    listingGallery={listing.listingGallery}
                    listingLink={listing.listingLink}
                    listingTitle={listing.listingTitle}
                  />
                  <ListingCard.Footer
                    variant="variant2"
                    isInWishlist={listing.isInWishlist}
                    listingCategoryId={listing.listingCategoryId}
                    listingOpenStatus={listing.listingOpenStatus}
                  />
                </ListingCard>
              </div>
            )
          );
        })}
      </div>
      <a
        href={`/search/category=all&location=${location.toLowerCase().replaceAll(' ', '')}`}
        className="inline-block py-7 px-20 w-fit rounded-6 border-1 border-tertiary text-tertiary text-15 font-normal cursor-pointer mt-40"
      >
        <span className="mr-10">See all listings in {location}</span>
        <span>
          <i className="fal fa-chevron-right"></i>
        </span>
      </a>
    </div>
  );
};
