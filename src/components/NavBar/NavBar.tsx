import { Avatar } from 'components/Avatar/Avatar';
import { Devider } from 'components/Divider/Devider';
import { DropDown } from 'components/DropDown/DropDown';
import { Modal } from 'components/Modal/Modal';
import { AddListingPage } from 'containers/AddListingPage/AddListingPage';
import { Section7 } from 'containers/AddListingPage/Section7/Section7';
import Footer from 'containers/Footer/Footer';
import { users_data } from 'data/users_data';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from 'types/User';

export const NavBar: FC = () => {
  const [visibleLogin, setVisibleLogin] = useState(false);
  const [visibleSignUp, setVisibleSignUp] = useState(false);
  const [visibleAddListing, setVisibleAddListing] = useState(false);
  const [visibleTerm, setVisibleTerm] = useState(false);
  const [referentUserName, setReferentUserName] = useState<HTMLInputElement | null>(null);
  const [referentPassWord, setReferentPassWord] = useState<HTMLInputElement | null>(null);
  const currentUser = localStorage.getItem('currentUser');
  const userData = JSON.parse(currentUser as string) as User;
  const handleLogin = () => {
    const user = users_data.find(user => {
      return user.userUsername == referentUserName?.value && user.userPassword == referentPassWord?.value;
    });
    if (!!user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
  };
  return (
    <div className="container">
      <div className="row flex items-center justify-between flex-nowrap w-100% py-20">
        <Link to="/" className="w-fit">
          <img className="w-120 h-30 m-0" src="/assets/logo.png" />
        </Link>
        <div className="hidden rounded-6 text-gray6 text-14 font-normal">
          <div className="w-263 h-42 border-1 border-gray4 flex justify-center items-center rounded-tl-6 rounded-bl-6">
            Where are you looking for ?
          </div>
          <input className="w-184 h-42 border-1 border-gray4 p-15" type="text" placeholder="West Hollywood, CA" />
          <button className="flex justify-center items-center w-53 h-42 bg-primary border-gray2 border-1 rounded-tr-6 rounded-br-6">
            <i className="fa fa-search text-22 font-normal text-light"></i>
          </button>
        </div>
        <div className="hidden w-fit items-center justify-end md:flex">
          <ul className="flex items-center list-none p-0">
            <li className="text-15 font-medium text-primary mr-30">
              <Link to="/">Home</Link>
            </li>
            <li className="group relative text-15 font-medium text-gray8 mr-30">
              <span className="cursor-pointer">
                Explore <i className="fal fa-angle-down"></i>
              </span>
              <ul className="opacity-0 group-hover:opacity-100  absolute top-105% left-0 border-1 border-gray2 rounded-4 overflow-hidden shadow-2 translate-y-20 group-hover:translate-y-0 transition-all delay-200">
                <li className="text-15 font-medium text-gray8 mr-30 whitespace-nowrap cursor-pointer px-30 py-10 !m-0 hover:bg-primary hover:text-light">
                  Explore 1
                </li>
                <li className="text-15 font-medium text-gray8 mr-30 whitespace-nowrap cursor-pointer px-30 py-10 !m-0 hover:bg-primary hover:text-light">
                  Explore 2
                </li>
                <li className="text-15 font-medium text-gray8 mr-30 whitespace-nowrap cursor-pointer px-30 py-10 !m-0 hover:bg-primary hover:text-light">
                  Explore 3
                </li>
              </ul>
            </li>

            <li className="text-15 font-medium text-gray8 mr-30">
              <Link to="/">Blog</Link>
            </li>
            {!!currentUser && (
              <>
                <li
                  className="hover:text-primary text-15 font-medium text-gray8 mr-30 cursor-pointer"
                  onClick={() => {
                    setVisibleAddListing(visible => !visible);
                    document.body.classList.add('scroll-hidden');
                  }}
                >
                  <span>Add Listing</span>
                </li>

                <DropDown
                  title=""
                  toggle={
                    <div className="border-1 border-gray3 rounded-23 px-7 py-6 cursor-pointer">
                      <Avatar avatar={userData.userAvatar} name={userData.userName} fontSize={14} size={34} />
                    </div>
                  }
                  variant="variant2"
                >
                  <div className="flex flex-col overflow-hidden rounded-8">
                    <div className="text-15 font-medium text-gray8 mr-30 whitespace-nowrap cursor-pointer px-30 py-10 !m-0 hover:bg-primary hover:text-light select-none">
                      Edit infomation
                    </div>
                    <div className="text-15 font-medium text-gray8 mr-30 whitespace-nowrap cursor-pointer px-30 py-10 !m-0 hover:bg-primary hover:text-light select-none">
                      Edit infomation
                    </div>
                    <div className="text-15 font-medium text-gray8 mr-30 whitespace-nowrap cursor-pointer px-30 py-10 !m-0 hover:bg-primary hover:text-light select-none">
                      Edit infomation
                    </div>
                    <div className="text-15 font-medium text-gray8 mr-30 whitespace-nowrap cursor-pointer px-30 py-10 !m-0 hover:bg-primary hover:text-light select-none">
                      Logout
                    </div>
                  </div>
                </DropDown>
              </>
            )}
            {!currentUser && (
              <li className="text-15 font-medium text-gray8 mr-30 cursor-pointer" onClick={() => setVisibleSignUp(visible => !visible)}>
                Sign up
              </li>
            )}
          </ul>
          {!currentUser && (
            <div
              className="py-6 px-23 text-15 text-gray8 font-medium rounded-5 border-primary border-1 cursor-pointer"
              onClick={() => {
                setVisibleLogin(visible => !visible);
                document.body.classList.add('scroll-hidden');
              }}
            >
              Log in
            </div>
          )}

          <Modal
            onBack={() => {
              setVisibleSignUp(visible => !visible);
              document.body.classList.remove('scroll-hidden');
            }}
            title="Sign Up"
            visible={visibleSignUp}
          >
            <div className="flex flex-col items-center">
              <div className="text-22 mt-20 mb-20">Sign Up</div>
              <label>
                <input ref={setReferentUserName} className="w-300 mb-30" style={{ boxShadow: 'none' }} type="text" placeholder="UserName" />
              </label>
              <label>
                <input ref={setReferentPassWord} className="w-300" style={{ boxShadow: 'none' }} type="password" placeholder="Password" />
              </label>
              <div
                className="bg-primary py-10 px-30 rounded-6 text-light mt-20 cursor-pointer"
                onClick={() => {
                  console.log(referentPassWord?.value, referentUserName?.value);
                }}
              >
                Sign up
              </div>
            </div>
          </Modal>
          <Modal
            onBack={() => {
              setVisibleLogin(visible => !visible);
              document.body.classList.remove('scroll-hidden');
            }}
            title="Login"
            visible={visibleLogin}
          >
            <div className="flex flex-col items-center">
              <div className="text-22 mt-20 mb-20">Login</div>
              <label>
                <input ref={setReferentUserName} className="w-300 mb-30" style={{ boxShadow: 'none' }} type="text" placeholder="UserName" />
              </label>
              <label>
                <input ref={setReferentPassWord} className="w-300" style={{ boxShadow: 'none' }} type="password" placeholder="Password" />
              </label>
              <div className="bg-primary py-10 px-30 rounded-6 text-light mt-20 cursor-pointer" onClick={handleLogin}>
                Login
              </div>
            </div>
          </Modal>
          <Modal
            onBack={() => {
              setVisibleAddListing(visible => !visible);
              document.body.classList.remove('scroll-hidden');
            }}
            title="Sign Up"
            visible={visibleAddListing}
            navigation={
              <div className="flex items-center">
                <div className="text-14 font-medium text-primary border-b-2 border-primary px-20 cursor-pointer">Overview</div>
                <div
                  className="text-14 font-medium text-gray8 px-20 cursor-pointer hover:text-primary"
                  onClick={() => {
                    setVisibleTerm(visible => !visible);
                    document.body.classList.add('scroll-hidden');
                  }}
                >
                  Term of use
                </div>
                <div
                  className="flex justify-center items-center px-14 text-14 font-medium text-light bg-primary rounded-4 py-10 cursor-pointer"
                  onClick={() => {
                    setVisibleTerm(visible => !visible);
                    document.body.classList.add('scroll-hidden');
                  }}
                >
                  <i className="far fa-pen mr-5"></i>Get start
                </div>
              </div>
            }
          >
            <AddListingPage />
          </Modal>
          <Modal
            onBack={() => {
              setVisibleTerm(visible => !visible);
              document.body.classList.remove('scroll-hidden');
            }}
            title="Term of use"
            visible={visibleTerm}
            navigation={
              <div className="flex items-center">
                <div className="text-14 font-medium text-gray8 hover:text-primary px-20 cursor-pointer">Overview</div>
                <div className="text-14 font-medium  px-20 text-primary border-b-2 border-primary cursor-pointer">Term of use</div>
              </div>
            }
          >
            <Section7 />
            <Devider />
            <Footer />
          </Modal>
        </div>
        <span className="block md:hidden w-fit">
          <i className="far fa-bars"></i>
        </span>
      </div>
    </div>
  );
};
