import { AlignLeft, CodeSlash, GithubSquare, HamburgerButton, LinkedinBoxFill, Sun } from "../assets/svgicons";

type Props = {
  contactHandlerFn: () => void;
  mobNavFn: () => void;
};

export default function Navbar({ contactHandlerFn, mobNavFn }: Props) {
  function themeHandler() {
    const htmldocument = document.getElementsByTagName("html")[0] as HTMLElement;
    htmldocument.classList.toggle("dark");
  }

  return (
    <>
      <nav className="bg-primary-bg flex gap-5 justify-between h-16 md:h-20 items-center rounded-2xl relative z-10 top-2">
        <AlignLeft
          className="bg-stone-700 md:p-7 p-5 rounded-tl-lg rounded-bl-lg cursor-pointer text-white hidden md:block"
          onClick={contactHandlerFn}
        />
        <div className="flex gap-1 items-center">
          <CodeSlash className="font-black text-lime-400 md:p-3 p-6 " />
          <p className="md:text-xl text-md font-primary-font bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent pr-3">Tabish Sajwani</p>
        </div>
        <ul className="md:flex gap-10 font-primary-font text-lg hidden">
          <li className="cursor-pointer tracking-wider relative text-white line">Home</li>
          <li className="cursor-pointer tracking-wider relative text-white line">Services</li>
          <li className="cursor-pointer tracking-wider relative text-white line">Portfolio</li>
          <li className="cursor-pointer tracking-wider relative text-white line">Pricing</li>
          <li className="cursor-pointer tracking-wider relative text-white line">Contact</li>
        </ul>
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
        <HamburgerButton
          className="text-white w-7 md:size-0"
          onClick={mobNavFn}
        />
        <Sun
          className="bg-stone-700 md:p-6 rounded-tr-lg rounded-br-lg w-10 h-16 md:size-20 px-2 cursor-pointer"
          onClick={themeHandler}
        />
      </nav>
    </>
  );
}
