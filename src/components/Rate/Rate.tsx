import { FC } from 'react';

interface RateProps {
  score: number;
}
export const Rate: FC<RateProps> = ({ score }) => {
  return (
    <div className="absolute top-10 right-10 flex justify-center items-center h-28 rounded-6 z-100">
      <span className="relative flex justify-center items-center text-12 bg-light h-28 text-tertiary p-5 rounded-tl-6 rounded-bl-6 after:content-[''] after:w-4 after:h-5 after:absolute after:left-100% after:border-t-6 after:border-t-tertiary after:border-b-6 after:border-b-tertiary after:border-l-4 after:border-l-light">
        <i className="fas fa-star"></i>
      </span>
      <div className="flex justify-center items-center font-medium text-14 text-light bg-tertiary w-34 h-28 p-5 rounded-tr-6 rounded-br-6">
        {score}
      </div>
    </div>
  );
};
