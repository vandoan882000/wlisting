import { FC } from 'react';

interface PriceRangeProps {
  min: string;
  max: string;
}
export const PriceRange: FC<PriceRangeProps> = ({ min, max }) => {
  return (
    <>
      <div className="text-14 font-normal text-gray6 mt-8">Sed dapibus porttitor nisl, sit amet finibus libero ultricies tincidunt.</div>
      <div className="flex justify-start items-center mt-2">
        <div className="text-26 font-normal text-primary">{min}</div>
        <div className="text-26 font-normal text-primary">- {max}</div>
      </div>
    </>
  );
};
