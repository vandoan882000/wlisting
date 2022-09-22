import { listings_data } from 'data/listings_data';
import { locations_data } from 'data/locations_data';
import { users_data } from 'data/users_data';
import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <div className="container">
      <div className="row pb-60 pt-52">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
          <div className="border-1 bg-light border-gray3 rounded-34 p-26 w-100% max-w-263 relative after:content-[''] after:w-100% after:h-253 after:border-1 after:border-gray3 after:rounded-34 after:absolute after:bottom-0 after:left-0 after:translate-x-_5 after:translate-y-5 after:z-_1">
            <div className="text-12 font-bold text-gray8 uppercase">Statistic</div>
            <div className="flex mb-12 mt-10">
              <span className="flex justify-center items-center relative w-50 h-50 rounded-25 mr-9 text-light after:w-50 after:h-50 after:rounded-25 after:bg-primary after:absolute after:top-0 after:left-0 after:opacity-50 z-1">
                <i className="far fa-map-marker-alt z-2"></i>
              </span>
              <div className="flex flex-col">
                <div className="text-16 font-medium text-gray7">{locations_data.length} places</div>
                <div className="text-12 font-medium text-gray5 uppercase">New York</div>
              </div>
            </div>
            <div className="flex mb-12">
              <span className="flex justify-center items-center w-50 h-50 rounded-25 relative text-light mr-9 after:w-50 after:h-50 after:rounded-25 after:bg-tertiary after:absolute after:top-0 after:left-0 after:opacity-50 z-1">
                <i className="far fa-user z-2"></i>
              </span>
              <div className="flex flex-col">
                <div className="text-16 font-medium text-gray7">{users_data.length} people</div>
                <div className="text-12 font-medium text-gray5 uppercase">Subscribe</div>
              </div>
            </div>
            <div className="flex">
              <span className="flex justify-center items-center relative w-50 h-50 rounded-25 text-light mr-9 after:w-50 after:h-50 after:rounded-25 after:bg-quaternary after:absolute after:top-0 after:left-0 after:opacity-50 z-1">
                <i className="far fa-star z-2"></i>
              </span>
              <div className="flex flex-col">
                <div className="text-16 font-medium text-gray7">{listings_data.length} reviews</div>
                <div className="text-12 font-medium text-gray5 uppercase">Shared</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 pt-20 sm:pl-50">
          <h3 className="text-13 font-bold uppercase text-gray8">About</h3>
          <ul className="list-none p-0 m-0 mt-21">
            <li className="text-14 font-normal text-gray6 mb-18 hover:text-primary">
              <a href="#">Diversity & Belonging</a>
            </li>
            <li className="text-14 font-normal text-gray6 mb-18 hover:text-primary">
              <a href="#">Accessibility</a>
            </li>
            <li className="text-14 font-normal text-gray6 mb-18 hover:text-primary">
              <a href="#">Trust & Safety</a>
            </li>
            <li className="text-14 font-normal text-gray6 hover:text-primary">
              <a href="#">Newsroom</a>
            </li>
          </ul>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 pt-20 sm:pl-50">
          <h3 className="text-13 font-bold uppercase text-gray8">Discover</h3>
          <ul className="list-none p-0 m-0 mt-21">
            <li className="text-14 font-normal text-gray6 mb-18 hover:text-primary">
              <a href="#">Term of use</a>
            </li>
            <li className="text-14 font-normal text-gray6 mb-18 hover:text-primary">
              <a href="#">Privacy</a>
            </li>
            <li className="text-14 font-normal text-gray6 mb-18 hover:text-primary">
              <a href="#">Rewards</a>
            </li>
            <li className="text-14 font-normal text-gray6 mb-18 hover:text-primary">
              <a href="#">Create collections</a>
            </li>
            <li className="text-14 font-normal text-gray6 hover:text-primary">
              <a href="#">Write a review</a>
            </li>
          </ul>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 pt-20 sm:pl-50">
          <h3 className="text-13 font-bold uppercase text-gray8">Company</h3>
          <ul className="list-none p-0 m-0 mt-21">
            <li className="text-14 font-normal text-gray6 mb-18 hover:text-primary">
              <a href="#">Support</a>
            </li>
            <li className="text-14 font-normal text-gray6 mb-18 hover:text-primary">
              <a href="#">Jobs</a>
            </li>
            <li className="text-14 font-normal text-gray6 mb-18 hover:text-primary">
              <a href="#">Investors</a>
            </li>
            <li className="text-14 font-normal text-gray6 hover:text-primary">
              <a href="#">Give Us Feedbacks</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
