"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface Slide {
  image: string;
  title: string;
}

interface SliderProps {
  slides: Slide[];
}

export const Slider: React.FC<SliderProps> = ({ slides }) => {
    return ( 
    <Swiper
        spaceBetween={10}
        slidesPerView={1}
        onSwiper={(Swiper) => console.log(Swiper)}
        // Enable fade effect
        modules={[EffectFade]} 
        effect="fade"
        navigation={true}
        pagination={{ clickable: true }}
        breakpoints={{
          // Breakpoint for small devices
          640: {
            // Set space between slides to 5
            spaceBetween: 5,
          },
          // Breakpoint for medium devices
          768: {
            // Set space between slides to 10
            spaceBetween: 10,
          },
          // Breakpoint for large devices
          1024: {
            // Set space between slides to 15
            spaceBetween: 15,
          },
        }}
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
