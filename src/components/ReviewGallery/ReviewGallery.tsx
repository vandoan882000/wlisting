import { ViewPhotos } from 'components/ViewPhotos/ViewPhotos';
import { FC, useState } from 'react';

interface ReviewGalleryProps {
  listingId: number;
  listingTitle: string;
  gallery: string[];
}

export const ReviewGallery: FC<ReviewGalleryProps> = ({ gallery, listingId, listingTitle }) => {
  const [visibleModal, setVisibleModal] = useState(false);
  const handleClickViewPhoto = () => {
    setVisibleModal(prev => !prev);
    document.body.classList.add('scroll-hidden');
  };
  return (
    <>
      {!!gallery && (
        <div className="flex w-100% h-370 mt-10 flex-wrap">
          {gallery.length == 1 && (
            <div className="w-100% h-100% pr-5">
              <div className="relative w-100% h-100% bg-cover bg-center cursor-pointer" onClick={handleClickViewPhoto}>
                <img className="absolute top-0 left-0 w-100% h-100% object-cover" src={gallery[0]} alt="" />
              </div>
            </div>
          )}
          {gallery.length == 2 && (
            <>
              <div className="w-50% h-100% pr-5">
                <div className="relative w-100% h-100% bg-cover bg-center cursor-pointer" onClick={handleClickViewPhoto}>
                  <img className="absolute top-0 left-0 w-100% h-100% object-cover" src={gallery[0]} alt="" />
                </div>
              </div>
              <div className="w-50% h-100% pl-5">
                <div className="relative w-100% h-100% bg-cover bg-center cursor-pointer" onClick={handleClickViewPhoto}>
                  <img className="absolute top-0 left-0 w-100% h-100% object-cover" src={gallery[1]} alt="" />
                </div>
              </div>
            </>
          )}
          {gallery.length == 3 && (
            <>
              <div className="w-66.6% h-100% pr-5">
                <div className="relative w-100% h-100% bg-cover bg-center cursor-pointer" onClick={handleClickViewPhoto}>
                  <img className="absolute top-0 left-0 w-100% h-100% object-cover" src={gallery[0]} alt="" />
                </div>
              </div>
              <div className="flex flex-col w-33.3% h-100%">
                <div className="w-100% h-50% pb-5 pl-5">
                  <div className="relative w-100% h-100% bg-cover bg-center cursor-pointer" onClick={handleClickViewPhoto}>
                    <img className="absolute top-0 left-0 w-100% h-100% object-cover" src={gallery[1]} alt="" />
                  </div>
                </div>
                <div className="w-33.3% h-50% pt-5 pl-5">
                  <div className="relative w-100% h-100% bg-cover bg-center cursor-pointer" onClick={handleClickViewPhoto}>
                    <img className="absolute top-0 left-0 w-100% h-100% object-cover" src={gallery[1]} alt="" />
                  </div>
                </div>
              </div>
            </>
          )}
          {gallery.length > 3 && (
            <>
              <div className="w-66.6% h-100% pr-5">
                <div className="relative w-100% h-100% bg-cover bg-center cursor-pointer" onClick={handleClickViewPhoto}>
                  <img className="absolute top-0 left-0 w-100% h-100% object-cover" src={gallery[0]} alt="" />
                </div>
              </div>
              <div className="flex flex-col w-33.3% h-100%">
                <div className="w-100% h-50% pb-5 pl-5">
                  <div className="relative w-100% h-100% bg-cover bg-center cursor-pointer" onClick={handleClickViewPhoto}>
                    <img className="absolute top-0 left-0 w-100% h-100% object-cover" src={gallery[1]} alt="" />
                  </div>
                </div>
                <div className="w-100% h-50% pt-5 pl-5">
                  <div className="relative w-100% h-100% bg-cover bg-center cursor-pointer" onClick={handleClickViewPhoto}>
                    <div className="absolute top-0 left-0 w-100% h-100% z-2 opacity-30 bg-gray7"></div>
                    <div className="absolute top-0 left-0 flex justify-center items-center w-100% h-100% z-3 text-40 font-normal text-light">
                      +{gallery.length - 3}
                    </div>
                    <img className="absolute top-0 left-0 w-100% h-100% object-cover" src={gallery[1]} alt="" />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}
      {visibleModal && <ViewPhotos handleBack={() => setVisibleModal(prev => !prev)} listingId={listingId} title={listingTitle} type="Review" />}
    </>
  );
};
