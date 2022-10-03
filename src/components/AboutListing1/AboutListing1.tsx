import { FC, memo } from 'react';

interface AboutListing1Props {
  title: string;
  description: string;
}

const AboutListing1: FC<AboutListing1Props> = ({ title, description }) => {
  return (
    <>
      <div className="text-26 font-medium text-gray9">{title}</div>
      <div className="text-15 font-normal text-gray6 mt-5">{description}</div>
    </>
  );
};
export default memo(AboutListing1);
