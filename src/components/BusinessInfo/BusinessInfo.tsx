import { Divider } from 'components/Divider/Divider';
import { FC, memo } from 'react';
import { ListingSocial } from 'types/Listing';

interface BusinessInfoProps {
  email: string;
  phone: string;
  social: ListingSocial[];
}

const BusinessInfo: FC<BusinessInfoProps> = ({ email, phone, social }) => {
  return (
    <>
      <div className="mt-15">
        <div className="flex justify-start items-center mb-15">
          <div className="flex justify-center items-center w-34 h-34 bg-gray2 rounded-1/2 mr-10">
            <i className="far fa-link text-gray8"></i>
          </div>
          <a href={`mailto:${email}`} className="text-14 font-normal text-gray8">
            {email}
          </a>
        </div>
        <div className="flex justify-start items-center mb-15">
          <div className="flex justify-center items-center w-34 h-34 bg-gray2 rounded-1/2 mr-10">
            <i className="far fa-phone-alt text-gray8"></i>
          </div>
          <a href={`tel:${phone}`} className="text-14 font-normal text-gray8">
            {phone}
          </a>
        </div>
        <div className="flex justify-start items-center mb-15">
          <div className="flex justify-center items-center w-34 h-34 bg-gray2 rounded-1/2 mr-10">
            <i className="far fa-comment-alt text-gray8"></i>
          </div>
          <a className="text-14 font-normal text-gray7">Message the business</a>
        </div>
      </div>
      <Divider />
      <div className="flex items-center w-100% pt-13">
        {social.map((item, index) => {
          switch (item.name) {
            case 'facebook':
              return (
                <a
                  key={index}
                  href={item.value}
                  className="flex justify-center items-center w-34 h-34 rounded-1/2 mr-10"
                  style={{ backgroundColor: '#325d94' }}
                >
                  <i className="fab fa-facebook-square text-light"></i>
                </a>
              );
            case 'switter':
              return (
                <a
                  key={index}
                  href={item.value}
                  className="flex justify-center items-center w-34 h-34 rounded-1/2 mr-10"
                  style={{ backgroundColor: '#00aadb' }}
                >
                  <i className="fab fa-twitter text-light"></i>
                </a>
              );
            case 'tumblr':
              return (
                <a
                  key={index}
                  href={item.value}
                  className="flex justify-center items-center w-34 h-34 rounded-1/2 mr-10"
                  style={{ backgroundColor: '#2f4e6b' }}
                >
                  <i className="fab fab fa-tumblr text-light"></i>
                </a>
              );
            case 'flickr':
              return (
                <a
                  key={index}
                  href={item.value}
                  className="flex justify-center items-center w-34 h-34 rounded-1/2 mr-10"
                  style={{ backgroundColor: '#ff0084' }}
                >
                  <i className="fab fa-flickr text-light"></i>
                </a>
              );
          }
        })}
      </div>
    </>
  );
};

export default memo(BusinessInfo);
