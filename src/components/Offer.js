/** @format */

import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
// import useAuth from "../Hooks/useAuth";
import useAuth from "../hooks/useAuth";
import { useWeb3React } from "@web3-react/core";

function classNames(...classes) {
     return classes.filter(Boolean).join(" ");
}
const Offer = () => {
     const [Active, setActive] = useState(false);

     const { login, logout } = useAuth();
     const { active, account } = useWeb3React();

     useEffect(() => {
          window.scrollTo(0, 0);
     }, []);
     const [navbar, setNavbar] = useState(false);
     return (
          <div>
               <div>
                    <div className="">
                         <nav className="bg-white fixed top-0  w-full z-50 shadow border-gray-200 ">
                              <div className="justify-between px-4 mx-auto max-w-[1600px] md:items-center lg:flex md:px-8">
                                   <div>
                                        <div className="flex items-center justify-between py-1 lg:block">
                                             <Link
                                                  to="/"
                                                  className="text-[#0674BB] font-bold text-[25px]"
                                             >
                                                  <img
                                                       src="/assets/crycox-logo.png"
                                                       className="max-w-[150px]"
                                                  />
                                             </Link>
                                             <div className="lg:hidden">
                                                  <button
                                                       className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                                       onClick={() =>
                                                            setNavbar(!navbar)
                                                       }
                                                  >
                                                       {navbar ? (
                                                            <svg
                                                                 xmlns="http://www.w3.org/2000/svg"
                                                                 className="w-6 h-6 text-black"
                                                                 viewBox="0 0 20 20"
                                                                 fill="currentColor"
                                                            >
                                                                 <path
                                                                      fillRule="evenodd"
                                                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                                      clipRule="evenodd"
                                                                 />
                                                            </svg>
                                                       ) : (
                                                            <svg
                                                                 xmlns="http://www.w3.org/2000/svg"
                                                                 className="w-6 h-6 text-black"
                                                                 fill="none"
                                                                 viewBox="0 0 24 24"
                                                                 stroke="currentColor"
                                                                 strokeWidth={2}
                                                            >
                                                                 <path
                                                                      strokeLinecap="round"
                                                                      strokeLinejoin="round"
                                                                      d="M4 6h16M4 12h16M4 18h16"
                                                                 />
                                                            </svg>
                                                       )}
                                                  </button>
                                             </div>
                                        </div>
                                   </div>
                                   <div>
                                        <div
                                             className={`flex-1 justify-self-center pb-3 mt-8 lg:block  md:pb-0 md:mt-0 ${
                                                  navbar ? "block" : "hidden"
                                             }`}
                                        >
                                             <ul className="items-center justify-center  lg:flex gap-5">
                                                  <li className="text-black hover:text-indigo-200">
                                                       <NavLink
                                                            to="/offer/buy"
                                                            className={({
                                                                 isActive,
                                                            }) =>
                                                                 isActive
                                                                      ? "text-[16px]  text-[#F1971F] font-bold   "
                                                                      : "text-[16px]  text-black font-bold  "
                                                            }
                                                       >
                                                            Buy
                                                       </NavLink>
                                                  </li>
                                                  <li className="text-black hover:text-indigo-200">
                                                       <NavLink
                                                            to="/offer/sell"
                                                            className={({
                                                                 isActive,
                                                            }) =>
                                                                 isActive
                                                                      ? "text-[16px]  text-[#F1971F] font-bold    "
                                                                      : "text-[16px]  text-black font-bold  "
                                                            }
                                                       >
                                                            Sell
                                                       </NavLink>
                                                  </li>

                                                  <li className="text-black hover:text-indigo-200">
                                                       <NavLink
                                                            to="/offer/createoffer"
                                                            className={({
                                                                 isActive,
                                                            }) =>
                                                                 isActive
                                                                      ? "text-[16px]  text-[#F1971F] font-bold   "
                                                                      : "text-[16px]  text-black font-bold  "
                                                            }
                                                       >
                                                            Create An Offer
                                                       </NavLink>
                                                  </li>

                                                  <li className="text-black hover:text-indigo-200">
                                                       <NavLink
                                                            to="/offer/wallet"
                                                            className={({
                                                                 isActive,
                                                            }) =>
                                                                 isActive
                                                                      ? "text-[16px]  text-[#F1971F] font-bold   "
                                                                      : "text-[16px]  text-black font-bold  "
                                                            }
                                                       >
                                                            Wallet
                                                       </NavLink>
                                                  </li>

                                                  <li className="text-black hover:text-indigo-200">
                                                       <NavLink
                                                            to="/offer/dashboard"
                                                            className={({
                                                                 isActive,
                                                            }) =>
                                                                 isActive
                                                                      ? "text-[16px]  text-[#F1971F] font-bold   "
                                                                      : "text-[16px]  text-black font-bold  "
                                                            }
                                                       >
                                                            Dashboard
                                                       </NavLink>
                                                  </li>
                                                  <li>
                                                       <button
                                                            onClick={
                                                                 !active
                                                                      ? login
                                                                      : logout
                                                            }
                                                            className="my-3  bg-[#1D2937] text-white hover:bg-[#F1971F] lg:text-[15px] text-[16px] hover:text-white transition duration-300  focus:outline-none focus:ring-blue-300 font-bold rounded-[10px]  text-center border-2  px-2   min-w-[100px]"
                                                       >
                                                            {!active
                                                                 ? "Connect Wallet"
                                                                 : "Disconnect Wallet"}
                                                       </button>
                                                  </li>
                                             </ul>

                                             <NavLink to="/offer/settings">
                                                  <div className="mt-3 space-y-2 lg:hidden md:hidden">
                                                       <Menu
                                                            as="div"
                                                            className="relative inline-block text-left"
                                                       >
                                                            <div>
                                                                 <Menu.Button
                                                                      className="inline-flex w-full  items-center 
        border border-gray-100 items-center justify-content-center rounded-lg bg-gray-50 md:flex-row md:space-x-4 md:mt-0 md:text-md md:font-medium md:border-0 md:bg-white justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                                                                 >
                                                                      <div className="lg:text-[15px] text-[12px]  transition duration-300  focus:outline-none focus:ring-blue-300 font-bold rounded-[5px]  text-center  px-2  min-w-[100px]">
                                                                           <a className="text-black ">
                                                                                <div className="flex items-center">
                                                                                     RU...A@RAMLOGICS.COM
                                                                                     <span>
                                                                                          <img
                                                                                               src="/assets/user.png"
                                                                                               className="ml-2"
                                                                                          />
                                                                                     </span>
                                                                                </div>
                                                                                <a
                                                                                     className="text-[#FFC107] text-[12px]"
                                                                                     href="/"
                                                                                >
                                                                                     0.00
                                                                                     INR
                                                                                </a>
                                                                           </a>
                                                                      </div>

                                                                      <ChevronDownIcon
                                                                           className="-mr-1 ml-2 h-5 w-5"
                                                                           aria-hidden="true"
                                                                      />
                                                                 </Menu.Button>
                                                            </div>

                                                            <Transition
                                                                 as={Fragment}
                                                                 enter="transition ease-out duration-100"
                                                                 enterFrom="transform opacity-0 scale-95"
                                                                 enterTo="transform opacity-100 scale-100"
                                                                 leave="transition ease-in duration-75"
                                                                 leaveFrom="transform opacity-100 scale-100"
                                                                 leaveTo="transform opacity-0 scale-95"
                                                            >
                                                                 <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                                      <div className="py-1">
                                                                           <Menu.Item>
                                                                                {({
                                                                                     Active,
                                                                                }) => (
                                                                                     <a
                                                                                          href="/"
                                                                                          className={classNames(
                                                                                               Active
                                                                                                    ? "bg-gray-100 text-gray-900"
                                                                                                    : "text-gray-700",
                                                                                               "block px-4 py-2 text-sm"
                                                                                          )}
                                                                                     >
                                                                                          Account
                                                                                          settings
                                                                                     </a>
                                                                                )}
                                                                           </Menu.Item>
                                                                           <Menu.Item>
                                                                                {({
                                                                                     Active,
                                                                                }) => (
                                                                                     <a
                                                                                          href="/"
                                                                                          className={classNames(
                                                                                               Active
                                                                                                    ? "bg-gray-100 text-gray-900"
                                                                                                    : "text-gray-700",
                                                                                               "block px-4 py-2 text-sm"
                                                                                          )}
                                                                                     >
                                                                                          Support
                                                                                     </a>
                                                                                )}
                                                                           </Menu.Item>
                                                                           <Menu.Item>
                                                                                {({
                                                                                     Active,
                                                                                }) => (
                                                                                     <a
                                                                                          href="/"
                                                                                          className={classNames(
                                                                                               Active
                                                                                                    ? "bg-gray-100 text-gray-900"
                                                                                                    : "text-gray-700",
                                                                                               "block px-4 py-2 text-sm"
                                                                                          )}
                                                                                     >
                                                                                          License
                                                                                     </a>
                                                                                )}
                                                                           </Menu.Item>
                                                                           <form
                                                                                method="POST"
                                                                                action="#"
                                                                           >
                                                                                <Menu.Item>
                                                                                     {({
                                                                                          Active,
                                                                                     }) => (
                                                                                          <button
                                                                                               type="submit"
                                                                                               className={classNames(
                                                                                                    Active
                                                                                                         ? "bg-gray-100 text-gray-900"
                                                                                                         : "text-gray-700",
                                                                                                    "block w-full px-4 py-2 text-left text-sm"
                                                                                               )}
                                                                                          >
                                                                                               Sign
                                                                                               out
                                                                                          </button>
                                                                                     )}
                                                                                </Menu.Item>
                                                                           </form>
                                                                      </div>
                                                                 </Menu.Items>
                                                            </Transition>
                                                       </Menu>
                                                  </div>
                                             </NavLink>
                                        </div>
                                   </div>

                                   <NavLink to="/offer/settings">
                                        <div className="hidden space-x-2 lg:inline-block">
                                             <Menu
                                                  as="div"
                                                  className="relative inline-block text-left"
                                             >
                                                  <div>
                                                       <Menu.Button className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700  my-2">
                                                            <div className="lg:text-[15px] text-[12px]  transition duration-300  focus:outline-none focus:ring-blue-300 font-bold rounded-[5px]  text-center  px-2  min-w-[100px]">
                                                                 <a
                                                                      href="19-Account-setting.html"
                                                                      className="text-black "
                                                                 >
                                                                      <div className="flex items-center">
                                                                           RU...A@RAMLOGICS.COM
                                                                           <span>
                                                                                <img
                                                                                     src="/assets/user.png"
                                                                                     className="ml-2"
                                                                                />
                                                                           </span>
                                                                      </div>
                                                                      <a
                                                                           className="text-[#FFC107] text-[12px]"
                                                                           href="/"
                                                                      >
                                                                           0.00
                                                                           INR
                                                                      </a>
                                                                 </a>
                                                            </div>

                                                            <ChevronDownIcon
                                                                 className="-mr-1 ml-2 h-5 w-5"
                                                                 aria-hidden="true"
                                                            />
                                                       </Menu.Button>
                                                  </div>

                                                  <Transition
                                                       as={Fragment}
                                                       enter="transition ease-out duration-100"
                                                       enterFrom="transform opacity-0 scale-95"
                                                       enterTo="transform opacity-100 scale-100"
                                                       leave="transition ease-in duration-75"
                                                       leaveFrom="transform opacity-100 scale-100"
                                                       leaveTo="transform opacity-0 scale-95"
                                                  >
                                                       <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                            <div className="py-1">
                                                                 <Menu.Item>
                                                                      {({
                                                                           Active,
                                                                      }) => (
                                                                           <a
                                                                                href="/"
                                                                                className={classNames(
                                                                                     Active
                                                                                          ? "bg-gray-100 text-gray-900"
                                                                                          : "text-gray-700",
                                                                                     "block px-4 py-2 text-sm"
                                                                                )}
                                                                           >
                                                                                Account
                                                                                settings
                                                                           </a>
                                                                      )}
                                                                 </Menu.Item>
                                                                 <Menu.Item>
                                                                      {({
                                                                           Active,
                                                                      }) => (
                                                                           <a
                                                                                href="/"
                                                                                className={classNames(
                                                                                     Active
                                                                                          ? "bg-gray-100 text-gray-900"
                                                                                          : "text-gray-700",
                                                                                     "block px-4 py-2 text-sm"
                                                                                )}
                                                                           >
                                                                                Support
                                                                           </a>
                                                                      )}
                                                                 </Menu.Item>
                                                                 <Menu.Item>
                                                                      {({
                                                                           Active,
                                                                      }) => (
                                                                           <a
                                                                                href="/"
                                                                                className={classNames(
                                                                                     Active
                                                                                          ? "bg-gray-100 text-gray-900"
                                                                                          : "text-gray-700",
                                                                                     "block px-4 py-2 text-sm"
                                                                                )}
                                                                           >
                                                                                License
                                                                           </a>
                                                                      )}
                                                                 </Menu.Item>
                                                                 <form
                                                                      method="POST"
                                                                      action="#"
                                                                 >
                                                                      <Menu.Item>
                                                                           {({
                                                                                Active,
                                                                           }) => (
                                                                                <button
                                                                                     type="submit"
                                                                                     className={classNames(
                                                                                          Active
                                                                                               ? "bg-gray-100 text-gray-900"
                                                                                               : "text-gray-700",
                                                                                          "block w-full px-4 py-2 text-left text-sm"
                                                                                     )}
                                                                                >
                                                                                     Sign
                                                                                     out
                                                                                </button>
                                                                           )}
                                                                      </Menu.Item>
                                                                 </form>
                                                            </div>
                                                       </Menu.Items>
                                                  </Transition>
                                             </Menu>
                                        </div>
                                   </NavLink>
                              </div>
                         </nav>
                    </div>

                    <Outlet />
                    <Footer />
               </div>
          </div>
     );
};

export default Offer;
