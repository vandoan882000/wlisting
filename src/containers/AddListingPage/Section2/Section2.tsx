import { TypeListing } from 'components/TypeListing/TypeListing';
import { FC } from 'react';

export const Section2: FC = () => {
  const data = [
    {
      color: '#ff8b81',
      title: 'Paid Listings',
      content:
        'Si sine metu degendae praesidia firmissima filium morte multavit si sine metu degendae. Omne animal, simul atque in sanguinem suum tam crudelis fuisse.',
      icon: 'far fa-bullseye',
    },
    {
      color: '#9f53e9',
      title: 'Promoted Listings',
      content: 'Sed ut aliquid ex eo delectu rerum, quem modo ista sis aequitate, quam. Ut placet, inquam tum dicere exorsus est eligendi optio.',
      icon: 'far fa-volume-up',
    },
    {
      color: '#34befe',
      title: 'Paid Claim Listings',
      content:
        'Si sine dubio praeclara sunt, explicabo nemo enim ad modum, quaeso, interpretaris? sicine. At vero eos et expedita distinctio nam libero tempore, cum memoriter, tum etiam.',
      icon: 'far fa-edit',
    },
  ];
  return (
    <div className="container">
      <div className="row">
        {data.map((item, index) => {
          return (
            <div className="col-lg-4 mt-42">
              <TypeListing key={index} color={item.color} content={item.content} title={item.title} icon={item.icon} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
