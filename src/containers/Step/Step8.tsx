import { CheckBox } from 'components/CheckBox/CheckBox';
import { FC } from 'react';

const dates = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const Step8: FC = () => {
  return (
    <div>
      <div className="text-gray8 text-22 font-medium">Add your opening time</div>
      <div className="flex flex-col w-100% flex-wrap mt-30">
        <div className="flex flex-col">
          <div className="flex items-center">
            <div className="flex items-center mr-35">
              <input type="radio" className="mr-9" name="open" />
              <div>Open on selected hours</div>
            </div>
            <div className="flex items-center mr-35">
              <input type="radio" className="mr-9" name="open" />
              <div>Always open</div>
            </div>
            <div className="flex items-center">
              <input type="radio" className="mr-9" name="open" />
              <div>No hours available</div>
            </div>
          </div>
          <div className="text-14 font-medium text-gray8 mt-20 mb-9">Select hours</div>
          {dates.map(date => {
            return (
              <div className="flex items-center mb-15">
                <div className="flex mr-50 w-20%">
                  <CheckBox borderStyle="box" backgroundColor="#5353c5" />
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
