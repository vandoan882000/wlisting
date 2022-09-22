import { Devider } from 'components/Divider/Devider';
import { NavBar } from 'components/NavBar/NavBar';
import { Footer } from 'containers/Footer/Footer';
import { categories_data } from 'data/categories_data';
import { FC, useState } from 'react';
import { useParams } from 'react-router';

import { SearchContent } from './SearchContent/SearchContent';
import { SearchContent1 } from './SearchContent/SearchContent1';
import { SearchFilter } from './SearchFilter/SearchFilter';

export const SearchPage: FC = () => {
  const { category, location } = useParams();
  const [showMap, setShowMap] = useState(true);
  const categoryId = categories_data.filter(cate => cate.categoryName.toLocaleLowerCase().trim() == category)[0]?.categoryId;
  return (
    <>
      <NavBar />
      <SearchFilter categoryId={categoryId} location={location as string} onClick={() => setShowMap(prevState => !prevState)} showMap={showMap} />
      {showMap && <SearchContent category={categoryId} location={location as string} onClick={() => setShowMap(prevState => !prevState)} />}
      {!showMap && <SearchContent1 category={categoryId} location={location as string} onClick={() => setShowMap(prevState => !prevState)} />}
      <div className="mt-65">
        <Devider />
      </div>
      <Footer />
    </>
  );
};
