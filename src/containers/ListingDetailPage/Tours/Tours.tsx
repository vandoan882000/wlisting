import { TourCard } from 'components/TourCard/TourCard';
import React from 'react';

export const Tours = () => {
  return (
    <div className="container p-0">
      <div className="row">
        <div className="col-lg-4">
          <TourCard />
        </div>
        <div className="col-lg-4">
          <TourCard />
        </div>
        <div className="col-lg-4">
          <TourCard />
        </div>
      </div>
    </div>
  );
};
