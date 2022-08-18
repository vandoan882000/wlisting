import Menu from 'components/Menu';
import Footer from 'containers/Footer/Footer';
import { Categories } from 'containers/HomePage/Categories/Categories';
import { CollectionCards } from 'containers/HomePage/CollectionCards/CollectionCards';
import { DownloadApp } from 'containers/HomePage/DownloadApp/DownloadApp';
import { JoinUs } from 'containers/HomePage/JoinUs/JoinUs';
import { ListingCards } from 'containers/HomePage/ListingCards/ListingCards';
import { ListingCards2 } from 'containers/HomePage/ListingCards2/ListingCard2';
import { Search } from 'containers/HomePage/Search/Search';
import { FC } from 'react';

import LocationCards2 from './LocationCards2/LocationCards2';

export const HomePage2: FC = () => {
  return (
    <>
      <Menu title="s" />
      <Search />
      <Categories />
      <LocationCards2 />
      <ListingCards />
      <JoinUs />
      <ListingCards2 />
      <CollectionCards />
      <DownloadApp />
      <Footer />
    </>
  );
};
