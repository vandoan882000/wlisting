import { FC } from 'react';
import { A11y, Navigation } from 'swiper';
import { Swiper } from 'swiper/react';

import { SwiperButton } from './SwiperButton';

interface CustomSwiperProps {
  title: string;
  spaceBetween?: number;
  slidesPerView?: number;
  breakpoints?: Record<number, any>;
}
export const CustomSwiper: FC<CustomSwiperProps> & {
  Button: typeof SwiperButton;
} = ({
  title,
  spaceBetween = 50,
  slidesPerView = 3,
  breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    680: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  children,
}) => {
  return (
    <div className="container relative pt-20 mt-15 mb-15">
      <div className="row">
        <div className="text-gray8 text-22 font-bold hover:text-primary mb-_41 !p-0">{title}</div>
        <Swiper
          className="collections-swiper pb-20"
          modules={[Navigation, A11y]}
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          scrollbar={{ draggable: false }}
          breakpoints={{ ...breakpoints }}
        >
          {children}
        </Swiper>
      </div>
    </div>
  );
};
CustomSwiper.Button = SwiperButton;
