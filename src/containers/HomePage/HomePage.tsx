import { CustomSwiper } from 'components/CustomSwiper/CustomSwiper';
import { Divider } from 'components/Divider/Divider';
import { ListingCard } from 'components/ListingCard/ListingCard';
import { ListingCard2 } from 'components/ListingCard2/ListingCard2';
import { NavBar } from 'components/NavBar/NavBar';
import { Footer } from 'containers/Footer/Footer';
import { LocationCards } from 'containers/HomePage/LocationCards/LocationCards';
import { listings_data } from 'data/listings_data';
import { SwiperSlide } from 'swiper/react';

import { Categories } from './Categories/Categories';
import { CopyRight } from './CopyRight/CopyRight';
import { DownloadApp } from './DownloadApp/DownloadApp';
import { JoinUs } from './JoinUs/JoinUs';
import { ListingCards } from './ListingCards/ListingCards';
import { ListingCards2 } from './ListingCards2/ListingCard2';
import { Search } from './Search/Search';

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <Search />
      <Categories />
      <LocationCards />
      <ListingCards />
      <JoinUs />
      <ListingCards2 />
      <CustomSwiper title="Recent Collections" link="search/category=all&location=all" titleFontWeight={500}>
        <CustomSwiper.Button iconNext={<i className="fal fa-angle-right"></i>} iconPrev={<i className="fal fa-angle-left"></i>} />
        {listings_data.map(listing => (
          <SwiperSlide key={listing.listingId}>
            <ListingCard2>
              <ListingCard2.Header listingRatingScore={listing.listingRatingScore} listingUserId={listing.listingUserId} />
              <ListingCard2.Body
                isInWishlist={listing.isInWishlist}
                listingLocations={listing.listingLocations}
                listingCategoryId={listing.listingCategoryId}
                listingGallery={listing.listingGallery}
                listingLink={listing.listingLink}
                listingTitle={listing.listingTitle}
              />
            </ListingCard2>
          </SwiperSlide>
        ))}
      </CustomSwiper>
      <CustomSwiper
        link={'search/category=all&location=all'}
        title="Top Viewed"
        slidesPerView={5}
        titleFontWeight={500}
        breakpoints={{
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
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1300: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
        <CustomSwiper.Button iconNext={<i className="fal fa-angle-right"></i>} iconPrev={<i className="fal fa-angle-left"></i>} />
        {listings_data.map(listing => (
          <SwiperSlide key={listing.listingId}>
            <ListingCard variant="variant2">
              <ListingCard.Header variant="variant2" listingRatingScore={listing.listingRatingScore} listingUserId={listing.listingUserId} />
              <ListingCard.Body
                listingAds={listing.listingAds}
                listingVerify={listing.listingVerify}
                listingLocations={listing.listingLocations}
                listingGallery={listing.listingGallery}
                listingLink={listing.listingLink}
                listingTitle={listing.listingTitle}
              />
              <ListingCard.Footer
                variant="variant2"
                isInWishlist={listing.isInWishlist}
                listingCategoryId={listing.listingCategoryId}
                listingOpenStatus={listing.listingOpenStatus}
              />
            </ListingCard>
          </SwiperSlide>
        ))}
      </CustomSwiper>
      <div className="container mt-50">
        <div className="row flex justify-center">
          <div className="col-lg-8 relative flex justify-center bg-center bg-cover">
            <img className="object-cover" src="/assets/adsplaceholder.png" alt="" />
          </div>
        </div>
      </div>
      <CustomSwiper
        title="You Might Also Like"
        link="search/category=all&location=all"
        titleFontWeight={500}
        slidesPerView={5}
        breakpoints={{
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
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1300: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
        <CustomSwiper.Button iconNext={<i className="fal fa-angle-right"></i>} iconPrev={<i className="fal fa-angle-left"></i>} />
        {listings_data.map(listing => (
          <SwiperSlide key={listing.listingId}>
            <ListingCard variant="variant2">
              <ListingCard.Header variant="variant2" listingRatingScore={listing.listingRatingScore} listingUserId={listing.listingUserId} />
              <ListingCard.Body
                listingAds={listing.listingAds}
                listingVerify={listing.listingVerify}
                listingLocations={listing.listingLocations}
                listingGallery={listing.listingGallery}
                listingLink={listing.listingLink}
                listingTitle={listing.listingTitle}
              />
              <ListingCard.Footer
                variant="variant2"
                isInWishlist={listing.isInWishlist}
                listingCategoryId={listing.listingCategoryId}
                listingOpenStatus={listing.listingOpenStatus}
              />
            </ListingCard>
          </SwiperSlide>
        ))}
      </CustomSwiper>
      <DownloadApp />
      <Divider />
      <Footer />
      <Divider />
      <CopyRight />
    </>
  );
};
