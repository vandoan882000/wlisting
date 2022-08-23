import React from 'react';

export const Section6 = () => {
  return (
    <div className="container mb-80">
      <div className="row relative w-100% bg-center bg-cover h-500">
        <img className="inset-0 w-100% h-100% absolute object-cover z-_1 rounded-15 !m-0 !p-0" src="/assets/ready-earn.png" alt="" />
        <div className="col-lg-6 p-60 flex flex-col justify-center">
          <div className="text-gray8 font-medium text-60">Ready to earn?</div>
          <div className="flex text-light bg-primary rounded-6 w-fit px-15 py-10 cursor-pointer">
            <span className="mr-5">
              <i className="far fa-pen"></i>
            </span>
            <a href="#" className="inline-block text-16 font-500">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
