import { CheckBox } from 'components/CheckBox/CheckBox';
import { FC } from 'react';

const amenities = [
  {
    name: 'wifi',
    value: 'Wifi',
  },
  {
    name: 'iron',
    value: 'Iron',
  },
  {
    name: 'full_kitchen',
    value: 'Full kitchen',
  },
  {
    name: 'washer',
    value: 'Washer',
  },
  {
    name: 'tv',
    value: 'TV',
  },
  {
    name: 'bathroom',
    value: 'Bathroom',
  },
];

export const Step6: FC = () => {
  return (
    <div>
      <div className="text-gray8 text-22 font-medium">Please select your amenities</div>
      <div className="flex flex-col w-100% flex-wrap mt-30">
        <div className="flex flex-col">
          <div className="text-14 font-medium text-gray8 mt-20 mb-9">Amennities</div>
          <div className="container">
            <div className="row">
              {amenities.map(amenity => {
                return (
                  <div className="col-lg-4">
                    <div className="flex items-center">
                      <CheckBox borderStyle="box" backgroundColor="#5353c5" />
                      <span className="text-14 font-normal text-gray6 ml-9">{amenity.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
