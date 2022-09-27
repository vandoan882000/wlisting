import { CustomSwiper } from 'components/CustomSwiper/CustomSwiper';
import { Divider } from 'components/Divider/Divider';
import { ListingCard } from 'components/ListingCard/ListingCard';
import { NavBar } from 'components/NavBar/NavBar';
import { Footer } from 'containers/Footer/Footer';
import { listings_data } from 'data/listings_data';
import { useParams } from 'react-router';
import { SwiperSlide } from 'swiper/react';

import { Gallery } from './Gallery/Gallery';
import { ListingDetailContent } from './ListingDetailContent/ListingDetailContent';

export const ListingDetailPage = () => {
  const { id } = useParams();
  return (
    <>
      <NavBar />
      <Gallery listingId={Number(id)} />
      <ListingDetailContent listingId={Number(id)} />
      <CustomSwiper
        title="You Might Also Like"
        link="#"
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
          </SwiperSlide>
        ))}
      </CustomSwiper>
      <CustomSwiper
        title="New York City"
        link="#"
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
          </SwiperSlide>
        ))}
      </CustomSwiper>
      <Divider style={{ marginTop: '50px' }} />
      <Footer />
    </>
  );
};
