/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useQuery, useLazyQuery } from "@apollo/client";
import { TradeHistory } from "../../GraphQL/Queries/TradehistoryApi";
import { MetamaskExist } from "../../GraphQL/Queries/MetamaskexistApi";

import { useWeb3React } from "@web3-react/core";

const Tradehistory = () => {
     const { active, account } = useWeb3React();

     //   user exist or not function

     const { data, loading, error } = useQuery(MetamaskExist, {
          skip: !account,
          variables: { metamask: account },
     });

     //   tradehistory function
     let userid = data?.isMetamaskExist?.user[0]?.id;

     const {
          data: Trade,
          loading: floading,
          error: errors,
     } = useQuery(TradeHistory, {
          skip: !userid,
          variables: {
               user_id: userid,
          },
     });

     useEffect(() => {
          if (active) {
               console.log(
                    "Metamask Data console:",
                    data?.isMetamaskExist?.user
               );
               console.log(
                    "Metamask Data console Uset id:",
                    data?.isMetamaskExist?.user[0].id
               );
          }
          console.log(Trade?.tradeByUserId?.trade, "Trade data here......");
          console.log(Trade);

          console.log(userid, "userid is here....");
     }, [loading, floading]);

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
                    <section>
                         <div className="max-w-[1400px] mx-auto border p-5 rounded-lg mt-10">
                              <p className="text-[16px]">
                                   You are viewing all trades till now
                              </p>
                              <div className="flex justify-between border rounded-lg p-3 mt-4">
                                   <p className="text-[16px] font-bold">
                                        Filters
                                   </p>
                                   <img src="/assets/filter 1.svg" alt />
                              </div>
                              {/* <div className="flex justify-between border rounded-lg p-3 mt-4">
                                   <p className="text-[16px] font-bold">
                                        Completed Trades: 0% (trades out of 0)
                                   </p>
                                   <img
                                        src="/assets/Vector 10.svg"
                                        alt
                                        className="w-4 ml-2"
                                   />
                              </div> */}

                              <div className="border rounded-lg p-3 mt-4">
                                   {/* <div className="flex md:flex-row flex-col justify-between mt-4 border-b pb-8">
                                        <div>
                                             <p className="text-[16px] font-bold">
                                                  My Past Trades
                                             </p>
                                             <p className="text-[16px]">
                                                  Tue, 18 Feb 2023 12:59:00 GMT
                                             </p>
                                        </div>
                                        <div className="flex md:flex-row flex-col gap-8 md:mt-0 mt-5">
                                             <a
                                                  className="text-[16px] flex justify-between text-[#AEAEAE] px-[40px] rounded-lg py-[10px] border-2 border-[#AEAEAE]"
                                                  href="/"
                                             >
                                                  Export Trades{" "}
                                                  <span className="pl-3">
                                                       <img
                                                            src="/assets/export copy 2.svg"
                                                            alt
                                                       />
                                                  </span>
                                             </a>
                                             <a
                                                  className="text-[16px] flex justify-between text-[#AEAEAE] px-[40px] rounded-lg py-[10px] border-2 border-[#AEAEAE]"
                                                  href="/"
                                             >
                                                  Copy Details{" "}
                                                  <span className="pl-3">
                                                       <img
                                                            src="/assets/copy02 1.svg"
                                                            alt
                                                       />
                                                  </span>
                                             </a>
                                        </div>
                                   </div> */}

                                   {Trade?.tradeByUserId?.success ? (
                                        <>
                                             {Trade?.tradeByUserId?.trade?.map(
                                                  (data) => (
                                                       <div className="flex md:flex-row flex-col justify-between mt-8">
                                                            <div className>
                                                                 <h5 className="text-[16px] pb-6 font-bold">
                                                                      Bank
                                                                      Transfer
                                                                 </h5>
                                                                 <div className="flex md:flex-row flex-col md:items-center items-start md:gap-8 gap-3">
                                                                      <div className="flex items-center">
                                                                           <img
                                                                                src="/assets/bitcoin 1.svg"
                                                                                alt
                                                                           />
                                                                           <p className="text-[16px] pl-4">
                                                                                {
                                                                                     data.trade_type
                                                                                }
                                                                           </p>
                                                                      </div>
                                                                      <p className="text-[16px] text-[#000AFF]">
                                                                           {
                                                                                data.seller_id
                                                                           }
                                                                      </p>
                                                                      <h4 className="text-[16px]">
                                                                           {
                                                                                data.date_start_time
                                                                           }
                                                                      </h4>
                                                                 </div>
                                                                 <div className="flex md:flex-row flex-col md:gap-8 gap-3 md:items-center items-start mt-6">
                                                                      <div className="flex">
                                                                           <h4 className="text-[16px]">
                                                                                Trade:
                                                                           </h4>
                                                                           <p className="text-[16px] text-[#000AFF]">
                                                                                {
                                                                                     data.id
                                                                                }
                                                                           </p>
                                                                      </div>
                                                                      <div className="flex">
                                                                           <h4 className="text-[16px]">
                                                                                Offer:
                                                                           </h4>
                                                                           <p className="text-[16px] text-[#000AFF]">
                                                                                {/* {data.offer_id} */}
                                                                                {
                                                                                     data.offer_id
                                                                                }
                                                                           </p>
                                                                      </div>
                                                                 </div>
                                                                 {/* <p class="flex items-center text-[16px]"><span class="mr-4"><img src="/assets/bitcoin 1.svg" alt=""></span>Buy <span class="px-6 text-[#000AFF]">TimelyAni650</span> <span>Jan 2, 2023, 5:20 PM</span></p>
                          <p class="flex md:flex-row flex-col items-center text-[16px]">Trade: <span class="pl-6 text-[#000AFF]">gbcgbgbgb</span> <span class="pl-6">Offer:</span> <span class="pl-3 text-[#000AFF]">gbcgbgbgb</span></p> */}
                                                            </div>
                                                            <div className="flex md:flex-row flex-col">
                                                                 <div className="md:text-center text-left md:mt-0 mt-8">
                                                                      <h5 className="text-[16px] font-bold">
                                                                           {
                                                                                data.fiat_trade_amount
                                                                           }
                                                                           INR{" "}
                                                                           <span className="font-medium text-[15px] pl-4">
                                                                                {
                                                                                     data.crypto_trade_amount
                                                                                }{" "}
                                                                                {
                                                                                     data.cryptocurrency
                                                                                }
                                                                           </span>
                                                                      </h5>
                                                                      <p className="py-4">
                                                                           Rate:
                                                                           {
                                                                                data.trade_rate
                                                                           }{" "}
                                                                           {
                                                                                data.cryptocurrency
                                                                           }
                                                                      </p>
                                                                      {/* <p className="text-[12px]">
                                                                           Fee:
                                                                           Total
                                                                           100,000
                                                                           IDR
                                                                           (0,00053452
                                                                           BTC)
                                                                      </p> */}
                                                                 </div>
                                                                 {/* <div className="ml-4 flex items-start md:mt-0 mt-8 gap-5">
                      <a className="text-[15px] px-[20px] py-2 border rounded-lg">
                        Expired
                      </a>
                      <a className="text-[15px] px-[10px] py-3 border rounded-lg">
                        <img src="/assets/Vector 17.svg" alt className="w-5" />
                      </a>
                    </div> */}
                                                            </div>
                                                       </div>
                                                  )
                                             )}
                                        </>
                                   ) : (
                                        <>
                                             <p>No Trade Data Found</p>
                                        </>
                                   )}
                              </div>
                         </div>
                    </section>
               </div>
          </>
     );
};

export default Tradehistory;
