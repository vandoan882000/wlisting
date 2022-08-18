import React, { FC } from 'react';
import { Link } from 'react-router-dom';

// import { account } from '../data/account';

interface TestProps {
  title: string;
}

const Menu: FC<TestProps> = props => {
  const { title } = props;
  return (
    <div className="container">
      <div className="row flex items-center justify-between flex-nowrap w-100% py-20">
        <img className="w-120 h-30" src="assets/logo.png" alt={title} />
        <div className="hidden rounded-6 text-gray6 text-14 font-normal">
          <div className="w-[263px] h-[42px] border-[1px] border-[#dbdade] flex justify-center items-center rounded-tl-[6px] rounded-bl-[6px]">
            Where are you looking for ?
          </div>
          <input className="w-[184px] h-[42px] border-[1px] border-[#dbdade] p-[15px]" type="text" placeholder="West Hollywood, CA" />
          <button className="flex justify-center items-center w-[53px] h-[42px] bg-[#6060C3] border-[#808080] border-[1px] rounded-tr-[6px] rounded-br-[6px]">
            <i className="fa fa-search text-[22px] text-[400] text-[#ffffff]"></i>
          </button>
        </div>
        <div className="flex items-center justify-end">
          <ul className="flex list-none p-0">
            <li className="text-15 font-medium text-primary mr-30">
              <Link to="/">Home</Link>
            </li>
            <li className="text-15 font-medium text-gray8 mr-30">
              <Link to="/home2">Home2</Link>
            </li>
            <li className="text-15 font-medium text-gray8 mr-30">
              <Link to="/">
                Explore <i className="fal fa-angle-down"></i>
              </Link>
            </li>
            <li className="text-15 font-medium text-gray8 mr-30">
              <Link to="/">Blog</Link>
            </li>
            <li className="text-15 font-medium text-gray8 mr-30">
              <Link to="/">Sign up</Link>
            </li>
          </ul>
          <div className="hidden items-center justify-center px-5 py-5 rounded-20 border-gray3 border-1 cursor-pointer">
            <div className="w-22 h-22 aspect-1/1 bg-cover bg-center mr-5 rounded-1/2">
              <img className="w-100% h-100% " src="assets/avatar.png" alt="" />
            </div>
            <div className="text-14 text-medium text-gray7">Elliana</div>
          </div>
          <div className="py-6 px-23 text-15 text-gray8 font-medium rounded-5 border-primary border-1 cursor-pointer">Log in</div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
