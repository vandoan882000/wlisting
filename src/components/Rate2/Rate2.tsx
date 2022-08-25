import React, { FC } from 'react';

interface Rate2Props {
  title: string;
  score: number;
}
export const Rate2: FC<Rate2Props> = ({ title, score }) => {
  return (
    <div className="mt-16">
      <div className="flex justify-between items-center">
        <div className="text-14 font-normal text-gray7">{title}</div>
        <div className="text-14 font-medium text-gray7">{score}</div>
      </div>
      <div className="w-100% h-4 bg-gray3 rounded-2 relative mt-4">
        <div className="absolute inset-0 h-100% rounded-2 bg-primary" style={{ width: `${(score / 10) * 100}%` }}></div>
      </div>
    </div>
  );
};
