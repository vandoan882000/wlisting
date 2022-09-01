import { FC } from 'react';

export const Search: FC = () => {
  return (
    <div className="container py-70">
      <div className="row justify-center pt-30">
        <div className="col-lg-10 flex flex-col">
          <div className="font-bold text-32 text-gray8">
            Hello <span className="text-primary">HaNoi</span>, What’s your plan to day?
          </div>
          <div className="flex wrap rounded-10 border-1 border-gray2 mt-18 shadow-2">
            <div className="w-1/2 h-75 flex flex-col py-10 px-10">
              <div className="text-14 font-medium text-gray8 ml-10">Find</div>
              <input
                type="text"
                className="text-15 font-normal text-gray5 border-none"
                style={{ boxShadow: 'none' }}
                placeholder="Where are you looking for?"
              />
            </div>
            <div className="flex justify-between items-center w-1/2 h-75 border-l-1 border-l-gray2 pr-15">
              <div className="w-75% h-75 flex flex-col py-10 px-10">
                <div className="text-14 font-medium text-gray8 ml-10">Near</div>
                <input
                  type="text"
                  className="text-15 font-normal text-gray5 border-none focus:border-none focus:border-light focus:outline-none focus:shadow-sm-light"
                  style={{ boxShadow: 'none' }}
                  placeholder="West Hollywood, CA"
                />
              </div>
              <button className="w-fit h-fit flex justify-center items-center py-11 px-22 bg-primary text-light text-16 rounded-6">
                <span className="flex items-center flex-wrap whitespace-nowrap">
                  <span>
                    <i className="far fa-search mr-8"></i>
                  </span>
                  <span>Search</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
