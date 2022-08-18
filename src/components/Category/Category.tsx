import { CategoryData } from 'data/categories_data';
import { FC } from 'react';

interface CategoryProps {
  data: CategoryData;
}

export const Category: FC<CategoryProps> = ({ data }) => {
  const { category_name, category_color, category_count, category_icon, category_link } = data;
  return (
    <a href={category_link} className="inline-block relative w-100%">
      <div className="flex px-20 py-15 rounded-15 border-gray2 border-1 bg-light">
        <div
          className={`flex justify-center items-center w-50 h-50 rounded-15 mr-14`}
          style={{
            background: `${category_color}`,
          }}
        >
          <span className="text-20 text-light">
            <i className={category_icon}></i>
          </span>
        </div>
        <div>
          <div className="text-16 font-medium text-gray8">{category_name}</div>
          <div>{category_count} Listings</div>
        </div>
      </div>
      <div className="absolute w-100% h-36 rounded-15 border-gray2 border-1 z-_1 left-0 bottom-0 translate-y-5"></div>
    </a>
  );
};
