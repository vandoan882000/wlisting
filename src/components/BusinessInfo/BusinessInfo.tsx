import { FC } from 'react';

export const BusinessInfo: FC = () => {
  return (
    <>
      <div className="flex justify-start items-center mb-10">
        <div className="flex justify-center items-center w-34 h-34 bg-gray2 rounded-1/2 mr-10">
          <i className="far fa-link text-gray7"></i>
        </div>
        <a className="text-14 font-normal text-gray7">https://wiloke.com</a>
      </div>
      <div className="flex justify-start items-center mb-10">
        <div className="flex justify-center items-center w-34 h-34 bg-gray2 rounded-1/2 mr-10">
          <i className="far fa-phone-alt text-gray7"></i>
        </div>
        <a className="text-14 font-normal text-gray7">0123456789</a>
      </div>
      <div className="flex justify-start items-center mb-10">
        <div className="flex justify-center items-center w-34 h-34 bg-gray2 rounded-1/2 mr-10">
          <i className="far fa-comment-alt text-gray7"></i>
        </div>
        <a className="text-14 font-normal text-gray7">Message the business</a>
      </div>
      <div className="flex items-center w-100% pt-13">
        <div className="flex justify-center items-center w-34 h-34 bg-[#325d94] rounded-1/2 mr-10">
          <i className="fab fa-facebook-square text-light"></i>
        </div>
        <div className="flex justify-center items-center w-34 h-34 bg-[#00aadb] rounded-1/2 mr-10">
          <i className="fab fa-twitter text-light"></i>
        </div>
        <div className="flex justify-center items-center w-34 h-34 bg-[#2f4e6b] rounded-1/2 mr-10">
          <i className="fab fab fa-tumblr text-light"></i>
        </div>
        <div className="flex justify-center items-center w-34 h-34 bg-[#ff0084] rounded-1/2 mr-10">
          <i className="fab fa-flickr text-light"></i>
        </div>
      </div>
    </>
  );
};
