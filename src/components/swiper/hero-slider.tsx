// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import languagesicons from "@/assets/languagesicons";

// Import Swiper styles
import "swiper/css";
import "swiper/bundle";

// import required modules
import { Autoplay } from "swiper/modules";

export default function HeroSlider() {
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
        <SwiperSlide className="p-5 ">{<languagesicons.Javascript />}</SwiperSlide>
        <SwiperSlide className="p-5 ">{<languagesicons.Typescript />}</SwiperSlide>
        <SwiperSlide className="p-5 ">{<languagesicons.React />}</SwiperSlide>
        <SwiperSlide className="p-5 ">{<languagesicons.Tailwindcss />}</SwiperSlide>
        <SwiperSlide className="p-5 ">{<languagesicons.Php />}</SwiperSlide>
        <SwiperSlide className="p-5 ">{<languagesicons.Laravel />}</SwiperSlide>
        <SwiperSlide className="p-5 ">{<languagesicons.Css3 />}</SwiperSlide>
        <SwiperSlide className="p-5 ">{<languagesicons.Cpp />}</SwiperSlide>
        <SwiperSlide className="p-5 ">{<languagesicons.Livewire />}</SwiperSlide>
        <SwiperSlide className="p-5 ">{<languagesicons.Mongodb />}</SwiperSlide>
      </Swiper>
    </>
  );
}
