import { FC } from 'react';

export const Step5: FC = () => {
  return (
    <div>
      <div className="text-gray8 text-22 font-medium">Add prices to your listing</div>
      <div className="flex flex-col w-100% flex-wrap mt-30">
        <div className="flex items-center">
          <div className="mr-20">
            <div className="text-14 font-medium text-gray8 mt-20 mb-9">Min Price</div>
            <input className="w-68 text-14 text-gray6 font-normal border-1 border-gray4" type="number" name="minPrice" placeholder="min" />
          </div>
          <div>
            <div className="text-14 font-medium text-gray8 mt-20 mb-9">Max Price</div>
            <input className="w-68 text-14 text-gray6 font-normal border-1 border-gray4" type="number" name="maxPrice" placeholder="max" />
          </div>
        </div>
        <div className="text-14 font-medium text-gray8 mt-20 mb-9">You do talk about pricing</div>
        <textarea className="text-14 text-gray6 border-1 border-gray4 rounded-4 py-15 h-120" name="aboutPricing"></textarea>
      </div>
    </div>
  );
};
