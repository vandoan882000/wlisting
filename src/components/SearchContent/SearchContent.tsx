import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/dist/styles.min.css';

import { CheckBox } from 'components/CheckBox/CheckBox';
import { CustomMarker } from 'components/CustomMarker/CustomMarker';
import { listings_data } from 'data/listings_data';
import GoogleMapReact from 'google-map-react';
import { FC } from 'react';

import { PaginatedItems } from '../../containers/SearchPage/PaginatedItems/PaginatedItems';

interface SearchContentProps {
  location: string;
  category: number;
  onClick: () => void;
}

export const SearchContent: FC<SearchContentProps> = ({ onClick, location, category }) => {
  const defaultProps = {
    center: { lat: 59.955413, lng: 30.337844 },
    zoom: 11,
  };
  const currentData = listings_data.filter(
    item =>
      (item.listingCategoryId == category || category == undefined) &&
      (item.listingLocations[0].longName
        .toLowerCase()
        .trim()
        .includes(location.toLowerCase().trim()) ||
        location == 'all'),
  );
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7 pr-20">
          <PaginatedItems data={currentData} itemsPerPage={5} />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 relative bg-gray2 h-1000 p-0 ">
          <div className="absolute top-20 left-20 z-100 flex items-center">
            <div className="flex justify-center items-center bg-light w-40 h-40 rounded-6 mr-10 shadow-2 cursor-pointer" onClick={onClick}>
              <i className="far fa-times"></i>
            </div>
            <div className="flex items-center bg-light py-9 px-11 rounded-6 shadow-2">
              <CheckBox backgroundColor="#000000" borderStyle="box" checkColor="#ffffff" size={17} />

              <div className="text-14 text-gray6 font-normal ml-9 ">Search as I move the map</div>
            </div>
          </div>
          <GoogleMapReact
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            bootstrapURLKeys={{ key: 'AIzaSyABUKdMSsyqRo_b9P-_EKM2YMgms8mjHlg' }}
          >
            {listings_data.map(item => {
              return (
                <CustomMarker key={item.listingId} lat={item.listingLocations[0].lat} lng={item.listingLocations[0].lng} listingId={item.listingId} />
              );
            })}
          </GoogleMapReact>
          {/* <ReactMapGl
            accessToken="pk.eyJ1IjoibWFldmFsdW5lIiwiYSI6ImNrZ3UxYTZoaTFmNG0zMGxxeXYzM2Vlb2sifQ.M_TcERZWGKGXyHaTPwVPsg"
            mapStyle="mapbox://styles/mapbox/streets-v8"
            data={data}
            markerComponent={MyComponent}
            containerStyle={{ height: '100%' }}
            containerClassName="customMapContainer"
          /> */}
        </div>
      </div>
    </div>
  );
};
