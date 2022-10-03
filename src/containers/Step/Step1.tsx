import CheckBox1 from 'components/CheckBox1/CheckBox1';
import { ChangeEvent, FC, useContext, useState } from 'react';

import { MultiStepContext } from './Step';

const template_data = ['/assets/step1img.png', '/assets/step11.png', '/assets/step12.png'];

export const Step1: FC = () => {
  const step = useContext(MultiStepContext);
  const [template, setTemplate] = useState(1);
  const handleChange = (event: ChangeEvent) => {
    setTemplate(Number((event.target as HTMLInputElement).value));
    step.onChange((event.target as HTMLInputElement).name, (event.target as HTMLInputElement).value);
  };

  return (
    <div className="mb-268">
      <div className="text-gray9 text-22 font-medium">Please select the template before starting</div>
      <div className="flex w-100% flex-wrap mt-23 pr-_20 mr-_20">
        {template_data.map((item, index) => {
          return (
            <label key={index} className={`relative shadow-3 rounded-8 mb-20 cursor-pointer ${(index + 1) % 2 != 0 ? 'md:mr-20' : ''}`}>
              <input className="hidden absolute" type="radio" value={index + 1} name="template" onChange={handleChange} />
              <div className={`absolute w-100% h-100% inset-0 rounded-8 bg-gray9 opacity-40 ${index + 1 === template ? 'block' : 'hidden'}`}></div>
              <div className={`${index + 1 === template ? 'block' : 'hidden'} absolute bottom-10 right-10`}>
                <CheckBox1 fontSize={17} size={40} color={'#ffffff'} background={'#2dde98'} />
              </div>
              <img className="rounded-8" src={item} />
            </label>
          );
        })}
      </div>
    </div>
  );
};
