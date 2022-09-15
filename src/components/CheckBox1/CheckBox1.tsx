import React, { FC } from 'react';

interface CheckBox1Prop {
  color: string;
  background: string;
  fontSize: number;
  size: number;
}

export const CheckBox1: FC<CheckBox1Prop> = ({ color, background, fontSize, size }) => {
  return (
    <div
      className={`flex justify-center items-center rounded-1/2 w-40 h-40 bg-secondary`}
      style={{ backgroundColor: `${background}`, width: `${size}px`, height: `${size}px` }}
    >
      <span className="flex select-none text-17">
        <i className="fal fa-check text-light" style={{ color: `${color}`, fontSize: `${fontSize}px` }}></i>
      </span>
    </div>
  );
};
