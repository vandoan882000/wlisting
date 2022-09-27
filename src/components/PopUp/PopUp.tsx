import { Children, FC, ReactElement, useState } from 'react';
import { createPortal } from 'react-dom';

import { PopUpContent } from './PopUpContent';
import { PopUpToggle } from './PopUpToggle';

type PopupVariant = 'full' | 'box';

interface PopupProps {
  onApply: () => void;
  title: string;
  variant?: PopupVariant;
}

export const PopUp: FC<PopupProps> & {
  Toggle: typeof PopUpToggle;
  Content: typeof PopUpContent;
} = ({ children, onApply, title, variant = 'box' }) => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    if (!!visible) {
      document.body.classList.remove('scroll-hidden');
      setVisible(!visible);
    } else {
      document.body.classList.add('scroll-hidden');
      setVisible(!visible);
    }
  };
  return (
    <>
      <div className={`${variant == 'full' ? 'm-0' : ''} select-none h-fit`} onClick={handleClick}>
        {Children.map(children, child => {
          if ((child as ReactElement).type == PopUp.Toggle) {
            return child;
          }
        })}
      </div>
      {visible &&
        createPortal(
          <div className="!w-100% h-100% fixed top-0 left-0 p-20% flex justify-center items-center z-100">
            <div className="absolute top-0 left-0 w-100% h-100% z-_1 bg-dark opacity-20" onClick={handleClick}></div>
            <div className={` border-gray3 border-1 ${variant == 'box' ? 'w-95% md:w-40% rounded-10' : 'w-100% h-100%'} bg-light p-15`}>
              <div className="flex justify-between mb-12 border-b-1 border-b-gray3">
                <div className="pb-15">{title}</div>
                <div className="h-100% text-gray6 text-26 flex justify-center cursor-pointer" onClick={handleClick}>
                  <i className="fal fa-times"></i>
                </div>
              </div>
              {Children.map(children, child => {
                if ((child as ReactElement).type == PopUp.Content) {
                  return child;
                }
              })}
              {variant == 'box' && (
                <div className="pt-15 flex justify-between items-center border-t-gray3 border-t-1">
                  <div className="text-14 font-medium text-gray5 cursor-pointer" onClick={handleClick}>
                    Clear
                  </div>
                  <div className="py-7 px-12 rounded-4 bg-primary text-14 font-medium cursor-pointer text-light" onClick={onApply}>
                    Apply
                  </div>
                </div>
              )}
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};
PopUp.Toggle = PopUpToggle;
PopUp.Content = PopUpContent;
