import { listings_data } from 'data/listings_data';
import { FC } from 'react';

import { PaginatedItems1 } from '../../containers/SearchPage/PaginatedItems1/PaginatedItems1';

interface SearchContent1Props {
  location: string;
  category: number;
}

export const SearchContent1: FC<SearchContent1Props> = ({ category, location }) => {
  const currentData = listings_data.filter(
    item =>
      (item.listingCategoryId == category || category == undefined) &&
      (item.listingLocations[0].longName
        .toLowerCase()
        .trim()
        .includes(location.toLowerCase().trim()) ||
        location == 'all'),
  );
  return <PaginatedItems1 data={currentData} itemsPerPage={10} />;
};
