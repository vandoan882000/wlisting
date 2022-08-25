import { CheckBox } from 'components/CheckBox/CheckBox';
import { DropDown } from 'components/DropDown/DropDown';
import { PopUp } from 'components/PopUp/PopUp';
import { Slider } from 'components/Slider/Slider';
import { useState } from 'react';

export const SearchFilter = () => {
  const [radius, setRadius] = useState(0);
  return (
    <div className="container">
      <div className="row">
        <div className="text-28 font-bold text-gray8">Restaurant in West Hollywood</div>
        <div className="col-lg-12 flex items-center">
          <DropDown toggle={<div className="px-10 rounded-20 text-light bg-primary py-5 select-none">Restaurant</div>} title="Restaurant">
            <div className="px-15">
              <div className="text-14 text-gray6 font-normal mb-15">
                <input type="radio" className="mr-5" name="restaurant" /> Hotel
              </div>
              <div className="text-14 text-gray6 font-normal mb-15">
                <input type="radio" className="mr-5" name="restaurant" />
                Restaurant
              </div>
              <div className="text-14 text-gray6 font-normal mb-15">
                <input type="radio" className="mr-5" name="restaurant" />
                Shopping
              </div>
              <div className="text-14 text-gray6 font-normal mb-15">
                <input type="radio" className="mr-5" name="restaurant" />
                Yoga
              </div>
              <div className="text-14 text-gray6 font-normal mb-15">
                <input type="radio" className="mr-5" name="restaurant" />
                Gym
              </div>
              <div className="text-14 text-gray6 font-normal mb-15">
                <input type="radio" className="mr-5" name="restaurant" />
                Tea & Coffee
              </div>
            </div>
          </DropDown>
          <DropDown toggle={<div className="px-10 rounded-20 text-light bg-primary py-5 select-none">Price</div>} title="Price">
            <div className="px-15 pb-20">
              <div className="flex justify-center items-center w-100%">
                <div className="flex justify-center items-center w-25% h-39 rounded-tl-19 rounded-bl-19 border-1 border-gray4 cursor-pointer">$</div>
                <div className="flex justify-center items-center w-25% h-39 border-1 border-primary cursor-pointer text-light bg-primary">$$</div>
                <div className="flex justify-center items-center w-25% h-39 border-1 border-gray4 cursor-pointer">$$$</div>
                <div className="flex justify-center items-center w-25% h-39 rounded-tr-19 rounded-br-19 border-1 border-gray4 cursor-pointer">
                  $$$$
                </div>
              </div>
            </div>
          </DropDown>
          <DropDown toggle={<div className="px-10 rounded-20 text-light bg-primary py-5 select-none">Features</div>} title="Features">
            <div className="px-15 pb-20">
              <div className="flex mb-15">
                <CheckBox onChange={() => {}} borderStyle="box"></CheckBox> <span className="ml-5 font-normal text-14 text-gray6">Open Now</span>
              </div>
              <div className="flex mb-15">
                <CheckBox onChange={() => {}} borderStyle="box"></CheckBox> <span className="ml-5 font-normal text-14 text-gray6">Highest Rated</span>
              </div>
              <div className="flex mb-15">
                <CheckBox onChange={() => {}} borderStyle="box"></CheckBox> <span className="ml-5 font-normal text-14 text-gray6">Most Viewed</span>
              </div>
            </div>
          </DropDown>
          <DropDown toggle={<div className="px-10 rounded-20 text-light bg-primary py-5 select-none">Near me</div>} title="Radius (Km)">
            <div className="flex items-center px-15 pb-20">
              <div className="w-90% pr-15">
                <Slider max={30} min={0} onChange={() => {}} onChanged={value => setRadius(Number(value))} step={1} value={0} />
              </div>
              <input type="number" className="w-60 h-25 !p-1" value={radius} />
            </div>
          </DropDown>
          <PopUp
            onApply={() => {}}
            title="More Filters"
            toggleEl={<div className="px-10 rounded-20 text-light bg-primary py-5 select-none cursor-pointer">More filters</div>}
          >
            <div className="px-15 pb-20">
              <div className="font-medium text-15 text-gray7 mb-12">Other filter</div>
              <div className="flex">
                <div className="mr-125">
                  <div className="flex mb-15">
                    <CheckBox onChange={() => {}} borderStyle="box"></CheckBox> <span className="ml-5 font-normal text-14 text-gray6">Open Now</span>
                  </div>
                  <div className="flex mb-15">
                    <CheckBox onChange={() => {}} borderStyle="box"></CheckBox>{' '}
                    <span className="ml-5 font-normal text-14 text-gray6">Highest Rated</span>
                  </div>
                  <div className="flex mb-15">
                    <CheckBox onChange={() => {}} borderStyle="box"></CheckBox>{' '}
                    <span className="ml-5 font-normal text-14 text-gray6">Most Viewed</span>
                  </div>
                </div>
                <div>
                  <div className="flex mb-15">
                    <CheckBox onChange={() => {}} borderStyle="box"></CheckBox> <span className="ml-5 font-normal text-14 text-gray6">Open Now</span>
                  </div>
                  <div className="flex mb-15">
                    <CheckBox onChange={() => {}} borderStyle="box"></CheckBox>{' '}
                    <span className="ml-5 font-normal text-14 text-gray6">Highest Rated</span>
                  </div>
                  <div className="flex mb-15">
                    <CheckBox onChange={() => {}} borderStyle="box"></CheckBox>{' '}
                    <span className="ml-5 font-normal text-14 text-gray6">Most Viewed</span>
                  </div>
                </div>
              </div>
              <div className="font-medium text-15 text-gray7 mb-12">Other filter</div>
              <div className="flex">
                <div className="mr-125">
                  <div className="flex mb-15">
                    <CheckBox onChange={() => {}} borderStyle="box"></CheckBox> <span className="ml-5 font-normal text-14 text-gray6">Open Now</span>
                  </div>
                  <div className="flex mb-15">
                    <CheckBox onChange={() => {}} borderStyle="box"></CheckBox>{' '}
                    <span className="ml-5 font-normal text-14 text-gray6">Highest Rated</span>
                  </div>
                  <div className="flex mb-15">
                    <CheckBox onChange={() => {}} borderStyle="box"></CheckBox>{' '}
                    <span className="ml-5 font-normal text-14 text-gray6">Most Viewed</span>
                  </div>
                </div>
                <div>
                  <div className="flex mb-15">
                    <CheckBox onChange={() => {}} borderStyle="box"></CheckBox> <span className="ml-5 font-normal text-14 text-gray6">Open Now</span>
                  </div>
                  <div className="flex mb-15">
                    <CheckBox onChange={() => {}} borderStyle="box"></CheckBox>{' '}
                    <span className="ml-5 font-normal text-14 text-gray6">Highest Rated</span>
                  </div>
                  <div className="flex mb-15">
                    <CheckBox onChange={() => {}} borderStyle="box"></CheckBox>{' '}
                    <span className="ml-5 font-normal text-14 text-gray6">Most Viewed</span>
                  </div>
                </div>
              </div>
            </div>
          </PopUp>
        </div>
      </div>
    </div>
  );
};
