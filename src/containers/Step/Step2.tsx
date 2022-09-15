import { CustomMarker1 } from 'components/CustomMarker1/CustomMarker1';
import { Select } from 'components/Select/Select';
import GoogleMapReact, { ClickEventValue } from 'google-map-react';
import { ChangeEvent, FC, useContext, useState } from 'react';

import { MultiStepContext } from './Step';

interface LocationStep2 {
  name: string;
  lat: number;
  lng: number;
}

export const Step2: FC = () => {
  const [location, setLocation] = useState<LocationStep2[]>([]);
  const step = useContext(MultiStepContext);
  const handleChange = (event: ChangeEvent) => {
    step.onChange((event.target as HTMLInputElement).name, (event.target as HTMLInputElement).value);
  };
  const defaultProps = {
    center: { lat: 21.188230807000398, lng: 105.09244353658325 },
    zoom: 11,
  };
  const handleAddLocation = async (event: ClickEventValue) => {
    await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${event.lat},${event.lng}&key=AIzaSyABUKdMSsyqRo_b9P-_EKM2YMgms8mjHlg`)
      .then(response => response.json())
      .then(data => {
        if (data?.plus_code?.compound_code) {
          setLocation(prevState => [...prevState, { lat: event.lat, lng: event.lng, name: data.plus_code.compound_code }]);
        }
      });
    step.onChange('location', location);
  };
  return (
    <div className="mb-157">
      <div className="text-gray8 text-22 font-medium">Please select your category and location</div>
      <div className="flex flex-col w-100% flex-wrap mt-30">
        <div className="text-14 font-medium text-gray8 mb-9">Categories</div>
        <Select items={['Yoga', 'Tea & Coffee', 'Gym', 'Health', 'Restaurant', 'Shoping']} style={{ width: '340px', height: '46px' }}></Select>
        <div className="text-14 font-medium text-gray8 mt-20">Location</div>
        <div className="flex flex-col mt-9 mb-10">
          {location.map((item, index) => {
            return (
              <div key={index} className="flex mt-9 mb-10">
                <div className="w-340 border-1 border-gray4 rounded-4 mr-10">
                  <input
                    type="text"
                    name="location"
                    className="w-90% text-gray6 border-none rounded-4"
                    style={{ boxShadow: 'none' }}
                    value={item.name}
                    onChange={handleChange}
                  />
                  <span className="cursor-pointer text-gray5">
                    <i className="far fa-map-marker-alt"></i>
                  </span>
                </div>
                {index == location.length - 1 && (
                  <div className="flex justify-center items-center border-1 border-gray4 rounded-4 text-gray8 px-10 text-25 cursor-pointer">
                    <i className="fal fa-plus"></i>
                  </div>
                )}
                {index != location.length - 1 && (
                  <div
                    className="flex justify-center items-center border-1 border-gray4 rounded-4 text-gray8 px-10 text-25 cursor-pointer"
                    onClick={() => {
                      location.filter((item, indexValue) => indexValue != index);
                    }}
                  >
                    <i className="fal fa-times"></i>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="w-100% h-253">
          <GoogleMapReact
            onClick={event => handleAddLocation(event)}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            bootstrapURLKeys={{ key: 'AIzaSyABUKdMSsyqRo_b9P-_EKM2YMgms8mjHlg' }}
          >
            {location.map((item, index) => {
              <CustomMarker1 key={index} lat={item.lat} lng={item.lng} />;
            })}
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
};
