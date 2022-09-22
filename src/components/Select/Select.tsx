import { CSSProperties, FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePopper } from 'react-popper';

const zIndex = 9999999999;
interface PopoverProps {
  items: string[];
  style?: CSSProperties;
  onChange?: (index?: number) => void;
}
export const Select: FC<PopoverProps> = ({ items, style = {}, onChange = () => {} }) => {
  const [visible, setVisible] = useState(false);
  const [selectValue, setSelectValue] = useState(0);
  const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom',
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
  const handleChange = (index: number) => {
    setSelectValue(index);
    setVisible(visible => !visible);
    onChange(index);
  };

  return (
    <div>
      <div ref={setReferenceElement} onClick={handleClick} className="w-fit cursor-pointer">
        <div
          className="flex justify-between items-center w-100% h-36 outline-none focus:outline-hidden text-14 border-1 border-gray4 pl-15 pr-10 rounded-4 mr-10 mb-10"
          style={style}
        >
          {items[selectValue]}
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
      {visible &&
        createPortal(
          <div ref={setPopperElement} className="pointer-events-auto" style={{ ...styles.popper, zIndex }} {...attributes.popper}>
            <div
              className="w-100% h-fit bdrs:10px border-1 border-gray4 translate-x-_5 my-5 bg-light rounded-4 overflow-hidden"
              style={{ width: style.width, color: style.color }}
            >
              {items.map((item, index) => {
                return (
                  <div
                    className="flex items-center w-100% h-36 hover:text-light hover:bg-primary cursor-pointer px-15 text-14"
                    key={index}
                    onClick={() => {
                      handleChange(index);
                    }}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
};
