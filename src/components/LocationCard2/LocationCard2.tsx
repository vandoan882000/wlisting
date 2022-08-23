import { FC } from 'react';

interface LocationCardProps {
  name: string;
  image: string;
  link: string;
}
export const LocationCard2: FC<LocationCardProps> = ({ name, image, link }) => {
  return (
    <a className="flex flex-col justify-end items-start" href={link}>
      <div
        className="flex flex-col justify-end items-start w-100% bg-gray5 rounded-15 p-30 bg-cover bg-center cursor-pointer aspect-4/3"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="text-22 font-medium text-gray8 font-sans">{name}</div>
    </a>
  );
};
