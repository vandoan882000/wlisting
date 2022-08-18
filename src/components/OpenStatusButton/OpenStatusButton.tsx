import { FC } from 'react';

interface OpenStatusButtonProps {
  isOpen: boolean;
}
export const OpenStatusButton: FC<OpenStatusButtonProps> = ({ isOpen }) => {
  return (
    <>
      {isOpen ? (
        <a href="#" className="inline-block rounded-6 border-gray3 text-12 font-medium text-secondary py-5 px-9 mr-10 bg-light border-1">
          Open now
        </a>
      ) : (
        <a href="#" className="inline-block rounded-6 border-gray3 text-12 font-medium text-secondary py-5 px-9 mr-10 bg-light border-1">
          Close
        </a>
      )}
    </>
  );
};
