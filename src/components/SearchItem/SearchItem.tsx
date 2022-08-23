import { AuthorInfoMini } from 'components/AuthorInfoMini/AuthorInfoMini';
import { WishListButton } from 'components/WishListButton/WishListButton';
import React from 'react';

export const SearchItem = () => {
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
          <div>7.8</div>
        </div>
        <div className="text-18 font-medium text-gray8">Westfield Sydney</div>
        <div className="text-14 font-normal text-gray6">188 Pitt St, Sydney NSW 2000, Australia</div>
        <div className="text-14 font-normal text-gray6">0348457142</div>
        <div className="flex">
          <AuthorInfoMini
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
          <div className="flex">
            <AuthorInfoMini
              avatar="https://images.pexels.com/photos/11293719/pexels-photo-11293719.jpeg?cs=srgb&dl=pexels-vietnam-photographer-11293719.jpg&w=500&fm=jpg"
              name="Adolfo Hess "
              size={22}
              fontSize={13}
            />
            <div className="text-13 flex items-center justify-center">
              <i className="fas fa-circle text-3"></i> $$ <i className="fas fa-circle text-3"></i> Open Now
            </div>
          </div>
          <WishListButton border={false} color={'#929099'} isInWishList={true} />
        </div>
      </div>
    </div>
  );
};
