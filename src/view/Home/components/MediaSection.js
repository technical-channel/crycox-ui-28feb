import React from "react";

const MediaSection = () => {
  return (
    <div>
      <section className="lg:pt-[50px]  lg:pb-[20px] py-[50px]">
        <div className="max-w-[1600px] mx-auto p-5">
          <div className="max-w-[1400px] mx-auto p-5">
            <div className="text-center mb-[50px]">
              <h4 className="font-bold xl:text-[50px] lg:text-[35px] text-[25px] mb-4">
                {" "}
                <span className="text-[#F1971F]">Crycox&nbsp;</span>in the media
              </h4>
              <p className="text-[#000] lg:text-[20px] text-[16px] leading-[2.3rem]">
                Crycox is a global peer-to-peer platform building a financial
                system for the 100% — one{" "}
                <span className="text-[#000AFF]">#Bitcoin</span> at a time.
                Check out our coverage in renowned publications and learn about
                our Built With Bitcoin initiative.
              </p>
            </div>
          </div>
          <div className="flex justify-center lg:mt-[50px] mt-0">
            <iframe
              width={800}
              height={415}
              src="https://www.youtube.com/embed/ORdWE_ffirg"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaSection;
