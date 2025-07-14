import "./App.css";

import Contact from "./components/Contact";
import ContactDialog from "./components/ContactDialog";
import Cooperate from "./components/Cooperate";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MobNav from "./components/MobNav";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Qualification from "./components/Qualification";
import Skills from "./components/Skills";
import ScrollTop from "./components/ui/ScrollTop";

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
      <ScrollTop />
      <ContactDialog dialogFn={ContactDialogHandler} />
      <MobNav mobNavFn={mobNavHandler} />
      <section className="dark:bg-black dark:text-white  w-10/12 mx-auto mt-7 rounded-2xl">
        <Navbar
          contactHandlerFn={ContactDialogHandler}
          mobNavFn={mobNavHandler}
        />
        <Hero />
      </section>
      <Cooperate />
      <Qualification />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
