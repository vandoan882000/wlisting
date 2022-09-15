import { CheckBox1 } from 'components/CheckBox1/CheckBox1';
import { ChangeEvent, FC, useContext } from 'react';

import { MultiStepContext } from './Step';

export const Step1: FC = () => {
  const step = useContext(MultiStepContext);
  const handleChange = (event: ChangeEvent) => {
    step.onChange((event.target as HTMLInputElement).name, (event.target as HTMLInputElement).value);
  };
  return (
    <div className="mb-268">
      <div className="text-gray8 text-22 font-medium">Please select the template before starting</div>
      <div className="flex w-100% flex-wrap mt-23">
        <label className="relative shadow-3 rounded-8 mr-20 cursor-pointer">
          <input className="hidden input-teplate-select absolute" type="radio" value="template1" name="template" onChange={handleChange} />
          <div className="absolute w-100% h-100% inset-0 rounded-8 bg-gray8 opacity-40"></div>
          <div className="absolute bottom-10 right-10">
            <CheckBox1 fontSize={17} size={40} color={'#ffffff'} background={'#2dde98'} />
          </div>
          <img className="rounded-8" src="/assets/step11.png" />
        </label>
        <label className="relative shadow-3 rounded-8 cursor-pointer">
          <input className="hidden input-teplate-select absolute" type="radio" value="template2" name="template" onChange={handleChange} />
          <div className="hidden absolute w-100% h-100% inset-0 rounded-8 bg-gray8 opacity-40"></div>
          <div className="absolute bottom-10 right-10">
            <CheckBox1 fontSize={17} size={40} color={'#ffffff'} background={'#2dde98'} />
          </div>
          <img className="rounded-8" src="/assets/step12.png" alt="" />
        </label>
        <label className="relative shadow-3 rounded-8 mr-20 cursor-pointer mt-20">
          <input className="hidden input-teplate-select absolute" type="radio" value="template3" name="template" onChange={handleChange} />
          <div className="hidden absolute w-100% h-100% inset-0 rounded-8 bg-gray8 opacity-40"></div>
          <div className="absolute bottom-10 right-10">
            <CheckBox1 fontSize={17} size={40} color={'#ffffff'} background={'#2dde98'} />
          </div>
          <img className="rounded-8" src="/assets/step12.png" alt="" />
        </label>
      </div>
    </div>
  );
};
