import React from 'react'

const CreateAccount = () => {
  return (
    <>
        <section className="lg:pt-[50px] lg:pb-[100px] py-[30px]">
  <div className="max-w-[1400px] mx-auto p-5">
    <div className="flex lg:flex-row items-center gap-5 flex-col">
      <div className="flex-1 lg:pr-[150px]">
        <h3 className="font-bold xl:text-[50px] lg:text-[35px] text-[35px] mb-4">Ready to get started?</h3>
        <p className=" lg:text-[20px] text-[16px] leading-[2.3rem]">Explore thousands of offers to buy and sell
          Bitcoin to kickstart your trading journey.</p>
        <div className="mt-[50px]">
          <a href className="bg-[#F1971F] hvr-float text-white px-[40px] font-bold lg:text-[20px] text-[18px] py-4 rounded-md">Create
            Your Account</a>
        </div>
      </div>
      <div className="flex-1 lg:mt-0 mt-[50px]">
        <div className="flex justify-end">
          <img src="/assets/Our Values Illustration.svg" className="w-full h-auto" />
        </div>
      </div>
    </div>
  </div>
</section>

<section className="lg:pt-[50px]  bg-[#f7f7f7] lg:pb-[80px] py-[30px]">
  <div className="max-w-[1400px] mx-auto p-5">
    <div>
      <img src="/assets/bitcoin-bg.svg" className="mx-auto" />
    </div>
  </div>
</section>


    </>


  )
}

export default CreateAccount
