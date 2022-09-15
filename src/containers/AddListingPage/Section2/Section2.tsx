import { FC } from 'react';

export const Section2: FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 mt-42">
          <div
            className="w-50 h-50 flex justify-center items-center rounded-15"
            style={{
              background: '#ff8b81',
            }}
          >
            <i className="far fa-bullseye text-light text-25"></i>
          </div>
          <div className="text-20 font-medium text-gray8 mt-10">Paid Listings</div>
          <div className="font-normal text-14 text-gray6">
            Si sine metu degendae praesidia firmissima filium morte multavit si sine metu degendae. Omne animal, simul atque in sanguinem suum tam
            crudelis fuisse.
          </div>
        </div>
        <div className="col-lg-4 mt-42">
          <div className="w-50 h-50 flex justify-center items-center rounded-15" style={{ background: '#9f53e9' }}>
            <i className="far fa-star text-light text-25"></i>
          </div>
          <div className="text-20 font-medium text-gray8 mt-10">Promoted Listings</div>
          <div className="font-normal text-14 text-gray6">
            Si sine metu degendae praesidia firmissima filium morte multavit si sine metu degendae. Omne animal, simul atque in sanguinem suum tam
            crudelis fuisse.
          </div>
        </div>
        <div className="col-lg-4 mt-42">
          <div className="w-50 h-50 flex justify-center items-center rounded-15" style={{ background: '#34befe' }}>
            <i className="far fa-edit text-light text-25"></i>
          </div>
          <div className="text-20 font-medium text-gray8 mt-10">Paid Claim Listings</div>
          <div className="font-normal text-14 text-gray6">
            Si sine metu degendae praesidia firmissima filium morte multavit si sine metu degendae. Omne animal, simul atque in sanguinem suum tam
            crudelis fuisse.
          </div>
        </div>
      </div>
    </div>
  );
};
