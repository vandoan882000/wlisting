import { NavBar } from 'components/NavBar/NavBar';
import Footer from 'containers/Footer/Footer';

import { SearchContent } from './SearchContent/SearchContent';
import { SearchFilter } from './SearchFilter/SearchFilter';

export const SearchPage = () => {
  return (
    <>
      <NavBar />
      <SearchFilter />
      <SearchContent />
      <Footer />
    </>
  );
};
