/** @format */

import React, { useState, useEffect } from "react";
import { MetamaskExist } from "../../GraphQL/Queries/MetamaskexistApi";
import { TradeHistory } from "../../GraphQL/Queries/TradehistoryApi";
import { useQuery, useLazyQuery } from "@apollo/client";
import { Link } from "react-router-dom";
// import useAuth from "../hooks/useAuth";
// import useAuth from
import { useWeb3React } from "@web3-react/core";

const Tradepartner = () => {
     const { active, account } = useWeb3React();

     //   user exist or not function

     const { data, loading, error } = useQuery(MetamaskExist, {
          skip: !account,
          variables: { metamask: account },
     });

     //   tradehistory function
     let userid = data?.isMetamaskExist?.user[0]?.id;
     const {
          data: tardedatahistory,
          loading: floading,
          error: errors,
     } = useQuery(TradeHistory, {
          skip: !userid,
          variables: {
               user_id: userid,
          },
     });

     const Trade = tardedatahistory;

     useEffect(() => {
          if (active) {
               console.log(
                    "Metamask Data console:",
                    data?.isMetamaskExist?.user
               );
               console.log(
                    "Metamask Data console:",
                    data?.isMetamaskExist?.user[0].id
               );
          }
          console.log(Trade?.tradeByUserId?.trade, "Trade data here......");
          console.log(Trade);

          console.log(userid, "userid is here....");
     }, [data]);

     return (
          <>
               <div>
                    <div className="flex md:flex-row flex-col justify-between mt-1">
                         <div className="border p-5 rounded-lg text-center md:w-[45%] w-full">
                              <h5 className="text-[#FF0000] text-[16px]">
                                   Phone Number Not Verified
                              </h5>
                              <p className="text-[16px] py-4">
                                   Take a minute to verify your number
                              </p>
                              <Link
                                   to="/offer/securitysetting"
                                   className="text-[16px] text-[#000AFF]"
                              >
                                   Verify me
                              </Link>
                         </div>
                         <div className="border p-5 rounded-lg text-center md:w-[45%] w-full md:mt-0 mt-5">
                              <h5 className="text-[#FF0000] text-[16px]">
                                   2FA Not Enabled
                              </h5>
                              <p className="text-[16px] py-4">
                                   Enabling two-factor authentication is great
                                   way to secure your account.
                              </p>
                              <a
                                   className="text-[16px] text-[#000AFF]"
                                   href="./20-Security-Settings.html"
                              >
                                   Setup 2FA Now
                              </a>
                         </div>
                    </div>
                    {Trade?.tradeByUserId?.trade.map((data) => (
                         <section>
                              <div className="max-w-[1400px] mx-auto border rounded-lg p-5 mt-8">
                                   <div className="flex md:flex-row flex-col justify-between items-center">
                                        <div>
                                             <img src="/assets/Group.svg" alt />
                                        </div>
                                        <div>
                                             <h5 className="text-[16px] pb-5">
                                                  User name
                                             </h5>
                                             <a
                                                  href="23-my-profile.html"
                                                  className="text-[16px] text-[#000AFF] pt-8"
                                             >
                                                  {data.id}
                                             </a>
                                        </div>
                                        <div>
                                             <h5 className="text-[16px] text-center">
                                                  Result
                                             </h5>
                                             <p className="text-[16px] text-[#000AFF] flex items-center pt-8">
                                                  {data.trade_outcome}
                                             </p>
                                        </div>
                                        <div className="text-center mt-2">
                                             <h5 className="text-[16px]">
                                                  Trade Date
                                             </h5>
                                             <p className="text-[16px] pt-8">
                                                  {data.date_start_time}
                                             </p>
                                        </div>
                                   </div>
                              </div>
                         </section>
                    ))}
               </div>
          </>
     );
};

export default Tradepartner;
