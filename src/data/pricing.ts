import { PricingDatas } from 'types/Pricing';

export const pricing: PricingDatas[] = [
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
