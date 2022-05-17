import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Head from "next/head";
import SectionTitle from "../components/SectionTitle";
import Header from "../components/Header";
import Home from "../components/Home";
import CommandLine from "../components/CommandLine";
import Projects from "../components/Projects";

export default function Index() {
  const [darkMode, setDarkMode] = useState(true);
  const [titleWidth, setTitleWidth] = useState(0);

  const [projectsRef, projectsInView] = useInView({
    threshold: 0.5,
  });

  const sections = {
    home: { name: "Home", color: "gradient-oceanic", link: "#" },
    projects: { name: "Projetos", color: "gradient-hyper", link: "#" },
    skills: { name: "Habilidades", color: "gradient-sunset", link: "#" },
    about: { name: "Sobre", color: "gradient-mojave", link: "#" },
    contact: { name: "Contato", color: "gradient-candy", link: "#" },
  };

  return (
    <div
      className={`${
        darkMode ? "dark-theme" : "light-theme"
      } flex flex-col items-center bg-primary`}
    >
      <Head>
        <title>Fabio Lima</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        sections={sections}
      />
      <main className="box-border h-full w-full min-w-[300px] max-w-screen-xl px-5 sm:px-14 md:px-20">
        <section>
          <Home
            setTitleWidth={setTitleWidth}
            titleWidth={titleWidth}
            section={projectsInView}
          />
        </section>
        <SectionTitle
          titleWidth={titleWidth}
          view={projectsInView}
          section={sections.projects}
        />

        <section ref={projectsRef}>
          <Projects section={projectsInView} />
        </section>
        <section className="h-screen w-full"></section>
        <CommandLine />
      </main>
    </div>
  );
}
