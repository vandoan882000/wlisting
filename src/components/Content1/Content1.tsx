import { FC } from 'react';

interface Content1Props {
  link: string;
}
export const Content1: FC<Content1Props> = ({ children, link }) => {
  return (
    <a className="inline-block relative w-100% min-h-82 px-20 py-15 h-100% min rounded-15 border-gray2 border-1 bg-light" href={link}>
      <div className="flex h-100%">{children}</div>
      <div className="absolute w-100% h-100% rounded-15 border-gray2 border-1 z-_1 left-0 bottom-0 translate-y-5"></div>
    </a>
  );
};
