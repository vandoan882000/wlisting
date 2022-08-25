import { FC } from 'react';

type BorderStyle = 'radius' | 'box' | 'none';
interface CheckBoxProps {
  size?: number;
  backgroundColor?: string;
  checkColor?: string;
  borderStyle?: BorderStyle;
  disabled?: boolean;
  checked?: boolean;
  onChange?: () => void;
}
export const CheckBox: FC<CheckBoxProps> = ({ disabled = false, borderStyle, checked, onChange }) => {
  return (
    <label
      id=""
      className={`flex w-fit cursor-pointer select-none ${disabled ? 'cursor-pointer' : ''}
      }`}
    >
      <input type="checkbox" name="check-listing" id="checklisting" className="hidden" disabled={disabled} checked={checked} onChange={onChange} />
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
