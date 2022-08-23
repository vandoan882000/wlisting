import React from 'react';

export const CheckBox1 = () => {
  return (
    <div className={`flex justify-center items-center rounded-1/2 w-40 h-40 bg-secondary`}>
      <span className="flex select-none text-17">
        <i className="fal fa-check text-light"></i>
      </span>
    </div>
  );
};
