import React, { FC } from 'react';

interface StatusButtonProps {
  children: React.ReactNode;
  text: string;
}
export const StatusButton: FC<StatusButtonProps> = ({ text, children }) => {
  return (
    <div className="flex justify-center items-center rounded-13 border-1 border-gray3 py-1 px-10 cursor-pointer w-fit mr-6 mt-10">
      <span className="mr-5">{children}</span>
      <div className="text-12 font-normal text-gray7">{text}</div>
    </div>
  );
};
