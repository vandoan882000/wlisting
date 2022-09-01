import React, { FC } from 'react';

export const DownloadApp: FC = () => {
  return (
    <div className="container mt-20 mb-30">
      <div className="row relative rounded-15 pt-125 pb-94 pl-61">
        <div className="w-100% h-100% absolute z-_1 bg-cover bg-center aspect-2.38 inset-0">
          <img className="w-100% h-100% ab bg-cover bg-center object-cover rounded-15" src="assets/download.png" alt="" />
        </div>
        <div className="col-lg-5">
          <div className="text-70 font-bold text-gray7 mt-25">Mobile Apps</div>
          <div className="text-19 font-normal text-gray6 leading-1 mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus porttitor nisl, sit amet finibus libero ultricies tincidunt. Sed
            fringilla, felis id sollicitudin finibus, nisi mauris accumsan orci
          </div>

          <div className="flex mt-40">
            <div className="mr-12">
              <img src="assets/btnios.png" alt="" />
            </div>
            <div>
              <img src="assets/btn-android.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
