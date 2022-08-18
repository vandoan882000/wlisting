import { Location } from 'data/locations_data';
import { FC } from 'react';

interface LocationCardProps {
  data: Location;
}
const LocationCard: FC<LocationCardProps> = props => {
  const { data } = props;
  const { name, count, image, link } = data;
  return (
    <a
      className="w-100% flex flex-col justify-end items-start min-h-338 bg-gray5 rounded-15 p-30 bg-cover bg-center cursor-pointer aspect-3/4"
      href={link}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="text-22 font-medium text-light font-sans">{name}</div>
      <div className="text-14 font-normal text-light font-sans">{count} Listing</div>
    </a>
  );
};
export default LocationCard;
