import { Devider } from 'components/Divider/Devider';
import { MultiStepContext } from 'containers/Step/Step';
import { Children, ComponentType, FC, ReactElement, useContext, useState } from 'react';
import { useNavigate } from 'react-router';

import { Step } from './Step';

export interface Steps {
  name: string;
  component: ComponentType;
}

interface MultiStepProps {}

export const MultiStep: FC<MultiStepProps> & {
  Step: typeof Step;
} = ({ children }) => {
  const [indexStep, setIndexStep] = useState(1);
  const navigate = useNavigate();
  const step = useContext(MultiStepContext);

  const handleClickContinue = () => {
    if (indexStep < Children.count(children)) {
      setIndexStep(index => index + 1);
    } else {
      localStorage.setItem('listingAdd', JSON.stringify(step.multiStepValue));
      navigate('/adddone');
    }
  };
  const handleClickPrev = () => {
    setIndexStep(index => index - 1);
  };
  return (
    <>
      <div className="relative w-100% h-4 bg-gray1 mb-81">
        <div className="absolute top-0 left-0 h-100% bg-secondary" style={{ width: `${(indexStep / Children.count(children)) * 100}%` }}></div>
      </div>
      <div className="container">
        <div className="row justify-center">
          <div className="col-lg-8 max-w-628 !p-0 flex flex-col">
            <div>
              <span className="font-medium text-40 text-gray8 mr-8">{indexStep}</span>
              <span className="font-medium text-20 text-gray6 mr-8">/</span>
              <span className="font-medium text-20 text-gray6">{Children.count(children)}</span>
              <div>
                {Children.map(children, (child, index) => {
                  if ((child as ReactElement).type !== MultiStep.Step) {
                    console.log('err');
                    return '';
                  }
                  return indexStep == index + 1 && child;
                })}
              </div>
            </div>
            <div>
              <Devider />
              <div className="flex justify-end pt-17 pb-15">
                {indexStep > 1 && (
                  <div
                    className="text-16 font-medium text-gray8 rounded-6 bg-gray2 px-18 py-11 mr-10 cursor-pointer select-none"
                    onClick={handleClickPrev}
                  >
                    <span className="mr-10">
                      <i className="far fa-chevron-left"></i>
                    </span>
                    Back
                  </div>
                )}
                <div
                  className="text-16 font-medium text-light rounded-6 bg-primary px-18 py-11 cursor-pointer select-none"
                  onClick={handleClickContinue}
                >
                  Continue
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
MultiStep.Step = Step;
