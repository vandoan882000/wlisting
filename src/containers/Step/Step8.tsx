import { CheckBox } from 'components/CheckBox/CheckBox';
import { ChangeEvent, FC, useContext, useState } from 'react';

import { MultiStepContext } from './Step';

const dates = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const Step8: FC = () => {
  const [openState, setOpenState] = useState('open_hours');
  const step = useContext(MultiStepContext);
  const handleChange = (currentValue: string) => (event: ChangeEvent) => {
    setOpenState(currentValue);
    if (currentValue == 'open_always') {
      const value = [
        {
          listingDayId: 1,
          listingDate: 'Mon',
          listingOpenTime: '9:00',
          listingCloseTime: '21:00',
          listingOpenStatus: true,
        },
        {
          listingDayId: 2,
          listingDate: 'Tue',
          listingOpenTime: '9:00',
          listingCloseTime: '21:00',
          listingOpenStatus: true,
        },
        {
          listingDayId: 3,
          listingDate: 'Wed',
          listingOpenTime: '9:00',
          listingCloseTime: '21:00',
          listingOpenStatus: true,
        },
        {
          listingDayId: 4,
          listingDate: 'Thu',
          listingOpenTime: '9:00',
          listingCloseTime: '21:00',
          listingOpenStatus: true,
        },
        {
          listingDayId: 5,
          listingDate: 'Fri',
          listingOpenTime: '9:00',
          listingCloseTime: '21:00',
          listingOpenStatus: true,
        },
        {
          listingDayId: 6,
          listingDate: 'Sat',
          listingOpenTime: '9:00',
          listingCloseTime: '21:00',
          listingOpenStatus: true,
        },
        {
          listingDayId: 0,
          listingDate: 'Sun',
          listingOpenTime: '9:00',
          listingCloseTime: '21:00',
          listingOpenStatus: false,
        },
      ];
      step.onChange((event.target as HTMLInputElement).name, value);
    } else if (currentValue == 'open_hours') {
    } else {
      step.onChange((event.target as HTMLInputElement).name, []);
    }
  };
  return (
    <div className="mb-110">
      <div className="text-gray8 text-22 font-medium">Add your opening time</div>
      <div className="flex flex-col w-100% flex-wrap mt-30">
        <div className="flex flex-col">
          <div className="flex items-center">
            <div className="flex items-center mr-35">
              <input type="radio" className="mr-9" name="open" checked={openState == 'open_hours'} onChange={handleChange('open_hours')} />
              <div>Open on selected hours</div>
            </div>
            <div className="flex items-center mr-35">
              <input type="radio" className="mr-9" name="open" checked={openState == 'open_always'} onChange={handleChange('open_always')} />
              <div>Always open</div>
            </div>
            <div className="flex items-center">
              <input type="radio" className="mr-9" name="open" checked={openState == 'no_hours'} onChange={handleChange('no_hours')} />
              <div>No hours available</div>
            </div>
          </div>
          {openState == 'open_hours' && <div className="text-14 font-medium text-gray8 mt-20 mb-9">Select hours</div>}
          {openState == 'open_hours' &&
            dates.map((date, index) => {
              return (
                <div className="flex items-center mb-15" key={index}>
                  <div className="flex mr-50 w-20%">
                    <CheckBox borderStyle="box" backgroundColor="#5353c5" name={date} />
                    <div className="ml-9">{date}</div>
                  </div>
                  <div className="flex items-center w-80%">
                    <input
                      type="time"
                      className="mr-10 rounded-4 border-1 border-gray4 text-14 font-normal text-gray6"
                      name={`open${date.toLocaleLowerCase()}`}
                      placeholder="a"
                    />
                    <input
                      type="time"
                      className="mr-10 rounded-4 border-1 border-gray4 text-14 font-normal text-gray6"
                      name={`open${date.toLocaleLowerCase()}`}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
