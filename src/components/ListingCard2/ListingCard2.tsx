import { FC } from 'react';

import { ListingCard2Header } from './ListingCard2Header';

export interface ListingCard2Props {}

type ListingCard2FC = FC<ListingCard2Props> & {
  ListingCard2Header: typeof ListingCard2Header;
};

export const ListingCard2: ListingCard2FC = () => {
  return <div></div>;
};

ListingCard2.ListingCard2Header = ListingCard2Header;
