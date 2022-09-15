import React, { ChangeEvent, FC, useState } from 'react';

interface SelectAvatarProps {
  name?: string;
  onChange?: (event: ChangeEvent) => void;
}

export const SelectAvatar: FC<SelectAvatarProps> = ({ name = 'inputAvatar', onChange = () => {} }) => {
  const [listImg, setListImg] = useState('');
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const files = (event.target as HTMLInputElement).files;

    const file = (files as FileList)[0];

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.addEventListener('load', e => {
      const data1 = (e.target as FileReader).result;
      setListImg(data1 as never);
    });
  };
  return (
    <div className="flex items-center">
      <div className="flex">
        {listImg.length == 0 ? (
          <div className="flex justify-center items-center w-60 h-60 rounded-1/2 bg-gray4 mr-15">
            <i className="fal fa-image text-gray6"></i>
          </div>
        ) : (
          <div className="flex justify-center items-center w-60 h-60 bg-cover bg-center relative aspect-1/1 mr-15 rounded-1/2">
            <img src={listImg} alt="" className="w-100% h-100% inset-0 absolute object-cover rounded-1/2" />
          </div>
        )}
      </div>
      <label className="flex justify-center items-center px-10 py-5 w-fit h-fit rounded-4 cursor-pointer bg-primary">
        <span className="text-14 font-medium text-light">Add Image</span>
        <input type="file" className="hidden" onInput={handleChange} accept="image/png, image/jpeg" name={name} onChange={onChange} />
      </label>
    </div>
  );
};
