import { CustomMarker2 } from 'components/CustomMarker2/CustomMarker2';
import GoogleMapReact from 'google-map-react';
import { FC, useState } from 'react';
import { ListingLocation } from 'types/Listing';

interface LocationTabProps {
  listingId: number;
  listingLocation: ListingLocation[];
}

export const LocationTab: FC<LocationTabProps> = ({ listingId, listingLocation }) => {
  const [location, setLocation] = useState(0);
  return (
    <div className="flex md-max:flex-col border-1 border-gray3 rounded-6 mt-10">
      <div className="w-100% md:w-25% h-100% flex flex-col">
        {listingLocation.map((item, index) => {
          return (
            <div
              className={`flex justify-start py-10 px-10 border-b-1 border-b-gray3 text-14 font-normal cursor-pointer ${
                location === index ? 'text-primary' : 'text-gray8'
              }`}
              onClick={() => setLocation(index)}
              key={index}
            >
              <span>
                <i className="far fa-map-marker-alt mr-5"></i>
              </span>
              <span>{item.address}</span>
            </div>
          );
        })}
      </div>
      {listingLocation.map((item, index) => {
        return (
          location == index && (
            <div key={index} className="w-100% md:w-85% h-289">
              <GoogleMapReact
                defaultCenter={{ lat: listingLocation[location].lat, lng: listingLocation[location].lng }}
                defaultZoom={8}
                bootstrapURLKeys={{ key: 'AIzaSyABUKdMSsyqRo_b9P-_EKM2YMgms8mjHlg' }}
              >
                {listingLocation.map((item, index) => {
                  return (
                    <CustomMarker2
                      key={index}
                      lat={item.lat}
                      lng={item.lng}
                      listingId={listingId}
                      style={
                        location != index
                          ? { width: '26px', height: '26px', fontSize: '16px', border: '1px solid #dbdade', color: '#d14a66', background: '#ffffff' }
                          : {}
                      }
                    />
                  );
                })}
              </GoogleMapReact>
            </div>
          )
        );
      })}
    </div>
  );
};
