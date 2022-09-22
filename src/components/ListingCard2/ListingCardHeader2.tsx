import { Avatar } from 'components/Avatar/Avatar';
import { Rate } from 'components/Rate/Rate';
import { users_data } from 'data/users_data';
import React, { FC } from 'react';
import { User } from 'types/User';

interface ListingCardHeader2Props {
  listingUserId: number;
  listingRatingScore: number;
}

export const ListingCardHeader2: FC<ListingCardHeader2Props> = ({ listingUserId, listingRatingScore }) => {
  const getUser = (userId: number) => {
    const current_user = users_data.find((user: User) => user.userId === userId);
    return current_user ? current_user : users_data[0];
  };
  const current_user = getUser(listingUserId);
  return (
    <>
      <div className="absolute top-10 left-10 px-5 py-5 rounded-20 bg-light">
        <Avatar avatar={current_user.userAvatar} name={current_user.userName} size={22} fontSize={12} />
      </div>
      <Rate score={listingRatingScore} />
    </>
  );
};
