import { CopyRight } from 'components/CopyRight/CopyRight';
import { CustomSwiper } from 'components/CustomSwiper/CustomSwiper';
import { Divider } from 'components/Divider/Divider';
import Footer from 'components/Footer/Footer';
import { ListingCard } from 'components/ListingCard/ListingCard';
import { NavBar } from 'components/NavBar/NavBar';
import { categories_data } from 'data/categories_data';
import { listings_data } from 'data/listings_data';
import { createContext } from 'react';
import { useParams } from 'react-router';
import { SwiperSlide } from 'swiper/react';
import { CategoryData } from 'types/Category';
import { ListingCardData } from 'types/Listing';

import { Gallery } from './Gallery/Gallery';
import { Gallery2 } from './Gallery2/Gallery2';
import { Gallery3 } from './Gallery3/Gallery3';
import { Gallery4 } from './Gallery4/Gallery4';
import { ListingDetailContent } from './ListingDetailContent/ListingDetailContent';
import { ListingDetailContent1 } from './ListingDetailContent1/ListingDetailContent1';
import { ListingDetailHeader } from './ListingDetailHeader/ListingDetailHeader';
import { ListingDetailSideBar } from './ListingDetailSideBar/ListingDetailSideBar';

interface DetailsContextProps {
  listing: ListingCardData;
  category: CategoryData;
}
export const DetailsContext = createContext<DetailsContextProps>({} as DetailsContextProps);
export const ListingDetailPage = () => {
  const { id } = useParams();
  const getListing = (listingId: number) => {
    const listing = listings_data.find((listing: ListingCardData) => listing.listingId === listingId);
    return listing ? listing : listings_data[0];
  };
  const getCategory = (categoryId: number) => {
    const category = categories_data.find((category: CategoryData) => category.categoryId === categoryId);
    return category ? category : categories_data[0];
  };
  const listing = getListing(Number(id));
  const category = getCategory(listing.listingCategoryId);

  return (
    <DetailsContext.Provider value={{ listing: listing, category: category }}>
      <>
        <NavBar />
        {listing.listingTemplate === 1 && <Gallery />}
        {listing.listingTemplate === 2 && <Gallery2 />}
        {listing.listingTemplate === 4 && <Gallery4 />}
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">{listing.listingTemplate === 4 && <ListingDetailHeader />}</div>
          </div>
        </div>
        {listing.listingTemplate !== 4 && (
          <div className="container">
            <div className="row">
              <div className="col-lg-9 md:pr-57">
                {listing.listingTemplate === 3 && <Gallery3 />}
                {(listing.listingTemplate === 1 || listing.listingTemplate === 3) && <ListingDetailHeader />}
                <ListingDetailContent />
              </div>
              <div className="col-lg-3 pb-30 pt-10">
                <ListingDetailSideBar />
              </div>
            </div>
          </div>
        )}
        {listing.listingTemplate === 4 && (
          <div className="container">
            <div className="row">
              <div className="col-lg-12">{listing.listingTemplate === 4 && <ListingDetailContent1 />}</div>
            </div>
          </div>
        )}

        <CustomSwiper
          title="You Might Also Like"
          link="/search/category=all&location=all"
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
        <CustomSwiper
          title="New York City"
          link="/search/category=all&location=all"
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
        <Divider style={{ marginTop: '50px' }} />
        <Footer />
        <Divider />
        <CopyRight />
      </>
    </DetailsContext.Provider>
  );
};
