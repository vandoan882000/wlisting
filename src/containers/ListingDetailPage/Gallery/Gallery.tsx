import React from 'react';

export default function Gallery() {
  return (
    <div className="container">
      <div className="row h-500 flex relative">
        <div className="col-lg-6 pl-10 pt-5 pr-5 pb-5">
          <div className="bg-[url('https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?cs=srgb&dl=pexels-pixabay-276583.jpg&fm=jpg')] bg-cover bg-center w-100% h-100% cursor-pointer"></div>
        </div>
        <div className="col-lg-6 pl-5 pr-5 flex flex-wrap">
          <div className="w-50% h-50% p-5">
            <div className="w-100% h-100% bg-[url('https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center cursor-pointer"></div>
          </div>
          <div className="w-50% h-50% p-5">
            <div className="w-100% h-100% bg-[url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center cursor-pointer"></div>
          </div>
          <div className="w-50% h-50% p-5">
            <div className="w-100% h-100% bg-[url('https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center cursor-pointer"></div>
          </div>
          <div className="w-50% h-50% p-5">
            <div className="w-100% h-100% bg-[url('https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center cursor-pointer"></div>
          </div>
        </div>
        <div className="absolute flex justify-center items-center w-fit h-36 bg-light rounded-4 bottom-10 right-25 cursor-pointer">
          <span className="mr-5">
            <i className="far fa-image"></i>
          </span>
          <div>View Photos</div>
        </div>
      </div>
    </div>
  );
}
