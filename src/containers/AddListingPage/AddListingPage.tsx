import { Content4 } from 'components/Content4/Content4';
import Menu from 'components/Menu';
import Footer from 'containers/Footer/Footer';
import React, { FC } from 'react';

import { Section1 } from './Section1/Section1';
import { Section2 } from './Section2/Section2';
import { Section3 } from './Section3/Section3';
import { Section4 } from './Section4/Section4';
import { Section5 } from './Section5/Section5';
import { Section6 } from './Section6/Section6';
import { Section7 } from './Section7/Section7';

export const AddListingPage: FC = () => {
  return (
    <>
      <Menu title="a" />
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
      <Section7 />
      <Footer />
    </>
  );
};
