import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Head from "next/head";
import Header from "../components/sections/Header";
import Home from "../components/sections/Home";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import CommandLine from "../components/CommandLine";

export default function Index() {
  const [darkMode, setDarkMode] = useState(true);

  const sections = {
    home: {
      title: "Fabio Lima",
      nav: "Home",
      color: "gradient-oceanic",
      id: "home",
    },
    about: {
      title: "Sobre",
      nav: "Sobre",
      color: "gradient-sunset",
      id: "sobre",
    },
    projects: {
      title: "Projetos",
      nav: "Projetos",
      color: "gradient-hyper",
      id: "projetos",
    },
    contact: {
      title: "Contato",
      nav: "Contato",
      color: "gradient-candy",
      id: "contato",
    },
  };

  Object.keys(sections).forEach((key) => {
    sections[key].intersection = useInView({ threshold: 0.5 });
  });

  return (
    <div
      className={`${
        darkMode ? "dark-theme" : "light-theme"
      } box-border flex min-w-[300px] flex-col items-center bg-primary px-5 text-secondary xs:px-10 md:px-20`}
    >
      <Head>
        <title>Fabio Lima</title>
        <meta name="description" content="Fabio Lima personal website" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header
        sections={sections}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <main className="w-full max-w-screen-lg">
        <Home section={sections.home} />
        <About section={sections.about} />
        <Projects section={sections.projects} />
        <Contact section={sections.contact} />
        <CommandLine />
      </main>
    </div>
  );
}
