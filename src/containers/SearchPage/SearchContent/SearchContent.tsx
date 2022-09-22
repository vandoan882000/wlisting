import { CheckBox } from 'components/CheckBox/CheckBox';
import { CustomMarker } from 'components/CustomMarker/CustomMarker';
import { SearchItem } from 'components/SearchItem/SearchItem';
import { listings_data } from 'data/listings_data';
import GoogleMapReact from 'google-map-react';
import { FC } from 'react';

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

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-7">
          {listings_data.map((item, index) => {
            return (
              (item.listingCategoryId == category || category == undefined) &&
              (item.listingLocations[0].longName
                .toLowerCase()
                .trim()
                .includes(location.toLowerCase().trim()) ||
                location == 'all') && <SearchItem key={index} listingId={item.listingId} />
            );
          })}
          <div className="flex justify-center items-center mt-40">
            <div className="flex justify-center items-center w-36 h-36 text-light bg-primary text-16 font-medium rounded-1/2 mr-8 cursor-pointer">
              1
            </div>
            <div className="flex justify-center items-center w-36 h-36 text-gray8 bg-light border-1 border-gray4 rounded-1/2 text-16 font-medium mr-8 cursor-pointer">
              2
            </div>
            <div className="flex justify-center items-center w-36 h-36  text-gray8 bg-light border-1 border-gray4 font-medium rounded-1/2 mr-8 cursor-pointer">
              3
            </div>
            <div className="flex justify-center items-center w-36 h-36 text-gray8 font-medium rounded-1/2 mr-8 cursor-pointer">...</div>
            <div className="flex justify-center items-center  h-36 px-13 text-gray8 bg-light border-1 border-gray4 font-medium rounded-18 mr-8 cursor-pointer">
              <span className="mr-10">Next</span>
              <span>
                <i className="far fa-chevron-right"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-5 relative bg-gray2 h-1000 p-0 ">
          <div className="absolute top-20 left-20 z-100 flex items-center">
            <div className="flex justify-center items-center bg-light w-40 h-40 rounded-6 mr-10 shadow-2 cursor-pointer" onClick={onClick}>
              <i className="far fa-times"></i>
            </div>
            <div className="flex items-center bg-light py-9 px-11 rounded-6 shadow-2">
              <CheckBox backgroundColor="#000000" borderStyle="box" checkColor="#ffffff" size={17} />

              <div className="text-14 text-gray6 font-normal ml-9 ">Search as I move the map</div>
            </div>
          </div>
          {/* <MapContainer className="markercluster-map w-100% h-1000 z-1" center={[51.0, 19.0]} zoom={4} maxZoom={18}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <MarkerClusterGroup>
              <Marker position={[49.8397, 24.0297]} />
              <Marker position={[52.2297, 21.0122]} />
              <Marker position={[51.5074, -0.0901]} />
            </MarkerClusterGroup>
            ;
          </MapContainer> */}
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
