/** @format */

import { useMutation } from "@apollo/client";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { loginAPI } from "../../GraphQL/Mutations/loginAPI";

const Login = () => {
     const [loginUser] = useMutation(loginAPI);
     const navigate = useNavigate();
     return (
          <>
               <div>
                    <div>
                         <div>
                              <section>
                                   <div className="max-w-[1600px] mx-auto p-5 py-8">
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
                              <section className="md:mt-[0px] xl:mt-[100px] mt-[20px]  px-2">
                                   <div className="mx-auto max-w-[1600px] p-5">
                                        <div className="flex md:flex-row flex-col justify-between">
                                             <div className="z-10 xl:w-[50%] md:w-[70%] bg-white py-6 px-4 md:px-0 w-full xl:mx-0 mx-auto rounded md:px-4 px-4">
                                                  <h1 className="md:text-[30px] text-[20px] md:pb-10 pb-[20px] xl:text-left text-center font-bold">
                                                       Log In With Crycox
                                                  </h1>
                                                  {/* <div className="flex xl:flex-row md:relative flex-col gap-8 bg-[#FFF9F4] py-6 px-4 border border-[#A8A5A5] rounded-lg">
            <div className="sm:pr-[200px]">
              <h2 className="text-[15px] text-[#3F3F3F]">IMPORTANT!</h2>
              <p className="pt-1 text-[15px] pr-[50px] text-[#3F3F3F]">Please check that you are visiting https://accounts.crycox.com/</p>
            </div>
            <div>
              <a className="text-[15px] md:mb-0 mb-5 md:absolute right-[10px] top-[25%] text-white py-[10px] bg-[#F1971F] px-[25px] rounded-lg" href="index.html">https://accounts.crycox.com</a>
            </div>
          </div> */}
                                                  <div className="mt-10">
                                                       <form
                                                            onSubmit={(e) => {
                                                                 e.preventDefault();
                                                                 let data = {
                                                                      email: e
                                                                           .target[0]
                                                                           .value,
                                                                      password:
                                                                           e
                                                                                .target[1]
                                                                                .value,
                                                                 };
                                                                 console.log(
                                                                      data
                                                                 );
                                                                 loginUser({
                                                                      variables:
                                                                           data,
                                                                 }).then(
                                                                      (res) => {
                                                                           if (
                                                                                res
                                                                                     .data
                                                                                     .userLogin
                                                                                     .success ==
                                                                                false
                                                                           ) {
                                                                                Swal.fire(
                                                                                     "Error",

                                                                                     res
                                                                                          .data
                                                                                          .userLogin
                                                                                          .errors[0],
                                                                                     "error"
                                                                                );
                                                                           } else {
                                                                                navigate(
                                                                                     "/offer/dashboard"
                                                                                );
                                                                           }
                                                                      }
                                                                 );
                                                            }}
                                                       >
                                                            <div className="mb-6">
                                                                 <label
                                                                      htmlFor="email"
                                                                      className="block mb-2 text-sm font-bold text-[#3F3F3F]"
                                                                 >
                                                                      {" "}
                                                                      Email
                                                                      Address
                                                                 </label>
                                                                 <input
                                                                      type="email"
                                                                      id="email"
                                                                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                                                      className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full px-2.5 py-4"
                                                                      required
                                                                 />
                                                            </div>
                                                            <div className="mb-10">
                                                                 <div className="flex justify-between">
                                                                      <label
                                                                           htmlFor="password"
                                                                           className="block mb-2 text-[#3F3F3F] font-bold  text-sm "
                                                                      >
                                                                           Password
                                                                      </label>
                                                                      <Link
                                                                           to="/forgotpassword"
                                                                           className="text-[15px] text-[#F1971F]"
                                                                      >
                                                                           Forget
                                                                           Password?
                                                                      </Link>
                                                                 </div>
                                                                 <input
                                                                      type="password"
                                                                      id="password"
                                                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full px-2.5 py-4"
                                                                      required
                                                                 />
                                                            </div>
                                                            {/* <div className="w-full bg-[#F1971F] px-8 py-4 flex justify-center rounded-lg"> */}
                                                            <button
                                                                 type="submit"
                                                                 className="w-full bg-[#F1971F] px-8 py-4 flex justify-center rounded-lg text-white  font-medium rounded-lg uppercase text-center text-sm"
                                                            >
                                                                 Login
                                                            </button>

                                                            {/* <Link
                                                                      to="/offer/dashboard"
                                                                      className="text-white  font-medium rounded-lg uppercase text-center text-sm"
                                                                 >
                                                                      Login
                                                                 </Link> */}
                                                            {/* </div> */}
                                                            <p className="text-[15px] text-[#3F3F3F] lg:text-left text-center pt-6">
                                                                 New on Crycox?{" "}
                                                                 <Link
                                                                      to="/signup"
                                                                      className="text-[#F1971F] text-[15px]"
                                                                 >
                                                                      Create an
                                                                      account
                                                                 </Link>
                                                            </p>
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

export default Login;
