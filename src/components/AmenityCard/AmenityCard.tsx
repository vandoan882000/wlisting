import { FC } from 'react';

interface AmenityCardProps {
  image: string;
  name: string;
}
export const AmenityCard: FC<AmenityCardProps> = ({ image, name }) => {
  return (
    <div className="flex flex-col rounded-10 bg-gray1">
      <div className="relative inset-0 w-100% h-100% bg-cover bg-center aspect-2/1 rounded-tl-10 rounded-tr-10">
        <img className="absolute inset-0 w-100% h-100% top-0 left-0 object-cover rounded-tl-10 rounded-tr-10" src={image} alt={name} />
      </div>
      <div className="text-14 font-normal text-gray7 w:100% text-center py-19">{name}</div>
    </div>
  );
};
