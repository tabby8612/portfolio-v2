// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/bundle";

// import required modules
import { Autoplay } from "swiper/modules";
import type { ReactNode } from "react";

type Props = {
  slides: ReactNode[];
};

export default function HeroSlider({ slides }: Props) {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        className="mySwiper"
        centeredSlides
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        loop
        speed={2000}
        allowTouchMove={false}
        modules={[Autoplay]}>
        {slides.map((el) => (
          <SwiperSlide className="p-5 ">{el}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
