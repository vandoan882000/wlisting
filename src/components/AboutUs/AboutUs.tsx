import { FC, useState } from 'react';

interface AboutUsProps {
  image: string;
  title: string;
  content: string;
}

export const AboutUs: FC<AboutUsProps> = ({ image, title, content }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <div className="w-100% relative rounded-15 aspect-16/9 bg-cover bg-center">
        <img
          className="inset-0 w-100% h-100% absolute object-cover rounded-15"
          src="https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center cursor-pointer"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      <div className="text-26 font-medium text-gray9 mt-15">{title}</div>
      <div className={`text-15 font-normal text-gray6 mt-5 ${readMore ? '' : 'line-clamp-3'}`}>{content}</div>
      <div className="flex items-center w-fit text-15 font-normal text-primary mt-5 cursor-pointer" onClick={() => setReadMore(prev => !prev)}>
        <span className="mr-5">{readMore ? 'Hidden' : 'Read more'}</span>
        <span>
          <i className="far fa-chevron-right text-12"></i>
        </span>
      </div>
    </>
  );
};
