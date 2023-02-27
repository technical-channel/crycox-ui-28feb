/** @format */

import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import {
     CheckIcon,
     ChevronDownIcon,
     ChevronUpDownIcon,
} from "@heroicons/react/20/solid";
import { Link, useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import { filterAllOffers } from "../../GraphQL/Queries/filterAllOffersAPI";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";

function classNames(...classes) {
     return classes.filter(Boolean).join(" ");
}
const cryptoName = [
     { name: "BTC" },
     { name: "ETH" },
     { name: "BNB" },
     { name: "SHIB" },
     { name: "DOGE" },
     { name: "USDTERC" },
     { name: "USDTBEP" },
];

const payVia = [
     { name: "Bank Transfer" },
     { name: "Phone Pe" },
     { name: "Paytm" },
     { name: "Google Pay" },
     { name: "UPI" },
     { name: "Paypal" },
     { name: "Amazon Pay" },
     { name: "Amazon Gift Card" },
     { name: "Dabit/Credit Card" },
     { name: "Cash" },
];

const SellPage = () => {
     const [cryptoNameVal, setCryptoNameVal] = useState(cryptoName[0]);
     const [payViaData, setPayVia] = useState(payVia[0]);

     const { data, loading, error } = useQuery(filterAllOffers, {
          variables: {
               offerType: "sell",
               offererVerified: true,
          },
     });

     const tableData2 = data?.filterOffers?.offer;

     console.log("API Data  : ", data?.filterOffers?.offer);
     const navigate = useNavigate();

     useEffect(() => {
          console.log(data, error);
     }, [loading]);

     const tableData = [
          {
               id: 1,
          },
          {
               id: 1,
          },
          {
               id: 1,
          },
          {
               id: 1,
          },

          {
               id: 1,
          },
          {
               id: 1,
          },

          {
               id: 1,
          },
     ];

     return (
          <div>
               <main className="my-[30px] md:mt-[100px] md:mb-[30px]">
                    <section className="p-3">
                         <div className="text-center mb-10">
                              <h1 className="text-[50px] text-[#1D2937] font-bold">
                                   Sell Crypto
                              </h1>
                              <p className="md:text-[20px] text-[16px] ">
                                   Sell Crypto with over 350 payment methods to
                                   choose from, including bank transfers, online
                                   wallets, and gift cards.
                              </p>
                         </div>
                         <div className="max-w-[1400px] mx-auto border-2 border-[#F7931A] p-4">
                              <div className="flex flex-col md:flex-row flex-wrap  sell-crypto-frm justify-between gap-5">
                                   <div className="flex flex-col w-full max-w-[300px] mx-auto ">
                                        <p className="pb-2 text-sm">Sell</p>

                                        <Listbox
                                             value={cryptoNameVal}
                                             onChange={setCryptoNameVal}
                                        >
                                             <div className="relative mt-1">
                                                  <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                                       <span className="block truncate">
                                                            {cryptoNameVal.name}
                                                       </span>
                                                       <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                            <ChevronUpDownIcon
                                                                 className="h-5 w-5 text-gray-400"
                                                                 aria-hidden="true"
                                                            />
                                                       </span>
                                                  </Listbox.Button>
                                                  <Transition
                                                       as={Fragment}
                                                       leave="transition ease-in duration-100"
                                                       leaveFrom="opacity-100"
                                                       leaveTo="opacity-0"
                                                  >
                                                       <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                            {cryptoName.map(
                                                                 (
                                                                      person,
                                                                      personIdx
                                                                 ) => (
                                                                      <Listbox.Option
                                                                           key={
                                                                                personIdx
                                                                           }
                                                                           className={({
                                                                                active,
                                                                           }) =>
                                                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                                                     active
                                                                                          ? "bg-amber-100 text-amber-900"
                                                                                          : "text-gray-900"
                                                                                }`
                                                                           }
                                                                           value={
                                                                                person
                                                                           }
                                                                      >
                                                                           {({
                                                                                cryptoNameVal,
                                                                           }) => (
                                                                                <>
                                                                                     <span
                                                                                          className={`block truncate ${
                                                                                               cryptoNameVal
                                                                                                    ? "font-medium"
                                                                                                    : "font-normal"
                                                                                          }`}
                                                                                     >
                                                                                          {
                                                                                               person.name
                                                                                          }
                                                                                     </span>
                                                                                     {cryptoNameVal ? (
                                                                                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                                                               <CheckIcon
                                                                                                    className="h-5 w-5"
                                                                                                    aria-hidden="true"
                                                                                               />
                                                                                          </span>
                                                                                     ) : null}
                                                                                </>
                                                                           )}
                                                                      </Listbox.Option>
                                                                 )
                                                            )}
                                                       </Listbox.Options>
                                                  </Transition>
                                             </div>
                                        </Listbox>

                                        {console.log(
                                             cryptoNameVal.name,
                                             payViaData.name,
                                             "Raul"
                                        )}
                                        <a className="mt-2 flex">
                                             1 BTC ={" "}
                                             <span className="text-[#000AFF] flex">
                                                  16,728.02 USD{" "}
                                                  <img
                                                       src="/assets/arrow 2.svg"
                                                       alt
                                                  />
                                             </span>
                                        </a>
                                   </div>
                                   <div className="flex flex-col w-full  max-w-[300px] mx-auto">
                                        <p className="pb-2 text-sm">
                                             Get Pay via
                                        </p>

                                        <Listbox
                                             value={payViaData}
                                             onChange={setPayVia}
                                        >
                                             <div className="relative mt-1">
                                                  <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                                       <span className="block truncate">
                                                            {payViaData.name}
                                                       </span>
                                                       <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                            <ChevronUpDownIcon
                                                                 className="h-5 w-5 text-gray-400"
                                                                 aria-hidden="true"
                                                            />
                                                       </span>
                                                  </Listbox.Button>
                                                  <Transition
                                                       as={Fragment}
                                                       leave="transition ease-in duration-100"
                                                       leaveFrom="opacity-100"
                                                       leaveTo="opacity-0"
                                                  >
                                                       <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                            {payVia.map(
                                                                 (
                                                                      person,
                                                                      personIdx
                                                                 ) => (
                                                                      <Listbox.Option
                                                                           key={
                                                                                personIdx
                                                                           }
                                                                           className={({
                                                                                active,
                                                                           }) =>
                                                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                                                     active
                                                                                          ? "bg-amber-100 text-amber-900"
                                                                                          : "text-gray-900"
                                                                                }`
                                                                           }
                                                                           value={
                                                                                person
                                                                           }
                                                                      >
                                                                           {({
                                                                                payViaData,
                                                                           }) => (
                                                                                <>
                                                                                     <span
                                                                                          className={`block truncate ${
                                                                                               payViaData
                                                                                                    ? "font-medium"
                                                                                                    : "font-normal"
                                                                                          }`}
                                                                                     >
                                                                                          {
                                                                                               person.name
                                                                                          }
                                                                                     </span>
                                                                                     {payViaData ? (
                                                                                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                                                               <CheckIcon
                                                                                                    className="h-5 w-5"
                                                                                                    aria-hidden="true"
                                                                                               />
                                                                                          </span>
                                                                                     ) : null}
                                                                                </>
                                                                           )}
                                                                      </Listbox.Option>
                                                                 )
                                                            )}
                                                       </Listbox.Options>
                                                  </Transition>
                                             </div>
                                        </Listbox>
                                   </div>
                                   <div className="flex flex-col  w-full max-w-[300px] mx-auto">
                                        <p className="pb-2 text-sm">
                                             I want to Spend
                                        </p>
                                        <div className="flex items-center gap-5 justify-between form-control relative w-full cursor-default rounded-md bg-white py-2 px-2 text-left  bg-[#EFEEEC]   border border-[#E2E2E2] shadow-sm focus:border-grey focus:outline-none focus:ring-1 sm:text-sm">
                                             <input
                                                  inputMode="decimal"
                                                  placeholder="Enter amount"
                                                  // className="pl-3 w-full  py-0 input "
                                                  type="text"
                                                  defaultValue={500}
                                                  // style={{ background: 0 }}
                                             />
                                             <p>INR</p>
                                        </div>
                                   </div>

                                   <div className="flex flex-col  w-full max-w-[200px] mx-auto">
                                        <div className="flex justify-between">
                                             <div className="flex justify-between">
                                                  <div>
                                                       <p className="pb-2 text-sm pr-7 capitalize">
                                                            Search
                                                       </p>

                                                       {/* <p className="pb-2 text-sm pr-7 capitalize">
                                                            Verified offers only
                                                       </p> */}
                                                  </div>
                                                  {/* <div>
                                                       <label className="relative inline-flex items-center cursor-pointer">
                                                            <input
                                                                 type="checkbox"
                                                                 defaultValue
                                                                 className="sr-only peer"
                                                            />
                                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                                                       </label>
                                                  </div> */}
                                             </div>
                                        </div>
                                        <div className="relative w-full cursor-default rounded-md text-white text-center py-2 pl-3 pr-10 text-left   bg-[#1D2937] rounded-md  border border-[#E2E2E2] shadow-sm focus:border-grey focus:outline-none focus:ring-1 sm:text-sm">
                                             Find Offers
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </section>
                    <section className="mt-10">
                         <div className="max-w-[1400px] mx-auto border border-[#A8A5A5] ">
                              <div className=" flex md:flex-row flex-col justify-between bg-[#1D2937] p-3 items-center">
                                   <div>
                                        <h2 className="md:md:text-[20px] text-[16px] text-[16px] text-white">
                                             Current Offers
                                        </h2>
                                   </div>

                                   <div className="flex items-center">
                                        <h2 className="md:md:text-[20px] text-[16px] text-[16px] text-white">
                                             Price per Bitcoin
                                        </h2>
                                        <a className="ml-3 p-2 rounded-lg border-2 ">
                                             <img
                                                  src="/assets/downloadB 1.svg"
                                                  alt
                                             />
                                        </a>
                                        <a className="ml-3 p-2 rounded-lg border-2 ">
                                             <img
                                                  src="/assets/letter-i 3.svg"
                                                  alt
                                             />
                                        </a>
                                   </div>
                              </div>

                              {tableData2?.map((tableData2, index) => {
                                   console.log("data : ", tableData2);
                                   return (
                                        <>
                                             <div className="flex md:flex-row flex-col justify-between bg-[#FFFBF6] p-8 border-b">
                                                  <div>
                                                       <h2 className="md:text-[20px] text-[16px] pb-4">
                                                            Sell form
                                                       </h2>
                                                       <Link
                                                            to="/offer/myprofile"
                                                            className="font-bold"
                                                       >
                                                            {tableData2.id}
                                                       </Link>
                                                  </div>
                                                  <div>
                                                       <h2 className="md:text-[20px] text-[16px] pb-4">
                                                            Get paid with
                                                       </h2>
                                                       <a className="font-bold">
                                                            {
                                                                 tableData2
                                                                      .payment_type[0]
                                                            }
                                                       </a>
                                                       <br></br>
                                                       <a className="font-bold">
                                                            {
                                                                 tableData2
                                                                      .payment_type[1]
                                                            }
                                                       </a>
                                                       {/* <p className="pt-3"> {tableData2.offer_tags}</p> */}
                                                  </div>
                                                  <div>
                                                       <h2 className="md:text-[20px] text-[16px] pb-4">
                                                            Offer Tags
                                                       </h2>
                                                       {/* <a className=" text-[#000AFF]">New Offer</a> */}
                                                       <p className="text-[#000AFF]">
                                                            {" "}
                                                            {
                                                                 tableData2.offer_tags
                                                            }
                                                       </p>
                                                  </div>
                                                  <div>
                                                       <h2 className="md:text-[20px] text-[16px] pb-4">
                                                            Price per token
                                                       </h2>

                                                       <div className="flex gap-5">
                                                            <p>
                                                                 {
                                                                      tableData2.offer_price
                                                                 }{" "}
                                                                 {
                                                                      tableData2.preferred_currency
                                                                 }
                                                            </p>
                                                            <p>
                                                                 {" "}
                                                                 {
                                                                      tableData2.offer_margin
                                                                 }
                                                                 %
                                                            </p>
                                                       </div>

                                                       <div className="flex mt-4 justify-end">
                                                            <div>
                                                                 <p className="pl-2">
                                                                      {" "}
                                                                      Min
                                                                      purchase:{" "}
                                                                      {
                                                                           tableData2.min_purchase
                                                                      }{" "}
                                                                      INR
                                                                 </p>
                                                                 <p className="pl-2">
                                                                      {" "}
                                                                      Max
                                                                      purchase:{" "}
                                                                      {
                                                                           tableData2.max_purchase
                                                                      }{" "}
                                                                      INR
                                                                 </p>
                                                            </div>
                                                            <div
                                                                 className="ml-2 flex xl:px-2 px-2 items-center py-2 rounded-md bg-[#1D2937] text-white"
                                                                 onClick={() => {
                                                                      console.log(
                                                                           "Clicked on Sell button",
                                                                           tableData2.id,
                                                                           tableData2.user_id
                                                                      );
                                                                      navigate(
                                                                           `/offer/clientseller/${tableData2?.id}/${tableData2?.user_id}}`
                                                                      );
                                                                 }}
                                                            >
                                                                 Sell{" "}
                                                                 <span className="ml-3">
                                                                      {tableData2.crypto_name.toUpperCase() ===
                                                                      "BTC" ? (
                                                                           <>
                                                                                <img
                                                                                     src="/assets/bitcoin 1.svg"
                                                                                     width="30"
                                                                                     height="30"
                                                                                     alt
                                                                                />
                                                                           </>
                                                                      ) : tableData2.crypto_name.toUpperCase() ==
                                                                        "ETH" ? (
                                                                           <>
                                                                                {" "}
                                                                                <img
                                                                                     src="/assets/ethereum 1.svg"
                                                                                     width="30"
                                                                                     height="30"
                                                                                     alt
                                                                                />
                                                                           </>
                                                                      ) : tableData2.crypto_name.toUpperCase() ==
                                                                        "BNB" ? (
                                                                           <>
                                                                                <img
                                                                                     src="/assets/BNB logo 1.svg"
                                                                                     width="30"
                                                                                     height="30"
                                                                                ></img>
                                                                           </>
                                                                      ) : tableData2.crypto_name.toUpperCase() ==
                                                                        "SHIB" ? (
                                                                           <>
                                                                                <img
                                                                                     src="/assets/shiba-inu-shib-logo 1.svg"
                                                                                     width="30"
                                                                                     height="30"
                                                                                ></img>
                                                                           </>
                                                                      ) : tableData2.crypto_name.toUpperCase() ==
                                                                        "DOGE" ? (
                                                                           <>
                                                                                <img
                                                                                     src="/assets/png-clipart-dogecoin-shiba-inu-scrypt-cryptocurrency-ethereum-coin-mammal-cat-like-mammal-thumbnail 1.svg"
                                                                                     width="30"
                                                                                     height="30"
                                                                                     alt
                                                                                />
                                                                           </>
                                                                      ) : tableData2.crypto_name.toUpperCase() ==
                                                                        "USDTERC20" ? (
                                                                           <>
                                                                                <img
                                                                                     src="/assets/tether 1.svg"
                                                                                     width="30"
                                                                                     height="30"
                                                                                     alt
                                                                                />
                                                                           </>
                                                                      ) : tableData2.crypto_name.toUpperCase() ==
                                                                        "USDTBEP20" ? (
                                                                           <>
                                                                                <img
                                                                                     src="/assets/dollar-sign 1.svg"
                                                                                     width="30"
                                                                                     height="30"
                                                                                     alt
                                                                                />
                                                                           </>
                                                                      ) : (
                                                                           ""
                                                                      )}
                                                                 </span>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </>
                                   );
                              })}
                         </div>
                    </section>
                    <section className="my-5">
                         <div className="max-w-[1400px] mx-auto">
                              <div className=" flex md:flex-row flex-col justify-between">
                                   <a className="py-2 px-[20px] text-md text-center  text-white bg-[#1D2937] rounded-lg  max-w-[200px] mx-auto md:mx-0 ">
                                        Load More Offers
                                   </a>
                                   <a className="py-2 px-[20px] text-md text-center md:mt-0 mt-5 bg-[#F5F5F5] border rounded-lg max-w-[200px] mx-auto md:mx-0">
                                        Create an Offer
                                   </a>
                              </div>
                         </div>
                    </section>
               </main>
          </div>
     );
};

export default SellPage;
