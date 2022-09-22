import { Category } from 'components/Category/Category';
import { Content1 } from 'components/Content1/Content1';
import { categories_data } from 'data/categories_data';
import { FC } from 'react';

export const Categories: FC = () => {
  return (
    <div className="container mt-15 mb-15">
      <div className="text-22 font-medium text-gray8 mb-6">Find the Best Businesses in Town</div>
      <div className="row">
        {categories_data.slice(0, 4).map(category => (
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2" key={category.categoryId}>
            <Content1 link={`/search/category=${category.categoryName.toLowerCase().replaceAll('', '')}&location=all`}>
              <Category key={category.categoryId} {...category} />
            </Content1>
          </div>
        ))}
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
          <Content1 link="/search/category=all&location=all">
            <div className="flex justify-center items-center w-100% text-16 font-medium text-primary">
              <span>See all</span>
              <span className="text-16 font-medium text-primary ml-10">
                <i className="far fa-angle-right"></i>
              </span>
            </div>
          </Content1>
        </div>
      </div>
    </div>
  );
};
