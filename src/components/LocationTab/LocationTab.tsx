import { CustomMarker } from 'components/CustomMarker/CustomMarker';
import GoogleMapReact from 'google-map-react';
import { FC } from 'react';

interface LocationTabProps {
  lat: number;
  lng: number;
  name: string;
}

export const LocationTab: FC<LocationTabProps> = ({ lat, lng, name }) => {
  return (
    <div className="flex border-1 border-gray3 rounded-6 mt-10">
      <div className="w-25% h-100% flex flex-col">
        <div className="flex justify-start py-10 px-10 border-b-1 border-b-gray3 text-14 font-normal text-primary cursor-pointer">
          <span>
            <i className="far fa-map-marker-alt mr-5"></i>
          </span>
          <span>{name}</span>
        </div>
      </div>
      <div className="w-85% h-289">
        <GoogleMapReact defaultCenter={{ lat: lat, lng: lng }} defaultZoom={11} bootstrapURLKeys={{ key: 'AIzaSyABUKdMSsyqRo_b9P-_EKM2YMgms8mjHlg' }}>
          <CustomMarker lat={lat} lng={lng} listingId={1} />
        </GoogleMapReact>
      </div>
    </div>
  );
};
