import { BaselineCircle, ExternalLink, Github } from "@/assets/svgicons";

type Props = {
  image: string;
  title: string;
  description: string;
  category: string;
  client: string;
  date: string;
  livelink: string;
  codelink: string;
};

export default function ProjectCard({ image, title, description, category, client, date, livelink, codelink }: Props) {
  return (
    <div
      id="slide-card"
      className="mt-15 flex gap-8">
      <div
        id="project-image"
        className="w-1/2 h-9/12">
        <img
          src={image}
          alt={title}
          className="rounded-lg w-full h-9/12 object-center"
        />
      </div>
      <div
        id="project-text"
        className="w-1/2">
        <h1 className="text-4xl font-primary-font font-medium text-primary-color">{title}</h1>
        <p className="dark:text-white/50 mt-3">{description}</p>
        <div className="flex gap-2 items-center text-md text-secondary-color mt-5">
          <BaselineCircle className="size-2" />
          <p className="font-secondary-font tracking-widest">Projects Info</p>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex gap-2 items-center  text-secondary-color mt-5">
            <BaselineCircle className="size-2" />
            <p className="font-secondary-font tracking-widest">Category</p>
          </div>
          <p className="text-right mt-5">{category}</p>
          <div className="flex gap-2 items-center  text-secondary-color mt-5">
            <BaselineCircle className="size-2" />
            <p className="font-secondary-font tracking-widest">Client</p>
          </div>
          <p className="text-right mt-5">{client}</p>
          <div className="flex gap-2 items-center text-secondary-color mt-5">
            <BaselineCircle className="size-2" />
            <p className="font-secondary-font tracking-widest">Start Date</p>
          </div>
          <p className="text-right mt-5">{date}</p>
        </div>
        <div className="mt-10 gap-3 flex">
          <a
            href={livelink}
            target="_blank"
            className="hover:border-b-2 p-2 hover:border-primary-color hover:text-primary-color transition-colors duration-500">
            {<ExternalLink className="inline-block size-4 mr-1" />} Live Website
          </a>
          <a
            href={codelink}
            target="_blank"
            className="hover:border-b-2 p-2 hover:border-primary-color hover:text-primary-color transition-colors duration-500">
            {<Github className="inline-block size-4 mr-1" />} View Source Code
          </a>
        </div>
      </div>
    </div>
  );
}
