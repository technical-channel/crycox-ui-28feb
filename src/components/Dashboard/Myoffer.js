/** @format */

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { offerUserById } from "../../GraphQL/Queries/OfferbyuseridApi";
import { useQuery, useLazyQuery, useMutation } from "@apollo/client";
import { MetamaskExist } from "../../GraphQL/Queries/MetamaskexistApi";
import { useWeb3React } from "@web3-react/core";
import { OfferStatus } from "../../GraphQL/Mutations/offerStatusAPI";

const Myoffer = () => {
     const { active, account } = useWeb3React();
     const navigate = useNavigate();

     const [filteroffer, setFilteroffer] = useState([]);
     const [checked, setChecked] = React.useState(true);
     const [isSaleStatus, setIsSaleStatus] = useState(true);

     const { data, loading, error } = useQuery(MetamaskExist, {
          skip: !account,
          variables: { metamask: account },
     });

     let userid = data?.isMetamaskExist?.user[0]?.id;

     const {
          data: userSaleData,
          loading: sale_loading,
          error: sale_error,
     } = useQuery(offerUserById, {
          skip: !userid,
          variables: { user_id: userid, offer: "sell" },
     });

     const [changeOfferStatus] = useMutation(OfferStatus);

     const [
          getSaleMyOfferData,
          { loading: loadingSaleOffer, data: saleOffersList },
     ] = useLazyQuery(offerUserById);
     const handleChange = (offerid, offerer_verified) => {
          setChecked(!checked);
          console.log(offerid, offerer_verified);
          changeOfferStatus({
               variables: {
                    offer_id: offerid,
                    status: !offerer_verified,
               },
               refetchQueries: [
                    offerUserById,
                    {
                         skip: !userid,
                         variables: { user_id: userid, offer: "sell" },
                    },
               ],
          });
     };
     const [
          getBuyMyOfferData,
          { loading: loadingBuyOffer, data: buyOffersList },
     ] = useLazyQuery(offerUserById);

     const handleSaleFilter = async () => {
          await getSaleMyOfferData({
               skip: !userid,
               variables: {
                    user_id: userid,
                    offer_type: "sell",
               },
          })
               .then((res) => {
                    console.log("User Sale Data : ", res);
               })
               .catch((err) => {
                    console.log(err);
               });
     };

     const handleBuyFilter = async () => {
          await getBuyMyOfferData({
               skip: !userid,
               variables: {
                    user_id: userid,
                    offer_type: "buy",
               },
          })
               .then((res) => {
                    console.log("User Buy Data : ", res);
               })
               .catch((err) => {
                    console.log(err);
               });
     };

     useEffect(() => {
          handleSaleFilter();
          // if (!active) {
          //      navigate("/");
          // }
     }, [loading, loadingBuyOffer, loadingSaleOffer, sale_loading]);

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
                         <div className="border p-5 rounded-lg text-center md:w-[45%] md:mt-0 mt-5 w-full">
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
                    <section className="p-2">
                         <div className="max-w-[1400px] mx-auto">
                              <div className="flex md:flex-row flex-col justify-between p-5">
                                   <div className="flex gap-8">
                                        <button
                                             className={
                                                  isSaleStatus
                                                       ? "flex items-center md:text-[16px] text-[16px] text-[#000AFF]"
                                                       : "flex items-center md:text-[16px] text-[16px] text-[#A8A5A5]"
                                             }
                                             onClick={() => {
                                                  setIsSaleStatus(true);

                                                  handleSaleFilter();
                                             }}
                                        >
                                             Offers to Sell{" "}
                                        </button>
                                        <button
                                             className={
                                                  !isSaleStatus
                                                       ? "flex items-center md:text-[16px] text-[16px] text-[#000AFF]"
                                                       : "flex items-center md:text-[16px] text-[16px] text-[#A8A5A5]"
                                             }
                                             onClick={() => {
                                                  setIsSaleStatus(false);

                                                  handleBuyFilter();
                                             }}
                                        >
                                             Offers to Buy{" "}
                                        </button>
                                   </div>
                                   <div className="md:mt-0 mt-10">
                                        {/* //text-[#A8A5A5] */}
                                        <button
                                             className="md:text-[16px] text-[16px]  py-[10px] px-[30px] border rounded-lg"
                                             onClick={() => {
                                                  navigate(
                                                       "/offer/createoffer"
                                                  );
                                             }}
                                        >
                                             Create New Offer
                                        </button>
                                   </div>
                              </div>
                              <div className="rounded-lg border p-5">
                                   <div className="flex md:flex-row flex-col gap-8 justify-end border-b pb-5">
                                        <a
                                             className="text-[16px] mr-[80px] font-medium"
                                             href="/"
                                        >
                                             Rate
                                        </a>
                                        <a
                                             className="text-[16px] md:ml-[100px] ml-0"
                                             href="/"
                                        >
                                             Min-Max amount
                                        </a>
                                        <a
                                             className="text-[16px] md:ml-[40px] ml-0"
                                             href="/"
                                        >
                                             Payment method
                                        </a>
                                        {/* <a className="text-[16px]" href="/">
                  Trade counts
                </a> */}
                                   </div>
                                   {isSaleStatus ? (
                                        <>
                                             {" "}
                                             {saleOffersList?.offerByUserId?.offer.map(
                                                  (data) => (
                                                       <div className="border-b pb-5">
                                                            <div className="flex gap-5 items-center p-5">
                                                                 <div className="flex justify-center">
                                                                      <label className="relative inline-flex items-center cursor-pointer">
                                                                           <input
                                                                                type="checkbox"
                                                                                defaultChecked={
                                                                                     data.offerer_verified
                                                                                }
                                                                                onChange={() => {
                                                                                     handleChange(
                                                                                          data.id,
                                                                                          data.offerer_verified
                                                                                     );
                                                                                }}
                                                                                defaultValue
                                                                                className="sr-only peer"
                                                                           />
                                                                           <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" />
                                                                      </label>
                                                                 </div>
                                                                 <div>
                                                                      <img
                                                                           src="/assets/bitcoin 1.svg"
                                                                           alt
                                                                      />
                                                                 </div>
                                                            </div>
                                                            <div className="flex md:flex-row flex-col justify-between md:mt-0 mt-3 p-2">
                                                                 <div className>
                                                                      <div className=" ">
                                                                           <a
                                                                                className="text-[16px] mr-3 py-[7px] px-[20px] border rounded-lg"
                                                                                href="/"
                                                                           >
                                                                                View
                                                                           </a>
                                                                           <a
                                                                                className="text-[16px] py-[7px] px-[20px] border rounded-lg"
                                                                                href="/"
                                                                           >
                                                                                Edit
                                                                           </a>
                                                                      </div>
                                                                 </div>
                                                                 <div className="md:mt-0 mt-5">
                                                                      <a
                                                                           className="text-[16px] py-[7px] px-[20px] border rounded-lg"
                                                                           href="/"
                                                                      >
                                                                           {
                                                                                data.offer_price
                                                                           }{" "}
                                                                           <span className="pr-3">
                                                                                INR
                                                                           </span>
                                                                      </a>
                                                                 </div>
                                                                 <div className="md:mt-0 mt-5">
                                                                      <a
                                                                           className="text-[16px] mr-3 py-[7px] px-[20px] border rounded-lg"
                                                                           href="/"
                                                                      >
                                                                           {
                                                                                data.min_purchase
                                                                           }
                                                                      </a>
                                                                      -{" "}
                                                                      <a
                                                                           className="text-[16px] py-[7px] px-[20px] mr-3 border rounded-lg"
                                                                           href="/"
                                                                      >
                                                                           {
                                                                                data.max_purchase
                                                                           }
                                                                      </a>
                                                                      INR
                                                                 </div>
                                                                 <div className="flex flex-col md:mt-0 mt-5">
                                                                      <h5 className="text-[16px]">
                                                                           {
                                                                                data.payment_type
                                                                           }
                                                                      </h5>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  )
                                             )}
                                        </>
                                   ) : (
                                        <>
                                             {" "}
                                             {buyOffersList?.offerByUserId?.offer.map(
                                                  (data) => (
                                                       <div className="border-b pb-5">
                                                            <div className="flex gap-5 items-center p-5">
                                                                 <div className="flex justify-center">
                                                                      <label className="relative inline-flex items-center cursor-pointer">
                                                                           <input
                                                                                type="checkbox"
                                                                                defaultChecked={
                                                                                     data.offerer_verified
                                                                                }
                                                                                onChange={() => {
                                                                                     handleChange(
                                                                                          data.id,
                                                                                          data.offerer_verified
                                                                                     );
                                                                                }}
                                                                                defaultValue
                                                                                className="sr-only peer"
                                                                           />
                                                                           <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" />
                                                                      </label>
                                                                 </div>
                                                                 <div>
                                                                      <img
                                                                           src="/assets/bitcoin 1.svg"
                                                                           alt
                                                                      />
                                                                 </div>
                                                            </div>
                                                            <div className="flex md:flex-row flex-col justify-between md:mt-0 mt-3 p-2">
                                                                 <div className>
                                                                      <div className=" ">
                                                                           <a
                                                                                className="text-[16px] mr-3 py-[7px] px-[20px] border rounded-lg"
                                                                                href="/"
                                                                           >
                                                                                View
                                                                           </a>
                                                                           <a
                                                                                className="text-[16px] py-[7px] px-[20px] border rounded-lg"
                                                                                href="/"
                                                                           >
                                                                                Edit
                                                                           </a>
                                                                      </div>
                                                                 </div>
                                                                 <div className="md:mt-0 mt-5">
                                                                      <a
                                                                           className="text-[16px] py-[7px] px-[20px] border rounded-lg"
                                                                           href="/"
                                                                      >
                                                                           {
                                                                                data.offer_price
                                                                           }{" "}
                                                                           <span className="pr-3">
                                                                                INR
                                                                           </span>
                                                                      </a>
                                                                 </div>
                                                                 <div className="md:mt-0 mt-5">
                                                                      <a
                                                                           className="text-[16px] mr-3 py-[7px] px-[20px] border rounded-lg"
                                                                           href="/"
                                                                      >
                                                                           {
                                                                                data.min_purchase
                                                                           }
                                                                      </a>
                                                                      -{" "}
                                                                      <a
                                                                           className="text-[16px] py-[7px] px-[20px] mr-3 border rounded-lg"
                                                                           href="/"
                                                                      >
                                                                           {
                                                                                data.max_purchase
                                                                           }
                                                                      </a>
                                                                      INR
                                                                 </div>
                                                                 <div className="flex flex-col md:mt-0 mt-5">
                                                                      <h5 className="text-[16px]">
                                                                           {
                                                                                data.payment_type
                                                                           }
                                                                      </h5>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  )
                                             )}
                                        </>
                                   )}
                              </div>
                         </div>
                    </section>
               </div>
          </>
     );
};

export default Myoffer;
