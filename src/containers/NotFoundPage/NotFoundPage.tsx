import { FC } from 'react';

export const NotFoundPage: FC = () => {
  return (
    <div className="container relative  mt-30">
      <div className="lg-max:w-100% lg:w-60% h-100% bg-cover bg-center absolute top-0 right-0">
        <img className="z-_1 absolute top:0 right-0 w-100% h-100% object-cover" src="/assets/notfound.png" alt="" />
      </div>
      <div className="row pt-50 py-190">
        <div className="col-lg-5 flex flex-col z-1">
          <div className="text-144 font-medium text-primary md-max:text-center md:text-left">404</div>
          <div className="text-24 font-normal text-gray6 md-max:text-center md:text-left">
            Oh god, sorry about that, but this planet no longer exist!
          </div>
          <div className="flex mt-20 md-max:justify-center md:justify-start items-center flex-wrap">
            <div className="bg-gray2 rounded-6 text-16 font-500 text-gray9 py-8 px-18 mr-10 whitespace-nowrap mt-6 cursor-pointer">
              <i className="fal fa-arrow-left mr-5"></i>
              Go back
            </div>
            <div className="bg-primary rounded-6 text-16 font-medium text-light py-8 px-18 whitespace-nowrap mt-6 cursor-pointer">
              <i className="fal fa-search mr-5"></i>
              Looking for other things
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
