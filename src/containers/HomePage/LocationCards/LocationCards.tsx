import { LocationCard } from 'components/LocationCard/LocationCard';
import { locations_data } from 'data/locations_data';

export default function LocationCards() {
  return (
    <div className="container">
      <div className="text-22 text-gray8 font-medium mb-10">Happening Cities</div>
      <div className="row">
        {locations_data.slice(0, 5).map(location => (
          <div key={location.id} className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
            <LocationCard {...location} />
          </div>
        ))}
      </div>
    </div>
  );
}
