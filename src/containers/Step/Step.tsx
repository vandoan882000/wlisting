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
      { listingDayId: 1, listingDate: 'Mon', listingOpenTime: '9:00', listingCloseTime: '21:00', listingOpenStatus: true },
      { listingDayId: 2, listingDate: 'Tue', listingOpenTime: '9:00', listingCloseTime: '21:00', listingOpenStatus: true },
      { listingDayId: 3, listingDate: 'Wed', listingOpenTime: '9:00', listingCloseTime: '21:00', listingOpenStatus: true },
      { listingDayId: 4, listingDate: 'Thu', listingOpenTime: '9:00', listingCloseTime: '21:00', listingOpenStatus: true },
      { listingDayId: 5, listingDate: 'Fri', listingOpenTime: '9:00', listingCloseTime: '21:00', listingOpenStatus: true },
      { listingDayId: 6, listingDate: 'Sat', listingOpenTime: '9:00', listingCloseTime: '21:00', listingOpenStatus: true },
      { listingDayId: 0, listingDate: 'Sun', listingOpenTime: '9:00', listingCloseTime: '21:00', listingOpenStatus: true },
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
