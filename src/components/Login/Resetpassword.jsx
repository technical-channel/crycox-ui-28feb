/** @format */

import { useMutation } from "@apollo/client";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { resetChangePasswordAPI } from "../../GraphQL/Mutations/resetPasswordAPI";

const Resetpassword = () => {
     const [changePassword] = useMutation(resetChangePasswordAPI);
     const navigate = useNavigate();
     return (
          <>
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
                                        Confirm Password
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
                                                  if (
                                                       e.target[0].value !=
                                                       e.target[1].value
                                                  ) {
                                                       Swal.fire(
                                                            "Error",
                                                            "Password and Confirm Password not match",
                                                            "error"
                                                       );
                                                  } else {
                                                       let data = {
                                                            id: "63e60e70a5571474ca0cc172",
                                                            password:
                                                                 e.target[0]
                                                                      .value,
                                                       };
                                                       console.log(
                                                            "Data to graphql : ",
                                                            data
                                                       );
                                                       changePassword({
                                                            variables: data,
                                                       }).then((res) => {
                                                            console.log(
                                                                 "Response : ",
                                                                 res
                                                            );
                                                            if (
                                                                 res.data
                                                                      .changePassword
                                                                      .success ==
                                                                 false
                                                            ) {
                                                                 Swal.fire(
                                                                      "Error",

                                                                      res.data
                                                                           .changePassword
                                                                           .errors[0],
                                                                      "error"
                                                                 );
                                                            } else {
                                                                 navigate(
                                                                      "/login"
                                                                 );
                                                            }
                                                       });
                                                  }
                                             }}
                                        >
                                             <div className="mb-10">
                                                  <div className="flex justify-between">
                                                       <label
                                                            htmlFor="password"
                                                            className="block mb-2 text-[#3F3F3F] font-bold  text-sm "
                                                       >
                                                            Password
                                                       </label>
                                                       {/* <Link
                        to="/forgotpassword"
                        className="text-[15px] text-[#F1971F]"
                      >
                        Forget Password?
                      </Link> */}
                                                  </div>
                                                  <input
                                                       type="password"
                                                       id="password"
                                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full px-2.5 py-4"
                                                       required
                                                  />

                                                  <div className="flex justify-between mt-3">
                                                       <label
                                                            htmlFor="password"
                                                            className="block mb-2 text-[#3F3F3F] font-bold  text-sm "
                                                       >
                                                            Confirm Password
                                                       </label>
                                                       {/* <Link
                        to="/forgotpassword"
                        className="text-[15px] text-[#F1971F]"
                      >
                        Forget Password?
                      </Link> */}
                                                  </div>
                                                  <input
                                                       type="password"
                                                       id="confirm password"
                                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full px-2.5 py-4"
                                                       required
                                                  />
                                             </div>
                                             <div className="flex justify-center">
                                                  <button
                                                       type="submit"
                                                       className="text-white bg-[#F1971F] px-8 text-left font-medium rounded-lg text-md py-3 border border-[#A8A5A5]"
                                                  >
                                                       Reset Password
                                                  </button>
                                             </div>
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
          </>
     );
};

export default Resetpassword;
