/** @format */

import React from "react";
import { useParams } from "react-router-dom";

const SellerChat = () => {
     const { offerId, sellerId } = useParams();
     console.log(offerId, sellerId, " offerId, sellerId");
     return (
          <main className="my-[80px] md:mt-[100px] md:mb-[30px] px-5">
               <div className="max-w-[1400px] mx-auto ">
                    <div>
                         <h2 className="text-[20px] font-bold">
                              You are selling 0.0000773 BTC for 230 INR using
                              Paytm Online Wallet
                         </h2>
                    </div>
                    <div className="flex md:flex-row flex-col justify-between mt-8">
                         <div className="md:w-[48%] w-full">
                              <div className="border border-[#A8A5A5] rounded-lg p-5">
                                   <div className="border-b pb-8">
                                        <h4 className="text-[16px] pb-8">
                                             Bitcoin transfers once made, cannot
                                             be reversed.
                                        </h4>
                                        <a
                                             className="flex items-center py-1.5 px-[25px] bg-[#EFEEEC] border border-[#FF7A00] w-[40%] "
                                             href="/"
                                        >
                                             Release Bitcoin{" "}
                                             <span className="ml-3">
                                                  <img
                                                       src="/assets/Vector 39.svg"
                                                       alt
                                                  />
                                             </span>
                                        </a>
                                   </div>
                                   <div className="mt-10">
                                        <a
                                             className="bg-[#D9D9D9] py-1.5 px-[20px] border border-[#6A6868]"
                                             href="/"
                                        >
                                             Cancel Trade
                                        </a>
                                   </div>
                                   <div className="mt-10">
                                        <h5 className="text-[16px] font-bold">
                                             Instructions
                                        </h5>
                                        <div className="flex gap-10 mt-4">
                                             <a
                                                  className="bg-[#D9D9D9] py-1.5 px-[20px] border border-[#6A6868]"
                                                  href="/"
                                             >
                                                  Online Payments
                                             </a>
                                             <a
                                                  className="bg-[#D9D9D9] py-1.5 px-[20px] border border-[#6A6868]"
                                                  href="/"
                                             >
                                                  No Negotiation
                                             </a>
                                        </div>
                                        <ol className="list-decimal px-8 pt-5">
                                             <li>Say Hello</li>
                                             <li>
                                                  Provide Paytm wallet number or
                                                  UPI ID
                                             </li>
                                             <li>Wait for payment</li>
                                             <li>Release Bitcoin</li>
                                             <li>Give positive feedback</li>
                                        </ol>
                                        <h5 className="text-[16px] pt-10">
                                             “Happy Trading”
                                        </h5>
                                   </div>
                              </div>
                              <div className="border border-[#A8A5A5] p-5 mt-8 rounded-lg">
                                   <h4 className="text-[16px] font-bold pb-5">
                                        Please follow 3rdpartyactive's
                                        instructions
                                   </h4>
                                   <p className="text-[16px] py-1.5 px-[20px] border-[#6A6868] rounded-lg border w-[45%]">
                                        no verification needed
                                   </p>
                                   <h5 className="text-[16px] pt-5">Welcome</h5>
                                   <div className="mt-5">
                                        <h5 className="text-[16px] font-bold">
                                             Trade Information
                                        </h5>
                                        <div className="flex justify-between md:flex-row flex-col mt-4">
                                             <div className>
                                                  <h6 className="text-[16px] font-bold text-[#FF7A00]">
                                                       RATE
                                                  </h6>
                                                  <p className="text-[14px] py-3">
                                                       259,925,640.562{" "}
                                                  </p>
                                                  <p className="text-[14px]">
                                                       IDR/BTC
                                                  </p>
                                             </div>
                                             <div className>
                                                  <h6 className="text-[16px] font-bold text-[#FF7A00]">
                                                       TRADE ID
                                                  </h6>
                                                  <p className="text-[14px] py-3">
                                                       hBiYcgouKZQ
                                                  </p>
                                             </div>
                                             <div className>
                                                  <h6 className="text-[16px] font-bold text-[#FF7A00]">
                                                       STARTED
                                                  </h6>
                                                  <p className="text-[14px] py-3">
                                                       30 minutes ago
                                                  </p>
                                             </div>
                                             <div className>
                                                  <h6 className="text-[16px] font-bold text-[#FF7A00]">
                                                       CANCELLED
                                                  </h6>
                                                  <p className="text-[14px] py-3">
                                                       a few seconds ago
                                                  </p>
                                             </div>
                                        </div>
                                        <div className="flex justify-between mt-4">
                                             <a
                                                  className="bg-[#D9D9D9] py-1.5 px-[20px] border border-[#6A6868] rounded-lg"
                                                  href="/"
                                             >
                                                  Report
                                             </a>
                                             <a
                                                  className="bg-[#D9D9D9] py-1.5 px-[20px] border border-[#6A6868] rounded-lg"
                                                  href="/"
                                             >
                                                  View Offer
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="md:w-[48%] w-full md:mt-0 mt-5">
                              <div className=" border border-[#A8A5A5] p-5  rounded-lg">
                                   <h5 className="text-[16px] font-bold pb-3">
                                        TimelyAni650
                                   </h5>
                                   <p className="text-[16px] flex items-center ">
                                        <span className="pr-3">
                                             <img
                                                  src="/assets/Ellipse 13.svg"
                                                  alt
                                             />
                                        </span>{" "}
                                        Seen 11 hours ago
                                   </p>
                                   <h6 className="text-[16px] font-bold pt-6">
                                        Moderator unavailable
                                   </h6>
                                   <div className=" border border-[#A8A5A5] p-3  rounded-lg mt-3 bg-[#FFF9F4]">
                                        <ol className="list-decimal px-3 ">
                                             <li>Say Hello</li>
                                             <li>
                                                  Provide Paytm wallet number or
                                                  UPI ID
                                             </li>
                                             <li>Wait for payment</li>
                                             <li>Release Bitcoin</li>
                                             <li>Give positive feedback</li>
                                        </ol>
                                   </div>
                                   <p className="text-[14px] pt-2">
                                        JANUARY 5, 2023 AT 9:31 AM
                                   </p>
                                   <div className=" border border-[#A8A5A5] p-5  rounded-lg mt-3 bg-[#FFF9F4]">
                                        <h6 className="text-[16px] font-bold">
                                             Follow these instructions from your
                                             trade partner:
                                        </h6>
                                        <h5 className="text-[16px] pt-2">
                                             Welcome
                                        </h5>
                                   </div>
                                   <p className="text-[14px] pt-2">
                                        JANUARY 5, 2023 AT 9:31 AM
                                   </p>
                                   <div className="border-b pb-5 border-[#A8A5A5]">
                                        <div className=" border border-[#A8A5A5] p-3  rounded-lg mt-3 bg-[#FFF9F4]">
                                             <p className="text-[16px] ">
                                                  This trade has expired and BTC
                                                  is no longer reserved. To
                                                  continue, ask your trade
                                                  partner to reopen this trade,
                                                  and make sure BTC is reserved,
                                                  before you make the payment.
                                             </p>
                                        </div>
                                        <p className="text-[14px] pt-2">
                                             JANUARY 5, 2023 AT 10:00 AM
                                        </p>
                                   </div>
                                   <div className="mt-4">
                                        <p className="text-[16px]">
                                             Write a massage.............
                                        </p>
                                        <div className="flex md:flex-row flex-col justify-between mt-10 gap-5">
                                             <div className="p-2 bg-[#EDEDEF] border border-[#6A6868] rounded max-w-[200px] w-full md:mx-0 mx-auto">
                                                  <a href="/">
                                                       <img
                                                            src="/assets/attach-file.svg"
                                                            alt
                                                       />
                                                  </a>
                                             </div>
                                             <div className="p-2 bg-[#EDEDEF] border border-[#6A6868] rounded max-w-[200px] w-full md:mx-0 mx-auto">
                                                  <a
                                                       className="flex items-center text-[16px] font-bold"
                                                       href="/"
                                                  >
                                                       Send{" "}
                                                       <span className="pl-3">
                                                            <img
                                                                 src="/assets/send.svg"
                                                                 alt
                                                            />
                                                       </span>
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="max-w-[1200px] mx-auto mt-[-200px] md:visible invisible">
                         <div className=" flex justify-end">
                              <img
                                   src="/assets/undraw_ether_re_y7ft 1.svg"
                                   alt
                              />
                         </div>
                    </div>
               </div>
          </main>
     );
};

export default SellerChat;
