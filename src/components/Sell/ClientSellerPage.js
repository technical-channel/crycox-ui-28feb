/** @format */

import { useQuery } from "@apollo/client";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { EscrowAddress } from "../../Config/Contract/Contract";
import { getFeedbackByOfferId } from "../../GraphQL/Queries/feedbackByOfferIdAPI";
import { getOfferByOfferId } from "../../GraphQL/Queries/getOfferbyOfferIdAPI";
import { tradeByOfferID } from "../../GraphQL/Queries/TradebyofferidApi";

const ClientSellerPage = () => {
     const navigate = useNavigate();
     const { library, account, active, chainId } = useWeb3React();
     const { offerId, sellerId } = useParams();
     console.log("offerId, sellerId : ", offerId, sellerId);
     const [inputVal, setInputVal] = useState(0);
     const { data, loading, error } = useQuery(getOfferByOfferId, {
          skip: !offerId,
          variables: {
               offer_id: offerId,
          },
     });
     const offerData = data?.offerById?.offer[0];

     const {
          data: tradeByOfferIdData,
          loading: loading2,
          error: error2,
     } = useQuery(tradeByOfferID, {
          skip: !offerId,
          variables: {
               offer_id: offerId,
          },
     });

     const {
          data: feedbackData,
          loading: floading,
          error: ferror,
     } = useQuery(getFeedbackByOfferId, {
          skip: !offerId,
          variables: {
               offer_id: offerId,
          },
     });

     const offerFeedbackData = feedbackData?.tradeByOfferID?.trade;

     console.log("Feedback user data for offer : ", offerFeedbackData);

     useEffect(() => {
          console.log("Offer Data : ", data, error);
          console.log("Feedback Data : ", feedbackData, ferror);
          console.log("TradeByOfferID data:", tradeByOfferIdData);
     }, [loading, floading, loading2]);

     async function createVoucher() {
          if (active) {
               const SIGNING_DOMAIN_NAME = "Voucher-Domain";
               const SIGNING_DOMAIN_VERSION = "1";
               const contractAddress = EscrowAddress; // Put the address here from remix

               const seller = "0xdD870fA1b7C4700F2BD7f44238821C26f7392148";
               const buyer = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4";
               const token = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
               const offerId = "Offer001";
               const tokenName = "SHIB";
               const amount = "1000000";
               const price = "1000000";

               const provider = new ethers.providers.Web3Provider(
                    library.provider
               );
               const signer = provider.getSigner();
               console.log("Rahul :2 ");
               const domain = {
                    name: SIGNING_DOMAIN_NAME,
                    version: SIGNING_DOMAIN_VERSION,
                    verifyingContract: contractAddress,
                    chainId,
               };
               const voucher = {
                    seller,
                    buyer,
                    token,
                    offerId,
                    tokenName,
                    amount,
                    price,
               };

               const types = {
                    TradeVoucher: [
                         { name: "seller", type: "address" },
                         { name: "buyer", type: "address" },
                         { name: "token", type: "address" },
                         { name: "offerId", type: "string" },
                         { name: "tokenName", type: "string" },
                         { name: "amount", type: "uint256" },
                         { name: "price", type: "uint256" },
                    ],
               };

               const signature = await signer._signTypedData(
                    domain,
                    types,
                    voucher
               );
               console.log("signature : ", signature);
               const data = {
                    ...voucher,
                    signature,
               };

               console.log(
                    `["${data.seller}", "${data.buyer}", "${data.token}", "${data.offerId}", "${data.tokenName}","${data.amount}", "${data.price}", "${data.signature}"]`
               );
               return data;
          } else {
               Swal.fire("Error", "Please Connect to Wallet", "error");
          }
     }

     return (
          <main className="xl:mt-[100px] mt-[80px]">
               <div className="head  w-full h-full bg-client-buyer-img bg-cover text-center py-8">
                    <p className="xl:text-[40px] lg:text-[30px] text-[20px] text-white font-bold">
                         {" "}
                         Sell Bitcoin with Cash in Person (INR) - <br />
                         Bangalore or Mysore
                    </p>
               </div>

               <section className="mt-10">
                    <div className="max-w-[1200px] mx-auto p-4">
                         <div className="border-2 rounded-lg p-5">
                              <h3 className="text-center md:text-[30px] text-[16px] font-bold">
                                   How much do you want to Sell?
                              </h3>
                              <div className="p-5">
                                   <form
                                        onSubmit={(e) => {
                                             e.preventDefault();
                                        }}
                                   >
                                        <div className="flex md:flex-row flex-col justify-between">
                                             <div className="md:w-[45%] w-full">
                                                  <label
                                                       htmlFor="password"
                                                       className="block mb-2 text-[16px] font-medium text-gray-900 "
                                                  >
                                                       I will receive
                                                  </label>
                                                  <div className="flex">
                                                       <input
                                                            type="number"
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                            required
                                                            onChange={(e) => {
                                                                 setInputVal(
                                                                      e.target
                                                                           .value
                                                                 );
                                                                 console.log(
                                                                      e.target
                                                                           .value
                                                                 );
                                                            }}
                                                            placeholder={300}
                                                            value={inputVal}
                                                       />
                                                       <a className="p-2.5 border rounded-r-lg font-bold">
                                                            INR
                                                       </a>
                                                  </div>
                                             </div>
                                             <div className="md:w-[45%] w-full">
                                                  <label
                                                       htmlFor="name"
                                                       className="block mb-2 text-[16px] font-medium text-gray-900 "
                                                  >
                                                       and pay in{" "}
                                                       {offerData?.crypto_name.toUpperCase()}
                                                  </label>
                                                  <div className="flex">
                                                       <input
                                                            type="name"
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                            required
                                                            disabled={true}
                                                            placeholder="0.00013438"
                                                            value={
                                                                 inputVal *
                                                                 offerData?.offer_price
                                                            }
                                                       />

                                                       <a className="p-2.5 border rounded-r-lg font-bold">
                                                            {offerData?.crypto_name.toUpperCase()}
                                                       </a>
                                                  </div>
                                             </div>
                                        </div>
                                        <p className="text-[16px] py-4">
                                             You pay {inputVal ? inputVal : 0}{" "}
                                             INR worth of{" "}
                                             {offerData?.crypto_name.toUpperCase()}{" "}
                                             Coin + 2.0 % escrow fee
                                        </p>
                                        <div className="w-full mt-8">
                                             <button
                                                  onClick={() => {
                                                       if (
                                                            inputVal > 0 &&
                                                            inputVal !== ""
                                                       ) {
                                                            if (active) {
                                                                 createVoucher().then(
                                                                      (res) => {
                                                                           console.log(
                                                                                "Send to Seller Chat page",
                                                                                res
                                                                           );
                                                                           navigate(
                                                                                `/offer/sellerchat/${offerId}/${sellerId}`
                                                                           );
                                                                      }
                                                                 );
                                                            } else {
                                                                 Swal.fire(
                                                                      "Error",
                                                                      "Please connect to Wallet",
                                                                      "error"
                                                                 );
                                                            }
                                                       }
                                                  }}
                                                  className="border border-[#F1971F] text-black font-medium rounded-lg px-10 w-full text-[16px] py-3.5 text-center"
                                             >
                                                  Sell Now
                                             </button>
                                        </div>
                                   </form>
                              </div>
                              <div className="mt-10 border border-[#A8A5A5] p-8 rounded-lg">
                                   <h4 className="text-center md:text-[20px] text-[16px] text-[#F1971F]">
                                        About this offer
                                   </h4>
                                   <div className="flex md:flex-row flex-col justify-between mt-10">
                                        <div>
                                             <p className="text-[16px]">
                                                  Buyer rate
                                             </p>
                                             <h3 className="text-[16px] font-bold">
                                                  {offerData?.offer_price}{" "}
                                                  {offerData?.crypto_name.toUpperCase()}{" "}
                                                  {/* 234,558,725.935 IDR• */}
                                                  <span className="text-[16px] font-medium">
                                                       {offerData?.offer_margin}
                                                       % above market
                                                  </span>
                                             </h3>
                                        </div>
                                        <div>
                                             <p className="text-[16px]">
                                                  Payment Type
                                             </p>
                                             <h3 className="text-[16px] font-bold">
                                                  {offerData?.payment_type}
                                             </h3>
                                        </div>
                                   </div>
                                   <div className="flex md:flex-row flex-col justify-between mt-10">
                                        <div>
                                             <p className="text-[16px]">
                                                  Offerer Location
                                             </p>
                                             <h3 className="text-[16px] font-bold">
                                                  {
                                                       offerData?.offer_owner_location
                                                  }
                                             </h3>
                                        </div>
                                        <div className="md:mr-12 mr-0">
                                             <p className="text-[16px]">
                                                  Crycox fee
                                             </p>
                                             <h3 className="text-[16px] font-bold">
                                                  0%
                                             </h3>
                                        </div>
                                   </div>
                              </div>
                              <div className="mt-10 border border-[#A8A5A5] p-8 rounded-lg">
                                   <h4 className="text-center md:text-[20px] text-[16px] text-[#F1971F]">
                                        About this Buyer
                                   </h4>
                                   <div className="flex md:flex-row flex-col items-center mt-10">
                                        <div>
                                             <img src="/assets/Group.svg" alt />
                                        </div>
                                        <div className="md:ml-10 ml-0">
                                             <a
                                                  className="md:text-[20px] text-[16px]"
                                                  href="23-my-profile.html"
                                             >
                                                  Pro_Oracle_Trader - 12
                                             </a>
                                             {/* <p className="text-[16px]">Seen 36 minutes ago</p> */}
                                        </div>
                                   </div>
                                   <div className="flex md:flex-row flex-col justify-between mt-10 md:w-[50%] w-full">
                                        <div>
                                             <p className="text-[16px]">
                                                  Positive feedback
                                             </p>
                                             <h3 className="text-[16px] font-bold pt-10">
                                                  0
                                             </h3>
                                        </div>
                                        <div>
                                             <p className="text-[16px]">
                                                  Negative feedback
                                             </p>
                                             <h3 className="text-[16px] font-bold pt-10">
                                                  0
                                             </h3>
                                        </div>
                                   </div>
                                   {/* <div className="flex md:flex-row flex-col justify-between mt-10 md:w-[50%] w-full">
                <div className="flex items-center">
                  <img src="/assets/check-mark 2.svg" alt />
                  <p className="text-[16px] pl-4">ID verified</p>
                </div>
                <div className="flex items-center">
                  <img src="/assets/check-mark 2.svg" alt />
                  <p className="text-[16px]">Address verified</p>
                </div>
              </div> */}
                                   <div className="flex md:flex-row flex-col justify-between mt-10 md:w-[50%] w-full mb-4">
                                        <div className="flex items-center">
                                             <img
                                                  src="/assets/check-mark 2.svg"
                                                  alt
                                             />
                                             <p className="text-[16px]">
                                                  Email verified
                                             </p>
                                        </div>
                                        <div className="flex items-center">
                                             <img
                                                  src="/assets/closeB 4.svg"
                                                  alt
                                             />
                                             <p className="text-[16px] pl-4">
                                                  Phone verified
                                             </p>
                                        </div>
                                   </div>
                                   {/* <div className="mt-8">
                <h4 className="text-[20px] pb-10">Average trade speed</h4>
                <a className="bg-[#FFF9F4] text-[16px] py-[10px] px-[30px] border rounded-lg">
                  Instant
                </a>
              </div> */}
                              </div>

                              {/* 
            <div className="flex md:flex-row flex-col bg-[#FFF9F4] border border-[#000] rounded-lg mt-10 p-4 items-center justify-between">
              <div>
                <h5 className="text-[16px] font-bold">
                  We need some additional details
                </h5>
                <p className="text-[16px]">
                  To sell Bitcoin to{" "}
                  <span className="text-[#000AFF]">Pro_Oracle_Trader</span> you
                  need to verify your email and phone number.
                </p>
              </div>
              <div className="md:mt-0 mt-5">
                <div className="flex">
                  <a
                    className="bg-[#0E509D] py-2 px-[30px] rounded-l-lg text-white p-2"
                    href="/"
                  >
                    Start Verification
                  </a>
                  <a
                    className="p-2 bg-[#fff] border rounded-r-lg font-bold"
                    href="/"
                  >
                    <img src="/assets/Vector 3.svg" alt />
                  </a>
                </div>
              </div>
            </div> */}

                              {/* <div className="text-center items-center border border-[#000] rounded-lg mt-10 p-4">
              <h5 className="md:text-[16px] font-bold text-[16px]">
                <span className="md:text-[16px] text-[16px] pr-4">
                  <i className="fa-solid fa-magnifying-glass" />{" "}
                </span>{" "}
                Search Similar Offers
              </h5>
            </div> */}

                              <div className="text-center py-8">
                                   <p className="text-[16px]">
                                        Reserve Bitcoin for this trade and start
                                        live chat with{" "}
                                        <a className="text-[#000AFF]">
                                             Pro_Oracle_Trader
                                        </a>
                                   </p>
                              </div>
                         </div>
                         <div className="max-w-[1200px] mx-auto p-5 border border-[#000] rounded-lg items-center mb-10">
                              <h5 className="md:text-[20px] text-center text-[16px] text-[#F1971F]">
                                   Offer terms
                              </h5>
                              {offerData?.offer_terms}
                              {/* <ol className="list-decimal px-5 text-[16px] pt-5">
              <li>
                Before a trade starts, the seller selects the bank account
                they'll receive payment to and the buyer selects the account
                they will send funds to.
              </li>
              <li>
                When the seller is ready to start the trade, they'll share their
                bank account details with the buyer.
              </li>
              <li>
                The buyer makes the payment to the seller's specified account.
              </li>
              <li>
                We recommend the buyer uploads a screenshot of the transaction,
                featuring the transaction reference number, as proof of payment.
              </li>
            </ol> */}
                         </div>

                         <div className="max-w-[1200px] mx-auto p-5 border border-[#000] rounded-lg items-center mb-10">
                              <h5 className="md:text-[20px] text-center text-[16px] text-[#F1971F]">
                                   Offer Conditions
                              </h5>
                              {offerData?.offer_condition}
                         </div>

                         <h5 className="text-center text-[20px]">
                              {offerData?.offer_label}
                         </h5>
                         <div className="mx-auto lg:p-0 p-5 max-w-[1200px] my-10">
                              <div className="p-5 border border-[#000] rounded-lg">
                                   <div className="flex md:flex-row flex-col justify-between border-b">
                                        <div>
                                             <h4 className="text-[20px] text-[#F1971F]">
                                                  Feedback on this offer
                                             </h4>
                                        </div>
                                   </div>

                                   {offerFeedbackData?.map(
                                        (offerFeedbackData, index) => {
                                             return (
                                                  <div className="border-b">
                                                       <div className="flex md:flex-row flex-col justify-between mt-10 md:w-[68%] pb-6 w-full">
                                                            <div className="flex md:flex-row flex-col items-center">
                                                                 <div>
                                                                      <img
                                                                           src="/assets/Ellipse 11.svg"
                                                                           alt
                                                                      />
                                                                 </div>
                                                                 <div className="ml-4 md:mt-0 mt-4">
                                                                      <a className="text-[#000AFF] text-[16px]">
                                                                           {
                                                                                offerFeedbackData.seller_id
                                                                           }
                                                                      </a>
                                                                      <p className="text-[16px] py-[10px]">
                                                                           {
                                                                                offerFeedbackData.date_start_time
                                                                           }
                                                                      </p>
                                                                      <a className="flex items-center bg-[#E0FBE0] py-[10px] px-[30px] text-[16px]">
                                                                           <span className="pr-4">
                                                                                <img
                                                                                     src="/assets/like01.svg"
                                                                                     alt
                                                                                />
                                                                           </span>{" "}
                                                                           Positive
                                                                      </a>
                                                                 </div>
                                                            </div>
                                                            <div className="flex lg:justify-start justify-center md:mt-0 mt-5">
                                                                 <div>
                                                                      <a className="text-[#000AFF] text-[16px]">
                                                                           {
                                                                                offerFeedbackData.pay_via
                                                                           }
                                                                      </a>
                                                                      <p className="text-[16px] py-[10px]">
                                                                           {
                                                                                offerFeedbackData.buyer_feedback_text
                                                                           }
                                                                      </p>
                                                                 </div>
                                                                 <div className="ml-3">
                                                                      <h5 className="p-2 bg-[#A8A5A5] rounded-lg">
                                                                           {
                                                                                offerFeedbackData.trade_outcome
                                                                           }
                                                                      </h5>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             );
                                        }
                                   )}

                                   {/* End Here */}
                              </div>
                         </div>
                    </div>
               </section>
          </main>
     );
};

export default ClientSellerPage;
