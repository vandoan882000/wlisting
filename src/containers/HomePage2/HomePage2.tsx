import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Category } from 'components/Category/Category';
import { Content1 } from 'components/Content1/Content1';
import { CustomSwiper } from 'components/CustomSwiper/CustomSwiper';
import { DownloadApp } from 'components/DownloadApp/DownloadApp';
import Footer from 'components/Footer/Footer';
import { JoinUs } from 'components/JoinUs/JoinUs';
import { ListingCard } from 'components/ListingCard/ListingCard';
import { ListingCard2 } from 'components/ListingCard2/ListingCard2';
import { LocationCard2 } from 'components/LocationCard2/LocationCard2';
import { NavBar } from 'components/NavBar/NavBar';
import { Search } from 'components/Search/Search';
import { categories_data } from 'data/categories_data';
import { listings_data } from 'data/listings_data';
import { locations_data } from 'data/locations_data';
import { FC } from 'react';
import { A11y, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export const HomePage2: FC = () => {
  return (
    <>
      <NavBar />
      <Search />
      <div className="container mt-5">
        <div className="text-22 font-medium text-gray9 mb-6">Find the Best Businesses in Town</div>
        <div className="row">
          {categories_data.slice(0, 4).map(category => (
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2" key={category.categoryId}>
              <Content1 link={`/search/category=${category.categoryName.toLowerCase().replaceAll('', '')}&location=all`}>
                <Category key={category.categoryId} {...category} />
              </Content1>
            </div>
          ))}
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
            <Content1 link="/search/category=all&location=all">
              <div className="flex justify-center items-center w-100% text-16 font-medium text-primary">
                <span>See all</span>
                <span className="text-16 font-medium text-primary ml-10">
                  <i className="far fa-angle-right"></i>
                </span>
              </div>
            </Content1>
          </div>
        </div>
      </div>
      <div className="container mt-45 mb-20">
        <div className="font-medium text-22 text-gray9 text-left mb-10">Popular Listings In Our Directory</div>
        <div className="row">
          {listings_data.slice(0, 4).map(listing => (
            <div key={listing.listingId} className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <ListingCard variant="variant1">
                <ListingCard.Header variant="variant1" listingRatingScore={listing.listingRatingScore} listingUserId={listing.listingUserId} />
                <ListingCard.Body
                  listingAds={listing.listingAds}
                  listingVerify={listing.listingVerify}
                  listingLocations={listing.listingLocations}
                  listingGallery={listing.listingGallery}
                  listingLink={listing.listingLink}
                  listingTitle={listing.listingTitle}
                />
                <ListingCard.Footer
                  variant="variant1"
                  isInWishlist={listing.isInWishlist}
                  listingCategoryId={listing.listingCategoryId}
                  listingOpenStatus={listing.listingOpenStatus}
                />
              </ListingCard>
            </div>
          ))}
        </div>
      </div>
      <JoinUs />
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
      <CustomSwiper title="Recent Collections" link="#">
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
      <DownloadApp />
      <Footer />
    </>
  );
};
