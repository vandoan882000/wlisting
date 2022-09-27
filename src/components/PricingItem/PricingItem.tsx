import { FC } from 'react';

export type PricingType = 'basic' | 'professional' | 'bussiness';

interface PricingItemProps {
  type: PricingType;
  price: string;
  description: string;
  active: boolean;
  onClick: (type?: PricingType) => void;
}

export const PricingItem: FC<PricingItemProps> = ({ type, price, description, active, onClick }) => {
  return (
    <div
      className={`w-100% max-w-520 rounded-8 ${active ? 'bg-primary' : 'bg-gray1'}  py-15 px-20 mb-10 cursor-pointer`}
      onClick={() => onClick(type)}
    >
      <div className="flex justify-between items-center w-100%">
        <div className={`text-26 font-medium ${active ? 'text-light' : 'text-gray9'}  capitalize`}>{type}</div>
        <div className={`text-26 font-medium ${active ? 'text-light' : 'text-primary'} capitalize`}>{price}</div>
      </div>
      <div className="flex justify-between items-center">
        <div className={`text-13 font-normal ${active ? 'text-light' : 'text-gray6'}`}>{description}</div>
        {type != 'basic' && <div className={`text-13 font-normal ${active ? 'text-light' : 'text-gray6'}`}>/month</div>}
      </div>
    </div>
  );
};
