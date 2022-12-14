import { ImageInputFile } from 'components/ImageInputFile/ImageInputFile';
import { ChangeEvent, FC, useContext, useState } from 'react';
import { debounce } from 'utils/debounce';

import { MultiStepContext } from './Step';

export const Step7: FC = () => {
  const step = useContext(MultiStepContext);
  const [videoValue, setVideoValue] = useState(['']);
  const [gallery, setGallery] = useState([]);
  const handleChangeVideo = (index: number) => (event: ChangeEvent) => {
    setVideoValue(prevState => [
      ...prevState.slice(0, index),
      (event.target as HTMLInputElement).value,
      ...prevState.slice(index + 1, videoValue.length - 1),
    ]);
    step.onChange((event.target as HTMLInputElement).name, [
      ...videoValue.slice(0, index),
      (event.target as HTMLInputElement).value,
      ...videoValue.slice(index + 1, videoValue.length - 1),
    ]);
  };
  const handleChangeImage = (event: ChangeEvent) => {
    const files = (event.target as HTMLInputElement).files;

    const file = (files as FileList)[0];

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.addEventListener('load', e => {
      const data1 = (e.target as FileReader).result;
      setGallery(prevState => [...prevState, data1 as never]);
      step.onChange('gallery', [...gallery, data1 as never]);
    });
  };
  return (
    <div className="mb-434">
      <div className="text-gray9 text-22 font-medium">Please select your photos and videos</div>
      <div className="flex flex-col w-100% flex-wrap mt-20">
        <div className="flex flex-col">
          <div className="text-14 font-medium text-gray9 mb-9">Photos</div>
          <ImageInputFile name="gallery" onChange={handleChangeImage} variant="variant2" />
          <div className="text-14 font-medium text-gray9 mt-20 mb-9">Youtube or Vimeo</div>
          {videoValue.map((video, index) => {
            return (
              <div className="flex items-center h-46 mb-10" key={index}>
                <input
                  type="text"
                  className="h-100% text-gray6 placeholder:text-gray6 text-14 border-1 border-gray4 rounded-4 mr-10 focus:border-gray4 font-normal "
                  name="video"
                  onChange={debounce(handleChangeVideo(index))}
                  style={{ boxShadow: 'none', width: 'clamp(100px, 20vw + 20px, 340px)' }}
                />
                {index == videoValue.length - 1 && (
                  <div
                    className="flex justify-center items-center w-46 h-100% px-15 py-5 border-1 border-gray4 rounded-4 cursor-pointer"
                    onClick={() => setVideoValue(prevState => [...prevState, ''])}
                  >
                    <i className="fal fa-plus text-gray7 text-25"></i>
                  </div>
                )}
                {index != videoValue.length - 1 && (
                  <div
                    className="flex justify-center items-center w-46 h-100% px-15 py-5 border-1 border-gray4 rounded-4 cursor-pointer"
                    onClick={() => setVideoValue(prevState => [...prevState.filter((item, indexValue) => indexValue != index)])}
                  >
                    <i className="fal fa-times text-25 text-gray7"></i>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
