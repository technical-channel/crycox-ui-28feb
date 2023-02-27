import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ClientSlider = () => {
  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    margin: 15,
    responsive: [
      {
        breakpoint: 4000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1.5,
          infinite: true,
          dots: false,
          autoplay: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          autoplay: true,
          margin: 15,
        },
      },
    ],
  };

  var data = [
    {
      id: 1,
      imgUrl: "/assets/image 3.png",
    },
    {
      id: 2,
      imgUrl: "/assets/image 4.png",
    },
    {
      id: 3,
      imgUrl: "/assets/image 5.png",
    },
    {
      id: 4,
      imgUrl: "/assets/image 6.png",
    },
    {
      id: 5,
      imgUrl: "/assets/image 3.png",
    },
    {
      id: 6,
      imgUrl: "/assets/image 4.png",
    },
    {
      id: 6,
      imgUrl: "/assets/image 4.png",
    },

    {
      id: 6,
      imgUrl: "/assets/image 4.png",
    },
    {
      id: 6,
      imgUrl: "/assets/image 4.png",
    },

  ];
  return (
    <div>
 <section className="overflow-hidden  py-[20px]">
  <div className="max-w-[1600px] p-5 mx-auto">
    <div className="clientlogo ">
    <Slider {...settings}>
      {data.map((data,index)=> {
        return <>
           <div className='mx-4'>
           <img src={process.env.PUBLIC_URL +data.imgUrl} className=" mx-auto block" />
           </div>
      
     
        </>
      })}

   
    </Slider>
    
    </div>
  </div>
</section>

    </div>
  )
}

export default ClientSlider
