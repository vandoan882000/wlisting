import React, { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePopper } from 'react-popper';

const zIndex = 9999999999;
type DropDownVariant = 'variant1' | 'variant2';
interface DropDownProps {
  toggle: React.ReactNode;
  title?: string;
  variant?: DropDownVariant;
}
export const DropDown: FC<DropDownProps> = ({ children, title, toggle, variant = 'variant1' }) => {
  const [visible, setVisible] = useState(false);
  const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom-start',
  });

  const handleWindowClick = (event: MouseEvent) => {
    if (!referenceElement?.contains(event.target as Node) && !popperElement?.contains(event.target as Node)) {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleWindowClick);
    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [referenceElement, popperElement]);

  const handleClick = () => {
    setVisible(visible => !visible);
  };

  return (
    <div>
      <div ref={setReferenceElement} onClick={handleClick} className="p-7 text-gray5 w-fit cursor-pointer">
        {toggle}
      </div>
      {visible &&
        createPortal(
          <div ref={setPopperElement} className="ml:20px pointer-events-auto" style={{ ...styles.popper, zIndex }} {...attributes.popper}>
            <div className={`rounded-10 border-gray3 border-1 ${variant == 'variant1' ? 'min-w-280' : ''} bg-light`}>
              {!!title && <div className="p-15">{title}</div>}
              {children}
              {variant == 'variant1' && (
                <div className="p-15 flex justify-between items-center border-t-gray3 border-t-1">
                  <div className="text-14 font-medium text-gray5 cursor-pointer">Clear</div>
                  <div className="py-7 px-12 rounded-4 bg-primary text-14 font-medium cursor-pointer text-light">Apply</div>
                </div>
              )}
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
};
