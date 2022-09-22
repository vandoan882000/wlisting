import { FC } from 'react';

import { ListingCardBody2 } from './ListingCardBody2';
import { ListingCardHeader2 } from './ListingCardHeader2';

interface ListingCard2Props {}

export const ListingCard2: FC<ListingCard2Props> & {
  Header: typeof ListingCardHeader2;
  Body: typeof ListingCardBody2;
} = ({ children }) => {
  return (
    <div className="group flex flex-col justify-end relative bg-cover bg-center aspect-16/9 rounded-15 p-20 cursor-pointer bg-tr">{children}</div>
  );
};
ListingCard2.Header = ListingCardHeader2;
ListingCard2.Body = ListingCardBody2;
