import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import img1 from "../assets/logo/1sCreenshot 2025-10-31 151645.png";
import img2 from "../assets/logo/Screenshot 2025-10-31 151620.png";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Autoplay, Navigation} from "swiper/modules";
import Hero from "./hero";

const Slider = () => {
  return (
  
    <>
    <Hero/>

      <div className="px-36">
        <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mt-15 rounded-md"
      >
        <SwiperSlide>
          <img
            className="w-full  h-60 md:h-150 object-cover cursor-pointer rounded-lg"
            src={img1}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-60 md:h-150 object-cover cursor-pointer rounded-lg"
            src={img2}
          />
        </SwiperSlide>
     
      </Swiper>
      </div>
    </>
  );
};

export default Slider;