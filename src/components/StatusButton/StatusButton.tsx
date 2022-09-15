import React, { FC, useState } from 'react';

interface StatusButtonProps {
  children: React.ReactNode;
  text: string;
  quantity?: number;
}
export const StatusButton: FC<StatusButtonProps> = ({ text, children, quantity = 0 }) => {
  const [isReact, setIsReact] = useState(false);
  const [quantityReact, setQuantityReact] = useState(Number(quantity));
  return (
    <div
      className={`flex justify-center items-center rounded-13 ${
        isReact ? 'bg-primary text-light' : 'border-1 border-gray3 text-gray8'
      }  py-3 px-10 cursor-pointer w-fit mr-6 mt-10 select-none`}
      onClick={() => {
        setIsReact(prevState => !prevState);
        setQuantityReact(prevState => {
          return isReact ? prevState - 1 : prevState + 1;
        });
      }}
    >
      <span className="mr-5">{children}</span>
      <div className="text-12 font-normal">{text}</div>
      {!!quantityReact && (
        <div className="flex items-center justify-center">
          <span className="flex justify-center items-center mx-5">
            <i className="fas fa-circle text-3"></i>
          </span>
          <span className="text-12 font-normal">{quantityReact}</span>
        </div>
      )}
    </div>
  );
};
