import React, { FC } from 'react';

interface TestProps {
  title: string;
}

const Test: FC<TestProps> = props => {
  const { title } = props;
  return <div className="text-3xl font-bold mx-auto sm:bg-gray sans md:text-pink">{title}</div>;
};

export default Test;
