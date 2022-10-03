import { Children, CSSProperties, FC, FormEvent, ReactElement, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePopper } from 'react-popper';

import { PopOverFilterContent } from './PopOverFilterContent';
import { PopOverFilterToggle } from './PopOverFilterToggle';

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
interface PopoverProps {
  title?: string;
  placement?: PopperPlacement;
  hasValue: boolean;
  style?: CSSProperties;
  onSubmit?: (event?: FormEvent) => void;
  onClear?: () => void;
}
export const PopOverFilter: FC<PopoverProps> & {
  Toggle: typeof PopOverFilterToggle;
  Content: typeof PopOverFilterContent;
} = ({ children, title, hasValue, placement = 'bottom-start', style = {}, onSubmit = () => {}, onClear = () => {} }) => {
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
        className={`relative px-10 py-5 min-w-99 text-14 font-medium text-center select-none ${
          visible ? 'text-primary  border-primary' : 'text-gray7 border-gray4'
        } ${hasValue ? 'bg-primary !text-light' : 'bg-light'} w-fit mr-20 my-10 border-1 rounded-20 cursor-pointer`}
      >
        {Children.map(children, child => {
          if ((child as ReactElement).type == PopOverFilter.Toggle) {
            return child;
          }
        })}
      </div>
      {visible &&
        createPortal(
          <div ref={setPopperElement} className="pointer-events-auto" style={{ ...styles.popper, zIndex }} {...attributes.popper}>
            <div className={`rounded-10 border-gray3 border-1 min-w-280`} style={style}>
              {!!title && <div className="p-15">{title}</div>}
              <form onSubmit={handleSubmit}>
                {Children.map(children, child => {
                  if ((child as ReactElement).type == PopOverFilter.Content) {
                    return child;
                  }
                })}
                <div className="p-15 flex justify-between items-center border-t-gray3 border-t-1">
                  <div className="text-14 font-medium text-gray5 cursor-pointer select-none" onClick={onClear}>
                    Clear
                  </div>
                  <button type="submit" className="py-7 px-12 rounded-4 bg-primary text-14 font-medium cursor-pointer text-light select-none">
                    Apply
                  </button>
                </div>
              </form>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
};

PopOverFilter.Toggle = PopOverFilterToggle;
PopOverFilter.Content = PopOverFilterContent;
