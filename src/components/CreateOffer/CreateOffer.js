/** @format */

import { Button, message, Steps, theme } from "antd";
import React, { useEffect, useState } from "react";
import { SteFps } from "antd";
import Footer from "../Footer/Footer";
// import useAuth from "../Hooks/useAuth";
import useAuth from "../../hooks/useAuth";
import { useWeb3React } from "@web3-react/core";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { createOfferAPI } from "../../GraphQL/Mutations/createoffer";
import Swal from "sweetalert2";
import { getLivePrice } from "../../GraphQL/Queries/livePriceAPI";
import { useNavigate } from "react-router-dom";
import { MetamaskExist } from "../../GraphQL/Queries/MetamaskexistApi";

const CreateOffer = () => {
     const { login, logout } = useAuth();
     const { active, account } = useWeb3React();
     const navigate = useNavigate();

     const [newOfferData] = useMutation(createOfferAPI);
     const [livePrice] = useLazyQuery(getLivePrice);
     const [getUser] = useLazyQuery(MetamaskExist);

     const [Active, setActive] = useState("false");
     const [cryptoName, setCryptoName] = useState("BTC");
     const [offerType, setOfferType] = useState("Sell");
     const [paymentMethod, SetPaymentMethod] = useState("Bank Transfer");
     const [priceType, setPriceType] = useState("Fixed Price");
     const [MaxPrice, setMaxPrice] = useState(0);
     const [MinPrice, setMinPrice] = useState(0);
     const [salePrice, setSalePrice] = useState(0);
     const [offertag, setOfferTag] = useState("");
     const [Offerlabel, setOfferlabel] = useState("");
     const [Offerterms, setOfferterm] = useState("");
     const [Tradeinstruction, setTradeinstruction] = useState("");
     const [cryptoSymbol, setCryptoSymbol] = useState("BNB");
     const [selectedTokenLivePrice, setSelectedTokenLivePrice] = useState("");
     const [loginUser, setLoginUser] = useState("");
     // const [userInputPrice, setUserInputPrice] = useState(0);

     const next = () => {
          setCurrent(current + 1);
     };

     const prev = () => {
          setCurrent(current - 1);
     };

     const handleOnChange = () => {
          setActive(!Active);
     };

     const setChange = (value) => {
          SetPaymentMethod(value);
     };

     const CreateOfferdetails = (e) => {
          e.preventDefault();
          console.log(
               cryptoName,
               offerType,
               paymentMethod,
               priceType,
               MinPrice,
               MaxPrice,
               salePrice,
               offertag,
               Offerlabel,
               Offerterms,
               Tradeinstruction
          );
          if (active) {
               console.log("cryptoSymbol : ", cryptoSymbol);
               getUser({
                    skip: !account,
                    variables: { metamask: account },
               }).then((res) => {
                    console.log("Get User : ", res);
                    if (res?.data?.isMetamaskExist?.success == true) {
                         console.log(
                              "res?.data?.isMetamaskExist?.user?.id : ",
                              res?.data?.isMetamaskExist?.user
                         );
                         setLoginUser(res?.data?.isMetamaskExist?.user[0]?.id);
                    } else {
                         Swal.fire("Error", "User Not Register", "error");
                         navigate("/signup");
                    }
               });

               livePrice({
                    skip: !cryptoSymbol,
                    variables: {
                         currency: "INR",
                         symbol: cryptoSymbol,
                    },
               })
                    .then((res) => {
                         console.log(
                              "Price API : ",
                              res.data.priceConvert.data,
                              res
                         );
                         setSelectedTokenLivePrice(
                              res.data.priceConvert.data[0]
                         );
                    })
                    .catch((err) => {
                         console.log("PRIce API Err : ", err);
                    });

               next();
               if (current == 2) {
                    console.log(loginUser, "<-Login User");
                    newOfferData({
                         skip: !loginUser,
                         variables: {
                              user_id: loginUser,
                              crypto_name: cryptoName,
                              price_type: priceType,
                              offer_type: offerType,
                              payment_type: [paymentMethod],
                              offer_tags: offertag,
                              min_purchase: parseFloat(MinPrice),
                              max_purchase: parseFloat(MaxPrice),
                              offer_price: parseFloat(salePrice),
                              offer_label: Offerlabel,
                              offer_terms: Offerterms,
                              offer_condition: Tradeinstruction,
                         },
                    }).then((res) => {
                         console.log("Create Offer Res : ", res);
                         if (res.data.createOffer.success == true) {
                              console.log("Data insert sucessfully");
                              Swal.fire(
                                   "Sucessful",
                                   "Offer Created Sucessfully!",
                                   "success"
                              );
                              navigate("/offer/dashboard");
                         } else {
                              console.log(
                                   "Error in API Call or  Data insert sucessfully"
                              );
                              Swal.fire(
                                   "Error",
                                   "Unable to Create Offer",
                                   "error"
                              );
                         }
                    });
               }
          } else {
               Swal.fire("Please Connect to the wallet");
          }
     };

     const [count, setCount] = useState(0);
     const [secondcount, setSecondCount] = useState(0);
     function increment() {
          setCount(function (prevCount) {
               return (prevCount += 1);
          });

          setSecondCount(function (prevCount) {
               return (prevCount += 1);
          });
     }

     function decrement() {
          setCount(function (prevCount) {
               if (prevCount > 0) {
                    return (prevCount -= 1);
               } else {
                    return (prevCount = 0);
               }
          });
          setSecondCount(function (prevCount) {
               if (prevCount > 0) {
                    return (prevCount -= 1);
               } else {
                    return (prevCount = 0);
               }
          });
     }

     function handleChangePayment(e) {
          SetPaymentMethod(e.target.value);
          console.log(paymentMethod);
     }

     const PaymentMethod = [
          {
               label: "Bank Transfer",
               value: "Bank Transfer",
          },
          {
               label: "Phone Pe",
               value: "Phone Pe",
          },
          {
               label: "Paytm",
               value: "Paytm",
          },
          {
               label: "Google Pay",
               value: "Google Pay",
          },
          {
               label: "UPI",
               value: "UPI",
          },
          {
               label: "Paypal",
               value: "Paypal",
          },
          {
               label: "Amazon Pay",
               value: "Amazon Pay",
          },
          {
               label: "Amazon Gift Card",
               value: "Amazon Gift Card",
          },
          {
               label: "Dabit/Credit Card",
               value: "Dabit/Credit Card",
          },
          {
               label: "Cash",
               value: "Cash",
          },
     ];

     const OfferTags = [
          {
               label: "No Verification Needed",
               value: "No Verification Needed",
          },
          {
               label: "Verified Paypal Only",
               value: "Verified Paypal Only",
          },
          {
               label: "Photo Id Required",
               value: "Photo Id Required",
          },
          {
               label: "Invoices are accepted",
               value: "Invoices are accepted",
          },
          {
               label: "Friends and Family",
               value: "Friends and Family",
          },
          {
               label: "No receipt needed",
               value: "No receipt needed",
          },
          {
               label: "Receipt required",
               value: "Receipt required",
          },
          {
               label: "No third parties",
               value: "No third parties",
          },
     ];

     useEffect(() => {
          if (!active) {
               login();
          }
     }, []);

     const steps = [
          {
               title: "Payment Method ",
               content: (
                    <>
                         <form
                              className="leading-8  px-5 py-5"
                              onSubmit={(e) => {
                                   CreateOfferdetails(e);
                              }}
                         >
                              <div>
                                   <div className="max-w-[1400px] mx-auto p-5">
                                        <div className="flex items-center bg-[#1D2937] p-3 md:w-[60%] w-full rounded">
                                             <img src="/assets/id 1.svg" alt />
                                             <p className="md:text-[16px] ml-2 text-[12px] text-white">
                                                  Your offer won't be visible
                                                  until you've sufficient fund
                                                  to start the offer
                                             </p>
                                        </div>
                                   </div>
                                   <div className="max-w-[1400px] mx-auto p-5 mt-10">
                                        <h2 className="text-[16px] font-bold pb-3">
                                             Choose your cryptocurrency
                                        </h2>
                                        <div>
                                             <select
                                                  id="countries"
                                                  className="md:w-[60%] w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 "
                                                  onChange={(e) => {
                                                       setCryptoName(
                                                            e.target.value
                                                       );

                                                       if (
                                                            e.target.value ==
                                                                 "USDTERC20" ||
                                                            e.target.value ==
                                                                 "USDTBEP20"
                                                       ) {
                                                            setCryptoSymbol(
                                                                 "USDT"
                                                            );
                                                            console.log(
                                                                 "Set USDT",
                                                                 e.target.value
                                                            );
                                                       } else {
                                                            setCryptoSymbol(
                                                                 e.target.value
                                                            );
                                                            console.log(
                                                                 "Set Other",
                                                                 e.target.value
                                                            );
                                                       }

                                                       console.log(
                                                            "Values : ",
                                                            e.target.value
                                                       );
                                                  }}
                                             >
                                                  <option selected>
                                                       Bitcoin
                                                  </option>
                                                  <option value="BTC">
                                                       Bitcoin
                                                  </option>
                                                  <option value="ETH">
                                                       Ether (ETH)
                                                  </option>
                                                  <option value="BNB">
                                                       Binance (BNB)
                                                  </option>
                                                  <option value="SHIB">
                                                       SHIB INU (SHIB)
                                                  </option>
                                                  <option value="DOGE">
                                                       DOGE Coin
                                                  </option>
                                                  <option value="USDTERC20">
                                                       USDT (ERC20)
                                                  </option>
                                                  <option value="USDTBEP20">
                                                       USDT (BEP20)
                                                  </option>
                                             </select>
                                        </div>
                                   </div>
                                   <div className="max-w-[1400px] mx-auto p-5 mt-8">
                                        <div>
                                             <h2 className="text-[16px] font-bold">
                                                  What would you like to do?
                                             </h2>
                                             <div className="flex items-center my-4">
                                                  <input
                                                       defaultChecked
                                                       id="default-radio-1"
                                                       type="radio"
                                                       defaultValue
                                                       name="default-radio"
                                                       onChange={handleOnChange}
                                                       onClick={(e) => {
                                                            setOfferType(
                                                                 "Sell"
                                                            );
                                                       }}
                                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 md:text-[16px] text-[16px]"
                                                  />
                                                  <label
                                                       htmlFor="default-radio-1"
                                                       className="ml-2 text-[16px] font-medium"
                                                  >
                                                       Sell BitcoinYour offer
                                                       will be listed on the Buy
                                                       Bitcoin page
                                                  </label>
                                             </div>
                                             <div className="flex items-center">
                                                  <input
                                                       id="default-radio-2"
                                                       type="radio"
                                                       defaultValue
                                                       name="default-radio"
                                                       onChange={handleOnChange}
                                                       onClick={(e) => {
                                                            setOfferType("Buy");
                                                       }}
                                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 md:text-[16px] text-[16px]"
                                                  />
                                                  <label
                                                       htmlFor="default-radio-2"
                                                       className="ml-2 text-[16px] font-medium"
                                                  >
                                                       Buy BitcoinYour offer
                                                       will be listed on the
                                                       Sell Bitcoin page
                                                  </label>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="max-w-[1400px] mx-auto p-5 mt-8">
                                        <h2 className="lg:text-[30px] text-[22px] font-bold">
                                             Payment Method
                                        </h2>
                                        <div className="flex md:flex-row flex-col mt-4 gap-3">
                                             <div className="md:w-[60%] w-full">
                                                  <form>
                                                       <label
                                                            htmlFor="default-search"
                                                            className="mb-2 text-sm font-medium text-gray-900 sr-only "
                                                       >
                                                            Search
                                                       </label>
                                                       <div className="relative">
                                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                                 <svg
                                                                      aria-hidden="true"
                                                                      className="w-5 h-5 text-gray-500 "
                                                                      fill="none"
                                                                      stroke="currentColor"
                                                                      viewBox="0 0 24 24"
                                                                      xmlns="http://www.w3.org/2000/svg"
                                                                 >
                                                                      <path
                                                                           strokeLinecap="round"
                                                                           strokeLinejoin="round"
                                                                           strokeWidth={
                                                                                2
                                                                           }
                                                                           d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                                      />
                                                                 </svg>
                                                            </div>

                                                            <input
                                                                 type="search"
                                                                 id="default-search"
                                                                 className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                                                                 placeholder={
                                                                      paymentMethod
                                                                 }
                                                                 required
                                                                 value={
                                                                      paymentMethod
                                                                 }
                                                            />
                                                            <div className="absolute right-3 top-2">
                                                                 <select
                                                                      className="border border-[#00A3FF] px-8 text-center py-2 rounded text-sm block w-full"
                                                                      onChange={(
                                                                           e
                                                                      ) => {
                                                                           console.log(
                                                                                "Payment Methods : ",
                                                                                e
                                                                                     .target
                                                                                     .value
                                                                           );
                                                                           SetPaymentMethod(
                                                                                e
                                                                                     .target
                                                                                     .value
                                                                           );
                                                                      }}
                                                                 >
                                                                      {PaymentMethod.map(
                                                                           (
                                                                                option
                                                                           ) => (
                                                                                <option
                                                                                     value={
                                                                                          option.value
                                                                                     }
                                                                                >
                                                                                     {
                                                                                          option.label
                                                                                     }
                                                                                </option>
                                                                           )
                                                                      )}
                                                                 </select>
                                                            </div>
                                                       </div>
                                                  </form>
                                             </div>
                                        </div>
                                        <div className="flex md:flex-row flex-col mt-4 gap-3">
                                             <div className="md:w-[60%] w-full text-center border p-5 rounded-lg">
                                                  <div>
                                                       <p className="text-[16px]">
                                                            Start creating your
                                                            offer by selecting
                                                            the cryptocurrency
                                                            you want to trade,
                                                            whether or not you
                                                            want to buy or sell,
                                                            and the payment
                                                            method you want to
                                                            use.
                                                       </p>
                                                  </div>
                                                  <div className="flex md:flex-row flex-col mt-10 gap-[50px] mx-auto justify-center">
                                                       <a
                                                            className="text-[16px] py-[10px] px-[30px] bg-[#EDEDEF] rounded-lg"
                                                            onClick={() =>
                                                                 prev()
                                                            }
                                                       >
                                                            Previous Step
                                                       </a>
                                                       <button
                                                            type="submit"
                                                            className="text-[16px] py-[10px] px-[30px] bg-[#1D2937] rounded-lg text-white"
                                                            // onClick={() =>
                                                            //      next()
                                                            // }
                                                       >
                                                            Next Step
                                                       </button>
                                                  </div>
                                             </div>
                                             {/* <div className="md:w-[35%] w-full rounded-lg p-5 border bg-[#FFF5E7] md:mt-0 mt-5"> */}
                                             {/* <p className="text-[16px]">
                      This list shows only the currencies supported for your
                      selected payment method. If you think we're missing a
                      cryptoName that's supported, let us know and we'll add it.
                    </p> */}
                                             {/* </div> */}
                                        </div>
                                   </div>
                              </div>
                         </form>
                    </>
               ),
          },
          {
               title: "Pricing",
               content: (
                    <>
                         <form
                              className="form leading-8  px-5 py-5"
                              onSubmit={(e) => {
                                   CreateOfferdetails(e);
                              }}
                         >
                              <div className="max-w-[1400px] mx-auto">
                                   <h2 className="text-[#FF7A00] text-[30px] font-bold text-left">
                                        Trade Pricing
                                   </h2>
                                   <p className="text-[25px] font-bold pt-6">
                                        Choose Bitcoin rate you want to use
                                   </p>
                              </div>
                              <div className="max-w-[1400px] mx-auto">
                                   <div className="flex md:flex-row flex-col gap-6">
                                        <div className="mt-4 border p-4 rounded-lg">
                                             <div className=" items-center ">
                                                  <input
                                                       onChange={(e) => {
                                                            if (
                                                                 e.target
                                                                      .value ==
                                                                 true
                                                            ) {
                                                                 setPriceType(
                                                                      "Market Price"
                                                                 );
                                                            }
                                                       }}
                                                       id="default-radio-1"
                                                       type="radio"
                                                       defaultValue
                                                       disabled={true}
                                                       name="marketprice"
                                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                  />
                                                  <label
                                                       htmlFor="default-radio-1"
                                                       className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                  >
                                                       Market price
                                                  </label>
                                                  <p className="pt-6">
                                                       Your offer's selling
                                                       price will change
                                                       according to the market
                                                       price of Bitcoin.
                                                  </p>
                                             </div>
                                        </div>
                                        <div className="mt-4 border p-4 rounded-lg">
                                             <div className=" items-center ">
                                                  <input
                                                       onChange={(e) => {
                                                            if (
                                                                 e.target
                                                                      .value ==
                                                                 true
                                                            ) {
                                                                 setPriceType(
                                                                      "Fixed Price"
                                                                 );
                                                            }
                                                       }}
                                                       id="default-radio-2"
                                                       type="radio"
                                                       defaultValue
                                                       defaultChecked
                                                       name="fixedMarket"
                                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                  />
                                                  <label
                                                       htmlFor="default-radio-2"
                                                       className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                  >
                                                       Fixed price
                                                  </label>
                                                  <p className="pt-6">
                                                       Your offer's selling
                                                       price is locked when you
                                                       create it, and won't
                                                       change with the market
                                                       price.
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="max-w-[1400px] mx-auto">
                                   <div className="flex md:flex-row flex-col items-center justify-between mt-8">
                                        <div className="mt-4 md:md:w-[30%] w-full w-full p-4 text-center">
                                             <h3 className="text-[16px] font-bold pb-4">
                                                  Offer Trade Limits
                                             </h3>
                                             {/* <a
                                                  className="text-[16px] py-[3px] rounded-lg px-[30px] border"
                                                  href="#"
                                             >
                                                  Use Fixed Amount
                                             </a> */}
                                        </div>
                                        <div className="mt-4 border p-4 rounded-lg md:w-[60%] w-full">
                                             <div className="flex md:flex-row flex-col justify-between">
                                                  <div className="md:w-[45%] w-full">
                                                       <div className="mt-6">
                                                            <h3 className="font-bold lg:text-[16px] text-[16px] mb-2">
                                                                 Minimum
                                                            </h3>
                                                            <div className="flex">
                                                                 <input
                                                                      onChange={(
                                                                           e
                                                                      ) => {
                                                                           setMinPrice(
                                                                                e
                                                                                     .target
                                                                                     .value
                                                                           );
                                                                      }}
                                                                      type="MinPrice"
                                                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-center"
                                                                      required
                                                                      placeholder="249.00"
                                                                 />

                                                                 <p
                                                                      className="p-2.5 border rounded-r-lg font-bold"
                                                                      href="#"
                                                                 >
                                                                      INR
                                                                 </p>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="md:w-[45%] w-full">
                                                       <div className="mt-6">
                                                            <h3 className="font-bold lg:text-[16px] text-[16px] mb-2">
                                                                 Maximum
                                                            </h3>
                                                            <div className="flex">
                                                                 <input
                                                                      onChange={(
                                                                           e
                                                                      ) => {
                                                                           setMaxPrice(
                                                                                e
                                                                                     .target
                                                                                     .value
                                                                           );
                                                                      }}
                                                                      type="MaxPrice"
                                                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-center"
                                                                      required
                                                                      placeholder="1000.00"
                                                                 />
                                                                 <p
                                                                      className="p-2.5 border rounded-r-lg font-bold"
                                                                      href="#"
                                                                 >
                                                                      INR
                                                                 </p>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             {/* <div className="border mt-8 p-5 text-center bg-[#FFF5E7] rounded-lg">
                                                  <p className="text-[16px]">
                                                       If the minimum you set in
                                                       your currency drops below
                                                       3.00 USD in value, we'll
                                                       prompt the buyers to pick
                                                       an amount worth at least
                                                       3.00 USD to proceed with
                                                       the trade.
                                                  </p>
                                             </div> */}
                                             {/* <div className="border mt-8 p-5 text-center bg-[#FFF5E7] rounded-lg">
                                                  <p className="text-[16px]">
                                                       Please provide ID and
                                                       proof of address to
                                                       increase your trade limit
                                                       to 4141270 INR
                                                  </p>
                                             </div> */}
                                             {/* <div className="border mt-8 p-5 text-center bg-[#FFF5E7] rounded-lg">
                                                  <p className="text-[16px]">
                                                       To list this offer on the
                                                       Marketplace, you'll need
                                                       at least 249 INR worth of
                                                       cryptocurrency in your
                                                       Paxful Wallet.
                                                  </p>
                                             </div> */}
                                        </div>
                                   </div>

                                   <div className="flex md:flex-row flex-col items-center justify-between mt-8">
                                        <div className="mt-4 md:md:w-[30%] w-full w-full p-4 text-center">
                                             <h3 className="text-[16px] font-bold pb-4">
                                                  Fixed price market rate your
                                                  offer will list at
                                             </h3>
                                             {/* <a
                                                  className="text-[16px] py-[3px] rounded-lg px-[30px] border"
                                                  href="#"
                                             >
                                                  Advanced
                                             </a> */}
                                        </div>
                                        <div className="mt-4 border p-4 rounded-lg md:w-[60%] w-full">
                                             <div className="md:w-[45%] w-full">
                                                  <div className="mt-6">
                                                       <div>
                                                            <div className="flex">
                                                                 {/* <div
                                                                      className=" flex justify-evenly bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-center"
                                                                      required
                                                                 > */}
                                                                 {/* <div
                                                                           className="text-lg"
                                                                           onClick={
                                                                                decrement
                                                                           }
                                                                      >
                                                                           -
                                                                      </div> */}
                                                                 {/* <div className="text-lg">
                                                                           {
                                                                                secondcount
                                                                           }
                                                                      </div>
                                                                      <div
                                                                           className="text-lg"
                                                                           onClick={
                                                                                increment
                                                                           }
                                                                      >
                                                                           +
                                                                      </div> */}

                                                                 <input
                                                                      onChange={(
                                                                           e
                                                                      ) => {
                                                                           setSalePrice(
                                                                                e
                                                                                     .target
                                                                                     .value
                                                                           );
                                                                      }}
                                                                      type="MaxPrice"
                                                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-center"
                                                                      required
                                                                      placeholder={
                                                                           selectedTokenLivePrice
                                                                      }
                                                                      // value={
                                                                      //      selectedTokenLivePrice
                                                                      // }
                                                                 />
                                                                 {/* </div> */}
                                                                 <p
                                                                      className="p-2.5 border rounded-r-lg font-bold"
                                                                      href="#"
                                                                 >
                                                                      INR
                                                                 </p>
                                                            </div>
                                                            <div className="w-[45%]"></div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="mt-8">
                                                  <p className="text-[16px]">
                                                       Current {cryptoSymbol}{" "}
                                                       market price:{" "}
                                                       <span className="font-bold">
                                                            {
                                                                 selectedTokenLivePrice
                                                            }{" "}
                                                            INR
                                                       </span>
                                                  </p>

                                                  <h4 className="pt-4 text-[16px]">
                                                       So for every{" "}
                                                       <span className="font-bold">
                                                            249.00 INR
                                                       </span>{" "}
                                                       worth of {cryptoSymbol}{" "}
                                                       you sell (your minimum
                                                       trade limit), <br />
                                                       you will receive an{" "}
                                                       <span className="font-bold">
                                                            {salePrice
                                                                 ? (1 /
                                                                        selectedTokenLivePrice) *
                                                                   249 *
                                                                   salePrice
                                                                 : "249.00"}{" "}
                                                            INR
                                                       </span>{" "}
                                                       in return.
                                                  </h4>
                                             </div>
                                        </div>
                                   </div>

                                   {/* <div className="flex md:flex-row flex-col items-center justify-between mt-8">
                                        <div className="mt-4 md:md:w-[30%] w-full w-full p-4 text-center">
                                             <h3 className="text-[16px] font-bold pb-4">
                                                  Offer Time Limit
                                             </h3>
                                        </div>
                                        <div className="mt-4 border p-4 rounded-lg md:w-[60%] w-full">
                                             <div className="md:w-[45%] w-full">
                                                  <div className="mt-6">
                                                       <div className="flex">
                                                            <div
                                                                 className=" flex justify-evenly bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-center"
                                                                 required
                                                            >
                                                                 <div
                                                                      className="text-lg"
                                                                      onClick={
                                                                           decrement
                                                                      }
                                                                 >
                                                                      -
                                                                 </div>
                                                                 <div className="text-lg">
                                                                      {count}
                                                                 </div>
                                                                 <div
                                                                      className="text-lg"
                                                                      onClick={
                                                                           increment
                                                                      }
                                                                 >
                                                                      +
                                                                 </div>
                                                            </div>
                                                            <a
                                                                 className="p-2.5 border rounded-r-lg font-bold"
                                                                 href="#"
                                                            >
                                                                 Minutes
                                                            </a>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="mt-4">
                                                  <p className="text-[16px]">
                                                       This is how much time
                                                       your trade partner has to
                                                       make the payment and
                                                       click <br />
                                                       <span className="font-bold">
                                                            Paid
                                                       </span>{" "}
                                                       before the trade is
                                                       automatically canceled.
                                                  </p>
                                             </div>
                                        </div>
                                   </div> */}

                                   <div className="flex justify-end mt-8">
                                        <div className=" md:w-[60%] w-full mt-4   py-6 rounded-lg text-center border">
                                             <p className="text-[20px]">
                                                  Set the terms, instructions,
                                                  and limitations for people to
                                                  trade on this offer.
                                             </p>
                                             <div className="mx-auto text-left w-[50%] mt-6">
                                                  <ul className="list-disc text-[16px]">
                                                       <li>
                                                            You want to buy{" "}
                                                            {cryptoSymbol}
                                                       </li>
                                                       <li>
                                                            And pay for it via{" "}
                                                            {paymentMethod} in
                                                            Indian Rupee (INR)
                                                       </li>
                                                       <li>
                                                            You will pay 3%
                                                            above market price
                                                            on every purchase
                                                       </li>
                                                       <li>
                                                            People can trade
                                                            between{" "}
                                                            {MinPrice
                                                                 ? MinPrice
                                                                 : "249.00"}{" "}
                                                            INR and{" "}
                                                            {MaxPrice
                                                                 ? MaxPrice
                                                                 : "500.00"}{" "}
                                                            INR
                                                       </li>
                                                  </ul>

                                                  <div className="flex md:flex-row flex-col mt-10 gap-[50px] mx-auto justify-center">
                                                       <a
                                                            className="text-[16px] py-[10px] px-[30px] bg-[#EDEDEF] rounded-lg"
                                                            onClick={() =>
                                                                 prev()
                                                            }
                                                       >
                                                            Previous Step
                                                       </a>
                                                       <button
                                                            className="text-[16px] py-[10px] px-[30px] bg-[#1D2937] rounded-lg text-white"
                                                            type="submit"
                                                            // onClick={() =>
                                                            //      next()
                                                            // }
                                                       >
                                                            Next Step
                                                       </button>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </form>
                    </>
               ),
          },
          {
               title: "Other Settings",
               content: (
                    <>
                         <form
                              className="leading-8  px-5 py-5 mt-5"
                              onSubmit={(e) => {
                                   CreateOfferdetails(e);
                              }}
                         >
                              <div className="max-w-[1400px] mx-auto">
                                   <h2 className="text-[#FF7A00] text-[30px] font-bold text-left">
                                        Trade Instructions
                                   </h2>

                                   <div className=" md:w-[70%] w-full mt-4 ">
                                        <h3 className="text-[20px] font-bold py-3 text-left">
                                             Offer Tags
                                        </h3>

                                        <div>
                                             {/* <select>
                                                  {OfferTags.map((option) => (
                                                       <option
                                                            value={option.value}
                                                       >
                                                            {option.label}
                                                       </option>
                                                  ))}
                                             </select> */}

                                             <select
                                                  id="offertags"
                                                  // className="md:w-[60%] w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 "
                                                  className="shadow-sm  rounded border border-[#A8A5A5] text-gray-900 text-[15px]   block w-full px-2.5 py-4 "
                                                  onChange={(e) => {
                                                       setOfferTag(
                                                            e.target.value
                                                       );
                                                       console.log(
                                                            "Values : ",
                                                            e.target.value
                                                       );
                                                  }}
                                             >
                                                  {OfferTags.map((option) => (
                                                       <option
                                                            value={option.value}
                                                       >
                                                            {option.label}
                                                       </option>
                                                  ))}
                                                  {/* <option selected>
                                                       Bitcoin */}
                                                  {/* </option>
                                                  <option value="BTC">
                                                       Bitcoin
                                                  </option>
                                                  <option value="ETH">
                                                       Ether (ETH)
                                                  </option>
                                                  <option value="BNB">
                                                       Binance (BNB)
                                                  </option>
                                                  <option value="SHIB">
                                                       SHIB INU (SHIB)
                                                  </option>
                                                  <option value="DOGE">
                                                       DOGE Coin
                                                  </option>
                                                  <option value="USDTERC20">
                                                       USDT (ERC20)
                                                  </option>
                                                  <option value="USDTBEP20">
                                                       USDT (BEP20)
                                                  </option> */}
                                             </select>
                                        </div>
                                        {/* <input
                                             onChange={(e) => {
                                                  setOfferTag(e.target.value);
                                             }}
                                             type="text"
                                             name="OfferTag"
                                             id="Company name"
                                             className="shadow-sm  rounded border border-[#A8A5A5] text-gray-900 text-[15px]   block w-full px-2.5 py-4 "
                                             placeholder="Select an offer tag or start typing to search for one "
                                             required
                                        /> */}
                                        <p className="text-[15px] py-3 text-left">
                                             Select up to 3 tags that best
                                             describe your offer terms.
                                        </p>
                                   </div>
                                   <div className=" md:w-[70%] w-full mt-4 ">
                                        <h3 className="text-[20px] font-bold py-3 text-left">
                                             Your Offer Label
                                        </h3>
                                        <input
                                             onChange={(e) => {
                                                  setOfferlabel(e.target.value);
                                             }}
                                             type="text"
                                             name="Offerlabel"
                                             id="Company name"
                                             className="shadow-sm  rounded border border-[#A8A5A5] text-gray-900 text-[15px]   block w-full px-2.5 py-4 "
                                             placeholder="Maximum 25 characters. Only letters, numbers and dashes"
                                             required
                                        />
                                        <p className="text-[15px] py-3 text-left">
                                             Make your offer stand out to other
                                             users with a catchy label. Your
                                             offer label can be up to 25
                                             characters long and can contain
                                             letters, numbers, the apostrophe
                                             and the hyphen.
                                        </p>
                                   </div>
                                   <div className=" md:w-[70%] w-full mt-4 ">
                                        <h3 className="text-[20px] font-bold py-3 text-left">
                                             Offer Terms
                                        </h3>
                                        <textarea
                                             onChange={(e) => {
                                                  setOfferterm(e.target.value);
                                             }}
                                             id="message"
                                             name="Offerterm"
                                             rows={8}
                                             className="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-[#A8A5A5] text-left"
                                             placeholder="Write your terms here"
                                             defaultValue={""}
                                        />
                                        <p className="text-[15px] py-3 text-left">
                                             Anybody who views your offer will
                                             see these terms. Keep them simple
                                             and clear to make your offer sound
                                             attractive.
                                        </p>
                                   </div>
                                   <div className=" md:w-[70%] w-full mt-4 ">
                                        <h3 className="text-[20px] font-bold py-3 text-left">
                                             Trade Instructions
                                        </h3>
                                        <textarea
                                             onChange={(e) => {
                                                  setTradeinstruction(
                                                       e.target.value
                                                  );
                                             }}
                                             id="message"
                                             name="Tradeinstruction"
                                             rows={8}
                                             className="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-[#A8A5A5] "
                                             placeholder="List out your instructions for your trade partner"
                                             defaultValue={""}
                                        />
                                        <p className="text-[15px] py-3 text-left">
                                             To ensure a successful trade be
                                             transparent about what you expect
                                             from your trade partner and list
                                             out what you need.
                                        </p>
                                   </div>
                                   <div className=" md:w-[70%] w-full mt-4  py-6 rounded-lg text-center border">
                                        <p className="text-[20px]">
                                             Set the terms, instructions, and
                                             limitations for people to trade on
                                             this offer.
                                        </p>
                                        <div className="mx-auto text-left w-[50%] mt-6">
                                             <ul className="list-disc text-[16px] ">
                                                  <li>
                                                       You want to buy{" "}
                                                       {cryptoSymbol}
                                                  </li>
                                                  <li>
                                                       And pay for it via{" "}
                                                       {paymentMethod} in Indian
                                                       Rupee (INR)
                                                  </li>
                                                  <li>
                                                       You will pay 3% above
                                                       market price on every
                                                       purchase
                                                  </li>
                                                  <li>
                                                       People can trade between{" "}
                                                       {MinPrice
                                                            ? MinPrice
                                                            : "249.00"}{" "}
                                                       INR and{" "}
                                                       {MaxPrice
                                                            ? MaxPrice
                                                            : "500.00"}{" "}
                                                       INR
                                                  </li>
                                             </ul>
                                             <div className="flex md:flex-row flex-col mt-10 gap-[50px] mx-auto justify-center">
                                                  <a
                                                       className="text-[16px] py-[10px] px-[30px] bg-[#EDEDEF] rounded-lg"
                                                       onClick={() => prev()}
                                                  >
                                                       Previous Step
                                                  </a>
                                                  <button
                                                       type="submit"
                                                       className="text-[16px] py-[10px] px-[30px] bg-[#1D2937] rounded-lg text-white"
                                                       onClick={() =>
                                                            message.success(
                                                                 "Project created successfully!"
                                                            )
                                                       }
                                                  >
                                                       Next Step
                                                  </button>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </form>
                    </>
               ),
          },
     ];

     const { token } = theme.useToken();
     const [current, setCurrent] = useState(0);
     const items = steps.map((item) => ({
          key: item.title,
          title: item.title,
     }));

     return (
          <main className="md:mt-[100px] mt-[200px]">
               <section className="m-2">
                    <div className="text-center py-8">
                         {Active ? (
                              <>
                                   <p className="text-[40px] text-black font-bold">
                                        Create an Offer to Sell Bitcoin
                                   </p>{" "}
                              </>
                         ) : (
                              <p className="text-[40px] text-black font-bold">
                                   Create an Offer to Buy Bitcoin
                              </p>
                         )}
                    </div>

                    {/*===================================== step section =====================================================================*/}
                    <div className="max-w-[1400px] w-full mx-auto ">
                         <Steps
                              current={current}
                              items={items}
                              // data={values}
                              // values={values}
                              // setValues={setValues}
                         />

                         <div>{steps[current]?.content}</div>
                         <div
                              style={{
                                   marginTop: 24,
                              }}
                         >
                              {/* {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )} */}
                         </div>
                    </div>
               </section>
          </main>
     );
};

export default CreateOffer;
