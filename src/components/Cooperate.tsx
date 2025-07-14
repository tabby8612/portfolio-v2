import { ApiSolid, BrowserWebsite1Solid, CodeSolid, CoinsStack, Mobile, Server } from "@/assets/svgicons";
import { BorderBeam } from "./magicui/border-beam";

export default function Cooperate() {
  const CARDS = [
    {
      value: "1",
      icon: <Server />,
      title: "Backend Development",
      description: "Handling server-side logic like data storage, API development, and user authentication.",
    },

    {
      value: "2",
      icon: <CodeSolid />,
      title: "Frontend Development",
      description: "Creating dynamic and interactive web pages using React and modern JS frameworks.",
    },

    {
      value: "3",
      icon: <Mobile />,
      title: "Mobile App Development",
      description: "Building cross-platform mobile application using React Native.",
    },
    {
      value: "4",
      icon: <CoinsStack />,
      title: "Database Management",
      description: "Managing and Optimizing relational and non-relational databases for high performance.",
    },
    {
      value: "5",
      icon: <ApiSolid />,
      title: "API Development",
      description: "Designing and Developing scalable RESTful APIs for web and mobile applications.",
    },
    {
      value: "6",
      icon: <BrowserWebsite1Solid />,
      title: "UI/UX Designer",
      description: "Creating user-friendly and mobile-friendly digital assets.",
    },
  ];

  return (
    <section
      id="cooperation"
      className="dark:bg-primary-bg bg-white dark:text-white min-h-[650px] w-10/12 mx-auto mt-7 rounded-2xl py-10 relative">
      {
        <BorderBeam
          borderWidth={3}
          size={100}
          className="from-transparent via-primary-color to-transparent"
          duration={3}
          transition={{
            duration: 10,
          }}
        />
      }
      <div className="lg:w-1/2 mx-auto py-7 text-center">
        <p className="text-primary-color font-primary-font text-md my-4">🟢 Cooperation</p>
        <h1 className="font-primary-font text-3xl text-stone-400">
          <span className="dark:text-white text-black">Designing solutions</span> customized to meet your requirements
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-6">
        {CARDS.map((item) => (
          <div
            className="group rounded-md border-1 border-stone-600 px-5 py-15 hover:-translate-y-1.5 duration-500"
            key={item.value}>
            <p className="font-primary-font group-hover:text-primary-color">{item.icon}</p>
            <h1 className="my-5 text-lg md:text-2xl font-primary-font">{item.title}</h1>
            <p className="text-stone-400">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
