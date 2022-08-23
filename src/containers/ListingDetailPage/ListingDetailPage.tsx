import Menu from 'components/Menu';
import Footer from 'containers/Footer/Footer';
import { ListingCards2 } from 'containers/HomePage/ListingCards2/ListingCard2';
import { useParams } from 'react-router';

import { Gallery } from './Gallery/Gallery';
import { ListingDetailContent } from './ListingDetailContent/ListingDetailContent';

export const ListingDetailPage = () => {
  const { id } = useParams();
  return (
    <>
      <Menu title="" />
      <Gallery listingId={Number(id)} />
      <ListingDetailContent listingId={Number(id)} />
      <ListingCards2 />
      <Footer />
    </>
  );
};
