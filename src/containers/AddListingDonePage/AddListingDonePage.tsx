import { Devider } from 'components/Divider/Devider';
import { ListingCard } from 'components/ListingCard/ListingCard';
import { Modal } from 'components/Modal/Modal';
import { NavBar } from 'components/NavBar/NavBar';
import Footer from 'containers/Footer/Footer';
import { listings_data } from 'data/listings_data';
import { useState } from 'react';
import { ListingCardData } from 'types/Listing';

export const AddListingDonePage = () => {
  const steps = [
    'Please select the template before starting',
    'Please select your category and location',
    'Information of listing owner',
    'Sed ut ratione neque disputatione, quam interrogare.',
    'Add prices to your listing',
    'Please select your amenities',
  ];
  const [visibleEdit, setVisibleEdit] = useState(false);
  const getListing = (listingId: number) => {
    return listings_data.find(listing => listing.listingId == listingId);
  };
  const listing = getListing(1);
  return (
    <>
      <NavBar />
      <div className="container mb-50">
        <div className="row">
          <div className="col-lg-7 border-r-1 border-r-gray4 pb-7 pr-100">
            <div className="text-30 text-gray8 font-medium">Excellent, congratulations on completing the listing</div>
            <div className="text-20 text-gray8 font-medium mt-25">This is your new listing</div>
            <div className="text-14 text-gray6 font-normal mt-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus porttitor nisl, sit amet finibus libero ultricies tincidunt. Sed
              fringilla, felis id sollicitudin finibus, nisi mauris accumsan orci, eu blandit eros velit quis diam.
            </div>
            <div className="flex items-center mt-15">
              <div className="flex justify-center items-center mr-10 px-13 py-5 rounded-4 bg-gray2 cursor-pointer">
                <span className="mr-7">
                  <i className="fal fa-edit"></i>
                </span>
                <span className="text-14 text-gray8 font-medium" onClick={() => setVisibleEdit(visible => !visible)}>
                  Edit
                </span>
              </div>
              <div className="flex justify-center items-center px-13 py-5 rounded-4 bg-primary text-light cursor-pointer">
                <span className="mr-7">
                  <i className="fal fa-eye"></i>
                </span>
                <span className="text-14 text-light font-medium">Preview</span>
              </div>
            </div>
          </div>
          <div className="col-lg-5 pl-100">
            <div className="max-w-240 w-100%">
              <ListingCard {...(listing as ListingCardData)} />
            </div>
          </div>
        </div>
      </div>
      <div className="container min-h-381 h-381 mb-65">
        <div className="row relative h-100%">
          <div className="w-100% h-100% absolute z-_1 bg-cover bg-center aspect-2.38 inset-0">
            <img className="absolute inset-0 w-100% h-100% object-cover rounded-15" src="/assets/donebanner.png" alt="" />
          </div>
          <div className="col-lg-6 pt-96 pl-59">
            <div className="font-medium text-50 text-gray8">Recommend your listing to everyone</div>
            <div className="flex justify-center items-center w-fit py-5 px-18 text-16 bg-tertiary text-light rounded-6 mt-25 cursor-pointer">
              <i className="fal fa-inbox mr-5"></i>
              Play now
            </div>
          </div>
        </div>
      </div>
      <Devider />
      <Footer />
      <Modal onBack={() => setVisibleEdit(visible => !visible)} title="" visible={visibleEdit}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 pt-58">
              <div className="text-gray8 text-28 font-medium">Which step do you want to edit?</div>
              <div>
                {steps.map((step, index) => {
                  return (
                    <a href="#" className="group flex items-center py-20 border-b-1 border-b-gray3 cursor-pointer">
                      <div className="flex justify-center items-center w-45 h-45 rounded-1/2 border-gray4 border-1 text-22 text-gray8 font-medium mr-30 group-hover:text-primary group-hover:border-primary">
                        {index + 1}
                      </div>
                      <div className="text-20 font-normal text-gray8 group-hover:text-primary">{step}</div>
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
