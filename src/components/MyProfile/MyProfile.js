import React from "react";

const MyProfile = () => {
  return (
    <div>
      <main className="md:mt-[100px] mt-[200px]">
        <section className="p-4">
          <div className="max-w-[1600px] relative mx-auto">
            <div className="flex md:flex-row flex-col justify-between">
              <div className="lg:w-[45%]  w-full">
                <div className="flex md:flex-row flex-col justify-between md:items-center items-start">
                  <div className="flex md:flex-row flex-col items-center">
                    <div>
                      <img src="/assets/Group.svg" alt />
                    </div>
                    <div className="ml-4">
                      <h5 className="md:text-[20px] text-[16px] font-bold pb-3">
                        TimelyAni650
                      </h5>
                      <p className="text-[16px] flex items-center">
                        <span className="pr-3">
                          <img src="/assets/Ellipse 13.svg" alt />
                        </span>{" "}
                        Seen 11 hours ago
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex md:flex-row flex-col gap-5 md:w-[70%] w-full">
                  <div className="bg-[#E0FBE0] border rounded-md p-5 w-[45%]">
                    <div className="flex justify-between">
                      <p className="text-[20px] text-[#13A307] font-bold">
                        +250
                      </p>
                      <img src="/assets/like01.svg" alt />
                    </div>
                    <div className="text-center mt-2">
                      <p className="text-[20px]">Positive Feedback</p>
                    </div>
                  </div>
                  <div className="bg-[#FFE9E9] border rounded-md p-5 w-[45%]">
                    <div className="flex justify-between">
                      <p className="text-[22px] text-[#C30303] font-bold">-0</p>
                      <img src="/assets/like02.svg" alt />
                    </div>
                    <div className="text-center mt-2">
                      <p className="text-[20px]">Negative Feedback</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-[55%] lg:visible invisible">
                <img src="/assets/Group 557.svg" alt />
              </div>
            </div>
            <section className="xl:mt-[-47px] mt-5 z-50">
              <div className="flex lg:flex-row flex-col justify-between">
                <div className="lg:w-[30%] w-full">
                  <div className="border border-[#A8A5A5] rounded-lg">
                    <div className="py-2 text-center border-b rounded-t-lg border-[#A8A5A5] bg-[#FFF9F4]">
                      <h2 className="md:text-[16px] text-[14px] font-bold">
                        Verifications
                      </h2>
                    </div>
                    <div className="flex flex-col p-5">
                      <a className="md:text-[16px] text-[14px] " href="/">
                        Phone verified
                      </a>
                      <a className="md:text-[16px] text-[14px] mt-6" href="/">
                        Email verified
                      </a>
                      <a className="md:text-[16px] text-[14px] mt-6" href="/">
                        ID verified
                      </a>
                      <a className="md:text-[16px] text-[14px] mt-6" href="/">
                        Address verified
                      </a>
                    </div>
                  </div>
                  <div className="border border-[#A8A5A5] rounded-lg mt-16">
                    <div className="py-2 text-center border-b rounded-t-lg border-[#A8A5A5] bg-[#FFF9F4]">
                      <h2 className="text-[16px] font-bold">Info</h2>
                    </div>
                    <div className="flex flex-col p-3">
                      <ol className="list-disc  p-5">
                        <li className="text-[16px] ">Location: Kenya</li>
                        <li className="text-[16px] pt-7">
                          Languages: English (English)
                        </li>
                        <li className="text-[16px] pt-7">115 Trade partners</li>
                        <li className="text-[16px] pt-7">122 Trades</li>
                        <li className="text-[16px] pt-7">
                          Trade volume: less than 10 BTC
                        </li>
                        <li className="text-[16px] pt-7">
                          Trade volume: 0 USDC
                        </li>
                        <li className="text-[16px] pt-7">
                          Trade volume: 0 ETH
                        </li>
                        <li className="text-[16px] pt-7">
                          Trade volume: 0 USDT
                        </li>
                        <li className="text-[16px] pt-7">Joined 1 year ago</li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="lg:w-[65%] w-full bg-[#fff] lg:mt-0 mt-5">
                  <div className="border rounded-lg border-[#A8A5A5] py-5">
                    <h4 className="text-[16px] font-bold px-5">
                      Active Offers
                    </h4>
                    <div className="flex md:flex-row flex-col justify-between border-b px-5 pb-5 border-[#A8A5A5]">
                      <div className="flex md:flex-row flex-col md:gap-10 gap-5">
                        <a
                          className="text-[16px] flex items-center text-[#000AFF]"
                          href="/"
                        >
                          Buy Crypto{" "}
                          <span className="ml-3">
                            <img src="/assets/Group 236.svg" alt />
                          </span>
                        </a>
                        <a className="text-[16px] flex items-center" href="/">
                          Sell Crypto{" "}
                          <span className="ml-3">
                            <img src="/assets/Group 237.svg" alt />
                          </span>
                        </a>
                      </div>
                      <div className="md:mt-0 mt-5">
                        <a
                          className="text-[16px] py-1.5 px-[20px] border border-[#A8A5A5] text-[#000AFF] rounded-lg"
                          href="/"
                        >
                          All cryptocurrencies
                        </a>
                      </div>
                    </div>
                    <div className="border-b pb-5 border-[#A8A5A5]">
                      <div className="flex md:flex-row flex-col justify-between p-5">
                        <div>
                          <h4 className="text-[16px]">Pay With</h4>
                          <p className="text-[16px] font-bold pt-10">
                            Bank Transfer
                          </p>
                          <p className="text-[16px]">
                            BANK UPI IMPS PHONEPE GPY
                          </p>
                          <div className="flex md:flex-row flex-col gap-3 mt-5">
                            <a
                              className="text-[16px] bg-[#FFF9F4] py-1.5 px-[10px] border rounded-lg"
                              href="/"
                            >
                              receipt required
                            </a>
                            <a
                              className="text-[16px] bg-[#FFF9F4] py-1.5 px-[10px] border rounded-lg"
                              href="/"
                            >
                              no verification needed
                            </a>
                            <a
                              className="text-[16px] bg-[#FFF9F4] py-1.5 px-[10px] border rounded-lg"
                              href="/"
                            >
                              guided trade{" "}
                            </a>
                          </div>
                        </div>
                        <div className="md:mt-0 mt-5">
                          <h4 className="text-[16px]">Avg. Trade Speed</h4>
                          <p className="text-[16px] text-[#000AFF] font-bold pt-10">
                            New
                          </p>
                        </div>
                        <div>
                          <h4 className="text-[16px] flex justify-end">Rate</h4>
                          <p className="text-[16px] font-bold pt-4 flex justify-end">
                            234,994,959.1 IDR
                          </p>
                          <p className="text-[16px]">
                            1 USD = 1.11 USD of BTC 10%
                          </p>
                          <div className="flex gap-3 mt-5 items-center">
                            <div>
                              <p className="text-[16px]">
                                Min sale: 46,843 IDR
                              </p>
                              <p className="text-[16px]">
                                Max sale: 127,729 IDR
                              </p>
                            </div>
                            <div>
                              <a
                                className="text-[16px] py-1.5 px-[10px] bg-[#1D2937] text-white border rounded-lg flex items-center"
                                href="6-Buy-page2.html"
                              >
                                Buy{" "}
                                <span className="ml-3">
                                  <img src="/assets/bitcoin 1.svg" alt />
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b pb-5 border-[#A8A5A5]">
                      <div className="flex md:flex-row flex-col justify-between p-5">
                        <div>
                          <p className="text-[16px] font-bold pt-10">
                            Airtel Money
                          </p>
                          <p className="text-[16px]">
                            UPI IMPS PHONEPE GPAY IND
                          </p>
                          <div className="flex gap-3 mt-5">
                            <a
                              className="text-[16px] bg-[#FFF9F4] py-1.5 px-[10px] border rounded-lg"
                              href="/"
                            >
                              no verification needed
                            </a>
                          </div>
                        </div>
                        <div>
                          <p className="text-[16px] text-[#000AFF] font-bold pt-10">
                            New
                          </p>
                        </div>
                        <div>
                          <h4 className="text-[16px] flex justify-end">Rate</h4>
                          <p className="text-[16px] font-bold pt-4 flex justify-end">
                            234,994,959.1 IDR
                          </p>
                          <p className="text-[16px]">
                            1 USD = 1.11 USD of BTC 02%
                          </p>
                          <div className="flex gap-3 mt-5 items-center">
                            <div>
                              <p className="text-[16px]">
                                Min sale: 46,843 IDR
                              </p>
                              <p className="text-[16px]">
                                Max sale: 127,729 IDR
                              </p>
                            </div>
                            <div>
                              <a
                                className="text-[16px] py-1.5 px-[10px] bg-[#1D2937] text-white border rounded-lg flex items-center"
                                href="6-Buy-page2.html"
                              >
                                Buy{" "}
                                <span className="ml-3">
                                  <img src="/assets/bitcoin 1.svg" alt />
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className>
                      <div className="flex md:flex-row flex-col justify-between p-5">
                        <div>
                          <p className="text-[16px] font-bold pt-10">
                            Domestic Wire Transfer
                          </p>
                          <p className="text-[16px]">
                            BANK UPI IMPS PHONEPE GPY
                          </p>
                          <div className="flex gap-3 mt-5">
                            <a
                              className="text-[16px] bg-[#FFF9F4] py-1.5 px-[10px] border rounded-lg"
                              href="/"
                            >
                              no verification needed
                            </a>
                          </div>
                        </div>
                        <div>
                          <p className="text-[16px] text-[#000AFF] font-bold pt-10">
                            New
                          </p>
                        </div>
                        <div>
                          <h4 className="text-[16px] flex justify-end">Rate</h4>
                          <p className="text-[16px] font-bold pt-4 flex justify-end">
                            234,994,959.1 IDR
                          </p>
                          <p className="text-[16px]">
                            1 USD = 1.11 USD of BTC 02%
                          </p>
                          <div className="flex gap-3 mt-5 items-center">
                            <div>
                              <p className="text-[16px]">
                                Min sale: 46,843 IDR
                              </p>
                              <p className="text-[16px]">
                                Max sale: 127,729 IDR
                              </p>
                            </div>
                            <div>
                              <a
                                className="text-[16px] py-1.5 px-[10px] bg-[#1D2937] text-white border rounded-lg flex items-center"
                                href="6-Buy-page2.html"
                              >
                                Buy{" "}
                                <span className="ml-3">
                                  <img src="/assets/bitcoin 1.svg" alt />
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border rounded-lg border-[#A8A5A5] py-5 mt-5">
                    <h4 className="text-[16px] font-bold px-5">Feedback</h4>
                    <div className="flex md:flex-row flex-col justify-between border-b px-5 pb-5 border-[#A8A5A5]">
                      <div className>
                        <a className="text-[16px] flex items-center" href="/">
                          From Crypto Buyers
                          <span className="ml-3">
                            <img src="/assets/Group 37094.svg" alt />
                          </span>
                        </a>
                      </div>
                      <div className>
                        <a
                          className="text-[16px] flex items-center text-[#000AFF]"
                          href="/"
                        >
                          From Crypto Buyers
                          <span className="ml-3">
                            <img src="/assets/Group 249.svg" alt />
                          </span>
                        </a>
                      </div>
                      <div className="flex md:flex-row flex-col gap-3">
                        <a
                          className="text-[16px] flex items-center text-[#000AFF]"
                          href="/"
                        >
                          All
                          <span className="ml-3">
                            <img src="/assets/Group 249.svg" alt />
                          </span>
                        </a>
                        <a className="text-[16px] flex items-center" href="/">
                          Positive
                          <span className="ml-3">
                            <img src="/assets/Group 37094.svg" alt />
                          </span>
                        </a>
                        <a className="text-[16px] flex items-center" href="/">
                          Negative
                          <span className="ml-3">
                            <img src="/assets/Group 37094.svg" alt />
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="flex md:flex-row flex-col justify-between border-b px-5 pb-5 mt-5 border-[#A8A5A5]">
                      <div>
                        <h4 className="text-[16px] text-[#000AFF]">
                          INDIA_BTC_TRADE
                        </h4>
                        <p className="text-[16px] py-5">Nov 05, 2022</p>
                        <div className="py-2 px-5 bg-[#E0FBE0] flex gap-5 border rounded-lg">
                          <div>
                            <img src="/assets/like01.svg" />
                          </div>
                          <div>
                            <p className="text-[20px]">Positive </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex md:flex-row flex-col gap-3 md:items-center items-start md:my-0 my-4">
                          <h5 className="text-[16px] text-[#000AFF]">
                            Bank Transfer
                          </h5>
                          <p className="text-[16px] p-1.5 rounded-lg bg-[#D9D9D9]">
                            KES
                          </p>
                          <div className="py-1 px-2 bg-[#FFF9F4] border rounded-lg">
                            <p className="text-[15px]">LOW AMOUNT</p>
                          </div>
                        </div>
                        <p className="text-[16px] font-bold">
                          amazing and honest
                        </p>
                      </div>
                      <div>
                        <a className="text-[16px] text-[#000AFF]" href="/">
                          View Offer
                        </a>
                      </div>
                    </div>

                    <div className="flex md:flex-row flex-col justify-between border-b px-5 pb-5 mt-5 border-[#A8A5A5]">
                      <div>
                        <h4 className="text-[16px] text-[#000AFF]">
                          INDIA_BTC_TRADE
                        </h4>
                        <p className="text-[16px] py-5">Nov 05, 2022</p>
                        <div className="py-2 px-5 bg-[#E0FBE0] flex gap-5 border rounded-lg">
                          <div>
                            <img src="/assets/like01.svg" />
                          </div>
                          <div>
                            <p className="text-[20px]">Positive </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex md:flex-row flex-col gap-3 md:items-center items-start md:my-0 my-4">
                          <h5 className="text-[16px] text-[#000AFF]">
                            Bank Transfer
                          </h5>
                          <p className="text-[16px] p-1.5 rounded-lg bg-[#D9D9D9]">
                            KES
                          </p>
                          <div className="py-1 px-2 bg-[#FFF9F4] border rounded-lg">
                            <p className="text-[15px]">LOW AMOUNT</p>
                          </div>
                        </div>
                        <p className="text-[16px] font-bold">
                          amazing and honest
                        </p>
                      </div>
                      <div>
                        <a className="text-[16px] text-[#000AFF]" href="/">
                          View Offer
                        </a>
                      </div>
                    </div>
                    <div className="flex md:flex-row flex-col justify-between border-b px-5 pb-5 mt-5 border-[#A8A5A5]">
                      <div>
                        <h4 className="text-[16px] text-[#000AFF]">
                          INDIA_BTC_TRADE
                        </h4>
                        <p className="text-[16px] py-5">Nov 05, 2022</p>
                        <div className="py-2 px-5 bg-[#E0FBE0] flex gap-5 border rounded-lg">
                          <div>
                            <img src="/assets/like01.svg" />
                          </div>
                          <div>
                            <p className="text-[20px]">Positive </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex md:flex-row flex-col gap-3 md:items-center items-start md:my-0 my-4">
                          <h5 className="text-[16px] text-[#000AFF]">
                            Bank Transfer
                          </h5>
                          <p className="text-[16px] p-1.5 rounded-lg bg-[#D9D9D9]">
                            KES
                          </p>
                          <div className="py-1 px-2 bg-[#FFF9F4] border rounded-lg">
                            <p className="text-[15px]">LOW AMOUNT</p>
                          </div>
                        </div>
                        <p className="text-[16px] font-bold">
                          amazing and honest
                        </p>
                      </div>
                      <div>
                        <a className="text-[16px] text-[#000AFF]" href="/">
                          View Offer
                        </a>
                      </div>
                    </div>
                    <div className="flex md:flex-row flex-col justify-between border-b px-5 pb-5 mt-5 border-[#A8A5A5]">
                      <div>
                        <h4 className="text-[16px] text-[#000AFF]">
                          INDIA_BTC_TRADE
                        </h4>
                        <p className="text-[16px] py-5">Nov 05, 2022</p>
                        <div className="py-2 px-5 bg-[#E0FBE0] flex gap-5 border rounded-lg">
                          <div>
                            <img src="/assets/like01.svg" />
                          </div>
                          <div>
                            <p className="text-[20px]">Positive </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex md:flex-row flex-col gap-3 md:items-center items-start md:my-0 my-4">
                          <h5 className="text-[16px] text-[#000AFF]">
                            Bank Transfer
                          </h5>
                          <p className="text-[16px] p-1.5 rounded-lg bg-[#D9D9D9]">
                            KES
                          </p>
                          <div className="py-1 px-2 bg-[#FFF9F4] border rounded-lg">
                            <p className="text-[15px]">LOW AMOUNT</p>
                          </div>
                        </div>
                        <p className="text-[16px] font-bold">
                          amazing and honest
                        </p>
                      </div>
                      <div>
                        <a className="text-[16px] text-[#000AFF]" href="/">
                          View Offer
                        </a>
                      </div>
                    </div>
                    <div className="flex justify-center mt-8">
                      <a className="text-[16px] text-[#000AFF]" href="/">
                        Show more feedback
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="absolute left-0 bottom-0 lg:visible invisible">
              <img src="/assets/undraw_ether_re_y7ft 1.svg" alt />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MyProfile;
