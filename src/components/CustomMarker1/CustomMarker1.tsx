import { FC } from 'react';

interface CustomMarker1Props {
  lat: number;
  lng: number;
}

export const CustomMarker1: FC<CustomMarker1Props> = () => {
  return (
    <div className="w-fit">
      <img src="/assets/marker.png" alt="" />
    </div>
  );
};
