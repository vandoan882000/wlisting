import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { CollectionCard } from 'components/CollecitonCard/CollectionCard';
import { listings_data } from 'data/listings_data';
import { A11y, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export function CollectionCards() {
  return (
    <div className="container mt-15 mb-15">
      <div className="text-gray8 text-22 font-bold hover:text-primary">Recent Collections</div>
      <div className="row relative">
        <Swiper
          className="collections-swiper relative"
          modules={[Navigation, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          scrollbar={{ draggable: false }}
          onSwiper={swiper => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            680: {
              slidesPerView: 1,
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
          }}
        >
          {listings_data.map(listing => (
            <SwiperSlide key={listing.listing_id}>
              <CollectionCard data={listing} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
