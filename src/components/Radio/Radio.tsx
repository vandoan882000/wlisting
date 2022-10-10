import { CSSProperties, FC } from 'react';

interface RadioProps {
  name: string;
  onChange: () => void;
  label?: string;
  style?: CSSProperties;
  checked?: boolean;
}

export const Radio: FC<RadioProps> = ({ name, label = '', onChange = () => {}, style = {}, checked }) => {
  return (
    <label className="flex items-center" style={style}>
      <input className="hidden" type="radio" name={name} onChange={onChange} checked={checked} />
      <div className={`mr-9 w-22 h-22 rounded-1/2 border-2 ${checked ? 'bg-clip-content p-5 bg-primary border-primary' : 'border-gray4'}`}></div>
      <div className="text-14 text-gray6 font-normal">{label}</div>
    </label>
  );
};
