import { CustomSwiper } from 'components/CustomSwiper/CustomSwiper';
import { ListingCard2 } from 'components/ListingCard2/ListingCard2';
import { NavBar } from 'components/NavBar/NavBar';
import Footer from 'containers/Footer/Footer';
import { Categories } from 'containers/HomePage/Categories/Categories';
import { DownloadApp } from 'containers/HomePage/DownloadApp/DownloadApp';
import { JoinUs } from 'containers/HomePage/JoinUs/JoinUs';
import { ListingCards } from 'containers/HomePage/ListingCards/ListingCards';
import { ListingCards2 } from 'containers/HomePage/ListingCards2/ListingCard2';
import { Search } from 'containers/HomePage/Search/Search';
import { listings_data } from 'data/listings_data';
import { FC } from 'react';
import { SwiperSlide } from 'swiper/react';

import { LocationCards2 } from './LocationCards2/LocationCards2';

export const HomePage2: FC = () => {
  return (
    <>
      <NavBar />
      <Search />
      <Categories />
      <LocationCards2 />
      <ListingCards />
      <JoinUs />
      <ListingCards2 />
      <CustomSwiper title="Recent Collections">
        <CustomSwiper.Button iconNext={<i className="fal fa-angle-right"></i>} iconPrev={<i className="fal fa-angle-left"></i>} />
        {listings_data.map(listing => (
          <SwiperSlide key={listing.listingId}>
            <ListingCard2 {...listing} />
          </SwiperSlide>
        ))}
      </CustomSwiper>
      <DownloadApp />
      <Footer />
    </>
  );
};
