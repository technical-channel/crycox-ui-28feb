/** @format */

import React, { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import {
     TokenApprove,
     GetAllowance,
     DepositeAmountToken,
     Balance,
     fetchUserDepositeBalance,
} from "../../utils/contractHelper";
import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";
import Swal from "sweetalert2";
import { RPC } from "../../Config/Constant";
import {
     BTCBitcoinToken,
     BUSDBep20,
     DOGECoinToken,
     SHIBAINUToken,
     USDTBEP20Token,
     USDTECR20Token,
} from "../../Config/Contract/Contract";
import { useNavigate } from "react-router-dom";
// DepositeAmount

function classNames(...classes) {
     return classes.filter(Boolean).join(" ");
}

const Wallet = () => {
     const { library, account, active, chainId } = useWeb3React();
     const [showModal, setShowModal] = useState(false);
     const [amount, setAmount] = useState("");
     const navigate = useNavigate();

     const [allowance, setAllowance] = useState();
     const [isUserApproved, setIsUserApproved] = useState(false);
     const [TokenAddress, setTokenAddress] = useState("");
     const [Decimal, setDecimal] = useState(null);

     const [userDepositeAmount, setUserDepositeAmount] = useState({
          USDTECR20: 0,
          USDTBEP20: 0,
          DOGECoin: 0,
          SHIBAINU: 0,
          BTCBitcoin: 10,
          BUSDBEP20: 0,
     });

     const stateSetter = async () => {
          const data = {};
          data.USDTECR20 = await fetchUserDepositeBalance(
               library.provider,
               account,
               USDTECR20Token
          );

          data.USDTBEP20 = await fetchUserDepositeBalance(
               library.provider,
               account,
               USDTBEP20Token
          );

          data.DOGECoin = await fetchUserDepositeBalance(
               library.provider,
               account,
               DOGECoinToken
          );

          data.SHIBAINU = await fetchUserDepositeBalance(
               library.provider,
               account,
               SHIBAINUToken
          );
          data.BTCBitcoin = await fetchUserDepositeBalance(
               library.provider,
               account,
               BTCBitcoinToken
          );
          data.BUSDBEP20 = await fetchUserDepositeBalance(
               library.provider,
               account,
               BUSDBep20
          );
          setUserDepositeAmount(data);
     };

     useEffect(async () => {
          if (active) {
               stateSetter();
          } else {
               navigate("/");
               Swal.fire("Please Connect to the wallet first..!");
          }
     }, [active, account]);

     const handleShow = async (contractAddress, Decimal) => {
          console.log(contractAddress, Decimal);
          setTokenAddress(contractAddress);
          setDecimal(Decimal);
          setShowModal(true, contractAddress);
          console.log(userDepositeAmount.BTCBitcoin, "BUTCOIN");
     };

     // Deposite function
     // const getAllowance = async () => {
     //   await GetAllowance(library.provider, account, TokenAddress);
     // };

     const DepositeAmount = async () => {
          console.log("Decimal  : ", Decimal, amount, TokenAddress);
          // console.log(getAllowance);
          await GetAllowance(library.provider, account, TokenAddress);
          if (active) {
               if (amount > 0) {
                    await DepositeAmountToken(
                         library.provider,
                         new Web3().utils.toWei(amount.toString(), Decimal),
                         TokenAddress
                    )
                         .send({
                              from: account,
                         })
                         .then((res) => {
                              console.log(res);
                              Swal.fire(
                                   "Transaction Successful",
                                   "",
                                   "success"
                              );
                         });
               } else {
                    Swal.fire(
                         "error",
                         "Please Enter valid amount",
                         "",
                         "error"
                    );
               }
          } else {
               Swal.fire("error", "Please Connect to the wallet", "", "error");
          }
     };
     // Close Deposite function

     const ApproveAmount = async () => {
          if (active) {
               if (amount > 0) {
                    await TokenApprove(library.provider, TokenAddress)
                         .send({
                              from: account,
                         })
                         .then(async (res) => {
                              // setAllowance(
                              //   await GetAllowance(library.provider, account, TokenAddress)
                              // );
                              setIsUserApproved(true);
                              console.log(res);
                              Swal.fire(
                                   "Transaction Successful",
                                   "",
                                   "success"
                              );
                         })
                         .catch((err) => {
                              console.log(err);
                         });
               } else {
                    Swal.fire(
                         "error",
                         "Please Enter valid amount",
                         "",
                         "error"
                    );
               }
          } else {
               Swal.fire("error", "Please Connect to the wallet", "", "error");
          }
     };
     // Close TokenApprove Function

     const TransitionData = [
          {
               id: 1,
               Name: "BTC Bitcoin",
               Contract: "0xb012F9f57E7d0490D1D8F3f26Bd62A8D44F3A31E",
               Decimal: "ether",
               img: "/assets/bitcoin 1.svg",
               value: "1 BTC = 1,373,559.1906 INR",
               Balance: `${(
                    userDepositeAmount.BTCBitcoin.toString() /
                    new Web3().utils.toWei("10", "ether")
               ).toFixed(6)}`,
               INR: "≈ 0.00",
          },
          {
               id: 2,
               Name: "USDT ERC20",
               Decimal: "mwei",
               Contract: "0x2df7A21742ebb08ef1496eCd0CfA6AdBd585B38c",
               img: "/assets/tether 1.svg",
               value: "1 USDT = 82.997 INR",
               Balance: `${(
                    userDepositeAmount.USDTECR20.toString() /
                    new Web3().utils.toWei("10", "mwei")
               ).toFixed(6)}`,
               INR: "≈ 0.00",
          },
          {
               id: 3,
               Name: "USDT BEP20",
               Decimal: "ether",
               Contract: "0x375cFeEc6Bf5682F60F4686156E4e8f71D889a8D",
               img: "/assets/dollar-sign 1.svg",
               value: "1 USDT = 82.997 INR",

               Balance: `${(
                    userDepositeAmount.USDTBEP20.toString() /
                    new Web3().utils.toWei("10", "ether")
               ).toFixed(6)}`,
               INR: "≈ 0.00",
          },
          {
               id: 4,
               Name: "ETH Ethereum",
               Decimal: "ether",
               Contract: "0x375cFeEc6Bf5682F60F4686156E4e8f71D889a8D",
               img: "/assets/ethereum 1.svg",
               value: "1 ETH = 99,282.4823 INR",
               Balance: "0",
               INR: "≈ 0.00",
          },
          {
               id: 6,
               Name: "BNB Binance",
               Decimal: "ether",
               Contract: "0x375cFeEc6Bf5682F60F4686156E4e8f71D889a8D",
               img: "/assets/BNB logo 1.svg",
               value: "1 BNB = 99,282.4823 INR",
               Balance: "0",
               INR: "≈ 0.00",
          },
          {
               id: 7,
               Name: "SHIB Shiba Inu",
               Decimal: "ether",
               Contract: "0xF7135228d513d11610d2D2C3AFB0083632573200",
               img: "/assets/shiba-inu-shib-logo 1.svg",
               value: "1 ETH = 99,282.4823 INR",

               Balance: `${(
                    userDepositeAmount.SHIBAINU.toString() /
                    new Web3().utils.toWei("10", "ether")
               ).toFixed(6)}`,
               INR: "≈ 0.00",
          },
          {
               id: 8,
               Name: "DOGE Doge",
               Decimal: "ether",
               Contract: "0x61da5E810FC118bA07190bCBaA49A8D6A4f39b52",
               img: "/assets/png-clipart-dogecoin-shiba-inu-scrypt-cryptocurrency-ethereum-coin-mammal-cat-like-mammal-thumbnail 1.svg",
               value: "1 ETH = 99,282.4823 INR",

               Balance: `${(
                    userDepositeAmount.DOGECoin.toString() /
                    new Web3().utils.toWei("10", "ether")
               ).toFixed(6)}`,
               INR: "≈ 0.00",
          },
     ];

     const categories = {
          Balance: [
               {
                    content: (
                         <>
                              <div>
                                   <div className="flex md:flex-row flex-col justify-between mt-8">
                                        <div className="border px-5 py-16 md:w-[30%] w-full items-center">
                                             <p className="text-[20px]">
                                                  Total holdings
                                             </p>
                                             <h5 className="text-[35px] font-bold">
                                                  0 BTC
                                             </h5>
                                             <p className="text-[20px]">
                                                  ≈ 0 INR
                                             </p>
                                        </div>
                                        <div className="border p-8 md:w-[65%] w-full">
                                             <h4 className="text-[40px] font-bold ">
                                                  Phone number verification
                                                  required
                                             </h4>
                                             <div className="flex md:flex-row flex-col justify-between items-center mt-8 ">
                                                  <div>
                                                       <p className="text-[20px] pb-6">
                                                            Phone number
                                                            verification
                                                            required
                                                       </p>
                                                       <div className="flex">
                                                            <a
                                                                 className="bg-[#0E509D] px-[30px] rounded-l-lg text-white p-2"
                                                                 href="/"
                                                            >
                                                                 Start
                                                                 Verification
                                                            </a>
                                                            <a
                                                                 className="p-2 bg-[#fff] border rounded-r-lg font-bold"
                                                                 href="/"
                                                            >
                                                                 <img
                                                                      src="/assets/Vector 3.svg"
                                                                      alt
                                                                 />
                                                            </a>
                                                       </div>
                                                  </div>
                                                  <div className="md:mt-0 mt-5">
                                                       <img
                                                            src="/assets/smartphone 1.svg"
                                                            alt
                                                       />
                                                  </div>
                                             </div>
                                        </div>
                                   </div>

                                   {/* Table start here */}
                                   <section className="p-3">
                                        <h1>
                                             {userDepositeAmount?.BTCBitcoin}
                                        </h1>
                                        <div className="max-w-[1400px]  mx-auto border mt-10 p-5">
                                             <h5 className="text-[20px] font-bold">
                                                  Assets
                                             </h5>
                                             <div className="relative overflow-x-auto">
                                                  <table className="w-full text-md text-left text-gray-500 ">
                                                       <thead className="text-xs text-gray-700 uppercase  ">
                                                            <tr>
                                                                 <th
                                                                      scope="col"
                                                                      className="px-6 py-3"
                                                                 >
                                                                      Currency
                                                                 </th>
                                                                 <th
                                                                      scope="col"
                                                                      className="px-6 py-3"
                                                                 >
                                                                      Balance
                                                                 </th>
                                                                 <th
                                                                      scope="col"
                                                                      className="px-6 py-3"
                                                                 >
                                                                      In INR
                                                                 </th>
                                                                 <th
                                                                      scope="col"
                                                                      className="px-6 py-3"
                                                                 >
                                                                      Deposite
                                                                 </th>
                                                            </tr>
                                                       </thead>
                                                       <tbody>
                                                            {TransitionData.map(
                                                                 (
                                                                      items,
                                                                      key
                                                                 ) => {
                                                                      return (
                                                                           <>
                                                                                <tr className="bg-white ">
                                                                                     <th
                                                                                          scope="row"
                                                                                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                                                                                     >
                                                                                          <div className="flex ">
                                                                                               <div>
                                                                                                    <img
                                                                                                         src={
                                                                                                              items.img
                                                                                                         }
                                                                                                         alt
                                                                                                    />
                                                                                               </div>
                                                                                               <div className="ml-4">
                                                                                                    <h5 className="text-[16px]">
                                                                                                         <span className="font-bold">
                                                                                                              {
                                                                                                                   items.Name
                                                                                                              }
                                                                                                         </span>{" "}
                                                                                                    </h5>
                                                                                                    <p>
                                                                                                         {
                                                                                                              items.value
                                                                                                         }
                                                                                                    </p>
                                                                                               </div>
                                                                                          </div>
                                                                                     </th>
                                                                                     <td className="px-6 py-4">
                                                                                          {
                                                                                               items.Balance
                                                                                          }
                                                                                     </td>
                                                                                     <td className="px-6 py-4">
                                                                                          {
                                                                                               items.INR
                                                                                          }
                                                                                     </td>
                                                                                     <td>
                                                                                          <button
                                                                                               onClick={() => {
                                                                                                    console.log(
                                                                                                         items.Contract
                                                                                                    );
                                                                                                    console.log(
                                                                                                         items.Decimal
                                                                                                    );
                                                                                                    // setAmount(e.target.value);
                                                                                                    handleShow(
                                                                                                         items.Contract,
                                                                                                         items.Decimal
                                                                                                    );
                                                                                               }}
                                                                                               class="my-3  bg-[#1D2937] text-white hover:bg-[#F1971F] lg:text-[15px] text-[16px] hover:text-white transition duration-300  focus:outline-none focus:ring-blue-300 font-bold rounded-[10px]  text-center border-2  px-2   min-w-[100px]"
                                                                                          >
                                                                                               Deposite
                                                                                          </button>
                                                                                     </td>
                                                                                </tr>
                                                                           </>
                                                                      );
                                                                 }
                                                            )}
                                                       </tbody>
                                                  </table>
                                             </div>
                                        </div>
                                   </section>

                                   {/* Close Table here.. */}
                              </div>
                         </>
                    ),
               },
          ],
          Transactions: [
               {
                    content: (
                         <>
                              <div>
                                   <div className="flex md:flex-row flex-col justify-between items-center">
                                        <div className=" md:w-[60%] w-full md:mt-0 mt-5  ">
                                             <select
                                                  id="countries"
                                                  className="w-[50%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                             >
                                                  <option selected>BTC</option>
                                                  <option value="US">
                                                       BTC
                                                  </option>
                                                  <option value="CA">
                                                       BTC
                                                  </option>
                                                  <option value="FR">
                                                       BTC
                                                  </option>
                                                  <option value="DE">
                                                       BTC
                                                  </option>
                                             </select>
                                        </div>
                                        <div className="w-[40%] md:visible invisible">
                                             <img
                                                  src="/assets/undraw_bitcoin_re_urgq 1.svg"
                                                  alt
                                             />
                                        </div>
                                   </div>
                                   <section>
                                        <div className="max-w-[1400px] mx-auto border border-[#A8A5A5] p-4">
                                             <h4 className="text-[25px] font-bold">
                                                  Transaction
                                             </h4>
                                             <div className="flex md:flex-row flex-col gap-[60px] mt-8 border-b pb-6">
                                                  <p className="text-[16px]">
                                                       Trade ID
                                                  </p>
                                                  <p className="text-[16px] md:pl-[60px] pl-0">
                                                       Buyer
                                                  </p>
                                                  <p className="text-[16px] md:pl-[60px] pl-0">
                                                       Seller
                                                  </p>
                                                  <p className="text-[16px] md:pl-[70px] pl-0">
                                                       Cryptocurrency
                                                  </p>
                                                  <p className="text-[16px] ">
                                                       Crypto Trade Amount
                                                  </p>
                                                  <p className="text-[16px] ">
                                                       Trade Outcome
                                                  </p>
                                                  <p className="text-[16px]">
                                                       Pay via
                                                  </p>
                                             </div>
                                             <div className="flex md:flex-row flex-col justify-between mt-8">
                                                  <p className="text-[18px]">
                                                       TD523640
                                                  </p>
                                                  <p className="text-[18px]">
                                                       Rahulcse022
                                                  </p>
                                                  <p className="text-[18px]">
                                                       Rakeshar012
                                                  </p>
                                                  <p className="flex">
                                                       <span className="pr-3">
                                                            <img
                                                                 src="/assets/bitcoin 1.svg"
                                                                 alt
                                                            />
                                                       </span>{" "}
                                                       Bitcoin
                                                  </p>
                                                  <p className="text-[18px] text-[#FF0000]">
                                                       -0.000242 BTC
                                                  </p>
                                                  <p className="text-[18px] text-[#32A353]">
                                                       Success
                                                  </p>
                                                  <p className="text-[18px]">
                                                       Bank Account
                                                  </p>
                                             </div>
                                             <div className="flex md:flex-row flex-col justify-between mt-8">
                                                  <p className="text-[18px]">
                                                       TD523640
                                                  </p>
                                                  <p className="text-[18px]">
                                                       Rahulcse022
                                                  </p>
                                                  <p className="text-[18px]">
                                                       Rakeshar012
                                                  </p>
                                                  <p className="flex">
                                                       <span className="pr-3">
                                                            <img
                                                                 src="/assets/bitcoin 1.svg"
                                                                 alt
                                                            />
                                                       </span>{" "}
                                                       Bitcoin
                                                  </p>
                                                  <p className="text-[18px] text-[#FF0000]">
                                                       -0.000242 BTC
                                                  </p>
                                                  <p className="text-[18px] text-[#32A353]">
                                                       Success
                                                  </p>
                                                  <p className="text-[18px]">
                                                       Bank Account
                                                  </p>
                                             </div>
                                             <div className="flex md:flex-row flex-col justify-between mt-8">
                                                  <p className="text-[18px]">
                                                       TD523640
                                                  </p>
                                                  <p className="text-[18px]">
                                                       Rahulcse022
                                                  </p>
                                                  <p className="text-[18px]">
                                                       Rakeshar012
                                                  </p>
                                                  <p className="flex">
                                                       <span className="pr-3">
                                                            <img
                                                                 src="/assets/bitcoin 1.svg"
                                                                 alt
                                                            />
                                                       </span>{" "}
                                                       Bitcoin
                                                  </p>
                                                  <p className="text-[18px] text-[#FF0000]">
                                                       -0.000242 BTC
                                                  </p>
                                                  <p className="text-[18px] text-[#32A353]">
                                                       Success
                                                  </p>
                                                  <p className="text-[18px]">
                                                       Bank Account
                                                  </p>
                                             </div>
                                             <div className="flex md:flex-row flex-col justify-between mt-8">
                                                  <p className="text-[18px]">
                                                       TD523640
                                                  </p>
                                                  <p className="text-[18px]">
                                                       Rahulcse022
                                                  </p>
                                                  <p className="text-[18px]">
                                                       Rakeshar012
                                                  </p>
                                                  <p className="flex">
                                                       <span className="pr-3">
                                                            <img
                                                                 src="/assets/bitcoin 1.svg"
                                                                 alt
                                                            />
                                                       </span>{" "}
                                                       Bitcoin
                                                  </p>
                                                  <p className="text-[18px] text-[#FF0000]">
                                                       -0.000242 BTC
                                                  </p>
                                                  <p className="text-[18px] text-[#32A353]">
                                                       Success
                                                  </p>
                                                  <p className="text-[18px]">
                                                       Bank Account
                                                  </p>
                                             </div>
                                             <div className="flex md:flex-row flex-col justify-between mt-8">
                                                  <p className="text-[18px]">
                                                       TD523640
                                                  </p>
                                                  <p className="text-[18px]">
                                                       Rahulcse022
                                                  </p>
                                                  <p className="text-[18px]">
                                                       Rakeshar012
                                                  </p>
                                                  <p className="flex">
                                                       <span className="pr-3">
                                                            <img
                                                                 src="/assets/bitcoin 1.svg"
                                                                 alt
                                                            />
                                                       </span>{" "}
                                                       Bitcoin
                                                  </p>
                                                  <p className="text-[18px] text-[#FF0000]">
                                                       -0.000242 BTC
                                                  </p>
                                                  <p className="text-[18px] text-[#32A353]">
                                                       Success
                                                  </p>
                                                  <p className="text-[18px]">
                                                       Bank Account
                                                  </p>
                                             </div>
                                             <div className="flex md:flex-row flex-col justify-between mt-8">
                                                  <p className="text-[18px]">
                                                       TD523640
                                                  </p>
                                                  <p className="text-[18px]">
                                                       Rahulcse022
                                                  </p>
                                                  <p className="text-[18px]">
                                                       Rakeshar012
                                                  </p>
                                                  <p className="flex">
                                                       <span className="pr-3">
                                                            <img
                                                                 src="/assets/bitcoin 1.svg"
                                                                 alt
                                                            />
                                                       </span>{" "}
                                                       Bitcoin
                                                  </p>
                                                  <p className="text-[18px] text-[#FF0000]">
                                                       -0.000242 BTC
                                                  </p>
                                                  <p className="text-[18px] text-[#32A353]">
                                                       Success
                                                  </p>
                                                  <p className="text-[18px]">
                                                       Bank Account
                                                  </p>
                                             </div>
                                             <div className="flex md:flex-row flex-col justify-between mt-8">
                                                  <p className="text-[18px]">
                                                       TD523640
                                                  </p>
                                                  <p className="text-[18px]">
                                                       Rahulcse022
                                                  </p>
                                                  <p className="text-[18px]">
                                                       Rakeshar012
                                                  </p>
                                                  <p className="flex">
                                                       <span className="pr-3">
                                                            <img
                                                                 src="/assets/bitcoin 1.svg"
                                                                 alt
                                                            />
                                                       </span>{" "}
                                                       Bitcoin
                                                  </p>
                                                  <p className="text-[18px] text-[#FF0000]">
                                                       -0.000242 BTC
                                                  </p>
                                                  <p className="text-[18px] text-[#32A353]">
                                                       Success
                                                  </p>
                                                  <p className="text-[18px]">
                                                       Bank Account
                                                  </p>
                                             </div>
                                             <div className="flex md:flex-row flex-col justify-between mt-8">
                                                  <p className="text-[18px]">
                                                       TD523640
                                                  </p>
                                                  <p className="text-[18px]">
                                                       Rahulcse022
                                                  </p>
                                                  <p className="text-[18px]">
                                                       Rakeshar012
                                                  </p>
                                                  <p className="flex">
                                                       <span className="pr-3">
                                                            <img
                                                                 src="/assets/bitcoin 1.svg"
                                                                 alt
                                                            />
                                                       </span>{" "}
                                                       Bitcoin
                                                  </p>
                                                  <p className="text-[18px] text-[#FF0000]">
                                                       -0.000242 BTC
                                                  </p>
                                                  <p className="text-[18px] text-[#32A353]">
                                                       Success
                                                  </p>
                                                  <p className="text-[18px]">
                                                       Bank Account
                                                  </p>
                                             </div>
                                        </div>
                                   </section>
                              </div>
                         </>
                    ),
               },
          ],
     };

     return (
          <>
               <div className="md:mt-[100px] mt-[200px]">
                    <div className="max-w-[1400px] mx-auto  mb-5">
                         {showModal ? (
                              <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                   <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                        <div className="md:w-[30rem] w-full border rounded-lg shadow-lg relative flex flex-col w-full bg-[#1D2937] outline-none focus:outline-none popmodel border-2 border-[#cca143]">
                                             <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t bg-[#F19C4A]">
                                                  <h3 className="text-3xl font-semibold text-black">
                                                       Deposite
                                                  </h3>
                                                  <button
                                                       className="bg-transparent border-0 text-black float-right"
                                                       onClick={() =>
                                                            setShowModal(false)
                                                       }
                                                  >
                                                       <span className="text-black opacity-7 h-6 w-6 text-xl block  py-0 rounded-full">
                                                            x
                                                       </span>
                                                  </button>
                                             </div>
                                             <div className="relative p-6 flex-auto">
                                                  <div className=" shadow-md rounded px-8 pt-6 pb-8 w-full">
                                                       <label className="block text-white text-sm font-bold mb-1 text-left mb-5">
                                                            Amount
                                                       </label>
                                                       <div className="flex gap-2 items-center ">
                                                            <input
                                                                 onChange={(
                                                                      e
                                                                 ) =>
                                                                      setAmount(
                                                                           e
                                                                                .target
                                                                                .value
                                                                      )
                                                                 }
                                                                 type="number"
                                                                 className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                                                            />
                                                            {/* <span className="font-bold text-white ">Symbol</span> */}
                                                       </div>
                                                  </div>
                                             </div>

                                             <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                  <button
                                                       onClick={
                                                            allowance >
                                                                 amount ||
                                                            isUserApproved ==
                                                                 true
                                                                 ? ApproveAmount
                                                                 : DepositeAmount
                                                       }
                                                       className="text-white border-2 border-[#F1971F]  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                                       type="button"
                                                  >
                                                       {allowance > amount ||
                                                       isUserApproved == true
                                                            ? "Approve"
                                                            : "Deposite"}
                                                  </button>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         ) : null}
                         <Tab.Group>
                              <Tab.List className="flex md:flex-row flex-col gap-8">
                                   {Object.keys(categories).map((category) => (
                                        <Tab
                                             key={category}
                                             className={({ selected }) =>
                                                  classNames(
                                                       "text-[18px] text-[#F1971F] font-bold px-[40px] py-[10px] rounded border-2 border-[#F1971F]",
                                                       // 'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                                       selected
                                                            ? " shadow"
                                                            : "text-[18px] text-[#AEAEAE] px-[40px] py-[10px] border-2 rounded border-[#AEAEAE] ]"
                                                  )
                                             }
                                        >
                                             {category}
                                        </Tab>
                                   ))}
                              </Tab.List>
                              <Tab.Panels className="mt-2">
                                   {Object.values(categories).map(
                                        (posts, idx) => (
                                             <Tab.Panel key={idx}>
                                                  <ul>
                                                       {posts.map((post) => (
                                                            <li
                                                                 key={post.id}
                                                                 className="relative rounded-md"
                                                            >
                                                                 <h3>
                                                                      {
                                                                           post.content
                                                                      }
                                                                 </h3>
                                                            </li>
                                                       ))}
                                                  </ul>
                                             </Tab.Panel>
                                        )
                                   )}
                              </Tab.Panels>
                         </Tab.Group>
                    </div>
               </div>
          </>
     );
};

export default Wallet;
