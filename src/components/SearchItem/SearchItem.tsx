import { Avatar } from 'components/Avatar/Avatar';
import { Rate1 } from 'components/Rate1/Rate1';
import { WishListButton } from 'components/WishListButton/WishListButton';
import React, { FC, useState } from 'react';

export const SearchItem: FC = () => {
  const [wishlist, setWishlist] = useState(true);
  return (
    <div className="flex">
      <div className="w-40% relative bg-center bg-cover aspect-4/3 rounded-14">
        <img
          className="absolute inset-0 w-100% h-100% object-cover rounded-14"
          src="https://images.pexels.com/photos/8729211/pexels-photo-8729211.jpeg?cs=srgb&dl=pexels-katya-wolf-8729211.jpg&w=500&fm=jpg"
          alt=""
        />
      </div>
      <div className="w-60% pl-20">
        <div className="flex justify-between">
          <div className="text-11 font-bold text-primary uppercase">Restaurant</div>
          <Rate1>7.8</Rate1>
        </div>
        <div className="text-18 font-medium text-gray8 mb-10">Westfield Sydney</div>
        <div className="text-14 font-normal text-gray6 mb-10">
          <i className="fal fa-map-marker-alt mr-5 text-primary"></i>188 Pitt St, Sydney NSW 2000, Australia
        </div>
        <div className="text-14 font-normal text-gray6 mb-10">
          <i className="fal fa-phone-alt mr-5 text-primary"></i>0348457142
        </div>
        <div className="flex">
          <Avatar
            avatar="https://images.pexels.com/photos/11293719/pexels-photo-11293719.jpeg?cs=srgb&dl=pexels-vietnam-photographer-11293719.jpg&w=500&fm=jpg"
            name="Adolfo Hess "
            size={22}
            fontSize={13}
          />
          <div className="text-13 font-normal text-gray6">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in so…
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="relative bg-cover bg-center rounded-1/2 mr-12 w-22 h-22">
              <img
                className="absolute inset-0 w-100% h-100% top-0 left-0 object-cover rounded-1/2"
                src="https://images.pexels.com/photos/11293719/pexels-photo-11293719.jpeg?cs=srgb&dl=pexels-vietnam-photographer-11293719.jpg&w=500&fm=jpg"
                alt=""
              />
            </div>
            <div className="text-12 text-gray7 font-medium">Adolfo Hess</div>
            <div className="text-13 flex items-center justify-center">
              <i className="fas fa-circle text-3 mx-5 text-gray6"></i> <span className="text-gray6 text-12 font-medium">$$</span>{' '}
              <i className="fas fa-circle text-3 mx-5 text-gray6"></i> <span className="text-secondary font-semibold">Open Now</span>
            </div>
          </div>
          <div className="cursor-pointer" onClick={() => setWishlist(!wishlist)}>
            <WishListButton border={false} color={'#929099'} isInWishList={wishlist} />
          </div>
        </div>
      </div>
    </div>
  );
};
