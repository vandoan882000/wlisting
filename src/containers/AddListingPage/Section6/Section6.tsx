import { Devider } from 'components/Divider/Devider';
import { Modal } from 'components/Modal/Modal';
import { Footer } from 'containers/Footer/Footer';
import { FC, useState } from 'react';

import { Section7 } from '../Section7/Section7';

export const Section6: FC = () => {
  const [visibleTerm, setVisibleTerm] = useState(true);
  return (
    <div className="container mb-80">
      <div className="row relative w-100% bg-center bg-cover h-500">
        <img className="inset-0 w-100% h-100% absolute object-cover z-_1 rounded-15 !m-0 !p-0" src="/assets/ready-earn.png" alt="" />
        <div className="col-lg-6 p-60 flex flex-col justify-center">
          <div className="text-gray8 font-medium text-60">Ready to earn?</div>
          <div
            className="flex text-light bg-primary rounded-6 w-fit px-15 py-10 cursor-pointer mt-15"
            onClick={() => {
              setVisibleTerm(visible => !visible);
              document.body.classList.add('scroll-hidden');
            }}
          >
            <span className="mr-5">
              <i className="far fa-pen"></i>
            </span>
            <span className="inline-block text-16 font-500 select-none">Get Started</span>
          </div>
        </div>
      </div>
      <Modal
        onBack={() => {
          setVisibleTerm(visible => !visible);
          document.body.classList.remove('scroll-hidden');
        }}
        title="Term of use"
        visible={visibleTerm}
        variant="variant2"
        navigation={
          <div className="flex items-center">
            <div
              className="text-14 font-medium text-gray8 hover:text-primary px-20 cursor-pointer"
              onClick={() => setVisibleTerm(visible => !visible)}
            >
              Overview
            </div>
            <div className="text-14 font-medium  px-20 text-primary border-b-2 border-primary cursor-pointer py-5">Term of use</div>
          </div>
        }
      >
        <Section7 />
        <Devider />
        <Footer />
      </Modal>
    </div>
  );
};
