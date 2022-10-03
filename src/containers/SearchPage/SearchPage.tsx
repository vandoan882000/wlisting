import { CopyRight } from 'components/CopyRight/CopyRight';
import { Divider } from 'components/Divider/Divider';
import Footer from 'components/Footer/Footer';
import { NavBar } from 'components/NavBar/NavBar';
import { categories_data } from 'data/categories_data';
import { FC, useState } from 'react';
import { useParams } from 'react-router';

import { SearchContent } from '../../components/SearchContent/SearchContent';
import { SearchContent1 } from '../../components/SearchContent1/SearchContent1';
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
      {!showMap && <SearchContent1 category={categoryId} location={location as string} />}
      <div className="mt-65">
        <Divider />
      </div>
      <Footer />
      <Divider />
      <CopyRight />
    </>
  );
};
