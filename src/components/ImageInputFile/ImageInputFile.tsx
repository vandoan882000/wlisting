import React, { ChangeEvent, FC, useState } from 'react';

type Variant = 'variant1' | 'variant2';
interface ImageInputFileProps {
  name?: string;
  onChange?: (event: ChangeEvent) => void;
  getData?: (data: never[]) => void;
  variant?: Variant;
}

export const ImageInputFile: FC<ImageInputFileProps> = ({ name = 'imageInput', onChange, getData, variant = 'variant1' }) => {
  const [listImg, setListImg] = useState([]);
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const files = (event.target as HTMLInputElement).files;

    const file = (files as FileList)[0];

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.addEventListener('load', e => {
      const data1 = (e.target as FileReader).result;
      setListImg(prevState => [...prevState, data1 as never]);
      getData?.([...listImg, data1 as never]);
    });
  };
  const removeImage = (image: string) => {
    setListImg(prevState => [...prevState.filter(currentImage => currentImage != image)]);
    getData?.([...listImg.filter(currentImage => currentImage != image)]);
  };
  return (
    <div className="flex ">
      <div className="flex">
        {listImg.map((image, index) => {
          return (
            <div
              key={index}
              className={`w-55 bg-cover bg-center relative aspect-1/1 rounded-8 ${variant == 'variant2' ? 'w-96 h-96 mr-10' : 'mr-8'}`}
            >
              <div
                className="absolute top-0 right-0 translate-y-_50% translate-x-5 flex justify-center items-center bg-dark text-light w-20 h-20 rounded-1/2 z-2 cursor-pointer"
                onClick={() => removeImage(image)}
              >
                <i className="fal fa-times"></i>
              </div>
              <img key={index} src={image} className="w-100% h-100% inset-0 absolute object-cover rounded-8" />
            </div>
          );
        })}
      </div>
      <label
        className={`flex flex-col justify-center items-center w-55 h-55 rounded-8 border-2 border-gray4 border-dashed cursor-pointer bg-gray1 ${
          variant == 'variant2' ? 'w-96 h-96' : ''
        }`}
      >
        <i className="fal fa-image text-gray6"></i>
        {variant == 'variant2' && <span className="mt-7 text-10 font-normal text-gray6">Upload Photo</span>}
        <input type="file" className="hidden" onInput={handleChange} accept="image/png, image/jpeg" multiple name={name} onChange={onChange} />
      </label>
    </div>
  );
};
