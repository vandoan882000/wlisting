import { FC } from 'react';

interface TypeListingProps {
  color: string;
  title: string;
  content: string;
  icon: string;
}

export const TypeListing: FC<TypeListingProps> = ({ color, title, content, icon }) => {
  return (
    <>
      <div
        className="relative w-50 h-50 flex justify-center items-center rounded-15 overflow-hidden"
        style={{
          background: `${color}`,
        }}
      >
        <div
          className="absolute top-0 left-0 w-100% h-100%"
          style={{ background: 'linear-gradient(225deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 51.19%, rgba(254,254,254,0) 100%)' }}
        ></div>
        <i className={`${icon} text-light text-25`}></i>
      </div>
      <div className="text-20 font-medium text-gray9 mt-10">{title}</div>
      <div className="font-normal text-14 text-gray6">{content}</div>
    </>
  );
};
