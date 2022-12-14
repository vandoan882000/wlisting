import React, { FC } from 'react';

interface Content5Props {
  children: React.ReactNode;
  title?: string;
  fontSize: number;
}

export const Content5: FC<Content5Props> = ({ title, children, fontSize }) => {
  return (
    <div className="">
      {title != '' && (
        <div className="text-22 font-medium text-gray9" style={{ fontSize: `${fontSize}px` }}>
          {title}
        </div>
      )}
      <div className="font-normal text-15 text-gray6 mt-5 pb-20">{children}</div>
    </div>
  );
};
