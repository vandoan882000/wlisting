import { DropDown } from 'components/DropDown/DropDown';
import { Popover } from 'components/Popover/Popover';
import React from 'react';

export const SearchFilter = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <DropDown title={<div className="px-10 rounded-20 text-light bg-primary py-5 select-none">Restaurant</div>}>
            <Popover />
          </DropDown>
        </div>
      </div>
    </div>
  );
};
