import { FC, useState } from 'react';
import { useSwiper } from 'swiper/react';

export interface SwiperButtonProps {
  iconPrev: React.ReactNode;
  iconNext: React.ReactNode;
}

export const SwiperButton: FC<SwiperButtonProps> = ({ iconPrev, iconNext }) => {
  const swipper = useSwiper();
  const [begin, setBegin] = useState(swipper.isBeginning);
  const [end, setEnd] = useState(swipper.isEnd);

  const handleClickPrev = () => {
    swipper.slidePrev();
    if (swipper.isEnd != end) {
      setEnd(swipper.isEnd);
    }
    if (swipper.isBeginning != begin) {
      setBegin(swipper.isBeginning);
    }
  };
  const handleClickNext = () => {
    swipper.slideNext();
    if (swipper.isEnd != end) {
      setEnd(swipper.isEnd);
    }
    if (swipper.isBeginning != begin) {
      setBegin(swipper.isBeginning);
    }
  };
  return (
    <div className="absolute right-0 top-_9 flex justify-between w-40 z-100">
      <span className={`text-27 text-gray8 cursor-pointer ${begin ? 'text-gray4' : ''}`} onClick={handleClickPrev}>
        {iconPrev}
      </span>
      <span className={`text-27 cursor-pointer ${end ? 'text-gray4' : ''}`} onClick={handleClickNext}>
        {iconNext}
      </span>
    </div>
  );
};
