import { CSSProperties, FC } from 'react';

interface DeviderProps {
  style?: CSSProperties;
}

export const Devider: FC<DeviderProps> = ({ style = {} }) => {
  return <div className="w-100% border-t-gray2 border-t-1" style={style}></div>;
};
