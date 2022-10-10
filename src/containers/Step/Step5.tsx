import { Numbers } from 'components/Numbers/Numbers';
import { ChangeEvent, FC, useContext, useState } from 'react';
import { debounce } from 'utils/debounce';

import { MultiStepContext } from './Step';

export const Step5: FC = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1);
  const step = useContext(MultiStepContext);
  const handleChange = (event: ChangeEvent) => {
    step.onChange((event.target as HTMLInputElement).name, (event.target as HTMLInputElement).value);
  };
  return (
    <div className="mb-416">
      <div className="text-gray9 text-22 font-medium">Add prices to your listing</div>
      <div className="flex flex-col w-100% flex-wrap mt-20">
        <div className="flex items-center">
          <div className="mr-20">
            <div className="text-14 font-medium text-gray9 mb-9">Min Price</div>
            <Numbers
              name="minPrice"
              value={min}
              handleInCrease={() => {
                if (min + 1 != max) {
                  setMin(prevState => Number(prevState) + 1);
                }
              }}
              handleDecrease={() => {
                if (min - 1 != 0) {
                  setMin(prevState => Number(prevState) - 1);
                }
              }}
              onChange={debounce(handleChange)}
              variant="variant2"
            />
          </div>
          <div>
            <div className="text-14 font-medium text-gray9 mb-9">Max Price</div>
            <Numbers
              name="maxPrice"
              value={max}
              handleInCrease={() => {
                setMax(prevState => Number(prevState) + 1);
              }}
              handleDecrease={() => {
                if (min - 1 != min) {
                  setMax(prevState => Number(prevState) - 1);
                }
              }}
              onChange={debounce(handleChange)}
              variant="variant2"
            />
          </div>
        </div>
        <div className="text-14 font-medium text-gray9 mt-20 mb-9">You do talk about pricing</div>
        <textarea
          className="text-14 text-gray6 border-1 border-gray4 rounded-4 py-15 h-113 focus:border-gray4 w-100% max-w-629"
          name="aboutPricing"
          style={{ boxShadow: 'none' }}
          onChange={debounce(handleChange)}
        ></textarea>
      </div>
    </div>
  );
};
