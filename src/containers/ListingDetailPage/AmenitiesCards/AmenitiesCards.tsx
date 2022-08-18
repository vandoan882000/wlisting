import { AmenityCard } from 'components/AmenityCard/AmenityCard';
import { amenity_data } from 'data/amenity_data';
import { FC } from 'react';

export const AmenitiesCards: FC = () => {
  return (
    <div className="container">
      <div className="row">
        {amenity_data.map(amenity => {
          return (
            <div className="col-lg-2" key={amenity.amenityId}>
              <AmenityCard image={amenity.amenityImage} name={amenity.amenityName} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
