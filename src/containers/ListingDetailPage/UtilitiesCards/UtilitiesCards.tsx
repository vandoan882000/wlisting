import { Modal } from 'components/Modal/Modal';
import { UtilitiesCard } from 'components/UtilitiesCard/UtilitiesCard';
import { amenity_data } from 'data/amenity_data';
import { FC, useState } from 'react';

export const UtilitiesCards: FC = () => {
  const [visbleAmenities, setVisibleAmenities] = useState(false);
  return (
    <div className="container p-0 !pt-5">
      <div className="row mb-10">
        {amenity_data.map(amenity => {
          return (
            <div className="col-lg-2" key={amenity.amenityId}>
              <UtilitiesCard image={amenity.amenityImage} name={amenity.amenityName} />
            </div>
          );
        })}
      </div>
      <div className="text-15 font-normal text-primary cursor-pointer" onClick={() => setVisibleAmenities(visible => !visible)}>
        <span>Show all amenities </span>
        <i className="fal fa-chevron-right"></i>
      </div>
      <Modal title="asdad" visible={visbleAmenities} onBack={() => setVisibleAmenities(visible => !visible)}>
        <div className="container">
          <div className="mt-20 mb-20">Amenities</div>
          <div className="row">
            {amenity_data.map(amenity => {
              return (
                <div className="col-lg-2" key={amenity.amenityId}>
                  <UtilitiesCard image={amenity.amenityImage} name={amenity.amenityName} />
                </div>
              );
            })}
          </div>
        </div>
      </Modal>
    </div>
  );
};
