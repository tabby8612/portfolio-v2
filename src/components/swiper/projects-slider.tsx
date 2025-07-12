// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import LaracomImage from "@/assets/projects/laracom.jpg";
import MindHackingBlog from "@/assets/projects/MindHacking.jpg";
import EVOGYM from "@/assets/projects/EVOGYM.png";

// Import Swiper styles

// import "swiper/bundle";
// import "swiper/swiper-bundle.css";

// import required modules
import { Autoplay } from "swiper/modules";
import ProjectCard from "../ui/ProjectCard";
import { useRef } from "react";

export default function ProjectSlider() {
  const swiperRef = useRef(null);

  const PROJECTS = [
    {
      image: LaracomImage,
      title: "Laracom",
      description: "Laracom is a modern eCommerce platform built with Laravel, Inertia.js, and React, featuring a sleek Filament admin dashboard.",
      category: "Ecommerce Project",
      client: "Personal Project",
      date: "Jul 8, 2025",
      livelink: "https://laracom.tabishsajwani.com/",
      codelink: "https://github.com/tabby8612/LaraCom",
    },
    {
      image: MindHackingBlog,
      title: "MindHacking",
      description: "A personal blog created with Laravel + Inertia + React + Typescript.",
      category: "Blog CMS",
      client: "Personal Project",
      date: "April 12, 2025",
      livelink: "#",
      codelink: "https://github.com/tabby8612/LaravelLearning/tree/main/09%20-%20Main%20Application",
    },
    {
      image: EVOGYM,
      title: "EvoGYM",
      description: "A fitness web app created with React + Typescript.",
      category: "Fitness Website",
      client: "Personal Project",
      date: "March 12, 2025",
      livelink: "#",
      codelink: "https://github.com/tabby8612/ReactFitnessApp",
    },
  ];

  return (
    <>
      <div>
        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay]}
          className="mySwiper ">
          {PROJECTS.map((project) => (
            <SwiperSlide>
              {
                <ProjectCard
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  category={project.category}
                  client={project.client}
                  date={project.date}
                  livelink={project.livelink}
                  codelink={project.codelink}
                />
              }
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
