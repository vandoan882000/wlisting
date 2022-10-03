import { Children, CSSProperties, FC, ReactElement, useState } from 'react';
import { createPortal } from 'react-dom';

import { PopUpFilterContent } from './PopUpFilterContent';
import { PopUpFilterToggle } from './PopUpFilterToggle';

interface PopupProps {
  onApply: () => void;
  onClear?: () => void;
  title: string;
  hasValue: boolean;
  containerStyle?: CSSProperties;
}

export const PopUpFilter: FC<PopupProps> & {
  Toggle: typeof PopUpFilterToggle;
  Content: typeof PopUpFilterContent;
} = ({ children, onApply, title, containerStyle = {}, onClear = () => {}, hasValue }) => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(!visible);
  };
  const handleApply = () => {
    onApply();
    setVisible(!visible);
  };
  return (
    <>
      <div
        className={`relative select-none w-fit h-fit border-1 rounded-20  ${visible ? 'border-primary' : 'border-gray4'} ${
          hasValue ? 'bg-primary text-light' : 'bg-light'
        }`}
        onClick={handleClick}
      >
        {Children.map(children, child => {
          if ((child as ReactElement).type == PopUpFilter.Toggle) {
            return child;
          }
        })}
      </div>
      {visible &&
        createPortal(
          <div className="!w-100% h-100% fixed top-0 left-0 p-20% flex justify-center items-center z-100">
            <div className="absolute top-0 left-0 w-100% h-100% z-_1 bg-dark opacity-20" onClick={handleClick}></div>
            <div className="border-gray3 border-1 w-95% md:w-40% rounded-10 bg-light p-15" style={containerStyle}>
              <div className="flex justify-between mb-12 border-b-1 border-b-gray3">
                <div className="pb-15">{title}</div>
                <div className="h-100% text-gray6 text-26 flex justify-center cursor-pointer" onClick={handleClick}>
                  <i className="fal fa-times"></i>
                </div>
              </div>
              {Children.map(children, child => {
                if ((child as ReactElement).type == PopUpFilter.Content) {
                  return child;
                }
              })}
              <div className="pt-15 flex justify-between items-center border-t-gray3 border-t-1">
                <div className="text-14 font-medium text-gray5 cursor-pointer" onClick={onClear}>
                  Clear
                </div>
                <div className="py-7 px-12 rounded-4 bg-primary text-14 font-medium cursor-pointer text-light" onClick={handleApply}>
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
PopUpFilter.Toggle = PopUpFilterToggle;
PopUpFilter.Content = PopUpFilterContent;
