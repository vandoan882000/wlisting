import { ChangeEvent, FC, useState } from 'react';

type BorderStyle = 'radius' | 'box' | 'none';
interface CheckBoxProps {
  name?: string;
  size?: number;
  backgroundColor?: string;
  checkColor?: string;
  borderStyle?: BorderStyle;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (event: ChangeEvent) => void;
  label?: string;
}
export const CheckBox: FC<CheckBoxProps> = ({ disabled = false, name, borderStyle, checked, onChange, label }) => {
  const [checkState, setCheckState] = useState(checked);
  return (
    <label
      id=""
      className={`flex w-fit cursor-pointer select-none ${disabled ? 'cursor-pointer' : ''}
      }`}
    >
      <input
        type="checkbox"
        className="hidden"
        disabled={disabled}
        checked={checkState}
        onClick={() => setCheckState(prev => !prev)}
        onChange={onChange}
        name={name ? `${name}` : ''}
      />
      <div
        className={`flex justify-center items-center ${checkState ? 'bg-primary border-1 border-primary' : 'border-1 border-gray4'} ${
          borderStyle == 'radius' ? 'rounded-1/2 w-40 h-40' : borderStyle == 'box' ? 'rounded-4 w-22 h-22' : ''
        }`}
      >
        <span className={`${checkState ? 'visible' : 'invisible'} flex select-none text-17`}>
          <i className="fal fa-check text-light"></i>
        </span>
      </div>
      <span className="ml-5 font-normal text-14 text-gray6">{label}</span>
    </label>
  );
};
