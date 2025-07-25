import { CodeSlash } from "../assets/svgicons";

type Props = {
  mobNavFn: () => void;
};

export default function MobNav({ mobNavFn }: Props) {
  return (
    <div
      id="movNav"
      className=" dark:bg-primary-bg bg-white w-screen h-screen absolute z-20 top-0 -translate-x-100 transition-transform delay-100 duration-500 md:w-0">
      <div className="relative w-11/12 mx-auto h-10/12 my-auto py-7 px-2 text-white">
        <div className="flex gap-1 items-center justify-between">
          <div className="flex gap-1 items-center">
            <CodeSlash className="font-black text-lime-400 md:p-3 p-6 " />
            <p className="md:text-xl text-md font-primary-font bg-gradient-to-r from-black to-gray-500 dark:from-white dark:to-gray-500 bg-clip-text text-transparent pr-3">Tabish Sajwani</p>
          </div>
          <div className="p-2 dark:bg-stone-700 bg-stone-400 rounded-md">
            <h1
              className="text-md cursor-pointer"
              onClick={mobNavFn}>
              X
            </h1>
          </div>
        </div>
        <hr className="h-0.5 w-10/12 bg-primary-color mx-auto my-5 border-0" />
        <ul className="w-11/12 mx-auto h-10/12 my-auto py-7 px-2 dark:text-white text-black flex flex-col gap-10 font-bold font-primary-font">
          <li>Home</li>
          <li>Portfolio</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}
