import { Slider } from 'components/Slider/Slider';
import React, { FC, useState } from 'react';

export const Rating: FC = ({ children }) => {
  const [score, setScore] = useState(0);
  return (
    <div className="pb-12">
      <div className="flex justify-between items-center mb-10">
        <div className="text-14 font-normal text-gray7 select-none">{children}</div>
        <div className="text-14 font-medium text-gray7 select-none">{score}</div>
      </div>
      <Slider
        min={0}
        max={10}
        onChanged={() => {}}
        onChange={currentScore => {
          setScore(currentScore);
        }}
        step={0.1}
        value={0}
      />
    </div>
  );
};
