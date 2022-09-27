import { FC } from 'react';

export const CopyRight: FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 flex justify-between items-center min-h-85 py-35">
          <div className="text-14 font-normal text-gray8">Copyright © 2022 Wiloke.com. Address: 1002312 State Street, 20th Floor Boston A</div>
          <div className="flex">
            <a href="#" className="text-gray9 ml-15 hover:text-primary">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray9 ml-15 hover:text-primary">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray9 ml-15 hover:text-primary">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray9 ml-15 hover:text-primary">
              <i className="fab fa-flickr"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
