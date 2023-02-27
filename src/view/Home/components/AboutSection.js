import React from 'react'

const AboutSection = () => {
  return (
    <div>
<section className="lg:pt-[100px] relative lg:pb-[100px] py-[30px]">
  <div className="max-w-[1600px] mx-auto p-5">
    <div className="flex lg:flex-row gap-5 flex-col">
      <div className="flex-1">
        <div className="flex lg:justify-start justify-center">
          <img src="assets/About Us Illustration.svg" className="lg:w-full  h-auto" />
        </div>
      </div>
      <div className="flex-1 lg:pr-[150px]">
        <h3 className="font-bold xl:text-[50px] lg:text-[35px] text-[35px] lg:mt-0 mt-[50px] lg:text-left text-center mb-4">
          About Us</h3>
        <p className="text-[#5B5B5B] xl:text-[20px] lg:text-[18px] lg:text-left text-center text-[18px] leading-[2.3rem]">
          We generated names based on a
          multitude of factors and picked the one that resonated with us the most. Our founder first
          engaged with the blockchain in 2013</p>
        <div className="bg-[#fff] shadow-custom xl:mt-[50px] mt-[20px] py-5 px-8">
          <div className="flex sm:flex-row flex-col justify-between">
            <div className="text-center sm:mb-0 mb-8">
              <h4 className="text-[#5B5B5B] mb-2  xl:text-[22px] lg:text-[20px]  text-[22px]">Project Done
              </h4>
              <p className="text-[#FF9800] font-bold xl:text-[35px] lg:text-[35px]  text-[25px]">600+</p>
            </div>
            <div className="text-center sm:mb-0 mb-8">
              <h4 className="text-[#5B5B5B]  mb-2 xl:text-[22px] lg:text-[20px]  text-[22px]">Happy
                Clients</h4>
              <p className="text-[#FF9800] font-bold xl:text-[35px] lg:text-[35px]  text-[25px]">950+</p>
            </div>
            <div className="text-center sm:mb-0 mb-8">
              <h4 className="text-[#5B5B5B]  mb-2 xl:text-[22px] lg:text-[20px]  text-[22px]">Employee
              </h4>
              <p className="text-[#FF9800] font-bold xl:text-[35px] lg:text-[35px]  text-[25px]">30+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="absolute top-0 right-0 z-0">
    <img src="/assets/bg-img 2.svg" />
  </div>
</section>

    </div>
  )
}

export default AboutSection
