import 'mapbox-gl/dist/mapbox-gl.css';

import mapboxgl from 'mapbox-gl';

import { ListingRoutes } from './routes';

mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

function App() {
  return (
    <div className="App">
      <ListingRoutes />
    </div>
  );
}

export default App;
