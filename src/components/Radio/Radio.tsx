import { CSSProperties, FC } from 'react';

interface RadioProps {
  name: string;
  value: string;
  option: string;
  onChange: () => void;
  label?: string;
  style?: CSSProperties;
}

export const Radio: FC<RadioProps> = ({ name, label = '', value, option, onChange = () => {}, style = {} }) => {
  return (
    <label className="flex items-center" style={style}>
      <input className="hidden" type="radio" name={name} checked={option === value} onChange={onChange} />
      <div
        className={`mr-9 w-22 h-22 rounded-1/2 border-2 border-gray4 ${option === value ? 'bg-clip-content p-5 bg-primary border-primary' : ''}`}
      ></div>
      <div className="text-14 text-gray6 font-normal">{label}</div>
    </label>
  );
};
