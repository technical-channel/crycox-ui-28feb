/** @format */

import { useLazyQuery, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { verifyEmailOtp } from "../../GraphQL/Queries/verifyEmailOtpAPI";

const Sendotp = (props) => {
     const [verifyOTPMAIL] = useLazyQuery(verifyEmailOtp);
     const [otp, setOTP] = useState();
     const navigate = useNavigate();
     const { email } = useParams();
     return (
          <>
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
                                        Verify Your OTP
                                   </h1>
                                   {/* <div className="bg-[#FFF9F4] py-2 text-center xl:w-[40%] w-full border border-[#A8A5A5] rounded-lg">
                <p className="text-[#3F3F3F] font-bold px-3">
                  Enter Your OTP Here
                </p>
              </div> */}
                              </div>
                              <div className="max-w-[600px] w-full ">
                                   {/* <div className="relative flex gap-10 mt-10 border-b w-full border-[#D8D6D6]">
              <div className="flex gap-[40px] border-b">
                {tabsData.map((tab, idx) => {
                  return (
                    <button
                      key={idx}
                      ref={(el) => (tabsRef.current[idx] = el)}
                      className="pt-2 pb-3 text-[16px] font-medium   focus:text-[#F1971F] "
                      onClick={() => setActiveTabIndex(idx)}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
              <span
                className="absolute bottom-0 block h-1 bg-[#F1971F] transition-all duration-300"
                style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
              />
            </div> */}
                                   {/* <div className="py-4 ">
              <p>{tabsData[activeTabIndex].content}</p>
            </div> */}

                                   <form
                                        onSubmit={(e) => {
                                             e.preventDefault();
                                             console.log(
                                                  "Comming From Proprs : ",
                                                  email
                                             );

                                             let data = {
                                                  // email: e.target[0].value,
                                                  // password: e.target[1].value,
                                                  email: email,
                                                  otp:
                                                       e.target[0].value +
                                                       e.target[1].value +
                                                       e.target[2].value +
                                                       e.target[3].value +
                                                       e.target[4].value +
                                                       e.target[5].value,
                                             };
                                             console.log(data);
                                             verifyOTPMAIL({
                                                  variables: data,
                                             }).then((res) => {
                                                  console.log(
                                                       "Response : ",
                                                       res.data.verifyEmailOTP
                                                  );
                                                  if (
                                                       res.data.verifyEmailOTP
                                                            .success == false
                                                  ) {
                                                       Swal.fire(
                                                            "Error",
                                                            "Invalid otp...!",
                                                            "error"
                                                       );
                                                  } else {
                                                       navigate(
                                                            "/resetpassword"
                                                       );
                                                  }
                                             });
                                        }}
                                   >
                                        <div>
                                             <div className="flex  gap-4 my-6">
                                                  <input
                                                       type="number"
                                                       id="number1"
                                                       className="border border-gray-300 md:text-[16px] text-[16px] text-black rounded-lg w-full px-2.5 py-3"
                                                       required
                                                       placeholder=""
                                                  />
                                                  <input
                                                       type="number"
                                                       id="number2"
                                                       className="border border-gray-300 md:text-[16px] text-[16px] text-black rounded-lg w-full px-2.5 py-3"
                                                       required
                                                       placeholder=""
                                                  />
                                                  <input
                                                       type="number"
                                                       id="number3"
                                                       className="border border-gray-300 md:text-[16px] text-[16px] text-black rounded-lg w-full px-2.5 py-3"
                                                       required
                                                       placeholder=""
                                                  />
                                                  <input
                                                       type="number"
                                                       id="number4"
                                                       className="border border-gray-300 md:text-[16px] text-[16px] text-black rounded-lg w-full px-2.5 py-3"
                                                       required
                                                       placeholder=""
                                                  />
                                                  <input
                                                       type="number"
                                                       id="number5"
                                                       className="border border-gray-300 md:text-[16px] text-[16px] text-black rounded-lg w-full px-2.5 py-3"
                                                       required
                                                       placeholder=""
                                                  />
                                                  <input
                                                       type="number"
                                                       id="number6"
                                                       className="border border-gray-300 md:text-[16px] text-[16px] text-black rounded-lg w-full px-2.5 py-3"
                                                       required
                                                       placeholder=""
                                                  />
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
                                                  {/* <Link to="/resetpassword"> */}
                                                  <button
                                                       type="submit"
                                                       className="text-white bg-[#F1971F] px-8 text-left font-medium rounded-lg text-md py-3 border border-[#A8A5A5]"
                                                  >
                                                       VERIFY OTP
                                                  </button>
                                                  {/* </Link> */}
                                             </div>
                                        </div>
                                   </form>
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
          </>
     );
};

export default Sendotp;
