import { BaselineCircle } from "@/assets/svgicons";

import ProjectSlider from "./swiper/projects-slider";
import { BorderBeam } from "./magicui/border-beam";

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-10/12 mx-auto my-7 rounded-2xl p-10 dark:bg-primary-bg bg-white  relative">
      <BorderBeam
        borderWidth={3}
        size={100}
        className="from-transparent via-primary-color to-transparent"
        duration={3}
        transition={{
          duration: 10,
        }}
      />
      <div className="flex gap-2 items-center text-lg text-primary-color">
        <BaselineCircle className="size-2" />
        <p className="font-secondary-font tracking-widest">Projects</p>
      </div>
      <h1 className="font-primary-font text-4xl font-medium">My Recent Works</h1>
      <ProjectSlider />
    </section>
  );
}
