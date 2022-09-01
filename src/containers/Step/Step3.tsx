import { SelectAvatar } from 'components/SelectAvatar/SelectAvatar';
import { FC } from 'react';

export const Step3: FC = () => {
  return (
    <div>
      <div className="text-gray8 text-22 font-medium">Information of listing owner</div>
      <div className="flex flex-col w-100% flex-wrap mt-30">
        <div className="text-14 text-gray8 font-medium mb-9">Logo or avatar</div>
        <SelectAvatar />
        <div className="text-14 text-gray8 font-medium mt-20 mb-9">Introduce the listing owner</div>
        <textarea className="border-1 border-gray4 rounded-4 py-15 h-120" name="introduce"></textarea>
        <div className="text-14 text-gray8 font-medium mt-20 mb-9">Phone number</div>
        <input className="text-18 text-gray5 font-medium border-gray4 border-1 rounded-4 py-15" type="tel" name="tel" placeholder="0123456789" />
        <div className="text-14 text-gray8 font-medium mt-20 mb-9">Email</div>
        <input
          className="text-18 text-gray5 font-medium border-gray4 border-1 rounded-4 py-15"
          type="email"
          name="email"
          placeholder="wiloke@email.com"
        />
        <div className="text-14 text-gray8 font-medium mt-20 mb-9">Social</div>
        <select className="w-150 text-18 text-gray5 font-medium border-gray4 border-1 rounded-4 py-15" name="" id=""></select>
      </div>
    </div>
  );
};
