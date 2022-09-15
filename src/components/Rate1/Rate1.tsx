import { CSSProperties, FC } from 'react';

interface Rate1Props {
  style?: CSSProperties;
}

export const Rate1: FC<Rate1Props> = ({ children, style }) => {
  return (
    <div className="flex justify-end items-center">
      <span className="flex justify-center items-center">
        <i className="fas fa-star mr-5 text-tertiary text-12" style={style}></i>
      </span>
      <span className="text-18 font-medium text-tertiary" style={style}>
        {children}
      </span>
    </div>
  );
};
