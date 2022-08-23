import { Category } from 'components/Category/Category';
import { categories_data } from 'data/categories_data';

export function Categories() {
  return (
    <div className="container mt-15 mb-15">
      <div className="text-22 font-medium text-gray8 mb-6">Find the Best Businesses in Town</div>
      <div className="row">
        {categories_data.slice(0, 4).map(category => (
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2" key={category.categoryId}>
            <Category key={category.categoryId} data={category} />
          </div>
        ))}
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
          <a href="#" className="relative inline-block w-100%">
            <div className="flex px-20 py-15 rounded-15 border-gray2 border-1 bg-light h-80">
              <div className="flex justify-center items-center w-100% text-16 font-medium text-primary">
                See all
                <span className="text-16 font-medium text-primary ml-10">
                  <i className="far fa-angle-right"></i>
                </span>
              </div>
            </div>
            <div className="absolute w-100% h-36 rounded-15 border-gray2 border-1 z-_1 left-0 bottom-0 translate-y-5"></div>
          </a>
        </div>
      </div>
    </div>
  );
}
