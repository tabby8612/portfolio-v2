import { TypingText } from "./animate-ui/text/typing";
import { BorderBeam } from "./magicui/border-beam";
import HeroSlider from "./swiper/hero-slider";
import { OutlineFileDownload } from "@/assets/svgicons";
import CV from "@/assets/Tabish CV 08-Jul.pdf";
import profileImage from "@/assets/profolioimage.png";

export default function Hero() {
  return (
    <div
      id="hero"
      className="dark:bg-primary-bg md:flex pt-7 relative ">
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
        className="md:size-1/2 pl-7 relative">
        <p className="md:text-xl text-xs font-primary-font pt-5">
          <span className="text-secondary-color">{"<span>"}</span>
          <TypingText
            text={"Hey, I am Tabish Sajwani"}
            cursor={true}
            cursorClassName="w-1 h-6 py-2 duration-300"
          />
          <span className="text-secondary-color">{"</span>"}</span>
        </p>
        <div className="relative mt-7">
          <h1 className="md:text-5xl text-3xl font-semibold font-primary-font pt-5 md:after:w-7 after:w-4 md:after:h-1 after:h-1 dark:after:bg-white after:bg-black after:absolute after:bottom-0 after:animate-caret-blink after:duration-75">
            Senior <span className="text-primary-color">{"{Full Stack}"}</span> Web & App Developer
          </h1>
        </div>

        <p className="text-md font-primary-font pt-5">
          <span className="text-secondary-color">{"<p>"}</span>With expertise in cutting-edge technologies such as <span className="text-secondary-color">Javascript</span>, <span className="text-secondary-color">Typescript</span>,{" "}
          <span className="text-secondary-color">React</span>, and <span className="text-secondary-color">Laravel</span>... I can deliver web solutions that are both innovative and robust.
          <span className="text-secondary-color">{"</p>"}</span>{" "}
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div
            id="stack-slider"
            className="pt-10 md:w-[150%] w-[100%]">
            <HeroSlider />
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
        className="mx-auto">
        <img
          src={profileImage}
          alt="Tabish photo"
        />
      </div>
    </div>
  );
}
