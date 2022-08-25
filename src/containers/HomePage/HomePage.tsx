import Menu from 'components/Menu';
import Footer from 'containers/Footer/Footer';
import { LocationCards } from 'containers/HomePage/LocationCards/LocationCards';

import { Categories } from './Categories/Categories';
import { CollectionCards } from './CollectionCards/CollectionCards';
import { DownloadApp } from './DownloadApp/DownloadApp';
import { JoinUs } from './JoinUs/JoinUs';
import { ListingCards } from './ListingCards/ListingCards';
import { ListingCards2 } from './ListingCards2/ListingCard2';
import { Search } from './Search/Search';

export const HomePage = () => {
  return (
    <>
      <Menu title="s" />
      <Search />
      <Categories />
      <LocationCards />
      <ListingCards />
      <JoinUs />
      <ListingCards2 />
      <CollectionCards />
      <DownloadApp />
      <Footer />
    </>
  );
};
