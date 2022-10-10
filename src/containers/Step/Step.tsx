import { MultiStep } from 'components/MultiStep/MultiStep';
import { NavBar } from 'components/NavBar/NavBar';
import { createContext, FC, useState } from 'react';

import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import { Step4 } from './Step4';
import { Step5 } from './Step5';
import { Step6 } from './Step6';
import { Step7 } from './Step7';
import { Step8 } from './Step8';

interface MultiStepContext {
  onChange: (key: string, value: any) => void;
  multiStepValue: Record<string, any>;
}

interface StepProps {}
export const MultiStepContext = createContext<MultiStepContext>({} as MultiStepContext);
export const Step: FC<StepProps> = () => {
  const [multiStepValue, setMultiStepValue] = useState({
    template: 1,
    aboutPricing: '',
    amenities: {},
    avatar: '',
    category: 1,
    email: '',
    gallery: [],
    introduce: '',
    location: [],
    maxPrice: 2,
    minPrice: 1,
    open: [
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
    ],
    social: [],
    tags: 'tag1',
    tel: '',
    title: '',
    video: [],
  });
  return (
    <>
      <NavBar />
      <MultiStepContext.Provider
        value={{
          onChange: (key: string, value: any) => {
            setMultiStepValue({ ...multiStepValue, [key]: value });
          },
          multiStepValue: multiStepValue,
        }}
      >
        <MultiStep>
          <MultiStep.Step>
            <Step1 />
          </MultiStep.Step>
          <MultiStep.Step>
            <Step2 />
          </MultiStep.Step>
          <MultiStep.Step>
            <Step3 />
          </MultiStep.Step>
          <MultiStep.Step>
            <Step4 />
          </MultiStep.Step>
          <MultiStep.Step>
            <Step5 />
          </MultiStep.Step>
          <MultiStep.Step>
            <Step6 />
          </MultiStep.Step>
          <MultiStep.Step>
            <Step7 />
          </MultiStep.Step>
          <MultiStep.Step>
            <Step8 />
          </MultiStep.Step>
        </MultiStep>
      </MultiStepContext.Provider>
    </>
  );
};
