import { SearchItem } from 'components/SearchItem/SearchItem';
import React from 'react';

export const SearchContent = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-7">
          <SearchItem />
        </div>
        <div className="col-lg-5 bg-gray2 h-1000"></div>
      </div>
    </div>
  );
};
