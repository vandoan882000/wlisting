import Menu from 'components/Menu';
import Footer from 'containers/Footer/Footer';

import Gallery from './Gallery/Gallery';
import ListingDetailContent from './ListingDetailContent/ListingDetailContent';

export const ListingDetailPage = () => {
  return (
    <>
      <Menu title="s" />
      <Gallery />
      <ListingDetailContent />
      <Footer />
    </>
  );
};
