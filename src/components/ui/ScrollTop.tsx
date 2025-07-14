import { TopArrow } from "@/assets/svgicons";
import CircularProgress from "@mui/joy/CircularProgress";
import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [scrollPosition, setScrollPosition] = useState(window.pageYOffset);
  const [displayScrollToTop, setDisplayScrollToTop] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const currentScroll = window.pageYOffset;
      setScrollPosition(currentScroll);
      setDisplayScrollToTop(currentScroll > 250);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${displayScrollToTop ? "translate-x-0" : "translate-x-250"} bottom-10 right-10 fixed z-50 bg-stone-700 rounded-full shadow shadow-white cursor-pointer group transition-transform duration-300`}>
      <CircularProgress
        size="lg"
        color="success"
        determinate
        value={(scrollPosition / (document.body.scrollHeight - window.innerHeight)) * 100}>
        <a href="#nav">
          <TopArrow className={`size-10 p-2 text-white group-hover:scale-110`} />
        </a>
      </CircularProgress>
    </div>
  );
}
