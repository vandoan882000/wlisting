import React, { FC } from 'react';

export const DropDownItem: FC = ({ children }) => {
  return (
    <details className="listing-seting-detail ml-5 relative">
      <summary className="marker:hidden list-none cursor-pointer select-none">{children}</summary>
      <div className="absolute top-110% right-0 flex flex-col border-1 border-gray2 rounded-10  py-9 bg-light z-100">
        <div className="flex items-center w-100% h-29 hover:bg-gray2 pl-12 pr-21 cursor-pointer">
          <i className="far fa-pen text-12 mr-8 text-gray5"></i>
          <span className="text-13 font-normal text-gray7 whitespace-nowrap">Edit</span>
        </div>
        <div className="flex items-center w-100% h-29 hover:bg-gray2 pl-12 pr-21 cursor-pointer">
          <i className="far fa-star text-12 mr-8 text-gray5"></i>
          <span className="text-13 font-normal text-gray7 whitespace-nowrap">Write a review</span>
        </div>
        <div className="flex items-center w-100% h-29 hover:bg-gray2 pl-12 pr-21 cursor-pointer">
          <i className="far fa-trash-alt text-12 mr-8 text-gray5"></i>
          <span className="text-13 font-normal text-gray7 whitespace-nowrap">Delete</span>
        </div>
        <div className="flex items-center w-100% h-29 hover:bg-gray2 pl-12 pr-21 cursor-pointer">
          <i className="far fa-flag text-12 mr-8 text-gray5"></i>
          <span className="text-13 font-normal text-gray7 whitespace-nowrap">Report</span>
        </div>
      </div>
    </details>
  );
};
