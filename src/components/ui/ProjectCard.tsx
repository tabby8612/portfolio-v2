import { BaselineCircle, ExternalLink, Github } from "@/assets/svgicons";

export default function ProjectCard() {
  return (
    <div
      id="slide-card"
      className="mt-15 flex gap-8">
      <div
        id="project-image"
        className="w-1/2">
        <img
          src="https://zelio-developer.botble.com/storage/main/projects/3.png"
          alt=""
        />
      </div>
      <div
        id="project-text"
        className="w-1/2">
        <h1 className="mt-10 text-4xl font-primary-font font-medium text-primary-color">Mobile Banking App</h1>
        <p className="text-white/50 mt-3">A secure and user-friendly mobile banking app for managing personal finance</p>
        <div className="flex gap-2 items-center text-md text-secondary-color mt-10">
          <BaselineCircle className="size-2" />
          <p className="font-secondary-font tracking-widest">Projects Info</p>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex gap-2 items-center text-lg text-secondary-color mt-8">
            <BaselineCircle className="size-2" />
            <p className="font-secondary-font tracking-widest">Category</p>
          </div>
          <p className="text-right mt-8">Mobile App Development</p>
          <div className="flex gap-2 items-center text-lg text-secondary-color mt-8">
            <BaselineCircle className="size-2" />
            <p className="font-secondary-font tracking-widest">Client</p>
          </div>
          <p className="text-right mt-8">Personal Project</p>
          <div className="flex gap-2 items-center text-lg text-secondary-color mt-8">
            <BaselineCircle className="size-2" />
            <p className="font-secondary-font tracking-widest">Start Date</p>
          </div>
          <p className="text-right mt-8">April 25, 2025</p>
        </div>
        <div className="mt-10 gap-3 flex">
          <a
            href=""
            className="hover:border-b-2 p-2 hover:border-primary-color hover:text-primary-color transition-colors duration-500">
            {<ExternalLink className="inline-block size-4 mr-1" />} Live Website
          </a>
          <a
            href=""
            className="hover:border-b-2 p-2 hover:border-primary-color hover:text-primary-color transition-colors duration-500">
            {<Github className="inline-block size-4 mr-1" />} View Source Code
          </a>
        </div>
      </div>
    </div>
  );
}
