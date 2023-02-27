/** @format */

// /** @format */

import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { generatMeeting } from "../../GraphQL/Mutations/GeneratemeetingApi";
import { getOfferByOfferId } from "../../GraphQL/Queries/getOfferbyOfferIdAPI";
import Offer from "../Offer";

const BuyerChat = () => {
     const { offerId, buyerId } = useParams();
     const navigate = useNavigate();
     console.log("offerId, buyerId : ", offerId, buyerId);

     const [GenerateMeeting, { data: Meeeting, loadings, err }] =
          useMutation(generatMeeting);

     const {
          data: OfferByOfferIddata,
          loading: fl,
          error: ferrors,
     } = useQuery(getOfferByOfferId, {
          skip: !offerId,
          variables: {
               offer_id: offerId,
          },
     });

     const HandleSubmitRequest = (e) => {
          e.preventDefault();

          GenerateMeeting({
               variables: {
                    trade_id: "63f850f76e66ec7f93771e51",
               },
          })
               .then((res) => {
                    console.log(res, "Generating data link");
                    console.log(
                         "This is meeting data",
                         res.data.generateMeeting.message[0]
                    );

                    window.open(res.data.generateMeeting.message[0]);
               })
               .catch((err) => {
                    console.log(err);
               });
     };

     return (
          <>
               <main className="my-[80px] md:mt-[100px] md:mb-[30px] px-5 ">
                    <div className="max-w-[1400px] mx-auto relative">
                         <div>
                              <h2 className="text-2xl font-bold">
                                   Trade Started
                              </h2>
                         </div>
                         <div className="flex md:flex-row flex-col justify-between mt-8">
                              <div className="md:w-[48%] w-full">
                                   <div className="border border-[#A8A5A5] rounded-lg bg-[#FFF9F4] p-5">
                                        <div className=" flex gap-10">
                                             <div>
                                                  <p className="text-[16px]">
                                                       Keep all conversations
                                                       within the trade video
                                                       call. Moderators won't be
                                                       able to assist you if
                                                       something goes wrong
                                                       outside of Crycox.
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="border border-[#A8A5A5] rounded-lg p-5 mt-5">
                                        <div className="border-b pb-8">
                                             <h4 className="text-[16px] font-bold pb-8">
                                                  Please make a payment of
                                                  100,001.19 IDR using Domestic
                                                  Wire Transfer.
                                             </h4>
                                             <p className="text-[16px]">
                                                  0.00038473 BTC will be added
                                                  to your Bitcoin wallet
                                             </p>
                                        </div>
                                        <div className="mt-10">
                                             <p className="text-[16px] pb-5">
                                                  Once you've made the payment,
                                                  be sure to click Paid within
                                                  the given time limit.
                                                  Otherwise the trade will be
                                                  automatically canceled and the
                                                  Bitcoin will be returned to
                                                  the seller's wallet.
                                             </p>

                                             <button
                                                  className="bg-[#0E509D] text-white py-1.5 px-[20px] border border-[#6A6868] flex items-center md:w-[20%] w-[30%]"
                                                  onClick={() => {
                                                       console.log(
                                                            "Paid clicked"
                                                       );
                                                  }}
                                             >
                                                  Paid
                                             </button>
                                        </div>
                                        {/* <div className="mt-10">
                                             <div className="border border-[#A8A5A5] rounded-lg bg-[#FFF9F4] p-5">
                                                  <div className=" flex gap-10">
                                                       <div>
                                                            <p className="text-[16px]">
                                                                 Keep trades
                                                                 within Crycox.
                                                                 Some users may
                                                                 ask you to
                                                                 trade outside
                                                                 the Crycox
                                                                 platform. This
                                                                 is against our
                                                                 Terms of
                                                                 Service and
                                                                 likely a scam
                                                                 attempt. You
                                                                 must insist on
                                                                 keeping all
                                                                 trade
                                                                 conversations
                                                                 within Crycox.
                                                                 If you choose
                                                                 to proceed
                                                                 outside Crycox,
                                                                 note that we
                                                                 cannot help or
                                                                 support you if
                                                                 you are scammed
                                                                 during such
                                                                 trades.
                                                            </p>
                                                       </div>
                                                       <div>
                                                            <img
                                                                 className="w-24"
                                                                 src="/assets/closeB 3.svg"
                                                                 alt
                                                            />
                                                       </div>
                                                  </div>
                                             </div>
                                        </div> */}
                                        <div className="flex md:flex-row flex-col justify-between mt-6 items-center border-b pb-5">
                                             <a className=" py-1.5 px-[20px] border border-[#FF7A00] font-bold">
                                                  Cancel Trade
                                             </a>
                                             <p className=" md:mt-0 mt-5">
                                                  You haven't paid yet
                                             </p>
                                        </div>
                                        <div className=" mt-8 ">
                                             <h4 className="text-[16px] font-bold pb-5">
                                                  Please follow 3rdpartyactive's
                                                  instructions
                                             </h4>
                                             <p className="text-[16px] py-1.5 px-[20px] border-[#6A6868] rounded-lg border md:w-[48%] w-full">
                                                  no verification needed
                                             </p>
                                             <h5 className="text-[16px] pt-5">
                                                  Welcome
                                             </h5>
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
                                                                 {
                                                                      OfferByOfferIddata
                                                                           ?.offerById
                                                                           ?.offer[0]
                                                                           .offer_price
                                                                 }{" "}
                                                            </p>
                                                            <p className="text-[14px]">
                                                                 {
                                                                      OfferByOfferIddata
                                                                           ?.offerById
                                                                           ?.offer[0]
                                                                           .crypto_name
                                                                 }
                                                            </p>
                                                       </div>
                                                       <div className>
                                                            <h6 className="text-[16px] font-bold text-[#FF7A00]">
                                                                 TRADE ID
                                                            </h6>
                                                            <p className="text-[14px] py-3">
                                                                 {
                                                                      OfferByOfferIddata
                                                                           ?.offerById
                                                                           ?.offer[0]
                                                                           .id
                                                                 }
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
                                                                 Status
                                                                 {/* offer_tags */}
                                                            </h6>
                                                            <p className="text-[14px] py-3">
                                                                 {
                                                                      OfferByOfferIddata
                                                                           ?.offerById
                                                                           ?.offer[0]
                                                                           .offer_tags
                                                                 }
                                                            </p>
                                                       </div>
                                                  </div>
                                                  <div className="flex justify-between mt-4">
                                                       <a
                                                            className="bg-[#D9D9D9] py-1.5 px-[20px] border border-[#6A6868]"
                                                            href="/"
                                                       >
                                                            Report
                                                       </a>
                                                       <a
                                                            className="bg-[#D9D9D9] py-1.5 px-[20px] border border-[#6A6868]"
                                                            href="/"
                                                       >
                                                            View Offer
                                                       </a>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="md:w-[48%] w-full md:mt-0 mt-5">
                                   <div className=" border border-[#A8A5A5] p-5  rounded-lg">
                                        <div className="flex justify-between items-center">
                                             <div className="flex items-center">
                                                  <div>
                                                       <img
                                                            src="/assets/Group.svg"
                                                            alt
                                                       />
                                                  </div>
                                                  <div className="ml-4">
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
                                                  </div>
                                             </div>
                                             <div className="flex gap-5">
                                                  <a
                                                       className="py-1 px-[10px] bg-[#E0FBE0] border border-[#A5A8A5]"
                                                       href="/"
                                                  >
                                                       <img
                                                            src="/assets/Group 396.svg"
                                                            alt
                                                       />
                                                  </a>
                                                  <a
                                                       className="py-1 px-[10px] bg-[#FFE9E9] border border-[#A5A8A5]"
                                                       href="/"
                                                  >
                                                       <img
                                                            src="/assets/Group 397.svg"
                                                            alt
                                                       />
                                                  </a>
                                             </div>
                                        </div>
                                        <h6 className="text-[16px] font-bold pt-6">
                                             Moderator unavailable
                                        </h6>
                                        <div className=" border border-[#A8A5A5] p-3  rounded-lg mt-3 bg-[#FFF9F4]">
                                             <ol className="list-decimal px-3 text-[13px]">
                                                  <p className="text-[14px]">
                                                       3rdpartyactive is selling
                                                       you 0.00038473 BTC{" "}
                                                  </p>
                                                  <li>
                                                       You must pay 100,001.19
                                                       IDR via Domestic Wire
                                                       Transfer{" "}
                                                  </li>
                                                  <li>
                                                       They will share their
                                                       bank details below
                                                  </li>
                                                  <li>
                                                       When you have sent the
                                                       money, please mark the
                                                       trade as "paid"{" "}
                                                  </li>
                                                  <li>
                                                       (It really helps if you
                                                       upload a screenshot or
                                                       PDF as a receipt of
                                                       payment too){" "}
                                                  </li>
                                                  <li>
                                                       Then wait for
                                                       3rdpartyactive to confirm
                                                       they have received
                                                       payment
                                                  </li>
                                                  <li>
                                                       When they do, they will
                                                       release your BTC and the
                                                       trade will be complete
                                                  </li>
                                             </ol>
                                        </div>
                                        <p className="text-[14px] pt-2">
                                             JANUARY 5, 2023 AT 9:31 AM
                                        </p>
                                        <div className=" border border-[#A8A5A5] p-5  rounded-lg mt-3 bg-[#FFF9F4]">
                                             <h6 className="text-[16px] font-bold">
                                                  Follow these instructions from
                                                  your trade partner:
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
                                                       This trade has expired
                                                       and BTC is no longer
                                                       reserved. To continue,
                                                       ask your trade partner to
                                                       reopen this trade, and
                                                       make sure BTC is
                                                       reserved, before you make
                                                       the payment.
                                                  </p>
                                             </div>
                                             <p className="text-[14px] pt-2">
                                                  JANUARY 5, 2023 AT 10:00 AM
                                             </p>
                                        </div>
                                        <div className="mt-4">
                                             <p className="text-[16px]">
                                                  Start Video Call with
                                                  seller.............
                                             </p>
                                             <div className="flex md:flex-row flex-col justify-between mt-10 gap-5">
                                                  <div className="p-2 bg-[#EDEDEF] border border-[#6A6868] rounded max-w-[200px] w-full md:mx-0 mx-auto">
                                                       <button
                                                            onClick={
                                                                 HandleSubmitRequest
                                                            }
                                                            className="flex items-center m-auto justify-center text-[16px] font-bold  "
                                                       >
                                                            Video Call{" "}
                                                            {/* <span className="pl-3">
                          <img src="/assets/send.svg" alt />
                        </span> */}
                                                       </button>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         {/* <div className="absolute right-0 bottom-[-300px] md:visible invisible">
            <img src="/assets/undraw_ether_re_y7ft 1.svg" alt />
          </div> */}
                    </div>
               </main>
          </>
     );
};

export default BuyerChat;
