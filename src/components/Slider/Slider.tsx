import { FC, useEffect, useState } from 'react';
import { offset } from 'utils/offset';

interface SliderProps {
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (a?: any) => void;
  onChanged: (a?: any) => void;
}

export const Slider: FC<SliderProps> = ({ value, min, max, step, onChange, onChanged }) => {
  const [valueCurrent, setValueCurrent] = useState(value);
  const [value0, setValue0] = useState(value);
  const [isDragging, setIsDragging] = useState(false);
  const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>(null);
  const [referenceThumb, setReferenceThumb] = useState<HTMLDivElement | null>(null);
  const getValueForResult = (value: number) => {
    const elWidth = (referenceElement as HTMLElement).offsetWidth;
    return (((max - min) * value) / elWidth + min).toFixed(1);
  };

  const getValueInRange = (value: number) => {
    return Math.min(Math.max(value, 0), (referenceElement as HTMLElement).offsetWidth);
  };

  const getResult = () => {
    const val0 = getValueForResult(value0);
    return val0;
  };

  const handleDragStart = (event: Event) => {
    if ((referenceElement as HTMLElement)?.contains(event.target as HTMLElement)) {
      setIsDragging(true);
    }
  };

  const handleDragging = (event: MouseEvent | TouchEvent) => {
    const { pageX } = (event as TouchEvent).touches ? (event as TouchEvent).touches[0] : (event as MouseEvent);
    if (isDragging) {
      const value = pageX - offset(referenceElement as HTMLElement).left;
      const valueStep = Math.round(value / step) * step;
      const valueInRange = getValueInRange(valueStep);
      setValue0(valueInRange);
      onChange(getResult());
    }
  };
  const handleDragEnd = () => {
    if (isDragging) {
      onChanged(getResult());
      setValueCurrent(Number(getResult()));
    }
    setIsDragging(false);
  };

  const handleDrag = () => {
    window.addEventListener('mousedown', handleDragStart);
    window.addEventListener('touchstart', handleDragStart);
    window.addEventListener('mousemove', handleDragging);
    window.addEventListener('touchmove', handleDragging);
    window.addEventListener('mouseup', handleDragEnd);
    window.addEventListener('touchend', handleDragEnd);
  };
  const destroy = () => {
    window.removeEventListener('mousedown', handleDragStart);
    window.removeEventListener('touchstart', handleDragStart);
    window.removeEventListener('mousemove', handleDragging);
    window.removeEventListener('touchmove', handleDragging);
    window.removeEventListener('mouseup', handleDragEnd);
    window.removeEventListener('touchend', handleDragEnd);
  };
  const handleResize = () => {
    const currentWidth = (valueCurrent / max) * (referenceElement as HTMLElement).offsetWidth;
    setValue0(currentWidth);
  };
  useEffect(() => {
    handleDrag();
    window.addEventListener('resize', handleResize);
    return () => {
      destroy();
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <div ref={setReferenceElement} className="veda-slider h-4 bg-gray3 relative select-none">
      <div
        className="veda-slider__tracked bg-primary h-4 absolute top-0 z-1 "
        style={{ transform: `translateX(${Math.min(value0, 0)}px)`, width: `${Math.abs(value0)}px` }}
      ></div>
      <div
        ref={setReferenceThumb}
        className="veda-slider__thumb w-19 h-19 rounded-1/2 bg-light border-1 border-gray4 absolute top-50% translate-y-_50% cursor-pointer z-2"
        style={{ left: `-${(referenceThumb as HTMLElement)?.offsetWidth / 2}px`, transform: `translate(${value0}px, -50%)` }}
      ></div>
    </div>
  );
};
