import { TypingText } from "./animate-ui/text/typing";
import { BorderBeam } from "./magicui/border-beam";
import HeroSlider from "./swiper/hero-slider";
import { OutlineFileDownload } from "@/assets/svgicons";
import CV from "@/assets/Tabish CV 08-Jul.pdf";
import profileImage from "@/assets/profolioimage.png";
import { Cpp, Css3, Javascript, Laravel, Livewire, Mongodb, Php, React, Tailwindcss, Typescript } from "@/assets/languagesicons";

export default function Hero() {
  return (
    <div
      id="hero"
      className="dark:bg-primary-bg bg-white lg:flex pt-7 relative rounded-md">
      <BorderBeam
        borderWidth={3}
        size={100}
        className="from-transparent via-primary-color to-transparent"
        duration={3}
        transition={{
          duration: 10,
        }}
      />
      <div
        id="hero-text"
        className="lg:size-1/2 pl-7 relative">
        <p className="lg:text-xl sm:text-xs md:text-lg font-primary-font pt-5">
          <span className="text-secondary-color">{"<span>"}</span>
          <TypingText
            text={"Hey, I am Tabish Sajwani"}
            cursor={true}
            cursorClassName="w-1 h-6 py-2 duration-300"
          />
          <span className="text-secondary-color">{"</span>"}</span>
        </p>
        <div className="relative mt-7">
          <h1 className="lg:text-5xl sm:text-3xl md:text-2xl font-semibold font-primary-font pt-5 lg:after:w-7 after:w-4 md:after:h-1 after:h-1 dark:after:bg-white after:bg-black after:absolute after:bottom-0 after:animate-caret-blink after:duration-75">
            Senior <span className="text-primary-color">{"{Full Stack}"}</span> Web & App Developer
          </h1>
        </div>

        <p className="text-md font-primary-font pt-5">
          <span className="text-secondary-color">{"<p>"}</span>With expertise in cutting-edge technologies such as <span className="text-secondary-color">Javascript</span>, <span className="text-secondary-color">Typescript</span>,{" "}
          <span className="text-secondary-color">React</span>, and <span className="text-secondary-color">Laravel</span>... I can deliver web solutions that are both innovative and robust.
          <span className="text-secondary-color">{"</p>"}</span>{" "}
        </p>
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div
            id="stack-slider"
            className="pt-10 lg:w-[150%] w-[100%]">
            <HeroSlider slides={[<Javascript />, <Typescript />, <React />, <Tailwindcss />, <Php />, <Laravel />, <Css3 />, <Cpp />, <Livewire />, <Mongodb />]} />
          </div>
          <div className="relative ml-20 pt-5 hidden md:block">
            <p className="absolute right-10 top-1/2 bottom-1/2 dark:text-white/70">...and more</p>
          </div>
        </div>

        <div
          id="download CV"
          className="flex gap-3 my-10 items-center dark:text-white/70">
          <OutlineFileDownload className="text-primary-color" />
          <a
            href={CV}
            target="_blank">
            Download My CV
          </a>
        </div>
      </div>
      <div
        id="hero-image"
        className="mx-auto flex justify-center items-center">
        <img
          src={profileImage}
          alt="Tabish photo"
        />
      </div>
    </div>
  );
}
