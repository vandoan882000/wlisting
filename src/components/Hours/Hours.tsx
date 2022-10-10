import { FC } from 'react';
import { ListingDateStatus } from 'types/Listing';

interface HoursProps {
  listingOpenStatus: ListingDateStatus[];
}

export const Hours: FC<HoursProps> = ({ listingOpenStatus }) => {
  const getDateStatus = (date: number, listingOpenStatus: ListingDateStatus) => {
    let state = false;
    const dates = Date.now();
    const currentDate = new Date(dates);
    const currentDay = currentDate.getDay();

    listingOpenStatus.listingDateTime.forEach(time => {
      const openDateTime = new Date();
      openDateTime.setHours(Number(time.start.split(':')[0]), Number(time.start.split(':')[1]), 0, 0);

      const closeDateTime = new Date();
      closeDateTime.setHours(Number(time.end.split(':')[0]), Number(time.end.split(':')[1]), 0, 0);
      if (date == currentDay && currentDate >= openDateTime && currentDate <= closeDateTime) {
        state = true;
      }
    });
    return state;
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
      <div className="mt-5">
        {listingOpenStatus.map((hour: ListingDateStatus) => {
          return (
            <div className="flex justify-between mt-5" key={hour.listingDayId}>
              <div className="flex items-center">
                <div className="text-13 font-medium text-gray8 mr-10">{hour.listingDate}</div>
                {hour.listingOpenStatus && getDateStatus(hour.listingDayId, hour) ? <i className="fas fa-circle text-3 text-gray8 mr-10"></i> : ''}

                <div className="text-12 font-medium text-secondary">
                  {hour.listingOpenStatus && getDateStatus(hour.listingDayId, hour) ? 'Open Now' : ''}
                </div>
              </div>
              <div className="text-13 font-normal text-gray6">
                {hour.listingDateTime.map((time, index) => {
                  return <span key={index}>{hour.listingOpenStatus ? `${formatTime(time.start)} - ${formatTime(time.end)}` : 'Closed'}</span>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
{
}
