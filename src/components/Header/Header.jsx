/** @format */

import { useWeb3React } from "@web3-react/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const Header = () => {
     const [navbar, setNavbar] = useState(false);
     const { login, logout } = useAuth();
     const { library, account, active, chainId } = useWeb3React();

     function metmaskLogin() {
          if (window.ethereum) {
               if (active) {
                    logout();
               } else {
                    login();
               }
               //  !active ? login : logout;
          } else {
               Swal.fire(
                    "Error",
                    "Please install metamask extension!!",
                    "error"
               );
          }
     }

     return (
          <nav className="bg-white fixed lg:py-0 top-0 w-full z-50 shadow border-gray-200 px-2 sm:px-4 ">
               <div className="justify-between px-4 mx-auto max-w-[1600px] md:items-center md:flex md:px-8">
                    <div>
                         <div className="flex items-center justify-between py-3 md:py-5 md:block">
                              <a
                                   href=""
                                   className="text-[#0674BB] font-bold text-[25px]"
                              >
                                   <img
                                        src="/assets/crycox-logo.png"
                                        className="max-w-[150px]"
                                   />
                              </a>
                              <div className="md:hidden">
                                   <button
                                        className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                        onClick={() => setNavbar(!navbar)}
                                   >
                                        {navbar ? (
                                             <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="w-6 h-6"
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
                                                  className="w-6 h-6"
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
                              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                                   navbar ? "block" : "hidden"
                              }`}
                         >
                              <ul className="flex flex-col border border-gray-100 items-center justify-content-center rounded-lg bg-gray-50 md:flex-row md:space-x-4 md:mt-0 md:text-md md:font-medium md:border-0 md:bg-white">
                                   <li>
                                        <Link
                                             to="/offer/createoffer"
                                             className="my-3 lg:text-[18px] text-[15px]   transition duration-300  focus:outline-none focus:ring-blue-300 font-bold rounded-[5px]  text-center  px-2 py-2 min-w-[100px]"
                                             aria-current="page"
                                        >
                                             Create an Offer
                                        </Link>
                                   </li>
                                   {/* <li className="my-3 lg:text-[18px] text-[15px]  transition duration-300  focus:outline-none focus:ring-blue-300 font-bold rounded-[5px]  text-center  px-2 py-2 min-w-[100px]">
                                        <Link
                                             to="/login"
                                             className="text-black "
                                        >
                                             <div className="flex items-center">
                                                  Login
                                                  <span>
                                                       <img
                                                            src="assets/icon-login.svg"
                                                            className="ml-2"
                                                       />
                                                  </span>
                                             </div>
                                        </Link>
                 </li>
                 
                  */}
                                   <button
                                        onClick={metmaskLogin}
                                        className="my-3  bg-[#1D2937] text-white hover:bg-[#F1971F] lg:text-[15px] text-[16px] hover:text-white transition duration-300  focus:outline-none focus:ring-blue-300 font-bold rounded-[10px]  text-center border-2  px-2   min-w-[100px]"
                                   >
                                        {!active
                                             ? "Connect Wallet"
                                             : "Disconnect Wallet"}
                                   </button>
                                   <li className="my-3  bg-[#1D2937] text-white hover:bg-[#F1971F] lg:text-[15px] text-[16px] hover:text-white transition duration-300  focus:outline-none focus:ring-blue-300 font-bold rounded-[10px]  text-center border-2  px-2   min-w-[100px]">
                                        <Link
                                             to="/signup"
                                             className=" text-white hover:text-white"
                                        >
                                             Register
                                        </Link>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </div>
          </nav>
     );
};

export default Header;
