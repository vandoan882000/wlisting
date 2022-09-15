import { Devider } from 'components/Divider/Devider';
import { NavBar } from 'components/NavBar/NavBar';
import Footer from 'containers/Footer/Footer';
import { FC, useState } from 'react';

import { SearchContent } from './SearchContent/SearchContent';
import { SearchContent1 } from './SearchContent/SearchContent1';
import { SearchFilter } from './SearchFilter/SearchFilter';

export const SearchPage: FC = () => {
  const [showMap, setShowMap] = useState(true);
  return (
    <>
      <NavBar />
      <SearchFilter onClick={() => setShowMap(prevState => !prevState)} showMap={showMap} />
      {showMap && <SearchContent onClick={() => setShowMap(prevState => !prevState)} />}
      {!showMap && <SearchContent1 onClick={() => setShowMap(prevState => !prevState)} />}
      <div className="mt-65">
        <Devider />
      </div>
      <Footer />
    </>
  );
};
