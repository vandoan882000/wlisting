import { FC } from 'react';

interface MiniCategoryProps {
  category_name: string;
  category_color: string;
  category_icon: string;
  category_link: string;
  textColor: string;
}

export const MiniCategory: FC<MiniCategoryProps> = ({ category_name, category_color, category_icon, category_link, textColor }) => {
  return (
    <div className="flex items-center z-100">
      <span
        className="flex justify-center items-center w-28 h-28 p-4 text-14 text-light bg-yellow rounded-6 mr-5"
        style={{ background: `${category_color}` }}
      >
        <i className={category_icon}></i>
      </span>
      <a href={category_link} className="inline-block text-12 font-medium text-gray8" style={{ color: `${textColor}` }}>
        {category_name}
      </a>
    </div>
  );
};
