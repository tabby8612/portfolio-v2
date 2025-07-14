import { Cpp, Css3, Javascript, Laravel, Livewire, Mongodb, Php, React, Tailwindcss, Typescript } from "@/assets/languagesicons";
import HeroSlider from "./swiper/hero-slider";
import { BaselineCircle } from "@/assets/svgicons";

export default function Skills() {
  return (
    <section
      id="skills"
      className="dark:bg-primary-bg bg-white dark:text-white lg:w-10/12 mx-auto my-7 rounded-2xl p-11">
      <p className="text-primary-color text-center flex items-center justify-center gap-2 ">{<BaselineCircle className="inline-block size-3" />} Projects</p>
      <h1 className="text-4xl font-primary-font text-center font-medium">My Skills</h1>
      <div className="lg:flex sm:flex-col lg:flex-row justify-center items-center">
        <div
          id="skills-sliders"
          className="lg:w-1/2 w-full md:w-11/12 lg:p-24 ">
          <HeroSlider slides={[<Css3 />, <Javascript />, <Typescript />, <React />, <Tailwindcss />, <Livewire />, <Javascript />, <Typescript />, <React />]} />
          <div className="px-4">
            <HeroSlider slides={[<Php />, <Laravel />, <Cpp />, <Livewire />, <Mongodb />, <React />, <Tailwindcss />, <Php />, <Laravel />, <Cpp />]} />
          </div>
        </div>
        <div className="lg:w-0.5 bg-stone-400/50 lg:h-72 h-1 md:w-3/4 lg:my-auto my-7" />
        <div
          id="skills-text"
          className="lg:w-1/2 lg:pt-3 md:pt-20 lg:pl-20 ">
          <div className="flex lg:flex-row flex-col lg:items-center lg:gap-4">
            <div className="flex items-center gap-4 ">
              {<BaselineCircle className="w-2" />} <span className="text-black dark:text-white">Front-end: </span>
            </div>
            <p className="text-stone-400 font-primary-font">HTML, CSS, Javascript, React, Livewire</p>
          </div>
          <div className="flex lg:flex-row flex-col lg:items-center lg:gap-4 mt-5">
            <div className="flex  items-center gap-4">
              {<BaselineCircle className="w-2" />} <span className="text-black dark:text-white">Back-end: </span>
            </div>
            <p className="text-stone-400 font-primary-font">Node.js, Express, PHP, Laravel</p>
          </div>
          <div className="flex lg:flex-row flex-col lg:items-center lg:gap-4 mt-5">
            <div className="flex  items-center gap-4">
              {<BaselineCircle className="w-2" />} <span className="text-black dark:text-white">Databases: </span>
            </div>
            <p className="text-stone-400 font-primary-font">MySQL, MongoDB, Firewire</p>
          </div>
          <div className="flex lg:flex-row flex-col mt-5 lg:items-center lg:gap-4">
            <div className="flex  items-center gap-4">
              {<BaselineCircle className="w-2" />} <span className="text-black dark:text-white">Tools & Platform: </span>
            </div>
            <p className="text-stone-400 font-primary-font">Git, Github</p>
          </div>
          <div className="flex lg:flex-row flex-col mt-5 lg:items-center lg:gap-4">
            <div className="flex  items-center gap-4">
              {<BaselineCircle className="w-2" />} <span className="text-black dark:text-white">Others: </span>
            </div>
            <p className="text-stone-400 font-primary-font">RESTful APIs, GraphQL, MVC</p>
          </div>
        </div>
      </div>
    </section>
  );
}
