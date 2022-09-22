import { Children, CSSProperties, FC, FormEvent, ReactElement, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePopper } from 'react-popper';

import { PopoverContent } from './PopoverContent';
import { PopoverToggle } from './PopoverToggle';

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
  title?: string;
  variant?: PopoverVariant;
  placement?: PopperPlacement;
  style?: CSSProperties;
  onSubmit?: (event?: FormEvent) => void;
  onClear?: () => void;
}
export const Popover: FC<PopoverProps> & {
  Toggle: typeof PopoverToggle;
  Content: typeof PopoverContent;
} = ({ children, title, variant = 'variant1', placement = 'bottom-start', style = {}, onSubmit = () => {}, onClear = () => {} }) => {
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
  const handleSubmit = (event: FormEvent) => {
    onSubmit(event);
    setVisible(!visible);
  };
  return (
    <div>
      <div
        ref={setReferenceElement}
        onClick={handleClick}
        className={`text-gray5 ${
          variant == 'variant1'
            ? visible
              ? 'mr-20 my-10 rounded-20 !text-primary border-1 border-primary bg-light'
              : 'mr-20 my-10 rounded-20 !text-gray8 border-1 border-gray4'
            : ''
        }  w-fit cursor-pointer`}
      >
        {Children.map(children, child => {
          if ((child as ReactElement).type == Popover.Toggle) {
            return child;
          }
        })}
      </div>
      {visible &&
        createPortal(
          <div ref={setPopperElement} className="pointer-events-auto" style={{ ...styles.popper, zIndex }} {...attributes.popper}>
            <div className={`rounded-10 border-gray3 border-1 ${variant == 'variant1' ? 'min-w-280' : 'my-10'} `} style={style}>
              {!!title && <div className="p-15">{title}</div>}
              <form onSubmit={handleSubmit}>
                {Children.map(children, child => {
                  if ((child as ReactElement).type == Popover.Content) {
                    return child;
                  }
                })}
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

Popover.Toggle = PopoverToggle;
Popover.Content = PopoverContent;
