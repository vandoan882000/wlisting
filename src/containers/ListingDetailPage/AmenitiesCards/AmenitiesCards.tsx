import { AmenityCard } from 'components/AmenityCard/AmenityCard';
import { amenity_data } from 'data/amenity_data';
import { FC } from 'react';

export const AmenitiesCards: FC = () => {
  return (
    <div className="container p-0 !pt-5">
      <div className="row mb-10">
        {amenity_data.map(amenity => {
          return (
            <div className="col-lg-2" key={amenity.amenityId}>
              <AmenityCard image={amenity.amenityImage} name={amenity.amenityName} />
            </div>
          );
        })}
      </div>
      <a href="#" className="text-15 font-normal text-primary">
        <span>Show all amenities </span>
        <i className="fal fa-chevron-right"></i>
      </a>
    </div>
  );
};
