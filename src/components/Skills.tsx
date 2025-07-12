import { Cpp, Css3, Javascript, Laravel, Livewire, Mongodb, Php, React, Tailwindcss, Typescript } from "@/assets/languagesicons";
import HeroSlider from "./swiper/hero-slider";
import { BaselineCircle } from "@/assets/svgicons";

export default function Skills() {
  return (
    <section
      id="skills"
      className="dark:bg-primary-bg bg-white dark:text-white w-10/12 mx-auto my-7 rounded-2xl p-11">
      <p className="text-primary-color text-center flex items-center justify-center gap-2 ">{<BaselineCircle className="inline-block size-3" />} Projects</p>
      <h1 className="text-4xl font-primary-font text-center font-medium">My Skills</h1>
      <div className="flex">
        <div
          id="skills-sliders"
          className="w-1/2 p-24 ">
          <HeroSlider slides={[<Css3 />, <Javascript />, <Typescript />, <React />, <Tailwindcss />, <Livewire />, <Javascript />, <Typescript />, <React />]} />
          <div className="px-7">
            <HeroSlider slides={[<Php />, <Laravel />, <Cpp />, <Livewire />, <Mongodb />, <React />, <Tailwindcss />, <Php />, <Laravel />, <Cpp />]} />
          </div>
        </div>
        <div className="w-0.5 bg-stone-400/50  h-72 my-auto" />
        <div
          id="skills-text"
          className="w-1/2 pt-3 pl-20">
          <p className="flex gap-3 items-center text-stone-400 mt-8 font-primary-font">
            {<BaselineCircle className="w-2" />} <span className="text-black dark:text-white">Front-end: </span> HTML, CSS, Javascript, React, Livewire
          </p>
          <p className="flex gap-3 items-center text-stone-400 mt-8 font-primary-font">
            {<BaselineCircle className="w-2" />} <span className="text-black dark:text-white">Back-end: </span> Node.js, Express, PHP, Laravel
          </p>
          <p className="flex gap-3 items-center text-stone-400 mt-8 font-primary-font">
            {<BaselineCircle className="w-2" />} <span className="text-black dark:text-white">Databases: </span> MySQL, MongoDB, Firewire
          </p>
          <p className="flex gap-3 items-center text-stone-400 mt-8 font-primary-font">
            {<BaselineCircle className="w-2" />} <span className="text-black dark:text-white">Tools & Platform: </span> Git, Github
          </p>
          <p className="flex gap-3 items-center text-stone-400 mt-8 font-primary-font">
            {<BaselineCircle className="w-2" />} <span className="text-black dark:text-white">Others: </span> RESTful APIs, GraphQL, MVC
          </p>
        </div>
      </div>
    </section>
  );
}
