import { GithubSquare, GlobeOutline, LinkedinBoxFill } from "../assets/svgicons";

type Props = {
  dialogFn: () => void;
};

export default function ContactDialog({ dialogFn }: Props) {
  return (
    <div
      id="contactDialog"
      className=" dark:bg-primary-bg bg-white w-2xs h-screen absolute z-20 top-0 -translate-x-80 transition-transform delay-100 duration-500">
      <div className="relative w-11/12 mx-auto h-10/12 my-auto py-7 px-2">
        <span
          className="absolute top-5 right-0 text-lg text-secondary-color cursor-pointer"
          onClick={dialogFn}>
          X
        </span>
        <h1 className="text-4xl font-primary-font dark:text-white leading-12">Get in touch</h1>
        <hr className="border-1 border-primary-color mt-7" />
        <p className="font-secondary-font dark:text-stone-200 mt-5">I am always ready to take new projects, learn new skills, and collaborate with innovative people</p>
        <h1 className="text-2xl font-primary-font dark:text-white/50 mt-6">Phone</h1>
        <p className="font-secondary-font dark:text-stone-200 mt-1">+92 313 3933083</p>
        <h1 className="text-2xl font-primary-font dark:text-white/50 mt-6">Email</h1>
        <p className="font-secondary-font dark:text-stone-200 ">tabishsajwani@hotmail.com</p>
        <h1 className="text-2xl font-primary-font dark:text-white/50 mt-6">Website</h1>
        <p className="font-secondary-font dark:text-stone-200">https://tabishsajwani.com/</p>
        <h1 className="text-2xl font-primary-font dark:text-white/50 mt-6">Address</h1>
        <p className="font-secondary-font dark:text-stone-200">Office # 313, Arcade Revenue, Shahrah-e-Faisal</p>
        <h1 className="text-2xl font-primary-font dark:text-white/50 mt-10">Social</h1>
        <div className="flex gap-2">
          <a href="https://github.com/tabby8612">
            <GithubSquare className="text-primary-color p-1" />
          </a>{" "}
          <span className="text-white">|</span>
          <a href="https://www.linkedin.com/in/tabish-sajwani/">
            <LinkedinBoxFill className="text-primary-color p-1" />
          </a>
          <span className="text-white">|</span>
          <a href="https://tabishsajwani.com/">
            <GlobeOutline className="text-primary-color p-1" />
          </a>
        </div>
      </div>
    </div>
  );
}
