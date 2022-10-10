import { CheckBox } from 'components/CheckBox/CheckBox';
import { Radio } from 'components/Radio/Radio';
import { FC, useContext, useState } from 'react';

import { MultiStepContext } from './Step';

const dates = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const open = [
  { name: 'open_hours', value: 'Open on selected hours' },
  { name: 'open_always', value: 'Always open' },
  { name: 'no_hours', value: 'No hours available' },
];

export const Step8: FC = () => {
  const [openState, setOpenState] = useState('open_hours');
  const initState = [
    {
      listingDayId: 1,
      listingDate: 'Mon',
      listingDateTime: [
        {
          open: '9:00',
          close: '21:00',
        },
      ],
      listingOpenStatus: false,
    },
    {
      listingDayId: 2,
      listingDate: 'Tue',
      listingDateTime: [
        {
          open: '9:00',
          close: '21:00',
        },
      ],
      listingOpenStatus: false,
    },
    {
      listingDayId: 3,
      listingDate: 'Wed',
      listingDateTime: [
        {
          open: '9:00',
          close: '21:00',
        },
      ],
      listingOpenStatus: false,
    },
    {
      listingDayId: 4,
      listingDate: 'Thu',
      listingDateTime: [
        {
          open: '9:00',
          close: '21:00',
        },
      ],
      listingOpenStatus: false,
    },
    {
      listingDayId: 5,
      listingDate: 'Fri',
      listingDateTime: [
        {
          open: '9:00',
          close: '21:00',
        },
      ],
      listingOpenStatus: false,
    },
    {
      listingDayId: 6,
      listingDate: 'Sat',
      listingDateTime: [
        {
          open: '9:00',
          close: '21:00',
        },
      ],
      listingOpenStatus: false,
    },
    {
      listingDayId: 0,
      listingDate: 'Sun',
      listingDateTime: [
        {
          open: '9:00',
          close: '21:00',
        },
      ],
      listingOpenStatus: false,
    },
  ];
  const [time, setTime] = useState(initState);
  const step = useContext(MultiStepContext);
  const handleChange = (currentValue: string) => {
    setOpenState(currentValue);
    if (currentValue == 'open_always') {
      const value = [
        {
          listingDayId: 1,
          listingDate: 'Mon',
          listingDateTime: [
            {
              open: '9:00',
              close: '21:00',
            },
          ],
          listingOpenStatus: true,
        },
        {
          listingDayId: 2,
          listingDate: 'Tue',
          listingDateTime: [
            {
              open: '9:00',
              close: '21:00',
            },
          ],
          listingOpenStatus: true,
        },
        {
          listingDayId: 3,
          listingDate: 'Wed',
          listingDateTime: [
            {
              open: '9:00',
              close: '21:00',
            },
          ],
          listingOpenStatus: true,
        },
        {
          listingDayId: 4,
          listingDate: 'Thu',
          listingDateTime: [
            {
              open: '9:00',
              close: '21:00',
            },
          ],
          listingOpenStatus: true,
        },
        {
          listingDayId: 5,
          listingDate: 'Fri',
          listingDateTime: [
            {
              open: '9:00',
              close: '21:00',
            },
          ],
          listingOpenStatus: true,
        },
        {
          listingDayId: 6,
          listingDate: 'Sat',
          listingDateTime: [
            {
              open: '9:00',
              close: '21:00',
            },
          ],
          listingOpenStatus: true,
        },
        {
          listingDayId: 0,
          listingDate: 'Sun',
          listingDateTime: [
            {
              open: '9:00',
              close: '21:00',
            },
          ],
          listingOpenStatus: false,
        },
      ];
      step.onChange('open', value);
    } else if (currentValue == 'open_hours') {
      step.onChange('open', time);
    } else {
      step.onChange('open', []);
    }
  };
  return (
    <div className="mb-110">
      <div className="text-gray9 text-22 font-medium">Add your opening time</div>
      <div className="flex flex-col w-100% flex-wrap mt-30">
        <div className="flex flex-col">
          <div className="flex items-center flex-wrap">
            {open.map((item, index) => {
              return (
                <div className={`flex items-center mb-10 mr-35 ${index != open.length - 1 ? 'mr-35' : ''}`} key={`check${index}`}>
                  <Radio
                    name={item.name}
                    onChange={() => handleChange(`${item.name}`)}
                    checked={openState == item.name}
                    label={item.value}
                    style={{ marginRight: '9px' }}
                  />
                </div>
              );
            })}
          </div>
          {openState == 'open_hours' && <div className="text-14 font-medium text-gray9 mt-10 mb-9">Select hours</div>}
          {openState == 'open_hours' &&
            dates.map((date, index) => {
              return (
                <div className="flex sm-max:flex-wrap mb-15" key={`time${index}`}>
                  <div className="flex w-130 mt-10 sm-max:w-100%">
                    <CheckBox
                      borderStyle="box"
                      backgroundColor="#5353c5"
                      name={date}
                      onChange={() =>
                        setTime(prev => [
                          ...prev.slice(0, index),
                          { ...prev[index], listingOpenStatus: !prev[index].listingOpenStatus },
                          ...prev.slice(index + 1),
                        ])
                      }
                    />
                    <div className="ml-9 mb-10 text-14 font-normal text-gray6">{date}</div>
                  </div>
                  <div className="flex flex-col w-80% sm-max:w-100%">
                    {time[index].listingDateTime.map((item, indexTime) => {
                      return (
                        <div key={index} className="flex flex-wrap">
                          <input
                            type="text"
                            className="mr-10 w-150 rounded-4 border-1 border-gray4 text-14 font-normal text-gray6 mb-10"
                            style={{ boxShadow: 'none' }}
                            placeholder="From"
                          />
                          <input
                            type="text"
                            className="mr-10 mb-10 w-150 rounded-4 border-1 border-gray4 text-14 font-normal text-gray6 placeholder:text-gray6"
                            style={{ boxShadow: 'none' }}
                            placeholder="To"
                          />
                          {time[index].listingDateTime.length == 1 && (
                            <div
                              className="flex justify-center items-center mb-10 w-46 h-46 px-10 py-5 border-1 border-gray4 text-25 text-gray7 rounded-6 cursor-pointer"
                              onClick={() => {
                                setTime(prev => [
                                  ...prev.slice(0, index),
                                  { ...prev[index], listingDateTime: [...time[index].listingDateTime, { open: '9:00', close: '21:00' }] },
                                  ...prev.slice(index + 1),
                                ]);
                              }}
                            >
                              <i className="fal fa-plus"></i>
                            </div>
                          )}
                          {time[index].listingDateTime.length == 2 && indexTime == 1 && (
                            <div
                              className="flex justify-center items-center w-46 h-46 p-10 border-1 border-gray4 text-25 text-gray7 rounded-6 cursor-pointer"
                              onClick={() =>
                                setTime(prev => [
                                  ...prev.slice(0, index),
                                  { ...prev[index], listingDateTime: [...time[index].listingDateTime.filter((item, index) => index != indexTime)] },
                                  ...prev.slice(index + 1),
                                ])
                              }
                            >
                              <i className="fal fa-times text-gray7"></i>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
