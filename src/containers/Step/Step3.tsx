import { SelectAvatar } from 'components/SelectAvatar/SelectAvatar';
import { ChangeEvent, FC, useContext, useState } from 'react';
import { debounce } from 'utils/debounce';

import { MultiStepContext } from './Step';

export const Step3: FC = () => {
  const [socialState, setSocialState] = useState([{ name: 'facebook', value: '' }]);
  const step = useContext(MultiStepContext);
  const handleChange = (event: ChangeEvent) => {
    step.onChange((event.target as HTMLInputElement).name, (event.target as HTMLInputElement).value);
  };
  const handleChangeSocialSelect = (index: number) => (event: ChangeEvent) => {
    setSocialState(prevState => [
      ...prevState.slice(0, index),
      { name: (event.target as HTMLInputElement).value, value: prevState[index].value },
      ...prevState.slice(index + 1, socialState.length - 1),
    ]);
    step.onChange('social', [
      ...socialState.slice(0, index),
      { name: (event.target as HTMLInputElement).value, value: socialState[index].value },
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
      <div className="text-gray8 text-22 font-medium">Information of listing owner</div>
      <div className="flex flex-col w-100% flex-wrap mt-30">
        <div className="text-14 text-gray8 font-medium mb-9">Logo or avatar</div>
        <SelectAvatar name="avatar" onChange={debounce(handleChange)} />
        <div className="text-14 text-gray8 font-medium mt-20 mb-9">Introduce the listing owner</div>
        <textarea
          className="border-1 border-gray4 rounded-4 py-15 h-120 text-14 focus:border-gray4"
          style={{ boxShadow: 'none' }}
          placeholder="Enter Introduce"
          name="introduce"
          onChange={debounce(handleChange)}
        ></textarea>
        <div className="text-14 text-gray8 font-medium mt-20 mb-9">Phone number</div>
        <input
          className="text-14 text-gray5 font-medium border-gray4 border-1 rounded-4 py-15 focus:border-gray4"
          type="tel"
          name="tel"
          placeholder="Enter phone number"
          style={{ boxShadow: 'none' }}
          onChange={debounce(handleChange)}
        />
        <div className="text-14 text-gray8 font-medium mt-20 mb-9">Email</div>
        <input
          className="text-14 text-gray5 font-medium border-gray4 border-1 rounded-4 py-15 focus:border-gray4"
          type="email"
          name="email"
          placeholder="Enter email"
          style={{ boxShadow: 'none' }}
          onChange={debounce(handleChange)}
        />
        <div className="text-14 text-gray8 font-medium mt-20 mb-9">Social</div>
        {socialState.map((social, index) => {
          return (
            <div key={index} className="flex mb-10">
              <select
                defaultValue={socialState[index].name}
                className="w-150 text-14 text-gray5 font-medium border-gray4 border-1 rounded-4 py-10 mr-10 focus:border-gray4"
                name={`social${index}`}
                style={{ boxShadow: 'none' }}
                onChange={debounce(handleChangeSocialSelect(index))}
              >
                <option value="facebook">Facebook</option>
                <option value="instagram">Instagram</option>
                <option value="flickr">Flickr</option>
              </select>
              <input
                type="text"
                className="mr-10 border-1 border-gray4 rounded-4 outline-none focus:border-gray4"
                style={{ boxShadow: 'none' }}
                onChange={debounce(handleChangeSocialInput(index))}
              />
              {index == socialState.length - 1 && (
                <div
                  className="flex justify-center items-center p-10 border-1 border-gray4 text-25 rounded-6 cursor-pointer"
                  onClick={() => setSocialState(prevState => [...prevState, { name: 'facebook', value: '' }])}
                >
                  <i className="fal fa-plus"></i>
                </div>
              )}
              {index != socialState.length - 1 && (
                <div
                  className="flex justify-center items-center p-10 border-1 border-gray4 text-25 rounded-6 cursor-pointer"
                  onClick={() => setSocialState(prevState => [...prevState.filter((item, indexValue) => indexValue != index)])}
                >
                  <i className="fal fa-times"></i>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
