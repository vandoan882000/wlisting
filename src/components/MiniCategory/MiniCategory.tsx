import { FC } from 'react';

interface MiniCategoryProps {
  categoryName: string;
  categoryColor: string;
  categoryIcon: string;
  categoryLink: string;
  textColor: string;
}

export const MiniCategory: FC<MiniCategoryProps> = ({ categoryName, categoryColor, categoryIcon, categoryLink, textColor }) => {
  return (
    <div className="flex items-center z-100">
      <span
        className="flex justify-center items-center w-28 h-28 p-4 text-14 text-light bg-yellow rounded-6 mr-5"
        style={{ background: `${categoryColor}` }}
      >
        <i className={categoryIcon}></i>
      </span>
      <a href={categoryLink} className="inline-block text-12 font-medium text-gray8" style={{ color: `${textColor}` }}>
        {categoryName}
      </a>
    </div>
  );
};
