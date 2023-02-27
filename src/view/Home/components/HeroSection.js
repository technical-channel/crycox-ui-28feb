/** @format */

import React from "react";

const HeroSection = () => {
     return (
          <div>
               <section className="bg-hero-img w-full bg-cover bg-no-repeat text-white md:pt-[150px] md:pb-[100px] py-[50px]">
                    <div className="max-w-[1500px] mx-auto  my-[2rem] px-5">
                         <div className="flex lg:flex-row gap-[80px] items-center flex-col">
                              <div className="flex-1">
                                   <div>
                                        <h1 className="lg:text-[2.5rem] font-bold text-[1.8rem] mb-3">
                                             Trade Crypto Currency with Crycox
                                             P2P Exchange
                                        </h1>
                                        <p className="lg:text-[22px] mb-8 text-[16px]">
                                             buy &amp; sell Crypto Currency with
                                             various payment methods
                                        </p>
                                        <p className="lg:text-[16px] mb-[50px] text-[16px]">
                                             Lorem ipsum dolor sit amet,
                                             consectetur adipiscing elit. Cras
                                             velit dui, scelerisque et odio at,
                                             dignissim porta ligula. Donec
                                             tristique risus ut ultricies
                                             dapibus. Aenean eget molestie urna.
                                        </p>
                                        <div className="flex mt-3 md:flex-row flex-col lg:gap-8 gap-5 mt-[20px]">
                                             <a
                                                  href
                                                  className="hvr-grow xl:px-[60px] px-[30px] py-3 rounded-[5px] xl:min-w-[200px]  min-w-[120px] text-center  border-2 border-[#1D2937] bg-[#1D2937]"
                                             >
                                                  Get Started{" "}
                                                  <span>
                                                       <i className="fa-solid ml-3 fa-chevron-right" />
                                                  </span>
                                             </a>
                                             <a
                                                  href
                                                  className="xl:px-[60px] hvr-grow px-[30px]  py-3 rounded-[5px] xl:min-w-[200px] min-w-[120px] text-center border-2 border-white "
                                             >
                                                  Learn more
                                             </a>
                                        </div>
                                   </div>
                              </div>
                              <div className="flex-1">
                                   <div className="max-w-[550px] text-black bg-[#fff] lg:px-10 am:px-5 px-3 pt-5 pb-[60px] rounded-md">
                                        <form className id method="post">
                                             <div className="flex justify-center mb-8 mt-4">
                                                  <p className="bg-[#F1971F] text-white px-[40px] font-bold lg:text-[20px] text-[18px] py-3 rounded-md">
                                                       Select Your Crypto
                                                  </p>
                                             </div>
                                             <div>
                                                  <select
                                                       id="countries"
                                                       className="bg-[#fffaf3] border border-[#E2E2E2] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                  >
                                                       <option
                                                            style={{
                                                                 backgroundImage:
                                                                      'url("../assets/bitcoin-1.svg")',
                                                            }}
                                                            selected
                                                       >
                                                            Bitcoin
                                                       </option>
                                                       <option value="US">
                                                            Ether
                                                       </option>
                                                       <option value="CA">
                                                            Usd Coin
                                                       </option>
                                                  </select>
                                                  <div className="mt-6">
                                                       <label className="text-[#000000] flex">
                                                            S1 BTC ={" "}
                                                            <span className="text-[#000AFF]">
                                                                 16,728.02 USD
                                                            </span>
                                                            <span>
                                                                 <img
                                                                      src="assets/arrow 1.svg"
                                                                      className="ml-2"
                                                                 />
                                                            </span>
                                                       </label>
                                                  </div>
                                             </div>
                                             <div className="mt-6">
                                                  <h3 className="font-bold lg:text-[22px] text-[20px] mb-2">
                                                       Pay with
                                                  </h3>
                                                  <select
                                                       id="countries"
                                                       className="bg-[#fffaf3] border border-[#E2E2E2] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                  >
                                                       <option selected>
                                                            Select payment
                                                            method (350+)
                                                       </option>
                                                       <option value="PayPal">
                                                            PayPal
                                                       </option>
                                                       <option value="Bank">
                                                            Bank Transfer
                                                       </option>
                                                       <option value="Amazon">
                                                            Amazon Gift Card
                                                       </option>
                                                       <option value="Steam">
                                                            Steam Wallet Gift
                                                            Card
                                                       </option>
                                                       <option value="Phone">
                                                            Phone Pay
                                                       </option>
                                                  </select>
                                                  <div className="mt-3 flex flex-wrap gap-2">
                                                       <span className="border text-[12px] px-3 py-1 rounded-md">
                                                            Bank Transfer
                                                       </span>
                                                       <span className="border text-[12px] px-3 py-1 rounded-md">
                                                            PayPal
                                                       </span>
                                                       <span className="border text-[12px] px-3 py-1 rounded-md">
                                                            Amazon Gift Card
                                                       </span>
                                                       <span className="border text-[12px] px-3 py-1 rounded-md">
                                                            Steam Wallet Gift
                                                            Card
                                                       </span>
                                                  </div>
                                             </div>
                                             <div className="mt-6">
                                                  <h3 className="font-bold lg:text-[18px] text-[20px] mb-2">
                                                       I want to spend
                                                  </h3>
                                                  <div className="flex">
                                                       <div className="relative w-full">
                                                            <input
                                                                 type="search"
                                                                 id="search-dropdown"
                                                                 className="block p-2.5 w-full z-20 text-sm  text-gray-900 bg-[#fffaf3] rounded-md  border border-[#E2E2E2] focus:ring-blue-500 focus:border-blue-500"
                                                                 placeholder="Enter Amount"
                                                                 required
                                                            />
                                                            <div className="absolute right-0 top-0">
                                                                 <select
                                                                      id
                                                                      className="bg-[#fffaf3] border py-2.5 border-[#F1971F] px-8 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full "
                                                                 >
                                                                      <option
                                                                           selected
                                                                      >
                                                                           USD
                                                                      </option>
                                                                      <option value="CA">
                                                                           INR
                                                                      </option>
                                                                      <option value="FR">
                                                                           EUR
                                                                      </option>
                                                                 </select>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <p className="text-[#6A6868] mt-3 lg:text-[18px] text-[16px]">
                                                       Minimum: 10 USD
                                                  </p>
                                                  <div className="flex justify-center gap-2 mt-[40px]">
                                                       <a
                                                            href="3-buy-crypto.html"
                                                            className="bg-[#F1971F] hvr-float text-white lg:px-[30px] px-2 font-bold lg:text-[18px] text-[15px] py-2 rounded-md"
                                                       >
                                                            I want to Buy
                                                       </a>
                                                       <a
                                                            href="4-sell-crypto.html"
                                                            className=" lg:px-[30px] px-4 hvr-float text-black font-bold border border-[#E2E2E2] font-bold lg:text-[18px] text-[16px] py-2 rounded-md"
                                                       >
                                                            I want to Sell
                                                       </a>
                                                  </div>
                                             </div>
                                        </form>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </div>
     );
};

export default HeroSection;
