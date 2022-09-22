import { CheckBox } from 'components/CheckBox/CheckBox';
import { Number } from 'components/Number/Number';
import { Popover } from 'components/Popover/Popover';
import { PopUp } from 'components/PopUp/PopUp';
import { Slider } from 'components/Slider/Slider';
import { categories_data } from 'data/categories_data';
import { listings_data } from 'data/listings_data';
import { FC, useState } from 'react';

interface SearchFilterProps {
  categoryId: number | undefined;
  location: string;
  onClick: () => void;
  showMap: boolean;
}

export const SearchFilter: FC<SearchFilterProps> = ({ onClick, showMap, categoryId, location }) => {
  const feature_data = ['Open Now', 'Highest Rated', 'Most Viewed'];
  const price_data = ['$', '$$', '$$$', '$$$$'];
  const categoryList = !!categoryId ? categories_data.filter(cate => cate.categoryId === categoryId) : categories_data;
  const lstListing = !!categoryId
    ? listings_data.filter(
        listing =>
          (listing.listingCategoryId == categoryId || categoryId == undefined) &&
          (listing.listingLocations[0].longName
            .toLowerCase()
            .trim()
            .includes(location.toLowerCase().trim()) ||
            location == 'all'),
      )
    : listings_data.filter(
        listing =>
          listing.listingLocations[0].longName
            .toLowerCase()
            .trim()
            .includes(location.toLowerCase().trim()) || location == 'all',
      );
  const [radius, setRadius] = useState(0);
  const [category, setCategory] = useState(!!categoryId ? categoryList[0].categoryName : 'All');
  const [price, setPrice] = useState(-1);
  const [features, setFeatures] = useState([]);
  const handleClickClearAll = () => {
    setCategory('');
    setFeatures([]);
    setPrice(-1);
    setRadius(0);
  };
  console.log(`Current Search: Category: ${category}; Price: ${price_data[price]}; Features: ${features}; Near me: ${radius}`);
  return (
    <div className="container">
      <div className="row">
        <div className="flex items-end">
          <div className="text-gray8 text-15 font-normal mr-10">
            {lstListing.length} {category != 'All' ? category : 'Result'}
          </div>
          <div className="text-gray8 text-14 font-medium border-gray4 border-1 rounded-6 px-8 py-2 cursor-pointer" onClick={handleClickClearAll}>
            Clear All
          </div>
        </div>
        <div className="text-28 font-bold text-gray8 capitalize">
          {category} {location != 'all' ? `in ${location}` : `Listing`}
        </div>
        <div className="col-lg-12 flex justify-between items-center m-0 pt-10 pb-10">
          <div className="flex items-center flex-wrap mb-10">
            <Popover
              title="Category"
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
              <Popover.Toggle>
                <div
                  className={`relative flex justify-center items-center px-10 rounded-20  py-5 select-none min-w-99 ${
                    !!category ? 'text-light bg-primary' : ''
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
              </Popover.Toggle>
              <Popover.Content>
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
              </Popover.Content>
            </Popover>
            <div className="w-1 h-26 bg-gray4 mx-20 my-10"></div>
            <Popover
              title="Price"
              onClear={() => setPrice(-1)}
              onSubmit={event => {
                event?.preventDefault();
                const currentTarget = event?.target;
                const inputEls = (currentTarget as HTMLElement).querySelectorAll('input');
                let inputChecked = -1;
                inputEls.forEach((input, index) => (input.checked ? (inputChecked = index) : ''));
                setPrice(() => inputChecked);
              }}
              style={{ background: '#ffffff', marginTop: '11px' }}
            >
              <Popover.Toggle>
                <div className={`relative px-19 rounded-20 py-5 select-none ${price != -1 ? 'text-light bg-primary' : ''}`}>
                  {price != -1 ? `Price: ${price_data[price]}` : 'Price'}
                  {price != -1 && (
                    <div
                      className="absolute w-18 h-18 flex justify-center items-center rounded-1/2 bg-gray8 bottom-100% left-100%"
                      onClick={() => setPrice(-1)}
                    >
                      <i className="far fa-times text-light text-12"></i>
                    </div>
                  )}
                </div>
              </Popover.Toggle>
              <Popover.Content>
                <div className="px-15 pb-20">
                  <div className="flex justify-center items-center w-100% border-1 border-gray4 rounded-19 overflow-hidden">
                    {price_data.map((item, index) => {
                      return (
                        <label key={index} className="flex justify-center items-center w-25% h-39" onClick={() => setPrice(index)}>
                          <input type="radio" name="price-select" checked={index == price} className="price-select-search hidden" />
                          <div
                            className={`flex justify-center items-center w-100% h-100% border-r-1 border-r-gray4 cursor-pointer ${
                              index == price_data.length - 1 ? 'border-none' : ''
                            }`}
                          >
                            {item}
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </Popover.Content>
            </Popover>
            <Popover
              title="Features"
              style={{ background: '#ffffff', marginTop: '11px' }}
              onSubmit={event => {
                event?.preventDefault();
                const currentTarget = event?.target;
                const inputEls = (currentTarget as HTMLElement).querySelectorAll('input');
                let inputChecked = [] as string[];
                inputEls.forEach(input => (input.checked ? (inputChecked = [...inputChecked, input.name]) : ''));
                setFeatures(inputChecked as never[]);
              }}
              onClear={() => setFeatures([])}
            >
              <Popover.Toggle>
                <div className={`px-10 rounded-20 py-5 select-none ${features.toString() != [].toString() ? 'text-light bg-primary' : ''}`}>
                  Features
                </div>
              </Popover.Toggle>
              <Popover.Content>
                <div className="px-15 pb-20">
                  {feature_data.map((item, index) => {
                    return (
                      <div key={index} className="flex mb-15">
                        <CheckBox
                          onChange={() => {}}
                          borderStyle="box"
                          checked={features.includes(index.toString() as never)}
                          name={`${index}`}
                        ></CheckBox>
                        <span className="ml-5 font-normal text-14 text-gray6">{item}</span>
                      </div>
                    );
                  })}
                </div>
              </Popover.Content>
            </Popover>
            <Popover title="Radius (Km)" style={{ background: '#ffffff', marginTop: '11px' }} onClear={() => setRadius(0)}>
              <Popover.Toggle>
                <div className={`px-10 rounded-20 py-5 select-none ${!!radius ? 'text-light bg-primary' : ''}`}>Near me</div>
              </Popover.Toggle>
              <Popover.Content>
                <div className="flex items-center px-15 pb-20 ">
                  <div className="w-90% pr-15">
                    <Slider max={30} min={0} onChange={value => setRadius(value)} onChanged={() => {}} step={1} value={radius} />
                  </div>
                  <Number value={radius} handleInCrease={() => setRadius(prev => prev + 1)} handleDecrease={() => setRadius(prev => prev - 1)} />
                </div>
              </Popover.Content>
            </Popover>
            <PopUp onApply={() => {}} title="More Filters">
              <PopUp.Toggle>
                <div className="px-10 rounded-20 text-gray8 border-1 border-gray4 my-10 py-5 select-none cursor-pointer">More filters</div>
              </PopUp.Toggle>
              <PopUp.Content>
                <div className="px-15 pb-20">
                  <div className="font-medium text-15 text-gray7 mb-12">Other filter</div>
                  <div className="flex">
                    <div className="mr-125">
                      <div className="flex mb-15">
                        <CheckBox onChange={() => {}} borderStyle="box"></CheckBox>
                        <span className="ml-5 font-normal text-14 text-gray6">Open Now</span>
                      </div>
                      <div className="flex mb-15">
                        <CheckBox onChange={() => {}} borderStyle="box"></CheckBox>
                        <span className="ml-5 font-normal text-14 text-gray6">Highest Rated</span>
                      </div>
                      <div className="flex mb-15">
                        <CheckBox onChange={() => {}} borderStyle="box"></CheckBox>
                        <span className="ml-5 font-normal text-14 text-gray6">Most Viewed</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex mb-15">
                        <CheckBox onChange={() => {}} borderStyle="box"></CheckBox>
                        <span className="ml-5 font-normal text-14 text-gray6">Open Now</span>
                      </div>
                      <div className="flex mb-15">
                        <CheckBox onChange={() => {}} borderStyle="box"></CheckBox>
                        <span className="ml-5 font-normal text-14 text-gray6">Highest Rated</span>
                      </div>
                      <div className="flex mb-15">
                        <CheckBox onChange={() => {}} borderStyle="box"></CheckBox>
                        <span className="ml-5 font-normal text-14 text-gray6">Most Viewed</span>
                      </div>
                    </div>
                  </div>
                  <div className="font-medium text-15 text-gray7 mb-12">Other filter</div>
                  <div className="flex">
                    <div className="mr-125">
                      <div className="flex mb-15">
                        <CheckBox onChange={() => {}} borderStyle="box"></CheckBox>
                        <span className="ml-5 font-normal text-14 text-gray6">Open Now</span>
                      </div>
                      <div className="flex mb-15">
                        <CheckBox onChange={() => {}} borderStyle="box"></CheckBox>
                        <span className="ml-5 font-normal text-14 text-gray6">Highest Rated</span>
                      </div>
                      <div className="flex mb-15">
                        <CheckBox onChange={() => {}} borderStyle="box"></CheckBox>
                        <span className="ml-5 font-normal text-14 text-gray6">Most Viewed</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex mb-15">
                        <CheckBox onChange={() => {}} borderStyle="box"></CheckBox>
                        <span className="ml-5 font-normal text-14 text-gray6">Open Now</span>
                      </div>
                      <div className="flex mb-15">
                        <CheckBox onChange={() => {}} borderStyle="box"></CheckBox>
                        <span className="ml-5 font-normal text-14 text-gray6">Highest Rated</span>
                      </div>
                      <div className="flex mb-15">
                        <CheckBox onChange={() => {}} borderStyle="box"></CheckBox>
                        <span className="ml-5 font-normal text-14 text-gray6">Most Viewed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </PopUp.Content>
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
