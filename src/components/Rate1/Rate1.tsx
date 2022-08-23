import React, { FC } from 'react';

export const Rate1: FC = ({ children }) => {
  return (
    <div className="flex justify-end items-center">
      <i className="fas fa-star mr-5 text-tertiary text-12"></i>
      <div className="text-18 font-medium text-tertiary">{children}</div>
    </div>
  );
};
