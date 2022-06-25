import React from "react";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./slider.css"
import img1 from "../../img/slider/1.jpg";

import img3 from "../../img/slider/3.jpg";
import img4 from "../../img/slider/4.jpg";


const SliderHero = () => {
  return (
    <div>
      <Swiper
      autoplay={{
        delay: 2300,
        disableOnInteraction: true,
      }}
      modules={[Autoplay, Pagination]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" className="img-fluid"/>
        </SwiperSlide>
      
        <SwiperSlide>
        <img src={img3} alt="" className="img-fluid"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={img4} alt="" className="img-fluid"/>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
};
export default  SliderHero;