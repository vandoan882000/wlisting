import L from 'leaflet';
import { renderToString } from 'react-dom/server';

export const createIcon = (reactElement: Parameters<typeof renderToString>[0]) => {
  return L.divIcon({
    html: renderToString(reactElement),
  });
};
