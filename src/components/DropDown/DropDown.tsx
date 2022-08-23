import React, { FC, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePopper } from 'react-popper';

const zIndex = 9999999999;

interface DropDownProps {
  title: React.ReactNode;
}
export const DropDown: FC<DropDownProps> = ({ children, title }) => {
  const [visible, setVisible] = useState(false);
  const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom-start',
  });
  const handleClick = () => {
    setVisible(!visible);
  };
  return (
    <div>
      <div ref={setReferenceElement} onClick={handleClick} className="p-7 text-gray5 w-fit cursor-pointer">
        {title}
      </div>
      {visible &&
        createPortal(
          <div ref={setPopperElement} className="ml:20px" style={{ ...styles.popper, zIndex }} {...attributes.popper}>
            {children}
          </div>,
          document.body,
        )}
    </div>
  );
};
