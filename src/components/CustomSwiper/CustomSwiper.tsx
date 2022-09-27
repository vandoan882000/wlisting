import { FC } from 'react';
import { A11y, Navigation } from 'swiper';
import { Swiper } from 'swiper/react';

import { SwiperButton } from './SwiperButton';

interface CustomSwiperProps {
  title: string;
  spaceBetween?: number;
  slidesPerView?: number;
  breakpoints?: Record<number, any>;
  link: string;
  titleFontWeight?: number;
}
export const CustomSwiper: FC<CustomSwiperProps> & {
  Button: typeof SwiperButton;
} = ({
  title,
  titleFontWeight = 700,
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
  link,
  children,
}) => {
  return (
    <div className="container relative pt-20 mt-25">
      <div className="row">
        <a
          href={link}
          className="text-gray9 text-22 font-bold hover:text-primary mb-_41 !p-0 cursor-pointer z-2 w-fit"
          style={{ fontWeight: titleFontWeight }}
        >
          <span className="mr-10">{title}</span>
          <span>
            <i className="far fa-chevron-right"></i>
          </span>
        </a>
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
