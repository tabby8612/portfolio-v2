import "./App.css";
import { BaselineCircle, ExternalLink, Github, GithubSquare } from "./assets/svgicons";
import ContactDialog from "./components/ContactDialog";
import Cooperate from "./components/Cooperate";
import Hero from "./components/Hero";
import MobNav from "./components/MobNav";
import Navbar from "./components/Navbar";
import Qualification from "./components/Qualification";
import ProjectSlider from "./components/swiper/projects-slider";

function App() {
  function ContactDialogHandler() {
    const contactDialog = document.getElementById("contactDialog") as HTMLDivElement;

    contactDialog.classList.toggle("-translate-x-80");
  }

  function mobNavHandler() {
    const movNav = document.getElementById("movNav") as HTMLDivElement;

    movNav.classList.toggle("-translate-x-100");
  }

  return (
    <>
      <ContactDialog dialogFn={ContactDialogHandler} />
      <MobNav mobNavFn={mobNavHandler} />
      <section className="dark:bg-black dark:text-white min-h-[650px] w-10/12 mx-auto mt-7 rounded-2xl">
        <Navbar
          contactHandlerFn={ContactDialogHandler}
          mobNavFn={mobNavHandler}
        />
        <Hero />
      </section>
      <Cooperate />
      <Qualification />
      <section
        id="projects"
        className="min-h-[650px] w-10/12 mx-auto mt-7 rounded-2xl p-10 bg-primary-bg">
        <div className="flex gap-2 items-center text-lg text-primary-color">
          <BaselineCircle className="size-2" />
          <p className="font-secondary-font tracking-widest">Projects</p>
        </div>
        <h1 className="font-primary-font text-4xl font-medium">My Recent Works</h1>
        <ProjectSlider />
      </section>
    </>
  );
}

export default App;
