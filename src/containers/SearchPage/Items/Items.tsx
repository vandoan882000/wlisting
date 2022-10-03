import { SearchItem } from 'components/SearchItem/SearchItem';
import { FC } from 'react';
import { ListingCardData } from 'types/Listing';

interface ItemsProps {
  currentItems: ListingCardData[];
}

export const Items: FC<ItemsProps> = ({ currentItems }) => {
  return <>{currentItems && currentItems.map((item, index) => <SearchItem key={index} listingId={item.listingId} />)}</>;
};
