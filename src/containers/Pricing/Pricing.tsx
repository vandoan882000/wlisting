import { Content4 } from 'components/Content4/Content4';
import { Devider } from 'components/Divider/Devider';
import { NavBar } from 'components/NavBar/NavBar';
import { PricingItem, PricingType } from 'components/PricingItem/PricingItem';
import Footer from 'containers/Footer/Footer';
import React, { FC, useState } from 'react';

interface PricingDatas {
  type: PricingType;
  price: string;
  description: string;
  activeOption: string[];
  deactiveOption: string[];
}
const pricing_data: PricingDatas[] = [
  {
    type: 'basic',
    price: 'free',
    description: 'Si sine dubio praeclara sunt',
    activeOption: ['Si sine metu', 'At magnum periculum', 'Certe inquam pertinax'],
    deactiveOption: ['Ut placet inquam', 'Si sine metu', 'Probabo inquit modo', 'Tum dicere exorsus'],
  },
  {
    type: 'professional',
    price: '$30',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    activeOption: ['Si sine metu', 'At magnum periculum', 'Certe inquam pertinax', 'Ut placet inquam', 'Si sine metu'],
    deactiveOption: ['Probabo inquit modo', 'Tum dicere exorsus'],
  },
  {
    type: 'bussiness',
    price: '$90',
    description: 'At vero eos censes aut interrogari ut placet, inquam tum dicere.',
    activeOption: [
      'Si sine metu',
      'At magnum periculum',
      'Certe inquam pertinax',
      'Ut placet inquam',
      'Si sine metu',
      'Probabo inquit modo',
      'Tum dicere exorsus',
    ],
    deactiveOption: [],
  },
];

export const Pricing: FC = () => {
  const [pricingActive, setPricingActive] = useState<PricingDatas>({
    type: 'professional',
    price: '$30',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    activeOption: ['Si sine metu', 'At magnum periculum', 'Certe inquam pertinax', 'Ut placet inquam', 'Si sine metu'],
    deactiveOption: ['Probabo inquit modo', 'Tum dicere exorsus'],
  });

  return (
    <>
      <NavBar />
      <Content4 text="Pricing">
        <div className="container">
          <div className="text-15 font-normal text-gray6 text-center mb-30">
            Ut placet, inquam tum dicere exorsus est primum igitur, quid percipit aut <br />
            voluptates. Laudem et aperta iudicari etenim quoniam.
          </div>
          <div className="row">
            <div className="col-lg-6 flex flex-col items-end md:pr-35">
              {pricing_data.map(item => {
                return (
                  <PricingItem
                    type={item.type}
                    price={item.price}
                    description={item.description}
                    active={pricingActive.type == item.type}
                    onClick={() => setPricingActive(item)}
                  />
                );
              })}
            </div>
            <div className="col-lg-6 flex justify-start md:pl-35 mb-50">
              <div className="max-w-413 w-100% border-1 border-gray2 shadow-3 rounded-8 py-24 px-20">
                <div className="flex justify-between items-center">
                  <div className="text-20 font-medium text-gray8 capitalize">{pricingActive.type}</div>
                  <div className="flex items-center">
                    <span className="text-40 font-medium text-primary">{pricingActive.price}</span>
                    <span className="text-14 font-normal text-gray6">/month</span>
                  </div>
                </div>
                <div className="text-15 font-normal text-gray6">{pricingActive.description}</div>
                <ul className="list-none mt-26 pl-20">
                  <li className="font-normal text-15 text-gray6">
                    <i className="fal fa-check text-secondary mr-10"></i>Si sine metu
                  </li>
                  <li className="font-normal text-15 text-gray6 mt-6">
                    <i className="fal fa-check text-secondary mr-10"></i>At magnum periculum
                  </li>
                  <li className="font-normal text-15 text-gray6 mt-6">
                    <i className="fal fa-check text-secondary mr-10"></i>Certe inquam pertinax
                  </li>
                  <li className="font-normal text-15 text-gray6 mt-6">
                    <i className="fal fa-check text-secondary mr-10"></i>Ut placet inquam
                  </li>
                  <li className="font-normal text-15 text-gray6 mt-6">
                    <i className="fal fa-check text-secondary mr-10"></i>Si sine metu
                  </li>
                  <li className="font-normal text-15 text-gray6 mt-6">
                    <i className="fal fa-times text-tertiary mr-10"></i>Probabo inquit modo
                  </li>
                  <li className="font-normal text-15 text-gray6 mt-6">
                    <i className="fal fa-times text-tertiary mr-10"></i>Tum dicere exorsus
                  </li>
                </ul>
                <a
                  href="/step"
                  className="flex justify-center items-center py-10 w-100% text-16 text-light font-medium rounded-6 bg-secondary mt-20 cursor-pointer"
                >
                  Create a listing
                </a>
              </div>
            </div>
          </div>
        </div>
      </Content4>
      <Devider />
      <Footer />
    </>
  );
};
