import React, { FC } from 'react';

interface Content2Props {
  children: React.ReactNode;
  title?: string;
}
export const Content2: FC<Content2Props> = ({ title = '', children }) => {
  return (
    <div className="flex flex-col border-1 border-gray3 rounded-4 p-20 mt-20">
      {title != '' && <div className="text-16 font-medium text-gray8">{title}</div>}
      {children}
    </div>
  );
};
