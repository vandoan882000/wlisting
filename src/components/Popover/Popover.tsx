import React, { FC } from 'react';

export const Popover: FC = () => {
  return (
    <div className=" rounded-10 border-gray3 border-1 min-w-280 bg-light">
      <div className="p-15">Select a price</div>
      <div className="p-15">
        <div>Restaurant</div>
        <div>Restaurant</div>
        <div>Restaurant</div>
        <div>Restaurant</div>
      </div>
      <div className=" p-15 flex justify-between items-center border-t-gray3 border-t-1">
        <div className="text-14 font-medium text-gray5 cursor-pointer">Clear</div>
        <div className="py-7 px-12 rounded-4 bg-primary text-14 font-medium cursor-pointer text-light">Apply</div>
      </div>
    </div>
  );
};
