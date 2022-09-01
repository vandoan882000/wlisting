import React, { FC } from 'react';

interface Content4Props {
  text: string;
}
export const Content4: FC<Content4Props> = ({ children, text }) => {
  return (
    <div className="pt-80">
      <div className="font-medium text-32 text-gray8 text-center relative mb-46">{text}</div>
      {children}
    </div>
  );
};
