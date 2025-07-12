import { CodeSlash, GithubSquare, LinkedinBoxFill } from "@/assets/svgicons";

export default function Footer() {
  return (
    <footer className="min-h-40 p-10 mt-5 bg-black relative bottom-0">
      <section className="w-10/12 mx-auto flex flex-col justify-center items-center">
        <div className="flex gap-1 items-center">
          <CodeSlash className="text-xs font-black text-lime-400 md:p-3 p-6 " />
          <p className="md:text-xl text-md font-primary-font bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent pr-3">Tabish Sajwani</p>
        </div>
        <div
          id="social-icons"
          className="md:flex gap-5 hidden">
          <a
            href="https://github.com/tabby8612"
            target="_blank">
            <GithubSquare className="p-1 hover:text-primary-color transition-colors duration-300 hover:brightness-110 text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/tabish-sajwani/"
            target="_blank">
            <LinkedinBoxFill className="p-1 hover:text-primary-color transition-colors duration-300 hover:brightness-110 text-white" />
          </a>
        </div>
        <ul className="md:flex gap-5 font-primary-font text-sm hidden mt-3">
          <a href="#hero">
            <li className="cursor-pointer tracking-wider relative text-white line">Home</li>
          </a>
          <a href="#cooperation">
            <li className="cursor-pointer tracking-wider relative text-white line">Services</li>
          </a>
          <a href="#projects">
            <li className="cursor-pointer tracking-wider relative text-white line">Portfolio</li>
          </a>
          <a href="#skills">
            <li className="cursor-pointer tracking-wider relative text-white line">Skills</li>
          </a>
          <a href="#contact">
            <li className="cursor-pointer tracking-wider relative text-white line">Contact</li>
          </a>
        </ul>
      </section>
    </footer>
  );
}
