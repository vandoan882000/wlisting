import React, { CSSProperties, FC, FormEvent, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePopper } from 'react-popper';

type PopperPlacement =
  | 'top-start'
  | 'top'
  | 'top-end'
  | 'right-start'
  | 'right'
  | 'right-end'
  | 'bottom-end'
  | 'bottom'
  | 'bottom-start'
  | 'left-end'
  | 'left'
  | 'left-start';
const zIndex = 9999999999;
type PopoverVariant = 'variant1' | 'variant2';
interface PopoverProps {
  toggle: React.ReactNode;
  title?: string;
  variant?: PopoverVariant;
  placement?: PopperPlacement;
  style?: CSSProperties;
  onSubmit?: (event?: FormEvent) => void;
  onClear?: () => void;
}
export const Popover: FC<PopoverProps> = ({
  children,
  title,
  toggle,
  variant = 'variant1',
  placement = 'bottom-start',
  style = {},
  onSubmit = () => {},
  onClear = () => {},
}) => {
  const [visible, setVisible] = useState(false);
  const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: placement,
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
      <div ref={setReferenceElement} onClick={handleClick} className="text-gray5 w-fit cursor-pointer">
        {toggle}
      </div>
      {visible &&
        createPortal(
          <div ref={setPopperElement} className="pointer-events-auto" style={{ ...styles.popper, zIndex }} {...attributes.popper}>
            <div className={`rounded-10 border-gray3 border-1 ${variant == 'variant1' ? 'min-w-280' : ''} `} style={style}>
              {!!title && <div className="p-15">{title}</div>}
              <form action="" onSubmit={onSubmit}>
                {children}
                {variant == 'variant1' && (
                  <div className="p-15 flex justify-between items-center border-t-gray3 border-t-1">
                    <div className="text-14 font-medium text-gray5 cursor-pointer select-none" onClick={onClear}>
                      Clear
                    </div>
                    <button type="submit" className="py-7 px-12 rounded-4 bg-primary text-14 font-medium cursor-pointer text-light select-none">
                      Apply
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
};
