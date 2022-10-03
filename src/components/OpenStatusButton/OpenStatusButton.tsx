import { FC } from 'react';

interface OpenStatusButtonProps {
  isOpen: boolean;
}
export const OpenStatusButton: FC<OpenStatusButtonProps> = ({ isOpen }) => {
  return (
    <>
      {isOpen ? (
        <div className="inline-block rounded-6 border-gray3 text-12 font-medium text-secondary py-4 px-9 bg-light border-1 select-none">Open now</div>
      ) : (
        <div className="inline-block rounded-6 border-gray3 text-12 font-medium text-secondary py-4 px-9 bg-light border-1 select-none">Close</div>
      )}
    </>
  );
};
