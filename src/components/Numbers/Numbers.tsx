import { FC } from 'react';

interface NumberProps {
  name?: string;
  value: number;
  handleInCrease: () => void;
  handleDecrease: () => void;
}

export const Numbers: FC<NumberProps> = ({ value, handleInCrease, handleDecrease, name }) => {
  return (
    <div className="flex w-68 h-40 border-1 border-gray4">
      <input type="number" className="hidden" name={name} />
      <div className="flex justify-center items-center w-60% h-100%">{Math.max(value, 0).toFixed(1)}</div>
      <div className="w-40% h-100% border-l-1 border-l-gray4">
        <span
          className="flex justify-center items-center w-100% h-50% border-b-1 border-b-gray4 text-8 text-gray6 cursor-pointer"
          onClick={handleInCrease}
        >
          <i className="far fa-chevron-up"></i>
        </span>
        <span className="flex justify-center items-center w-100% h-50% text-8 text-gray6 cursor-pointer" onClick={handleDecrease}>
          <i className="far fa-chevron-down"></i>
        </span>
      </div>
    </div>
  );
};
