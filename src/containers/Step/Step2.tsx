import React, { FC } from 'react';

export const Step2: FC = () => {
  return (
    <div>
      <div className="text-gray8 text-22 font-medium">Please select your category and location</div>
      <div className="flex flex-col w-100% flex-wrap mt-30">
        <div className="text-14 font-medium text-gray8">Categories</div>
        <select name="" id="">
          <option value="a">a</option>
        </select>
        <div className="text-14 font-medium text-gray8">Location</div>
        <div className="flex mb-10">
          <div className="border-1 border-gray4 px-10 py-14 rounded-4 text-gray6 mr-10">Rego Park Queens, NY, USA</div>
          <div className="flex justify-center items-center border-1 border-gray4 rounded-4 text-gray8 px-10 text-30 cursor-pointer">
            <i className="fal fa-times"></i>
          </div>
        </div>
        <div className="flex mb-10">
          <div className="border-1 border-gray4 px-10 py-14 rounded-4 text-gray6 mr-10">Rego Park Queens, NY, USA</div>
          <div className="flex justify-center items-center border-1 border-gray4 rounded-4 text-gray8 px-10 text-30 cursor-pointer">
            <i className="fal fa-times"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
