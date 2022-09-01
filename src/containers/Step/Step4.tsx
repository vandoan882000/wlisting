import { FC } from 'react';

export const Step4: FC = () => {
  return (
    <div>
      <div className="text-gray8 text-22 font-medium">Sed ut ratione neque disputatione, quam interrogare.</div>
      <div className="flex flex-col w-100% flex-wrap mt-30">
        <div className="text-14 font-medium text-gray8 mt-20 mb-9">Title</div>
        <input
          className="text-14 text-gray6 font-medium border-gray4 border-1 rounded-4 py-15"
          type="text"
          name="title"
          placeholder=" Explore Downtown New York"
        />
        <div className="text-14 font-medium text-gray8 mt-20 mb-9">Description</div>
        <textarea className="text-14 text-gray6 border-1 border-gray4 rounded-4 py-15 h-120" name="description"></textarea>
        <div className="text-14 font-medium text-gray8 mt-20 mb-9">Tags</div>
        <select className="w-300 text-18 text-gray5 font-medium border-gray4 border-1 rounded-4 py-15" name="tags">
          <option value="add tabs"></option>
        </select>
      </div>
    </div>
  );
};
