import { CSSProperties, FC } from 'react';

interface DividerProps {
  style?: CSSProperties;
}

export const Divider: FC<DividerProps> = ({ style = {} }) => {
  return <div className="w-100% border-t-gray2 border-t-1" style={style}></div>;
};
