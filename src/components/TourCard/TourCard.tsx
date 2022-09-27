import { FC } from 'react';

interface TourCardProps {
  image: string;
  name: string;
  length: number;
}

export const TourCard: FC<TourCardProps> = ({ image, name, length }) => {
  return (
    <div className="flex flex-col cursor-pointer">
      <div className="w-100% rounded-15 relative bg-cover bg-center aspect-16/9">
        <img className="absolute top-0 left-0 w-100% h-100% object-cover rounded-15" src={image} alt="" />
      </div>
      <div className="flex justify-between mt-6">
        <div className="text-13 font-medium text-gray9">{name}</div>
        <div className="text-13 font-normal text-gray6">+ {length} Photos</div>
      </div>
    </div>
  );
};
