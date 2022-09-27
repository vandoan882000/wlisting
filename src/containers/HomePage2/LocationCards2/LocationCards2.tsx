import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { LocationCard2 } from 'components/LocationCard2/LocationCard2';
import { locations_data } from 'data/locations_data';
import { FC } from 'react';
import { A11y, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export const LocationCards2: FC = () => {
  return (
    <div className="container">
      <div className="text-22 text-gray9 font-medium mb-10">Happening Cities</div>
      <div className="row">
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={30}
          slidesPerView={5}
          navigation
          scrollbar={{ draggable: true }}
          onSwiper={swiper => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            800: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1450: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1600: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
        >
          {locations_data.slice(0, 5).map(location => (
            <SwiperSlide key={location.id}>
              <LocationCard2 {...location} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
