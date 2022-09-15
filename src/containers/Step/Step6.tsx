import { CheckBox } from 'components/CheckBox/CheckBox';
import { ChangeEvent, FC, useContext, useState } from 'react';
import { debounce } from 'utils/debounce';

import { MultiStepContext } from './Step';

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
  const [amenitiesState, setAmenitiesState] = useState({});
  const step = useContext(MultiStepContext);
  const handleChange = (event: ChangeEvent) => {
    setAmenitiesState(prevState => ({
      ...prevState,
      [(event.target as HTMLInputElement).name]: (event.target as HTMLInputElement).value,
    }));
    step.onChange('amenities', {
      ...amenitiesState,
      [(event.target as HTMLInputElement).name]: (event.target as HTMLInputElement).value,
    });
  };
  return (
    <div className="mb-416">
      <div className="text-gray8 text-22 font-medium">Please select your amenities</div>
      <div className="flex flex-col w-100% flex-wrap mt-20">
        <div className="flex flex-col">
          <div className="text-14 font-medium text-gray8 mb-9">Amennities</div>
          <div className="container">
            <div className="row">
              {amenities.map((amenity, index) => {
                return (
                  <div className="col-lg-4" key={index}>
                    <div className="flex items-center">
                      <CheckBox borderStyle="box" backgroundColor="#5353c5" name={amenity.name} onChange={debounce(handleChange)} />
                      <span className="text-14 font-normal text-gray6 ml-9">{amenity.value}</span>
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
