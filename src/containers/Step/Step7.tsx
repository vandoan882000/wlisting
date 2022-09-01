import { ImageInputFile } from 'components/ImageInputFile/ImageInputFile';
import { FC } from 'react';

export const Step7: FC = () => {
  return (
    <div>
      <div className="text-gray8 text-22 font-medium">Please select your photos and videos</div>
      <div className="flex flex-col w-100% flex-wrap mt-30">
        <div className="flex flex-col">
          <div className="text-14 font-medium text-gray8 mt-20 mb-9">Photos</div>
          <ImageInputFile />
          <div className="text-14 font-medium text-gray8 mt-20 mb-9">Youtube or Vimeo</div>
          <div className="flex items-center h-46">
            <input type="text" className="h-100% text-gray5 font-medium text-14 border-1 border-gray4 rounded-4 mr-10" name="video" />
            <div className="flex justify-center items-center h-100% px-15 py-5 border-1 border-gray4 rounded-4 cursor-pointer">
              <i className="far fa-plus text-20 text-gray8"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
