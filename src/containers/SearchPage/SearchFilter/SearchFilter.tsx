import { CheckBox } from 'components/CheckBox/CheckBox';
import { PopOverFilter } from 'components/PopOverFilter/PopOverFilter';
import { PopUp } from 'components/PopUp/PopUp';
import { Radio } from 'components/Radio/Radio';
import { SliderNumber } from 'components/SliderNumber/SliderNumber';
import { categories_data } from 'data/categories_data';
import { listings_data } from 'data/listings_data';
import { FC, useState } from 'react';

const otherFilter = [
  { value: 'Other Filter 1', name: 'other1' },
  { value: 'Other Filter 2', name: 'other2' },
  { value: 'Other Filter 3', name: 'other3' },
  { value: 'Other Filter 4', name: 'other4' },
  { value: 'Other Filter 5', name: 'other5' },
  { value: 'Other Filter 6', name: 'other6' },
];
const tagFilter = categories_data.map(item => ({ value: item.categoryName, name: item.categoryId }));
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
  const [otherFilters, setOtherFilter] = useState<string[]>([]);
  const [tags, setTags] = useState<number[]>([]);
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
          <div className="text-gray9 text-15 font-normal mr-10">
            {lstListing.length} {category != 'All' ? category : 'Result'}
          </div>
          <div className="text-gray9 text-14 font-medium border-gray4 border-1 rounded-6 px-8 py-2 cursor-pointer" onClick={handleClickClearAll}>
            Clear All
          </div>
        </div>
        <div className="text-28 font-bold text-gray7 capitalize">
          {category} {location != 'all' ? `in ${location}` : `Listing`}
        </div>
        <div className="col-lg-12 flex justify-between items-center m-0 pt-10 pb-10">
          <div className="flex items-center flex-wrap mb-10">
            <PopOverFilter
              title="Category"
              hasValue={!!category}
              style={{ background: '#ffffff', marginTop: '11px' }}
              onSubmit={event => {
                event?.preventDefault();
                const currentTarget = event?.target;
                const inputEls = (currentTarget as HTMLElement).querySelectorAll('input');
                let inputChecked = '';
                inputEls.forEach(input => (input.checked ? (inputChecked = input.name) : ''));
                setCategory(() => inputChecked);
              }}
              onClear={() => setCategory('')}
            >
              <PopOverFilter.Toggle>
                <>
                  {!!category ? category : 'Categories'}
                  {!!category && (
                    <div
                      className="absolute w-18 h-18 flex justify-center items-center rounded-1/2 bg-gray9 top-0 right-0 translate-x-5 translate-y-_10"
                      onClick={() => setCategory('')}
                    >
                      <i className="far fa-times text-light text-12"></i>
                    </div>
                  )}
                </>
              </PopOverFilter.Toggle>
              <PopOverFilter.Content>
                <div className="px-15">
                  {categories_data.map(cate => {
                    return (
                      <Radio
                        key={cate.categoryId}
                        name={cate.categoryName}
                        onChange={() => setCategory(cate.categoryName)}
                        checked={category == cate.categoryName}
                        label={cate.categoryName}
                        style={{ marginBottom: '15px' }}
                      />
                    );
                  })}
                </div>
              </PopOverFilter.Content>
            </PopOverFilter>
            <div className="w-2 h-26 bg-gray4 mx-20 my-10"></div>
            <PopOverFilter
              title="Price"
              hasValue={price != -1}
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
              <PopOverFilter.Toggle>
                <>
                  {price != -1 ? `Price: ${price_data[price]}` : 'Price'}
                  {price != -1 && (
                    <div
                      className="absolute w-18 h-18 flex justify-center items-center rounded-1/2 bg-gray9 top-0 right-0 translate-x-5 translate-y-_10"
                      onClick={() => setPrice(-1)}
                    >
                      <i className="far fa-times text-light text-12"></i>
                    </div>
                  )}
                </>
              </PopOverFilter.Toggle>
              <PopOverFilter.Content>
                <div className="px-15 pb-20">
                  <div className="flex justify-center items-center w-100% border-1 border-gray4 rounded-19 overflow-hidden">
                    {price_data.map((item, index) => {
                      return (
                        <label key={index} className="flex justify-center items-center w-25% h-39" onClick={() => setPrice(index)}>
                          <input
                            type="radio"
                            name="price-select"
                            checked={index == price}
                            onChange={() => {}}
                            className="price-select-search hidden"
                          />
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
              </PopOverFilter.Content>
            </PopOverFilter>
            <PopOverFilter
              title="Features"
              hasValue={features.toString() != [].toString()}
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
              <PopOverFilter.Toggle>
                <>
                  Features
                  {features.toString() != [].toString() && (
                    <div
                      className="absolute w-18 h-18 flex justify-center items-center rounded-1/2 bg-gray9 top-0 right-0 translate-x-5 translate-y-_10"
                      onClick={() => setFeatures([])}
                    >
                      <i className="far fa-times text-light text-12"></i>
                    </div>
                  )}
                </>
              </PopOverFilter.Toggle>
              <PopOverFilter.Content>
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
              </PopOverFilter.Content>
            </PopOverFilter>
            <PopOverFilter
              title="Radius (Km)"
              hasValue={!!radius}
              style={{ background: '#ffffff', marginTop: '11px' }}
              onClear={() => setRadius(0)}
              onSubmit={event => {
                event?.preventDefault();
                console.log(radius);
              }}
            >
              <PopOverFilter.Toggle>
                <>
                  Near me
                  {!!radius ? `: ${radius}km` : ''}
                  {!!radius && (
                    <div
                      className="absolute w-18 h-18 flex justify-center items-center rounded-1/2 bg-gray9 top-0 right-0 translate-x-5 translate-y-_10"
                      onClick={() => setRadius(0)}
                    >
                      <i className="far fa-times text-light text-12"></i>
                    </div>
                  )}
                </>
              </PopOverFilter.Toggle>
              <PopOverFilter.Content>
                <div className="flex items-center px-15 pb-20 ">
                  <SliderNumber max={30} min={0} onChange={value => setRadius(value)} onChanged={value => setRadius(value)} step={1} value={1} />
                </div>
              </PopOverFilter.Content>
            </PopOverFilter>
            <PopUp
              onApply={() => {}}
              onClear={() => {
                setOtherFilter([]);
                setTags([]);
              }}
              title="More Filters"
              containerStyle={{ maxWidth: '547px' }}
            >
              <PopUp.Toggle>
                <div
                  className={`relative px-10 rounded-20 border-1 border-gray4 my-10 py-5 text-14 font-medium select-none cursor-pointer ${
                    otherFilters.toString() != [].toString() || tags.toString() != [].toString() ? 'text-light bg-primary' : 'text-gray9 '
                  }`}
                >
                  More filters
                  {(otherFilters.toString() != [].toString() || tags.toString() != [].toString()) && (
                    <div
                      className="absolute w-18 h-18 flex justify-center items-center rounded-1/2 bg-gray9 top-0 right-0 translate-x-5 translate-y-_10"
                      onClick={() => {
                        setOtherFilter([]);
                        setTags([]);
                      }}
                    >
                      <i className="far fa-times text-light text-12"></i>
                    </div>
                  )}
                </div>
              </PopUp.Toggle>
              <PopUp.Content>
                <div className="px-15 pb-20">
                  <div className="font-medium text-15 text-gray8 mb-12">Other filter</div>
                  <div className="flex flex-wrap">
                    <div className="w-250">
                      {otherFilter.map((item, index) => {
                        return (
                          otherFilter.length / 2 >= index + 1 && (
                            <div className="flex mb-15" key={index}>
                              <CheckBox
                                borderStyle="box"
                                label={item.value}
                                checked={otherFilters.includes(item.name)}
                                onChange={() => {
                                  otherFilters.includes(item.name)
                                    ? setOtherFilter(prev => prev.filter(pre => pre != item.name))
                                    : setOtherFilter(prev => [...prev, item.name]);
                                }}
                              ></CheckBox>
                            </div>
                          )
                        );
                      })}
                    </div>
                    <div>
                      {otherFilter.map((item, index) => {
                        return (
                          otherFilter.length / 2 < index + 1 && (
                            <div className="flex mb-15" key={index}>
                              <CheckBox
                                borderStyle="box"
                                label={item.value}
                                checked={otherFilters.includes(item.name)}
                                onChange={() => {
                                  otherFilters.includes(item.name)
                                    ? setOtherFilter(prev => prev.filter(pre => pre != item.name))
                                    : setOtherFilter(prev => [...prev, item.name]);
                                }}
                              ></CheckBox>
                            </div>
                          )
                        );
                      })}
                    </div>
                  </div>
                  <div className="font-medium text-15 text-gray8 mb-12">Tags</div>
                  <div className="flex flex-wrap">
                    <div className="w-250">
                      {tagFilter.map((item, index) => {
                        return (
                          tagFilter.length / 2 >= index + 1 && (
                            <div className="flex mb-15" key={index}>
                              <CheckBox
                                borderStyle="box"
                                label={item.value}
                                checked={tags.includes(item.name)}
                                onChange={() => {
                                  tags.includes(item.name)
                                    ? setTags(prev => prev.filter(pre => pre != item.name))
                                    : setTags(prev => [...prev, item.name]);
                                }}
                              ></CheckBox>
                            </div>
                          )
                        );
                      })}
                    </div>
                    <div>
                      {tagFilter.map((item, index) => {
                        return (
                          tagFilter.length / 2 < index + 1 && (
                            <div className="flex mb-15" key={index}>
                              <CheckBox
                                borderStyle="box"
                                label={item.value}
                                checked={tags.includes(item.name)}
                                onChange={() => {
                                  tags.includes(item.name)
                                    ? setTags(prev => prev.filter(pre => pre != item.name))
                                    : setTags(prev => [...prev, item.name]);
                                }}
                              ></CheckBox>
                            </div>
                          )
                        );
                      })}
                    </div>
                  </div>
                </div>
              </PopUp.Content>
            </PopUp>
          </div>
          {!showMap && (
            <div
              className="flex items-center py-8 px-15 text-14 font-medium text-gray9 border-1 border-gray4 rounded-18 cursor-pointer"
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
