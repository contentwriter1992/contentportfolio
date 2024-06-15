"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper/modules";

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
        modules={[EffectFade, Pagination]}
        effect="coverflow"
        navigation={true}
        // crossfade={true}
        pagination={{ clickable: true }}
        breakpoints={{
          // Breakpoint for small devices
          // 640: { spaceBetween: 5 },
          // 768: { spaceBetween: 10 },
          // 1024: { spaceBetween: 15 },
        }}
        // className="w-full h-auto"
      >
           {slides.map((slide) => (
          <SwiperSlide key={slide.image}>
            <img src={slide.image} alt={slide.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    )
}