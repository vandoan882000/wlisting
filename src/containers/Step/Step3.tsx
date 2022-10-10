import { Select } from 'components/Select/Select';
import { SelectAvatar } from 'components/SelectAvatar/SelectAvatar';
import { ChangeEvent, FC, useContext, useState } from 'react';
import { debounce } from 'utils/debounce';

import { MultiStepContext } from './Step';

export const Step3: FC = () => {
  const [socialState, setSocialState] = useState([{ name: 'facebook', value: '' }]);
  const step = useContext(MultiStepContext);
  const socialData = ['Facebook', 'Instagram', 'Flickr'];
  const handleChange = (event: ChangeEvent) => {
    step.onChange((event.target as HTMLInputElement).name, (event.target as HTMLInputElement).value);
  };
  const handleChangeSocialSelect = (index: number) => () => {
    setSocialState(prevState => [
      ...prevState.slice(0, index),
      { name: `social${index}`, value: socialData[index] },
      ...prevState.slice(index + 1, socialState.length - 1),
    ]);
    step.onChange('social', [
      ...socialState.slice(0, index),
      { name: `social${index}`, value: socialData[index] },
      ...socialState.slice(index + 1, socialState.length - 1),
    ]);
  };
  const handleChangeSocialInput = (index: number) => (event: ChangeEvent) => {
    setSocialState(prevState => [
      ...prevState.slice(0, index),
      { name: prevState[index].name, value: (event.target as HTMLInputElement).value },
      ...prevState.slice(index + 1, socialState.length - 1),
    ]);
    step.onChange('social', [
      ...socialState.slice(0, index),
      { name: socialState[index].name, value: (event.target as HTMLInputElement).value },
      ...socialState.slice(index + 1, socialState.length - 1),
    ]);
  };

  return (
    <div className="mb-125">
      <div className="text-gray9 text-22 font-medium">Information of listing owner</div>
      <div className="flex flex-col w-100% flex-wrap mt-30">
        <div className="text-14 text-gray9 font-medium mb-9">Logo or avatar</div>
        <SelectAvatar name="avatar" onChange={debounce(handleChange)} />
        <div className="text-14 text-gray9 font-medium mt-20 mb-9">Introduce the listing owner</div>
        <textarea
          className="border-1 border-gray4 rounded-4 py-15 w-100% h-113 text-14 focus:border-gray4 text-gray6 placeholder:text-gray6 font-normal "
          style={{ boxShadow: 'none' }}
          placeholder="Enter Introduce"
          name="introduce"
          onChange={debounce(handleChange)}
        ></textarea>
        <div className="text-14 text-gray9 font-medium mt-20 mb-9">Phone number</div>
        <input
          className="w-100% max-w-340 text-14 text-gray6 placeholder:text-gray6 font-normal border-gray4 border-1 rounded-4 py-10 focus:border-gray4"
          type="tel"
          name="tel"
          placeholder="Enter phone number"
          style={{ boxShadow: 'none' }}
          onChange={debounce(handleChange)}
        />
        <div className="text-14 text-gray9 font-medium mt-20 mb-9">Email</div>
        <input
          className="w-100% max-w-340 text-14 text-gray6 placeholder:text-gray6 font-normal border-gray4 border-1 rounded-4 py-10 focus:border-gray4"
          type="email"
          name="email"
          placeholder="Enter email"
          style={{ boxShadow: 'none' }}
          onChange={debounce(handleChange)}
        />
        <div className="text-14 text-gray9 font-medium mt-20 mb-9">Social</div>
        {socialState.map((social, index) => {
          return (
            <div key={index} className="flex mb-10">
              <Select
                items={socialData}
                onChange={debounce(handleChangeSocialSelect(index))}
                style={{ width: '148px', height: '46px', marginRight: '10px', color: '#75737c', fontSize: '14px' }}
              ></Select>

              <input
                type="text"
                className="mr-10 py-3 w-340 h-46 md-max:w-100 border-1 border-gray4 rounded-4 outline-none focus:border-gray4 text-14 text-gray6 placeholder:text-gray6 font-normal"
                style={{ boxShadow: 'none' }}
                onChange={debounce(handleChangeSocialInput(index))}
              />
              {index == socialState.length - 1 && (
                <div
                  className="flex justify-center items-center w-46 h-46 px-10 py-5 border-1 border-gray4 text-25 text-gray7 rounded-6 cursor-pointer"
                  onClick={() => setSocialState(prevState => [...prevState, { name: 'facebook', value: '' }])}
                >
                  <i className="fal fa-plus"></i>
                </div>
              )}
              {index != socialState.length - 1 && (
                <div
                  className="flex justify-center items-center w-46 h-46 p-10 border-1 border-gray4 text-25 text-gray7 rounded-6 cursor-pointer"
                  onClick={() => setSocialState(prevState => [...prevState.filter((item, indexValue) => indexValue != index)])}
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
};
