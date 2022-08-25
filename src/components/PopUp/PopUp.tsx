import { FC, useState } from 'react';
import { createPortal } from 'react-dom';

import { PopUpContent } from './PopUpContent';

interface PopupProps {
  onApply: () => void;
  toggleEl: React.ReactNode;
  title: string;
}

export const PopUp: FC<PopupProps> & {
  Content: typeof PopUpContent;
} = ({ children, onApply, toggleEl, title }) => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(!visible);
  };
  return (
    <>
      <div className="select-none" onClick={handleClick}>
        {toggleEl}
      </div>
      {visible &&
        createPortal(
          <div className="w-100% h-100% fixed top-0 left-0 p-20% flex justify-center items-center z-100">
            <div className="absolute top-0 left-0 w-100% h-100% z-_1 bg-dark opacity-20" onClick={handleClick}></div>
            <div className=" rounded-10 border-gray3 border-1 w-40% bg-light p15">
              <div className="flex justify-between mb-12 border-b-1 border-b-gray3">
                <div className="p-15">{title}</div>
                <div className="text-gray6 flex justify-center items-center pr-20 cursor-pointer" onClick={handleClick}>
                  <i className="fal fa-times"></i>
                </div>
              </div>
              {children}
              <div className=" p-15 flex justify-between items-center border-t-gray3 border-t-1">
                <div className="text-14 font-medium text-gray5 cursor-pointer" onClick={handleClick}>
                  Clear
                </div>
                <div className="py-7 px-12 rounded-4 bg-primary text-14 font-medium cursor-pointer text-light" onClick={onApply}>
                  Apply
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};
PopUp.Content = PopUpContent;
