import { Content4 } from 'components/Content4/Content4';
import { Devider } from 'components/Divider/Devider';
import { Footer } from 'containers/Footer/Footer';
import { CopyRight } from 'containers/HomePage/CopyRight/CopyRight';
import { FC } from 'react';

import { Section1 } from './Section1/Section1';
import { Section2 } from './Section2/Section2';
import { Section3 } from './Section3/Section3';
import { Section4 } from './Section4/Section4';
import { Section5 } from './Section5/Section5';
import { Section6 } from './Section6/Section6';

export const AddListingPage: FC = () => {
  return (
    <>
      <Section1 />
      <Content4 text="See How It Works">
        <Section2 />
      </Content4>
      <Content4 text="We’ve got you covered">
        <Section3 />
      </Content4>
      <Content4 text="About us">
        <Section4 />
      </Content4>
      <Content4 text="Frequently asked questions">
        <Section5 />
      </Content4>
      <Section6 />
      <Devider />
      <Footer />
      <Devider />
      <CopyRight />
    </>
  );
};
