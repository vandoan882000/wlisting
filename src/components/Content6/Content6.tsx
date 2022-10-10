import React, { FC } from 'react';

interface Content6Props {
  title: string;
}

export const Content6: FC<Content6Props> = ({ title, children }) => {
  return (
    <div className="container py-30 border-t-1 border-t-gray3 px-0">
      <div className="row">
        <div className="col-lg-4 text-gray8 text-22 font-medium">{title}</div>
        <div className="col-lg-8">{children}</div>
      </div>
    </div>
  );
};
