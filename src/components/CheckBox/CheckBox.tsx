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
}
export const CheckBox: FC<CheckBoxProps> = ({ disabled = false, name, borderStyle, checked, onChange }) => {
  const [checkState, setCheckState] = useState(checked);
  return (
    <label
      id=""
      className={`flex w-fit cursor-pointer select-none ${disabled ? 'cursor-pointer' : ''}
      }`}
    >
      <input
        type="checkbox"
        id="checklisting"
        className="hidden"
        disabled={disabled}
        checked={checkState}
        onClick={() => setCheckState(prev => !prev)}
        onChange={onChange}
        name={name ? `${name}` : ''}
      />
      <div
        className={`flex justify-center items-center ${
          borderStyle == 'radius' ? 'rounded-1/2 w-40 h-40' : borderStyle == 'box' ? 'rounded-4 w-22 h-22' : ''
        }`}
      >
        <span className="invisible flex select-none text-17">
          <i className="fal fa-check text-light"></i>
        </span>
      </div>
    </label>
  );
};
