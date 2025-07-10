import "./App.css";
import ContactDialog from "./components/ContactDialog";
import Hero from "./components/Hero";

import MobNav from "./components/MobNav";
import Navbar from "./components/Navbar";

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
    </>
  );
}

export default App;
