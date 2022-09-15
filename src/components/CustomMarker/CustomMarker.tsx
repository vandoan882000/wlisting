import { ListingCard2 } from 'components/ListingCard2/ListingCard2';
import { Popover } from 'components/Popover/Popover';
import { listings_data } from 'data/listings_data';
import { users_data } from 'data/users_data';
import { FC } from 'react';
import { ListingCardData } from 'types/Listing';
import { User } from 'types/User';

interface CustomMarkerProps {
  lat: number;
  lng: number;
  listingId: number;
}

export const CustomMarker: FC<CustomMarkerProps> = ({ listingId }) => {
  const getListing = (id: number) => {
    const current_listing = listings_data.find((listing: ListingCardData) => listing.listingId === id);
    return current_listing ? current_listing : listings_data[0];
  };
  const listing = getListing(listingId);
  const getUser = (userId: number) => {
    const current_user = users_data.find((user: User) => user.userId === userId);
    return current_user ? current_user : users_data[0];
  };
  const user = getUser(listing.listingUserId);
  return (
    <>
      <Popover
        toggle={
          <div className="flex justify-center items-center w-26 h-26 rounded-1/2 text-light relative bg-center bg-cover aspect-1/1 z-100">
            <img className="absolute w-100% h-100% inset-0 object-cover rounded-1/2" src={user.userAvatar} alt="" />
          </div>
        }
        variant="variant2"
        placement="top"
        style={{
          background: 'transparent',
          border: 'none',
          marginTop: '8px',
          marginBottom: '8px',
        }}
      >
        <ListingCard2 {...listing} />
      </Popover>
    </>
  );
};
