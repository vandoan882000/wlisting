import Menu from 'components/Menu';
import Footer from 'containers/Footer/Footer';

import { SearchContent } from './SearchContent/SearchContent';
import { SearchFilter } from './SearchFilter/SearchFilter';

export const SearchPage = () => {
  return (
    <>
      <Menu title="" />
      <SearchFilter />
      <SearchContent />
      <Footer />
    </>
  );
};
