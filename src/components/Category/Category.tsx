import { FC } from 'react';
import { CategoryData } from 'types/Category';

type CategoryVariant = 'variant1' | 'variant2';
type TextColor = 'dark' | 'light';
interface CategoryProps extends CategoryData {
  variant?: CategoryVariant;
  textColor?: TextColor;
}

export const Category: FC<CategoryProps> = ({
  categoryName,
  categoryColor,
  categoryCount,
  categoryIcon,
  variant = 'variant1',
  textColor = 'dark',
}) => {
  return (
    <div className="inline-block relative w-100%">
      <div className="flex flex-wrap">
        <div
          className={`flex justify-center items-center relative overflow-hidden ${
            variant == 'variant1' ? 'w-50 h-50 rounded-15 mr-14' : 'w-28 h-28 p-4 rounded-6 mr-5'
          } `}
          style={{
            background: `${categoryColor}`,
          }}
        >
          <div
            className="absolute top-0 left-0 w-100% h-100% z-1"
            style={{ background: 'linear-gradient(225deg,rgba(255,255,255,0.45) 0%,rgba(255,255,255,0.15) 51.19%, rgba(255,255,255,0) 100%)' }}
          ></div>
          <span className={`${variant == 'variant1' ? 'text-20' : 'text-14'} text-light z-2`}>
            <i className={categoryIcon}></i>
          </span>
        </div>
        <div className="flex flex-col justify-center">
          <div
            className={`${variant == 'variant1' ? 'text-16 font-medium' : 'text-12 font-medium'} ${
              textColor == 'light' ? 'text-light' : 'text-gray9'
            }`}
          >
            {categoryName}
          </div>
          {variant == 'variant1' && <div className={`${textColor == 'light' ? 'text-light' : 'text-gray9'}`}>{categoryCount} Listings</div>}
        </div>
      </div>
    </div>
  );
};
