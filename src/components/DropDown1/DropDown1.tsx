import React, { FC } from 'react';

interface DropDown1Prop {
  title: string;
}
export const DropDown1: FC<DropDown1Prop> = ({ title, children }) => {
  return (
    <details className="add-listing-detail mb-10">
      <summary className="list-none">
        <div className="flex justify-between items-center px-16 py-10 bg-gray1 rounded-4 border-1 border-gray4 select-none cursor-pointer">
          <span className="text-16 font-medium text-gray8">{title}</span>
          <i className="fal fa-plus text-gray5"></i>
          <i className="far fa-minus hidden text-gray5"></i>
        </div>
      </summary>
      <div className="text-gray6 text-15 font-normal mt-15 mb-15">{children}</div>
    </details>
  );
};
