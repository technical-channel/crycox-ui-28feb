/** @format */

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { sendEmailOTPAPI } from "../../GraphQL/Mutations/emailOTPSendAPI";
import { useMutation } from "@apollo/client";
import Swal from "sweetalert2";
const ForgotPassword = () => {
     const [emailOtpSend] = useMutation(sendEmailOTPAPI);
     const navigate = useNavigate();

     const [activeTabIndex, setActiveTabIndex] = useState(0);
     const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
     const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

     const tabsRef = useRef([]);

     useEffect(() => {
          function setTabPosition() {
               const currentTab = tabsRef.current[activeTabIndex];
               setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
               setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
          }
          setTabPosition();
          window.addEventListener("resize", setTabPosition);

          return () => window.removeEventListener("resize", setTabPosition);
     }, [activeTabIndex]);
     const tabsData = [
          {
               // label: "Mobile",
               label: "Email",
               content: (
                    <>
                         <div>
                              <form
                                   onSubmit={(e) => {
                                        console.log("Form just submit");
                                        e.preventDefault();
                                        let data = {
                                             email: e.target[0].value,
                                        };
                                        console.log(data);
                                        emailOtpSend({
                                             variables: data,
                                        }).then((res) => {
                                             console.log("Response : ", res);
                                             if (
                                                  res.data.sendEmailOTP
                                                       .success == false
                                             ) {
                                                  Swal.fire(
                                                       "Error",
                                                       res.data.sendEmailOTP
                                                            .message[0],
                                                       "error"
                                                  );
                                             } else {
                                                  navigate(
                                                       `/sendotp/${e.target[0].value}`
                                                  );
                                             }
                                        });
                                   }}
                              >
                                   <div className="my-6">
                                        <input
                                             type="email"
                                             id="email"
                                             l
                                             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full px-2.5 py-4"
                                             required
                                        />
                                        {/* <input
                type="email"
                id="email"
                className="border border-gray-300 md:text-[16px] text-[16px] text-black rounded-lg w-full px-2.5 py-3"
                required
                placeholder="Email"
              /> */}
                                   </div>
                                   {/* <div className="mb-10">
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 md:text-[16px] text-[16px] text-black rounded-lg w-full px-2.5 py-3"
                required
                placeholder="OTP"
              />
            </div> */}
                                   <div className="flex justify-center">
                                        {/* <Link to="/sendotp"> */}
                                        <button
                                             type="submit"
                                             className="text-white bg-[#F1971F] px-8 text-left font-medium rounded-lg text-md py-3 border border-[#A8A5A5]"
                                        >
                                             SEND OTP
                                        </button>
                                        {/* </Link> */}
                                   </div>
                              </form>
                         </div>
                    </>
               ),
          },
          // {
          //   label: "Mobile",
          //   content: (
          //     <>
          //       <div>
          //         <div className="my-6">
          //           <input
          //             type="email"
          //             id="email"
          //             className="border border-gray-300 md:text-[16px] text-[16px] text-black rounded-lg w-full px-2.5 py-3"
          //             required
          //             placeholder="New Password"
          //           />
          //         </div>
          //         <div className="mb-10">
          //           <input
          //             type="password"
          //             id="password"
          //             className="bg-gray-50 border border-gray-300 md:text-[16px] text-[16px] text-black rounded-lg w-full px-2.5 py-3"
          //             required
          //             placeholder="Confirm Password"
          //           />
          //         </div>
          //         <div className="flex justify-center mb-10">
          //           <button
          //             type="submit"
          //             className="px-8 text-left font-medium rounded-lg text-md py-3 border border-[#A8A5A5]"
          //           >
          //             Send Otp
          //           </button>
          //         </div>
          //       </div>
          //     </>
          //   ),
          // },
     ];
     return (
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

               <section className="md:mt-[100px] mt-[200px] mt-[20px] px-2">
                    <div className="xl:mx-0 mx-auto xl:max-w-full bg-white mb-6 m-5 xl:pl-[100px] rounded md:max-w-[800px] px-5">
                         <div>
                              <h1 className="md:text-[30px] text-[20px] md:pb-10 pb-[20px]">
                                   Reset Your Password
                              </h1>
                              <div className="bg-[#FFF9F4] py-2 text-center xl:w-[35%] w-full border border-[#A8A5A5] rounded-lg">
                                   <p className="text-[#3F3F3F] font-bold px-3">
                                        Enter your email address to reset your
                                        password.
                                   </p>
                              </div>
                         </div>
                         <div className="max-w-[600px] w-full ">
                              <div className="relative flex gap-10 mt-10 border-b w-full border-[#D8D6D6]">
                                   <div className="flex gap-[40px] border-b">
                                        {tabsData.map((tab, idx) => {
                                             return (
                                                  <button
                                                       key={idx}
                                                       ref={(el) =>
                                                            (tabsRef.current[
                                                                 idx
                                                            ] = el)
                                                       }
                                                       className="pt-2 pb-3 text-[16px] font-medium   focus:text-[#F1971F] "
                                                       onClick={() =>
                                                            setActiveTabIndex(
                                                                 idx
                                                            )
                                                       }
                                                  >
                                                       {tab.label}
                                                  </button>
                                             );
                                        })}
                                   </div>
                                   <span
                                        className="absolute bottom-0 block h-1 bg-[#F1971F] transition-all duration-300"
                                        style={{
                                             left: tabUnderlineLeft,
                                             width: tabUnderlineWidth,
                                        }}
                                   />
                              </div>
                              <div className="py-4 ">
                                   <p>{tabsData[activeTabIndex].content}</p>
                              </div>
                         </div>
                    </div>
                    <div class="fixed right-0 bottom-0 xl:block hidden">
                         <img
                              class="h-[700px]"
                              src="/assets/Group 37105.svg"
                              alt=""
                         />
                    </div>
               </section>
          </div>
     );
};

export default ForgotPassword;
