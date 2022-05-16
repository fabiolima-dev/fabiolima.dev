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

  const [projectsRef, projectsInView] = useInView({
    threshold: 0.5,
  });

  const sections = [
    { section: "HOME", color: "gradient-oceanic", link: "#" },
    { section: "PROJETOS", color: "gradient-hyper", link: "#" },
    { section: "HABILIDADES", color: "gradient-sunset", link: "#" },
    { section: "SOBRE", color: "gradient-mojave", link: "#" },
    { section: "CONTATO", color: "gradient-candy", link: "#" },
  ];

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
      <main className="h-full w-full min-w-[300px] max-w-screen-2xl px-5 md:px-28">
        <section>
          <Home />
        </section>
        <SectionTitle title="Habilidades" section={projectsInView} />
        <section ref={projectsRef}>
          <Projects section={projectsInView} />
        </section>
        <CommandLine />
      </main>
    </div>
  );
}
