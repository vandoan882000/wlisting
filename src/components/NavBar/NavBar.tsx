import { Avatar } from 'components/Avatar/Avatar';
import { Divider } from 'components/Divider/Divider';
import { Modal } from 'components/Modal/Modal';
import { Popover } from 'components/Popover/Popover';
import { PopUp } from 'components/PopUp/PopUp';
import { AddListingPage } from 'containers/AddListingPage/AddListingPage';
import { Section7 } from 'containers/AddListingPage/Section7/Section7';
import { Footer } from 'containers/Footer/Footer';
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
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('currentUser'));
  const userData = JSON.parse(currentUser as string) as User;
  const handleLogin = () => {
    const user = users_data.find(user => {
      return user.userUsername == referentUserName?.value && user.userPassword == referentPassWord?.value;
    });
    if (!!user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      setCurrentUser(JSON.stringify(user));
      setVisibleLogin(prevState => !prevState);
    }
  };
  const handleLogout = () => {
    localStorage.setItem('currentUser', '');
    setCurrentUser(JSON.stringify(''));
  };
  const enableSearch = window.location.href.toString().includes('/listing/') || window.location.href.toString().includes('/search/');
  return (
    <div className="container">
      <div className="row flex items-center justify-between flex-nowrap w-100% py-16 m-0">
        <Link to="/" className="w-fit m-0 p-0">
          <img className="w-107 h-36 m-0" src="/assets/logo.png" />
        </Link>
        <div
          className={`${
            enableSearch ? 'flex lg-max:hidden' : 'hidden'
          } w-fit border-1 border-gray4 overflow-hidden rounded-6 text-gray6 text-14 font-normal pr-0 m-0`}
        >
          <input
            className="w-263 h-42 !border-r-1 !border-r-gray4 border-none  p-15 rounded-tl-6 rounded-bl-6"
            type="text"
            placeholder="Where are you looking for ?"
            style={{ boxShadow: 'none', width: 'clamp(100px,15vw + 30px, 263px )' }}
          />
          <input
            className="w-184 h-42 p-15 border-l-1 border-l-gray4 border-y-0 border-r-0 focus:border-l-gray4"
            type="text"
            placeholder="West Hollywood, CA"
            style={{ boxShadow: 'none', outline: 'none', width: 'clamp(60px,15vw + 10px, 184px )' }}
          />
          <button className="flex justify-center items-center w-53 h-42 bg-primary border-primary border-1">
            <i className="fa fa-search text-22 font-normal text-light"></i>
          </button>
        </div>
        <div className={`flex lg-max:hidden w-fit items-center justify-end m-0 pr-0`}>
          <ul className="flex items-center list-none p-0 sm-max:flex-col">
            <li className="text-15 font-medium text-primary mr-30">
              <Link to="/">Home</Link>
            </li>
            <li className="group relative text-15 font-medium text-gray9 mr-30">
              <span className="cursor-pointer">
                Explore <i className="fal fa-angle-down"></i>
              </span>
              <ul className="opacity-0 z-_1 group-hover:opacity-100 group-hover:z-100 absolute top-105% left-0 border-1 border-gray2 rounded-4 overflow-hidden shadow-2 translate-y-20 group-hover:translate-y-0 transition-all delay-200  bg-light">
                <li className="text-15 font-medium text-gray9 mr-30 whitespace-nowrap cursor-pointer px-30 py-10 !m-0 hover:bg-primary hover:text-light">
                  Explore 1
                </li>
                <li className="text-15 font-medium text-gray9 mr-30 whitespace-nowrap cursor-pointer px-30 py-10 !m-0 hover:bg-primary hover:text-light">
                  Explore 2
                </li>
                <li className="text-15 font-medium text-gray9 mr-30 whitespace-nowrap cursor-pointer px-30 py-10 !m-0 hover:bg-primary hover:text-light">
                  Explore 3
                </li>
              </ul>
            </li>

            <li className="text-15 font-medium text-gray9 mr-30">
              <Link to="/">Blog</Link>
            </li>
            {!!userData && (
              <>
                <li
                  className="hover:text-primary text-15 font-medium text-gray9 mr-30 cursor-pointer"
                  onClick={() => {
                    setVisibleAddListing(visible => !visible);
                    document.body.classList.add('scroll-hidden');
                  }}
                >
                  <span>Add Listing</span>
                </li>

                <Popover
                  title=""
                  variant="variant2"
                  style={{
                    background: '#ffffff',
                    marginTop: '10px',
                  }}
                >
                  <Popover.Toggle>
                    <div className="border-1 border-gray3 rounded-23 px-7 py-6 cursor-pointer">
                      <Avatar avatar={userData?.userAvatar} name={userData?.userName} fontSize={14} size={34} />
                    </div>
                  </Popover.Toggle>
                  <Popover.Content>
                    <div className="flex flex-col overflow-hidden rounded-8">
                      <div className="text-15 font-medium text-gray9 mr-30 whitespace-nowrap cursor-pointer px-30 py-10 !m-0 hover:bg-primary hover:text-light select-none">
                        Profile
                      </div>
                      <div className="text-15 font-medium text-gray9 mr-30 whitespace-nowrap cursor-pointer px-30 py-10 !m-0 hover:bg-primary hover:text-light select-none">
                        Reviews
                      </div>
                      <div className="text-15 font-medium text-gray9 mr-30 whitespace-nowrap cursor-pointer px-30 py-10 !m-0 hover:bg-primary hover:text-light select-none">
                        Listings
                      </div>
                      <div
                        className="text-15 font-medium text-gray9 mr-30 whitespace-nowrap cursor-pointer px-30 py-10 !m-0 hover:bg-primary hover:text-light select-none"
                        onClick={handleLogout}
                      >
                        Logout
                      </div>
                    </div>
                  </Popover.Content>
                </Popover>
              </>
            )}
            {!currentUser && (
              <li className="text-15 font-medium text-gray9 mr-30 cursor-pointer" onClick={() => setVisibleSignUp(visible => !visible)}>
                Sign up
              </li>
            )}
          </ul>
          {!userData && (
            <div
              className="py-6 px-23 text-15 text-gray9 font-medium rounded-5 border-primary border-1 cursor-pointer"
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
            title="Home"
            visible={visibleAddListing}
            variant="variant2"
            navigation={
              <div className="flex items-center flex-wrap">
                <div className="text-14 font-medium text-primary border-b-2 border-primary px-20 py-5 cursor-pointer select-none">Overview</div>
                <div
                  className="text-14 font-medium text-gray9 px-20 cursor-pointer hover:text-primary select-none"
                  onClick={() => {
                    setVisibleTerm(visible => !visible);
                    document.body.classList.add('scroll-hidden');
                  }}
                >
                  Term of use
                </div>
                <div
                  className="flex justify-center items-center px-14 text-14 min-w-125 font-medium text-light bg-primary rounded-4 py-10 cursor-pointer select-none"
                  onClick={() => {
                    setVisibleTerm(visible => !visible);
                    document.body.classList.add('scroll-hidden');
                  }}
                >
                  <i className="far fa-pen mr-10"></i>Get start
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
            variant="variant2"
            navigation={
              <div className="flex items-center flex-wrap">
                <div
                  className="text-14 font-medium text-gray9 hover:text-primary px-20 cursor-pointer"
                  onClick={() => setVisibleTerm(visible => !visible)}
                >
                  Overview
                </div>
                <div className="text-14 font-medium  px-20 text-primary border-b-2 border-primary cursor-pointer py-5">Term of use</div>
              </div>
            }
          >
            <Section7 />
            <Divider />
            <Footer />
          </Modal>
        </div>
        <div className="hidden lg-max:block w-fit">
          <PopUp onApply={() => {}} title="" variant="full">
            <PopUp.Toggle>
              <span className="hidden lg-max:block w-fit cursor-pointer">
                <i className="far fa-bars text-22"></i>
              </span>
            </PopUp.Toggle>
            <PopUp.Content>
              <div className="container">
                <div className="row flex items-center justify-center flex-nowrap w-100% py-20 m-0">
                  <div className={`w-100% items-center justify-center flex flex-col`}>
                    <ul className="flex items-center list-none p-0 flex-col w-100%">
                      <li className="text-15 font-medium text-primary w-100% py-10 border-b-1 border-gray4 text-center">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="group relative text-15 font-medium text-gray9 w-100% py-10 border-b-1 border-gray4 text-center">
                        <span className="cursor-pointer">
                          Explore <i className="fal fa-angle-down"></i>
                        </span>
                        <ul className="hidden group-target:block">
                          <li className="text-15 font-medium text-gray9 mr-30 whitespace-nowrap cursor-pointer px-30 py-10 !m-0 hover:bg-primary hover:text-light">
                            Explore 1
                          </li>
                          <li className="text-15 font-medium text-gray9 mr-30 whitespace-nowrap cursor-pointer px-30 py-10 !m-0 hover:bg-primary hover:text-light">
                            Explore 2
                          </li>
                          <li className="text-15 font-medium text-gray9 mr-30 whitespace-nowrap cursor-pointer px-30 py-10 !m-0 hover:bg-primary hover:text-light">
                            Explore 3
                          </li>
                        </ul>
                      </li>

                      <li className="text-15 font-medium text-gray9 w-100% py-10 border-b-1 border-gray4 text-center">
                        <Link to="/">Blog</Link>
                      </li>
                      {!!userData && (
                        <>
                          <li
                            className="hover:text-primary text-15 font-medium text-gray9 cursor-pointer w-100% py-10 border-b-1 border-gray4 text-center"
                            onClick={() => {
                              setVisibleAddListing(visible => !visible);
                              document.body.classList.add('scroll-hidden');
                            }}
                          >
                            <span>Add Listing</span>
                          </li>

                          <Popover
                            title=""
                            variant="variant2"
                            style={{
                              background: '#ffffff',
                              marginTop: '10px',
                            }}
                          >
                            <Popover.Toggle>
                              <div className="border-1 border-gray3 rounded-23 px-7 py-6 cursor-pointer mt-10">
                                <Avatar avatar={userData?.userAvatar} name={userData?.userName} fontSize={14} size={34} />
                              </div>
                            </Popover.Toggle>
                            <Popover.Content>
                              <div className="flex flex-col overflow-hidden rounded-8">
                                <div className="text-15 font-medium text-gray9 mr-30 whitespace-nowrap cursor-pointer px-30 py-10 !m-0 hover:bg-primary hover:text-light select-none">
                                  Profile
                                </div>
                                <div className="text-15 font-medium text-gray9 mr-30 whitespace-nowrap cursor-pointer px-30 py-10 !m-0 hover:bg-primary hover:text-light select-none">
                                  Reviews
                                </div>
                                <div className="text-15 font-medium text-gray9 mr-30 whitespace-nowrap cursor-pointer px-30 py-10 !m-0 hover:bg-primary hover:text-light select-none">
                                  Listings
                                </div>
                                <div
                                  className="text-15 font-medium text-gray9 mr-30 whitespace-nowrap cursor-pointer px-30 py-10 !m-0 hover:bg-primary hover:text-light select-none"
                                  onClick={handleLogout}
                                >
                                  Logout
                                </div>
                              </div>
                            </Popover.Content>
                          </Popover>
                        </>
                      )}
                      {!currentUser && (
                        <li className="text-15 font-medium text-gray9 mr-30 cursor-pointer" onClick={() => setVisibleSignUp(visible => !visible)}>
                          Sign up
                        </li>
                      )}
                    </ul>
                    {!userData && (
                      <div
                        className="py-6 px-23 text-15 text-gray9 font-medium rounded-5 border-primary border-1 cursor-pointer"
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
                      title="Home"
                      visible={visibleAddListing}
                      variant="variant2"
                      navigation={
                        <div className="flex items-center flex-wrap">
                          <div className="text-14 font-medium text-primary border-b-2 border-primary px-20 py-5 cursor-pointer select-none">
                            Overview
                          </div>
                          <div
                            className="text-14 font-medium text-gray9 px-20 cursor-pointer hover:text-primary select-none"
                            onClick={() => {
                              setVisibleTerm(visible => !visible);
                              document.body.classList.add('scroll-hidden');
                            }}
                          >
                            Term of use
                          </div>
                          <div
                            className="flex justify-center items-center px-14 text-14 min-w-125 font-medium text-light bg-primary rounded-4 py-10 cursor-pointer select-none"
                            onClick={() => {
                              setVisibleTerm(visible => !visible);
                              document.body.classList.add('scroll-hidden');
                            }}
                          >
                            <i className="far fa-pen mr-10"></i>Get start
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
                      variant="variant2"
                      navigation={
                        <div className="flex items-center flex-wrap">
                          <div
                            className="text-14 font-medium text-gray9 hover:text-primary px-20 cursor-pointer"
                            onClick={() => setVisibleTerm(visible => !visible)}
                          >
                            Overview
                          </div>
                          <div className="text-14 font-medium  px-20 text-primary border-b-2 border-primary cursor-pointer py-5">Term of use</div>
                        </div>
                      }
                    >
                      <Section7 />
                      <Divider />
                      <Footer />
                    </Modal>
                  </div>
                </div>
              </div>
            </PopUp.Content>
          </PopUp>
        </div>
      </div>
    </div>
  );
};
