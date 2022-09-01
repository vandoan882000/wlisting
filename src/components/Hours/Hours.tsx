import { FC } from 'react';
import { ListingDateStatus } from 'types/Listing';

interface HoursProps {
  listingOpenStatus: ListingDateStatus[];
}

export const Hours: FC<HoursProps> = ({ listingOpenStatus }) => {
  const getDateStatus = (day: number, timeOpen: string, timeClose: string) => {
    const dates = Date.now();
    const currentDate = new Date(dates);
    const currentDay = currentDate.getDay();

    const openDateTime = new Date();
    openDateTime.setHours(Number(timeOpen.split(':')[0]), Number(timeOpen.split(':')[1]), 0, 0);

    const closeDateTime = new Date();
    closeDateTime.setHours(Number(timeClose.split(':')[0]), Number(timeClose.split(':')[1]), 0, 0);
    if (day === currentDay && currentDate >= openDateTime && currentDate <= closeDateTime) {
      return true;
    }
    return false;
  };
  const formatTime = (time: string) => {
    if (Number(time.split(':')[0]) > 12) {
      return `${Number(time.split(':')[0]) - 12}:${time.split(':')[1]} PM`;
    } else {
      return `${time} AM`;
    }
  };
  return (
    <>
      {listingOpenStatus.map((hour: ListingDateStatus) => {
        return (
          <div className="flex justify-between mt-5" key={hour.listingDayId}>
            <div className="flex items-center">
              <div className="text-13 font-medium text-gray7 mr-10">{hour.listingDate}</div>
              {hour.listingOpenStatus && getDateStatus(hour.listingDayId, hour.listingOpenTime, hour.listingCloseTime) ? (
                <i className="fas fa-circle text-3 text-gray7 mr-10"></i>
              ) : (
                ''
              )}

              <div className="text-12 font-medium text-secondary">
                {hour.listingOpenStatus && getDateStatus(hour.listingDayId, hour.listingOpenTime, hour.listingCloseTime) ? 'Open Now' : ''}
              </div>
            </div>
            <div className="text-13 font-normal text-gray6">
              {hour.listingOpenStatus ? `${formatTime(hour.listingOpenTime)} - ${formatTime(hour.listingCloseTime)}` : 'Closed'}
            </div>
          </div>
        );
      })}
    </>
  );
};
