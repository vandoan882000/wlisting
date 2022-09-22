import { FC } from 'react';
import { Link } from 'react-router-dom';

interface LocationCardProps {
  name: string;
  image: string;
  count: number;
  link: string;
}
export const LocationCard: FC<LocationCardProps> = ({ name, count, image }) => {
  return (
    <Link
      className="w-100% flex flex-col justify-end items-start min-h-338 bg-gray5 rounded-15 p-30 bg-cover bg-center cursor-pointer aspect-3/4"
      to={`/search/category=all&location=${name
        .toLowerCase()
        .trim()
        .replaceAll(' ', '')}`}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="text-22 font-medium text-light font-sans">{name}</div>
      <div className="text-14 font-normal text-light font-sans">{count} Listing</div>
    </Link>
  );
};
