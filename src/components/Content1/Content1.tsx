import { FC } from 'react';

export const Content1: FC = ({ children }) => {
  return (
    <a className="inline-block relative w-100%">
      <div className="flex px-20 py-15 rounded-15 border-gray2 border-1 bg-light">{children}</div>
      <div className="absolute w-100% h-36 rounded-15 border-gray2 border-1 z-_1 left-0 bottom-0 translate-y-5"></div>
    </a>
  );
};
