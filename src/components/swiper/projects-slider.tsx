// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/bundle";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ProjectCard from "../ui/ProjectCard";

export default function ProjectSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        <SwiperSlide>{<ProjectCard />}</SwiperSlide>
        <SwiperSlide>{<ProjectCard />}</SwiperSlide>
        <SwiperSlide>{<ProjectCard />}</SwiperSlide>
      </Swiper>
    </>
  );
}
