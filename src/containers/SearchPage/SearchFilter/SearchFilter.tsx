import { CheckBox } from 'components/CheckBox/CheckBox';
import { Popover } from 'components/Popover/Popover';
import { PopUp } from 'components/PopUp/PopUp';
import { Slider } from 'components/Slider/Slider';
import { FC, useState } from 'react';

interface SearchFilterProps {
  onClick: () => void;
  showMap: boolean;
}

export const SearchFilter: FC<SearchFilterProps> = ({ onClick, showMap }) => {
  const [radius, setRadius] = useState(0);
  const [category, setCategory] = useState('Restaurant');
  const [price, setPrice] = useState('');
  return (
    <div className="container">
      <div className="row">
        <div className="flex items-end">
          <div className="text-gray8 text-15 font-normal mr-10">120 Restaurant</div>
          <div className="text-gray8 text-14 font-medium border-gray4 border-1 rounded-6 px-8 py-5 cursor-pointer">Clear All</div>
        </div>
        <div className="text-28 font-bold text-gray8">Restaurant in West Hollywood</div>
        <div className="col-lg-12 flex justify-between items-center pb-30">
          <div className="flex items-center">
            <Popover
              toggle={
                <div
                  className={`relative flex justify-center items-center px-10 rounded-20  py-5 select-none mr-20 min-w-99 ${
                    !!category ? 'text-light bg-primary' : 'text-primary border-1 border-primary bg-light'
                  }`}
                >
                  {!!category ? category : 'Categories'}
                  {!!category && (
                    <div
                      className="absolute w-18 h-18 flex justify-center items-center rounded-1/2 bg-gray8 bottom-100% left-100%"
                      onClick={() => setCategory('')}
                    >
                      <i className="far fa-times text-light text-12"></i>
                    </div>
                  )}
                </div>
              }
              title="Restaurant"
              style={{ background: '#ffffff', marginTop: '11px' }}
              onSubmit={event => {
                event?.preventDefault();
                const currentTarget = event?.target;
                const inputEls = (currentTarget as HTMLElement).querySelectorAll('input');
                let inputChecked = '';
                inputEls.forEach(input => (input.checked ? (inputChecked = input.value) : ''));
                setCategory(() => inputChecked);
              }}
              onClear={() => setCategory('')}
            >
              <div className="px-15">
                <div className="text-14 text-gray6 font-normal mb-15">
                  <input type="radio" className="mr-5" name="category" value="Hotel" /> Hotel
                </div>
                <div className="text-14 text-gray6 font-normal mb-15">
                  <input type="radio" className="mr-5" name="category" value="Restaurant" />
                  Restaurant
                </div>
                <div className="text-14 text-gray6 font-normal mb-15">
                  <input type="radio" className="mr-5" name="category" value="Shopping" />
                  Shopping
                </div>
                <div className="text-14 text-gray6 font-normal mb-15">
                  <input type="radio" className="mr-5" name="category" value="Yoga" />
                  Yoga
                </div>
                <div className="text-14 text-gray6 font-normal mb-15">
                  <input type="radio" className="mr-5" name="category" value="Gym" />
                  Gym
                </div>
                <div className="text-14 text-gray6 font-normal mb-15">
                  <input type="radio" className="mr-5" name="category" value="Tea & Coffee" />
                  Tea & Coffee
                </div>
              </div>
            </Popover>
            <div className="w-1 h-100% bg-gray4 ml-20 mr-20"></div>
            <Popover
              toggle={
                <div
                  className={`relative px-19 rounded-20 py-5 select-none mr-20 ${
                    !!price ? 'text-light bg-primary' : 'text-primary border-1 border-primary bg-light'
                  }`}
                >
                  {!!price ? `Price: ${price}` : 'Price'}
                  {!!price && (
                    <div
                      className="absolute w-18 h-18 flex justify-center items-center rounded-1/2 bg-gray8 bottom-100% left-100%"
                      onClick={() => setPrice('')}
                    >
                      <i className="far fa-times text-light text-12"></i>
                    </div>
                  )}
                </div>
              }
              title="Price"
              onClear={() => setPrice('')}
              onSubmit={event => {
                event?.preventDefault();
                const currentTarget = event?.target;
                const inputEls = (currentTarget as HTMLElement).querySelectorAll('input');
                let inputChecked = '';
                inputEls.forEach(input => (input.checked ? (inputChecked = input.value) : ''));
                setPrice(() => inputChecked);
              }}
              style={{ background: '#ffffff', marginTop: '11px' }}
            >
              <div className="px-15 pb-20">
                <div className="flex justify-center items-center w-100%">
                  <label className="flex justify-center items-center w-25% h-39 ">
                    <input type="radio" name="price-select" value="$" className="price-select-search hidden" />
                    <div className="flex justify-center items-center w-100% h-100% rounded-tl-19 rounded-bl-19 border-1 border-gray4 cursor-pointer">
                      $
                    </div>
                  </label>
                  <label className="flex justify-center items-center w-25% h-39 ">
                    <input type="radio" name="price-select" value="$$" className="price-select-search hidden" />
                    <div className="flex justify-center items-center w-100% h-100% border-1 border-gray4 cursor-pointer">$$</div>
                  </label>
                  <label className="flex justify-center items-center w-25% h-39 ">
                    <input type="radio" name="price-select" value="$$$" className="price-select-search hidden" />
                    <div className="flex justify-center items-center w-100% h-100% border-1 border-gray4 cursor-pointer">$$$</div>
                  </label>
                  <label className="flex justify-center items-center w-25% h-39 ">
                    <input type="radio" name="price-select" value="$$$$" className="price-select-search hidden" />
                    <div className="flex justify-center items-center w-100% h-100% rounded-tr-19 rounded-br-19 border-1 border-gray4 cursor-pointer">
                      $$$$
                    </div>
                  </label>
                </div>
              </div>
            </Popover>
            <Popover
              toggle={<div className="px-10 rounded-20 text-light bg-primary py-5 select-none mr-20">Features</div>}
              title="Features"
              style={{ background: '#ffffff', marginTop: '11px' }}
            >
              <div className="px-15 pb-20">
                <div className="flex mb-15">
                  <CheckBox onChange={() => {}} borderStyle="box"></CheckBox> <span className="ml-5 font-normal text-14 text-gray6">Open Now</span>
                </div>
                <div className="flex mb-15">
                  <CheckBox onChange={() => {}} borderStyle="box"></CheckBox>{' '}
                  <span className="ml-5 font-normal text-14 text-gray6">Highest Rated</span>
                </div>
                <div className="flex mb-15">
                  <CheckBox onChange={() => {}} borderStyle="box"></CheckBox> <span className="ml-5 font-normal text-14 text-gray6">Most Viewed</span>
                </div>
              </div>
            </Popover>
            <Popover
              toggle={<div className="px-10 rounded-20 text-light bg-primary py-5 select-none mr-20">Near me</div>}
              title="Radius (Km)"
              style={{ background: '#ffffff', marginTop: '11px' }}
            >
              <div className="flex items-center px-15 pb-20">
                <div className="w-90% pr-15">
                  <Slider max={30} min={0} onChange={() => {}} onChanged={value => setRadius(Number(value))} step={1} value={0} />
                </div>
                <input type="number" className="w-60 h-25 !p-1" value={radius} />
              </div>
            </Popover>
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
                      <CheckBox onChange={() => {}} borderStyle="box"></CheckBox>{' '}
                      <span className="ml-5 font-normal text-14 text-gray6">Open Now</span>
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
                      <CheckBox onChange={() => {}} borderStyle="box"></CheckBox>{' '}
                      <span className="ml-5 font-normal text-14 text-gray6">Open Now</span>
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
                      <CheckBox onChange={() => {}} borderStyle="box"></CheckBox>{' '}
                      <span className="ml-5 font-normal text-14 text-gray6">Open Now</span>
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
                      <CheckBox onChange={() => {}} borderStyle="box"></CheckBox>{' '}
                      <span className="ml-5 font-normal text-14 text-gray6">Open Now</span>
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
          {!showMap && (
            <div
              className="flex items-center py-8 px-15 text-14 font-medium text-gray8 border-1 border-gray4 rounded-18 cursor-pointer"
              onClick={onClick}
            >
              <span className="mr-8">
                <i className="far fa-map"></i>
              </span>
              <span>Show map</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
