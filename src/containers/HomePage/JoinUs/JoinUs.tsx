import React, { FC } from 'react';

export const JoinUs: FC = () => {
  return (
    <div className="container mt-20 mb-30 relative overflow-hidden rounded-15">
      <div className="w-100% h-100% absolute z-_1 bg-cover bg-center aspect-2.38 inset-0">
        <img className="w-100% h-100% inset-0 bg-cover bg-center rounded-15 object-cover" src="assets/joinusimg.png" alt="" />
      </div>
      <div className="row pt-125 pb-94 pl-61 min-h-526">
        <div className="col-lg-5">
          <div className="text-primary text-24 font-black">Listing</div>
          <div className="text-36 font-bold text-gray8 mt-25">Why did you choose us?</div>
          <div className="text-16 font-normal text-gray6 leading-1 mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus porttitor nisl, sit amet finibus libero ultricies tincidunt. Sed
            fringilla, felis id sollicitudin finibus, nisi mauris accumsan orci
          </div>
          <a href="#" className="inline-block bg-primary rounded-6 p-10 mt-58">
            <span className="flex justify-center items-center text-light">
              <i className="far fa-user-plus"></i>
              <span className="font-medium text-16 text-lights ml-5">Join Us Now</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
