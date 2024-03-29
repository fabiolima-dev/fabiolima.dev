import { useState, useEffect } from "react";
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
  const [showCommandLine, setShowCommandLine] = useState(false);

  useEffect(() => {
    const handleUserKeyPress = (event) => {
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        setShowCommandLine(!showCommandLine);
      }
    };

    window.addEventListener("keydown", handleUserKeyPress);

    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [showCommandLine]);

  const sections = {
    home: {
      title: "Fabio Lima",
      nav: "Home",
      color: "gradient-oceanic",
      id: "home",
    },
    about: {
      title: "Sobre mim",
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

  const commands = [
    {
      name: "Copiar URL",
      method: function () {
        navigator.clipboard.writeText("https://fabiolima.dev/");
        setShowCommandLine(false);
      },
      icon: "ri-link",
    },
    {
      name: "Ver código fonte",
      method: function () {
        window.open("https://github.com/fabiolima-dev/fabiolima.dev", "_blank");
        setShowCommandLine(false);
      },
      icon: "ri-code-line",
    },
    {
      name: `Mudar para tema ${darkMode ? "claro" : "escuro"}`,
      method: function () {
        setDarkMode(!darkMode);
        setShowCommandLine(false);
      },
      icon: "ri-contrast-2-line",
    },
    {
      name: "Baixar resumo",
      method: function () {
        console.log("Baixando Resumo");
        setShowCommandLine(false);
      },
      icon: "ri-pages-line",
    },
    {
      name: "Home",
      method: function () {
        window.location.hash = "home";
        setShowCommandLine(false);
      },
      icon: "ri-home-line",
    },
    {
      name: "Sobre",
      method: function () {
        window.location.hash = "sobre";
        setShowCommandLine(false);
      },
      icon: "ri-user-line",
    },
    {
      name: "Projetos",
      method: function () {
        window.location.hash = "projetos";
        setShowCommandLine(false);
      },
      icon: "ri-lightbulb-line",
    },
    {
      name: "Contato",
      method: function () {
        window.location.hash = "contato";
        setShowCommandLine(false);
      },
      icon: "ri-contacts-book-line",
    },
    {
      name: "Github",
      method: function () {
        window.open("https://github.com/fabiolima-dev", "_blank");
        setShowCommandLine(false);
      },
      icon: "ri-github-line",
    },
    {
      name: "Linkedin",
      method: function () {
        window.open("https://www.linkedin.com/in/fabiolimadev/", "_blank");
        setShowCommandLine(false);
      },
      icon: "ri-linkedin-line",
    },
    {
      name: "Mandar e-mail",
      method: function () {
        console.log("mandando email");
        setShowCommandLine(false);
      },
      icon: "ri-mail-line",
    },
  ];

  return (
    <div
      className={`${darkMode ? "dark-theme" : "light-theme"}
      box-border flex min-w-[300px] flex-col items-center bg-primary px-5 text-secondary xs:px-10 md:px-20`}
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
      {console.log(showCommandLine)}
      <main className="w-full max-w-screen-lg">
        <Home
          section={sections.home}
          setShowCommandLine={setShowCommandLine}
          showCommandLine={showCommandLine}
        />
        <About section={sections.about} />
        <Projects section={sections.projects} />
        <Contact section={sections.contact} />
        {showCommandLine && (
          <CommandLine
            commands={commands}
            setShowCommandLine={setShowCommandLine}
          />
        )}
      </main>
    </div>
  );
}
