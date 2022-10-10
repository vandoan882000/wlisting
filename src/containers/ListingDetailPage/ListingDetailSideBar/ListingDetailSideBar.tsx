import { AuthorInfo } from 'components/AuthorInfo/AuthorInfo';
import BusinessInfo from 'components/BusinessInfo/BusinessInfo';
import { Content2 } from 'components/Content2/Content2';
import { Hours } from 'components/Hours/Hours';
import { PriceRange } from 'components/PriceRange/PriceRange';
import { users_data } from 'data/users_data';
import { FC, useContext } from 'react';
import { User } from 'types/User';

import { DetailsContext } from '../ListingDetailPage';

export const ListingDetailSideBar: FC = () => {
  const { listing } = useContext(DetailsContext);
  const getAuthor = (userId: number) => {
    const user = users_data.find((user: User) => user.userId === userId);
    return user ? user : users_data[0];
  };
  const author = getAuthor(listing.listingUserId);
  return (
    <>
      <Content2 title="Price Range">
        <PriceRange min={listing.listingMinPrice} max={listing.listingMaxPrice} />
      </Content2>
      <Content2 title="Business Info">
        <BusinessInfo email={listing.listingEmail} phone={listing.listingPhone} social={listing.listingSocials} />
      </Content2>
      <Content2 title="Hours">
        <Hours listingOpenStatus={listing.listingOpenStatus} />
      </Content2>
      <Content2>
        <AuthorInfo {...author} />
      </Content2>
      <a href="#" className="flex items-center mt-17">
        <i className="fab fa-font-awesome-flag mr-5 text-gray6 text-16 font-medium"></i>
        <div className="text-14 font-normal text-gray6">Report this listing</div>
      </a>
    </>
  );
};
