import React from "react";
import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const data = [];
  return (
    <div>
      <section className="lg:pt-[50px] bg-[#f7f7f7] relative xl:pb-[80px] py-[50px]">
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-[1400px] mx-auto p-5">
            <div className="text-center mb-[50px]">
              <h4 className="font-bold xl:text-[50px] lg:text-[35px] text-[35px] mb-4">
                Testimonials
              </h4>
              <p className="text-[#000] lg:text-[20px] text-[16px] leading-[2.3rem]">
                Wondering what our users think about using Paxful? Let them tell
                you in their own words:
              </p>
            </div>
          </div>
          <div className="max-w-[1400px] mx-auto  px-5 ">
            <div className="Testimonials overflow-hidden h-[450px]  ">
              <Slider {...settings}>
                {/* {data.map((data,index)=> {
         <div>{data.content}</div>
        })} */}

                <div>
                  <div className="relative border-4 border-[#F1971F] py-5 md:px-10 px-3">
                    <div className="lg:md:mt-[100px] mt-[200px] mt-[50px]">
                      <h5 className="font-bold Farro-fonts text-[#000] mb-4 text-[25px]">
                        MaineBitcoin
                      </h5>
                      <p className="mt-2 leading-[2rem]">
                        Being a crycox vendor has been great. Support is always
                        responsive and helpful, and best of all I’ve been able
                        to help many new Bitcoin users get some of there first
                        Bitcoin....
                      </p>
                      <a href="/" className="mt-2 inline-block text-[#000AFF]">
                        Read more
                      </a>
                    </div>
                    <div className="absolute top-[-50px] left-[30px]">
                      <img
                        src="/assets/about10 1.svg"
                        className="rounded-[50px] z-50 md:h-auto h-[80px]"
                      />
                    </div>
                    <div className="absolute top-[20px] right-[20px]">
                      <img src="/assets/quote.png" className />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="relative border-4 border-[#F1971F] py-5 md:px-10 px-3">
                    <div className="lg:md:mt-[100px] mt-[200px] mt-[50px]">
                      <h5 className="font-bold Farro-fonts text-[#000] mb-4 text-[25px]">
                        MaineBitcoin
                      </h5>
                      <p className="mt-2 leading-[2rem]">
                        Being a crycox vendor has been great. Support is always
                        responsive and helpful, and best of all I’ve been able
                        to help many new Bitcoin users get some of there first
                        Bitcoin....
                      </p>
                      <a href="/" className="mt-2 inline-block text-[#000AFF]">
                        Read more
                      </a>
                    </div>
                    <div className="absolute top-[-50px] left-[30px]">
                      <img
                        src="/assets/about10 1.svg"
                        className="rounded-[50px] z-50 md:h-auto h-[80px]"
                      />
                    </div>
                    <div className="absolute top-[20px] right-[20px]">
                      <img src="/assets/quote.png" className />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="relative border-4 border-[#F1971F] py-5 md:px-10 px-3">
                    <div className="lg:md:mt-[100px] mt-[200px] mt-[50px]">
                      <h5 className="font-bold Farro-fonts text-[#000] mb-4 text-[25px]">
                        MaineBitcoin
                      </h5>
                      <p className="mt-2 leading-[2rem]">
                        Being a crycox vendor has been great. Support is always
                        responsive and helpful, and best of all I’ve been able
                        to help many new Bitcoin users get some of there first
                        Bitcoin....
                      </p>
                      <a href="/" className="mt-2 inline-block text-[#000AFF]">
                        Read more
                      </a>
                    </div>
                    <div className="absolute top-[-50px] left-[30px]">
                      <img
                        src="/assets/about10 1.svg"
                        className="rounded-[50px] z-50 md:h-auto h-[80px]"
                      />
                    </div>
                    <div className="absolute top-[20px] right-[20px]">
                      <img src="/assets/quote.png" className />
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>

        <div className="absolute bttom-0 left-0 z-0">
          <img src="/assets/bg-img 3.svg" />
        </div>
        <div className="absolute top-0 right-0 z-0">
          <img src="/assets/bg-img 2.svg" />
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
