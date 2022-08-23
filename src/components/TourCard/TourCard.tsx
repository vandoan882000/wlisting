import { FC } from 'react';

export const TourCard: FC = () => {
  return (
    <div className="flex flex-col">
      <div className="w-100% rounded-15 relative bg-cover bg-center aspect-16/9">
        <img
          className="absolute top-0 left-0 w-100% h-100% object-cover rounded-15"
          src="https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
      <div className="flex justify-between mt-6">
        <div className="text-13 font-medium text-gray8">Living room</div>
        <div className="text-13 font-normal text-gray6">+2 Photos</div>
      </div>
    </div>
  );
};
