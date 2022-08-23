import { CategoryData } from 'data/categories_data';
import { FC } from 'react';

interface CategoryProps {
  data: CategoryData;
}

export const Category: FC<CategoryProps> = ({ data }) => {
  const { categoryName, categoryColor, categoryCount, categoryIcon, categoryLink } = data;
  return (
    <a href={categoryLink} className="inline-block relative w-100%">
      <div className="flex px-20 py-15 rounded-15 border-gray2 border-1 bg-light">
        <div
          className={`flex justify-center items-center w-50 h-50 rounded-15 mr-14`}
          style={{
            background: `${categoryColor}`,
          }}
        >
          <span className="text-20 text-light">
            <i className={categoryIcon}></i>
          </span>
        </div>
        <div>
          <div className="text-16 font-medium text-gray8">{categoryName}</div>
          <div>{categoryCount} Listings</div>
        </div>
      </div>
      <div className="absolute w-100% h-36 rounded-15 border-gray2 border-1 z-_1 left-0 bottom-0 translate-y-5"></div>
    </a>
  );
};
