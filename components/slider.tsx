"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const Slider = ({ slides }) => {
    return ( 
    <Swiper
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        // pagination={{ 'progressbar', 
        // }}
        modules ={[EffectFade]} effect="fade"
        navigation={true}
      >
        {slides.map((slide) => (
        <SwiperSlide key={slide.image}>
        <img src={slide.image} alt={slide.title} 
    />
       </SwiperSlide>
        ))}
        
      </Swiper>
      )
}
