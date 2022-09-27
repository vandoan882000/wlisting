import React, { FC } from 'react';

interface Content3Props {
  children: React.ReactNode;
  title?: string;
}

export const Content3: FC<Content3Props> = ({ title, children }) => {
  return (
    <div className="mt-20">
      {title != '' && <div className="text-22 font-medium text-gray9">{title}</div>}
      {children}
    </div>
  );
};
