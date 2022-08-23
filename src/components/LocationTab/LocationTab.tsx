import React from 'react';

export const LocationTab = () => {
  return (
    <div className="flex border-1 border-gray3 rounded-6 mt-10">
      <div className="w-25% h-100% flex flex-col">
        <div className="flex justify-start py-10 px-10 border-b-1 border-b-gray3 text-14 font-normal text-primary cursor-pointer">
          <span>
            <i className="far fa-map-marker-alt mr-5"></i>
          </span>
          <span> Rego Park Queens, NY, USA</span>
        </div>
        <div className="flex justify-start py-10 px-10  border-b-1 border-b-gray3 text-14 font-normal text-gray6 cursor-pointer">
          <span>
            <i className="far fa-map-marker-alt mr-5"></i>
          </span>
          <span>Crown Heights Brooklyn, NY, USA</span>
        </div>
        <div className="flex justify-start py-10 px-10 text-14 font-normal text-gray6 cursor-pointer">
          <span>
            <i className="far fa-map-marker-alt mr-5"></i>
          </span>
          <span>Carroll Gardens Brooklyn, NY, USA</span>
        </div>
      </div>
      <div className="w-85% h-100%">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
          width="100%"
          height="289px"
          frameBorder="0"
          style={{ border: 0 }}
        ></iframe>
      </div>
    </div>
  );
};
