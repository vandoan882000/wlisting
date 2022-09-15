import { FC } from 'react';

import { ListingCardBody } from './ListingCardBody';
import { ListingCardFooter } from './ListingCardFooter';
import { ListingCardHeader } from './ListingCardHeader';

type VariantType = 'variant1' | 'variant2';
interface ListingCardProps {
  variant: VariantType;
}
export const ListingCard: FC<ListingCardProps> & {
  Header: typeof ListingCardHeader;
  Body: typeof ListingCardBody;
  Footer: typeof ListingCardFooter;
} = ({ children, variant }) => {
  return <div className={`${variant == 'variant2' ? 'group' : ''} relative flex flex-col justify-start items-start rounded-15`}>{children}</div>;
};
ListingCard.Header = ListingCardHeader;
ListingCard.Body = ListingCardBody;
ListingCard.Footer = ListingCardFooter;
