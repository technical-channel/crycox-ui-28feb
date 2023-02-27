/** @format */

import { useMutation } from "@apollo/client";
import { useWeb3React } from "@web3-react/core";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { signUpAPI } from "../../GraphQL/Mutations/signUpAPI";
import useAuth from "../../hooks/useAuth";

const Signup = () => {
     const { login, logout } = useAuth();
     const { library, account, active, chainId } = useWeb3React();
     const [signUpUser, { data, loading, error }] = useMutation(signUpAPI);
     const navigate = useNavigate();
     return (
          <>
               <div>
                    <div>
                         <div>
                              <section>
                                   <div className="max-w-[1600px] mx-auto px-5 py-8">
                                        <Link
                                             to="/"
                                             className="text-[#0674BB] font-bold text-[16px]"
                                        >
                                             <img
                                                  src="assets/crycox-logo.png"
                                                  className="max-w-[150px]"
                                             />
                                        </Link>
                                   </div>
                              </section>
                              <section className="md:md:mt-[100px] mt-[100px] mt-[20px]">
                                   <div className="mx-auto max-w-[1600px] p-5">
                                        <div className="flex md:flex-row flex-col justify-between">
                                             <div className="z-10 bg-white px-4 rounded-md xl:mx-0 mx-auto py-5 mb-6 xl:w-[40%] pb-8 md:w-[70%] w-full">
                                                  <h1 className="md:text-[30px] text-[20px] ">
                                                       Create Your Account
                                                  </h1>
                                                  <div className="mt-4">
                                                       <form
                                                            onSubmit={(e) => {
                                                                 e.preventDefault();
                                                                 if (
                                                                      active ==
                                                                      false
                                                                 ) {
                                                                      if (
                                                                           window.ethereum
                                                                      ) {
                                                                           // Do something
                                                                           login();
                                                                      } else {
                                                                           Swal.fire(
                                                                                "Error",
                                                                                "Please install metamask extension!!",
                                                                                "error"
                                                                           );
                                                                      }
                                                                 } else {
                                                                      console.log(
                                                                           "library, account, active, chainId : ",
                                                                           library,
                                                                           account,
                                                                           active,
                                                                           chainId
                                                                      );
                                                                      let data =
                                                                           {
                                                                                email: e
                                                                                     .target[0]
                                                                                     .value,
                                                                                username:
                                                                                     e
                                                                                          .target[1]
                                                                                          .value,
                                                                                password:
                                                                                     e
                                                                                          .target[2]
                                                                                          .value,
                                                                                metamask:
                                                                                     account,
                                                                           };
                                                                      console.log(
                                                                           data
                                                                      );
                                                                      if (
                                                                           e
                                                                                .target[2]
                                                                                .value ==
                                                                           e
                                                                                .target[3]
                                                                                .value
                                                                      ) {
                                                                           signUpUser(
                                                                                {
                                                                                     variables:
                                                                                          data,
                                                                                }
                                                                           ).then(
                                                                                (
                                                                                     res
                                                                                ) => {
                                                                                     console.log(
                                                                                          "Sucess : ",
                                                                                          res
                                                                                               .data
                                                                                               .registerUser
                                                                                               .success
                                                                                     );
                                                                                     if (
                                                                                          res
                                                                                               .data
                                                                                               .registerUser
                                                                                               .success ==
                                                                                          false
                                                                                     ) {
                                                                                          Swal.fire(
                                                                                               "Error",

                                                                                               res
                                                                                                    .data
                                                                                                    .registerUser
                                                                                                    .errors[0],
                                                                                               "error"
                                                                                          );
                                                                                     } else {
                                                                                          Swal.fire(
                                                                                               "Contracts",
                                                                                               "Login into account!",
                                                                                               "success"
                                                                                          );
                                                                                          navigate(
                                                                                               "/offer/dashboard"
                                                                                          );
                                                                                     }
                                                                                }
                                                                           );
                                                                      } else {
                                                                           Swal.fire(
                                                                                "Error",

                                                                                "Both Passwords are not match",
                                                                                "error"
                                                                           );
                                                                      }
                                                                 }
                                                            }}
                                                       >
                                                            <div className="py-5">
                                                                 <label
                                                                      htmlFor="email"
                                                                      className="block mb-2 text-sm font-bold text-[#3F3F3F] "
                                                                 >
                                                                      {" "}
                                                                      Email
                                                                      Address
                                                                 </label>
                                                                 <input
                                                                      type="email"
                                                                      id="email"
                                                                      className=" border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full px-2.5 py-5 "
                                                                      required
                                                                 />
                                                            </div>

                                                            <div className="py-5">
                                                                 <label
                                                                      htmlFor="username"
                                                                      className="block mb-2 text-sm font-bold text-[#3F3F3F] "
                                                                 >
                                                                      {" "}
                                                                      Username
                                                                 </label>
                                                                 <input
                                                                      type="text"
                                                                      id="username"
                                                                      className=" border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full px-2.5 py-5 "
                                                                      required
                                                                 />
                                                            </div>

                                                            <div>
                                                                 <div className="pb-5">
                                                                      <label
                                                                           htmlFor="password"
                                                                           className="block mb-2 text-sm font-bold text-[#3F3F3F]"
                                                                      >
                                                                           Password
                                                                      </label>
                                                                      <input
                                                                           type=" confirm password"
                                                                           id="password"
                                                                           className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg  block w-full px-2.5 py-5"
                                                                           required
                                                                      />
                                                                 </div>

                                                                 <div className="pb-5">
                                                                      <label
                                                                           htmlFor="password"
                                                                           className="block mb-2 text-sm font-bold text-[#3F3F3F]"
                                                                      >
                                                                           {" "}
                                                                           Confirm
                                                                           Password
                                                                      </label>
                                                                      <input
                                                                           type="password"
                                                                           id="password"
                                                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full px-2.5 py-5"
                                                                           required
                                                                      />
                                                                 </div>
                                                            </div>

                                                            {/* <div className="w-full mx-auto">
                                                                 <ReCaptach />
                                                            </div> */}

                                                            <button
                                                                 type="submit"
                                                                 className="text-[white] bg-[#F1971F]  px-8 text-left font-bold rounded-lg text-sm py-5 w-full"
                                                            >
                                                                 {!active
                                                                      ? "Connect Wallet"
                                                                      : "Create Account"}
                                                            </button>

                                                            <p className="text-[15px] text-[#3F3F3F] pt-6">
                                                                 Already on
                                                                 Crycox?
                                                                 <Link
                                                                      to="/login"
                                                                      className="text-[#F1971F] text-[15px]"
                                                                 >
                                                                      Login
                                                                 </Link>
                                                            </p>
                                                            {/* <div className="mt-[30px] border-t-2 pt-6 border-[#000]">
                <p className="text-[15px]">By continuing you agree to Crycox <a className="text-[15px] text-[#0695C2]" href="/">Terms of Service, Affiliate Program
                    Terms
                    of Service, and Privacy Notice. </a></p>
              </div> */}
                                                       </form>
                                                  </div>
                                             </div>
                                             <div className="fixed xl:block hidden right-0 bottom-0 lg:opacity-100 opacity-10">
                                                  <img
                                                       className="xl:h-[600px] h-[300px]"
                                                       src="/assets/login.png"
                                                       alt
                                                  />
                                             </div>
                                        </div>
                                   </div>
                              </section>
                         </div>
                    </div>
               </div>
          </>
     );
};

export default Signup;

export const ReCaptach = () => {
     const [verfied, setVerifed] = useState(false);

     function onChange(value) {
          console.log("Captcha value:", value);
          setVerifed(true);
     }

     return (
          <div className="flex flex-col items-center justify-center px-5 pb-5">
               <ReCAPTCHA
                    sitekey="6LfPF2MkAAAAAFrD95Vv9R3cELKdDyUd9rqPWvLK"
                    onChange={onChange}
               />
          </div>
     );
};
