import { LocationCard } from 'components/LocationCard/LocationCard';
import { locations_data } from 'data/locations_data';
import { FC } from 'react';

export const LocationCards: FC = () => {
  return (
    <div className="container mt-64">
      <div className="text-22 text-gray9 font-medium mb-10">Happening Cities</div>
      <div className="row relative">
        <a
          href="/search/category=all&location=all"
          className="absolute top-50% right-0 flex justify-center items-center translate-x-10 translate-y-_50% w-46 h-46 rounded-1/2 shadow-1 bg-light text-25 z-100 cursor-pointer"
        >
          <i className="fal fa-angle-right"></i>
        </a>
        {locations_data.slice(0, 5).map(location => (
          <div key={location.id} className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
            <LocationCard {...location} />
          </div>
        ))}
      </div>
    </div>
  );
};
