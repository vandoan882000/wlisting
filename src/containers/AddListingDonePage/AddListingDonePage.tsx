import { Divider } from 'components/Divider/Divider';
import { ListingCard } from 'components/ListingCard/ListingCard';
import { Modal } from 'components/Modal/Modal';
import { NavBar } from 'components/NavBar/NavBar';
import { Footer } from 'containers/Footer/Footer';
import { CopyRight } from 'containers/HomePage/CopyRight/CopyRight';
import { listings_data } from 'data/listings_data';
import { useState } from 'react';
import { ListingCardData } from 'types/Listing';

export const AddListingDonePage = () => {
  const listingAdd = JSON.parse(localStorage.getItem('listingAdd') as string);
  const steps = [
    'Please select the template before starting',
    'Please select your category and location',
    'Information of listing owner',
    'Sed ut ratione neque disputatione, quam interrogare.',
    'Add prices to your listing',
    'Please select your amenities',
    'Please select your photos and videos',
    'Add your opening time',
  ];
  const [visibleEdit, setVisibleEdit] = useState(false);
  const getListing = (listingId: number) => {
    return listings_data.find(listing => listing.listingId == listingId);
  };
  const listing = getListing(1) as ListingCardData;
  return (
    <>
      <NavBar />
      <div className="container mb-50">
        <div className="row">
          <div className="col-lg-7 lg:border-r-1 lg:border-r-gray4 pb-7 pr-100">
            <div className="text-30 text-gray9 font-medium">Excellent, congratulations on completing the listing</div>
            <div className="text-20 text-gray9 font-medium mt-25">This is your new listing</div>
            <div className="text-14 text-gray6 font-normal mt-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus porttitor nisl, sit amet finibus libero ultricies tincidunt. Sed
              fringilla, felis id sollicitudin finibus, nisi mauris accumsan orci, eu blandit eros velit quis diam.
            </div>
            <div className="flex items-center mt-15">
              <div
                className="flex justify-center items-center mr-10 px-13 py-5 rounded-4 bg-gray2 cursor-pointer"
                onClick={() => {
                  setVisibleEdit(true);
                  document.body.classList.add('scroll-hidden');
                }}
              >
                <span className="mr-7">
                  <i className="fal fa-edit"></i>
                </span>
                <span className="text-14 text-gray9 font-medium">Edit</span>
              </div>
              <div className="flex justify-center items-center px-13 py-5 rounded-4 bg-primary text-light cursor-pointer">
                <span className="mr-7">
                  <i className="fal fa-eye"></i>
                </span>
                <span className="text-14 text-light font-medium">Preview</span>
              </div>
            </div>
          </div>
          <div className="col-lg-5 lg:pl-100">
            <div className="max-w-240 w-100%">
              <ListingCard variant="variant1">
                <ListingCard.Header variant="variant1" listingRatingScore={10} listingUserId={listing.listingUserId} />
                <ListingCard.Body
                  listingAds={listing.listingAds}
                  listingVerify={listing.listingVerify}
                  listingLocations={listing.listingLocations}
                  listingGallery={[
                    {
                      listingImageId: 1,
                      listingImageName: 'Living Room',
                      listingImageUrl: `${listingAdd.gallery[0]}`,
                    },
                  ]}
                  listingLink={listing.listingLink}
                  listingTitle={listingAdd.title}
                />
                <ListingCard.Footer
                  variant="variant1"
                  isInWishlist={listing.isInWishlist}
                  listingCategoryId={listing.listingCategoryId}
                  listingOpenStatus={listingAdd.open}
                />
              </ListingCard>
            </div>
          </div>
        </div>
      </div>
      <div className="container min-h-381 mb-65">
        <div className="row relative h-100%">
          <div className="w-100% h-100% absolute z-_1 bg-cover bg-center aspect-2.38 inset-0">
            <img className="absolute inset-0 w-100% h-100% object-cover rounded-15" src="/assets/donebanner.png" alt="" />
          </div>
          <div className="col-lg-6 pt-96 pb-94 px-20 sm:pl-59">
            <div className="font-medium text-50 text-gray9" style={{ fontSize: 'clamp(20px, 8vw, 50px)' }}>
              Recommend your listing to everyone
            </div>
            <div className="flex justify-center items-center w-fit py-5 px-18 text-16 bg-tertiary text-light rounded-6 mt-25 cursor-pointer">
              <i className="fal fa-inbox mr-5"></i>
              Play now
            </div>
          </div>
        </div>
      </div>
      <Divider />
      <Footer />
      <Divider />
      <CopyRight />
      <Modal
        onBack={() => {
          setVisibleEdit(visible => !visible);
          document.body.classList.remove('scroll-hidden');
        }}
        title=""
        visible={visibleEdit}
        variant="variant3"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 pt-58">
              <div className="text-gray9 text-28 font-medium">Which step do you want to edit?</div>
              <div>
                {steps.map((step, index) => {
                  return (
                    <a href="/step" key={index} className="group flex items-center py-20 border-b-1 border-b-gray3 cursor-pointer">
                      <div className="flex justify-center items-center w-45 h-45 rounded-1/2 border-gray4 border-1 text-22 text-gray9 font-medium mr-30 group-hover:text-primary group-hover:border-primary">
                        {index + 1}
                      </div>
                      <div className="text-20 font-normal text-gray9 group-hover:text-primary">{step}</div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
