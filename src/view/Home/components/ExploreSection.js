import React from 'react'

const ExploreSection = () => {
  return (
    <div>
<section className="lg:pt-[50px] bg-[#f7f7f7] xl:pb-[150px] py-[50px] relative">
  <div className="max-w-[1600px] mx-auto p-5">
    <div className="text-center mb-[50px]">
      <h4 className="font-bold xl:text-[50px] lg:text-[35px] sm:text-[35px] text-[28px]   mb-4">Explore <span className="text-[#F1971F]">Our
          Marketplace</span></h4>
      <p className="text-[#5B5B5B] lg:text-[20px] text-[18px] leading-[2.3rem]">Start trading with your favorite
        payment methods or discover something new.</p>
    </div>
    <div className="max-w-[1000px] mx-auto p-5">
      <div className="mb-[50px]">
        <ul className="flex flex-wrap justify-around -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
          <li className="mr-2" role="presentation">
            <button className="inline-block p-4 font-bold lg:text-[20px] text-[20px] text-black border-b-2  border-black hover:text-[#FF7A00] hover:border-[#FF7A00]" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="true">Sell Crypto</button>
          </li>
          <li className="mr-2" role="presentation">
            <button className="inline-block p-4 font-bold lg:text-[20px] text-[20px] text-black border-b-2  border-black hover:text-[#FF7A00] hover:border-[#FF7A00]" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Buy Crypto</button>
          </li>
        </ul>
      </div>
    </div>
    <div id="myTabContent">
      <div className="hidden p-4 rounded-lg bg-gray-50" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 relative z-40 grid-cols-1 gap-[30px]">
          <div className="px-5 h-full xl:py-8 py-4 bg-[#fff] border border-[#F1971F] rounded-[18px]">
            <img src="assets/Frame (1).svg" className="mb-8" />
            <h5 className="mb-8 font-bold lg:text-[20px] text-[16px]">Bank Transfer</h5>
            <p className="#5B5B5B">Our guided bank transfer trades quick and easy to buy Bitcoin.</p>
          </div>
          <div className="px-5 h-full xl:py-8 py-4 bg-[#fff] border border-[#F1971F] rounded-[18px]">
            <img src="assets/Frame (2).svg" className="mb-8" />
            <h5 className="mb-8 font-bold lg:text-[20px] text-[16px]">Cash Payment</h5>
            <p className="#5B5B5B">Cash is accepted here too — no bank account needed.</p>
          </div>
          <div className="px-5 h-full xl:py-8 py-4 bg-[#fff] border border-[#F1971F] rounded-[18px]">
            <img src="assets/Frame (3).svg" className="mb-8" />
            <h5 className="mb-8 font-bold lg:text-[20px] text-[16px]">Digital Currencies</h5>
            <p className="#5B5B5B">Use Ether, Ethereum, Litecoin, and more to buy Bitcoin.</p>
          </div>
          <div className="px-5 h-full xl:py-8 py-4 bg-[#fff] border border-[#F1971F] rounded-[18px]">
            <img src="assets/Frame (4).svg" className="mb-8" />
            <h5 className="mb-8 font-bold lg:text-[20px] text-[16px]">Online Wallets</h5>
            <p className="#5B5B5B">Buy Bitcoin using a huge range of popular online wallets, including
              PayPal, M-Pesa, and Apple
              Pay.</p>
          </div>
        </div>
      </div>
      <div className="hidden p-4 rounded-lg bg-gray-50" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 relative z-40 grid-cols-1 gap-[30px]">
          <div className="px-5 h-full py-8 bg-[#fff] border border-[#F1971F] rounded-[18px]">
            <img src="assets/Frame (1).svg" className="mb-8" />
            <h5 className="mb-8 font-bold lg:text-[20px] text-[16px]">Bank  Transfer</h5>
            <p className="#5B5B5B">Our guided bank transfer trades quick and easy to buy Bitcoin.</p>
          </div>
          <div className="px-5 h-full py-8 bg-[#fff] border border-[#F1971F] rounded-[18px]">
            <img src="assets/Frame (2).svg" className="mb-8" />
            <h5 className="mb-8 font-bold lg:text-[20px] text-[16px]">Cash Payment</h5>
            <p className="#5B5B5B">Cash is accepted here too — no bank account needed.</p>
          </div>
          <div className="px-5 h-full py-8 bg-[#fff] border border-[#F1971F] rounded-[18px]">
            <img src="assets/Frame (3).svg" className="mb-8" />
            <h5 className="mb-8 font-bold lg:text-[20px] text-[16px]">Digital Currencies</h5>
            <p className="#5B5B5B">Use Ether, Ethereum, Litecoin, and more to buy Bitcoin.</p>
          </div>
          <div className="px-5 h-full py-8 bg-[#fff] border border-[#F1971F] rounded-[18px]">
            <img src="assets/Frame (4).svg" className="mb-8" />
            <h5 className="mb-8 font-bold lg:text-[20px] text-[16px]">Online Wallets</h5>
            <p className="#5B5B5B">Buy Bitcoin using a huge range of popular online wallets, including
              PayPal, M-Pesa, and Apple
              Pay.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center lg:mt-[80px] mt-8">
      <a href className="bg-[#F1971F] hvr-float text-white px-[45px] font-bold lg:text-[20px] text-[18px] py-3 rounded-md">Start
        Trading</a>
    </div>
  </div>
  <div className="absolute top-[10%] left-0 z-0">
    <img src="/assets/bg-img 3.svg" />
  </div>
  <div className="absolute bottom-0 right-0 z-0">
    <img src="/assets/bg-img 2.svg" />
  </div>
</section>





    </div>
  )
}

export default ExploreSection
