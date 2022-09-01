import { Devider } from 'components/Divider/Devider';
import { Step1 } from 'containers/Step/Step1';
import { Step2 } from 'containers/Step/Step2';
import { Step3 } from 'containers/Step/Step3';
import { Step4 } from 'containers/Step/Step4';
import { Step5 } from 'containers/Step/Step5';
import { Step6 } from 'containers/Step/Step6';
import { Step7 } from 'containers/Step/Step7';
import { Step8 } from 'containers/Step/Step8';
import { ComponentType, FC, useEffect, useState } from 'react';

export interface Steps {
  name: string;
  component: ComponentType;
}

interface MultiStepProps {}

export const MultiStep: FC<MultiStepProps> = () => {
  const [indexStep, setIndexStep] = useState(1);
  const [formValue, setFormValue] = useState({});
  const [referenceForm, setReferenceForm] = useState<HTMLDivElement | null>(null);
  const steps = [
    { name: 'Step1', component: Step1 },
    { name: 'Step2', component: Step2 },
    { name: 'Step3', component: Step3 },
    { name: 'Step4', component: Step4 },
    { name: 'Step5', component: Step5 },
    { name: 'Step6', component: Step6 },
    { name: 'Step7', component: Step7 },
    { name: 'Step8', component: Step8 },
  ];
  const handleChange = (event: Event) => {
    const value = (event.target as HTMLInputElement).value;
    const key = (event.target as HTMLInputElement).name;
    setFormValue(prevState => ({ ...prevState, ...{ [key]: value } }));
  };

  const handleClickContinue = () => {
    if (indexStep < steps.length) {
      setIndexStep(index => index + 1);
    }
    console.log(formValue);
  };
  const handleClickBack = () => {
    setIndexStep(index => index - 1);
  };
  useEffect(() => {
    const inputEls = referenceForm?.querySelectorAll('input');
    const textEls = referenceForm?.querySelectorAll('textarea');
    const selectEls = referenceForm?.querySelectorAll('select');
    inputEls?.forEach(input => {
      input.addEventListener('change', handleChange);
    });
    textEls?.forEach(input => {
      input.addEventListener('change', handleChange);
    });
    selectEls?.forEach(input => {
      input.addEventListener('change', handleChange);
    });

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });
  return (
    <>
      <div className="container">
        <div className="row justify-center">
          <div className="col-lg-8 max-w-628 !p-0">
            <div className="">
              <span className="font-medium text-40 text-gray8 mr-8">{indexStep}</span>
              <span className="font-medium text-20 text-gray6 mr-8">/</span>
              <span className="font-medium text-20 text-gray6">{steps.length}</span>
            </div>
            <div ref={setReferenceForm}>
              {steps.map(({ component: Component, name }, index) => {
                return indexStep === index + 1 && <Component key={name} />;
              })}
            </div>
            <div className="mt-150">
              <Devider />
              <div className="flex justify-end pt-17 pb-15">
                {indexStep > 1 && (
                  <div className="text-16 font-medium text-gray8 rounded-6 bg-gray2 px-18 py-13 mr-10 cursor-pointer" onClick={handleClickBack}>
                    <span>
                      <i className="fal fa-arrow-left"></i>
                    </span>{' '}
                    Back
                  </div>
                )}
                <div className="text-16 font-medium text-light rounded-6 bg-primary px-18 py-13 cursor-pointer" onClick={handleClickContinue}>
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
