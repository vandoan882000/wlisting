import { CKEditor } from 'ckeditor4-react';
import { Select } from 'components/Select/Select';
import { ChangeEvent, FC, useContext } from 'react';
import { debounce } from 'utils/debounce';

import { MultiStepContext } from './Step';

export const Step4: FC = () => {
  const step = useContext(MultiStepContext);
  const handleChange = (event: ChangeEvent) => {
    step.onChange((event.target as HTMLInputElement).name, (event.target as HTMLInputElement).value);
  };
  return (
    <div className="mb-150">
      <div className="text-gray8 text-22 font-medium">Sed ut ratione neque disputatione, quam interrogare.</div>
      <div className="flex flex-col w-100% flex-wrap mt-30">
        <div className="text-14 font-medium text-gray8 mt-20 mb-9">Title</div>
        <input
          className="w-100% max-w-340 text-14 text-gray6 font-normal border-gray4 border-1 rounded-4 py-10 focus:border-gray4"
          type="text"
          name="title"
          placeholder="Enter Title"
          style={{ boxShadow: 'none' }}
          onChange={debounce(handleChange)}
        />
        <div className="text-14 font-medium text-gray8 mt-20 mb-9">Description</div>
        <CKEditor name="description" className="text-14 text-gray6 font-normal border-1 border-gray4 rounded-4 py-15 w-95% max-w-628 h-120" />
        <div className="text-14 font-medium text-gray8 mt-20 mb-9">Tags</div>
        <Select
          items={['Tag1', 'Tag2', 'Tag3', 'Tag4', 'Tag5']}
          style={{ width: 'clamp(250px, 20vw + 30px, 340px)', height: '46px', color: '#75737c', fontSize: '14px' }}
        ></Select>
      </div>
    </div>
  );
};
