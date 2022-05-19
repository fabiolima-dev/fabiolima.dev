import { useState, useEffect, useRef } from "react";
import SectionTitleWrapper from "../SectionTitleWrapper";

export default function Home({ sections }) {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    function scrollHandler() {
      setPosition(window.pageYOffset);
    }

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div className="flex h-screen flex-col items-center justify-evenly pt-16 sm:items-start">
      <div className="flex flex-col items-center sm:items-start">
        <h3
          // style={{
          //   opacity: `${-position / 2 + 100}%`,
          //   bottom: `${position / 10}px`,
          // }}
          className="text-center text-base text-secondary md:text-xl"
        >
          👋️ Olá, me chamo
        </h3>
        <SectionTitleWrapper sections={sections} />
        <h3
          // style={{          // style={{
          //   opacity: `${-position / 2 + 100}%`,
          //   bottom: `${position / 10}px`,
          // }}
          className="px-8 text-center text-base text-secondary sm:px-0 md:text-xl"
        >
          Desenvolvedor Front End e UI Designer.
        </h3>
      </div>
      <h3
        // style={{
        //   opacity: `${-position / 2 + 100}% `,
        //   bottom: `${position / 10}px`,
        // }}
        className="mx-8 w-fit rounded-2xl bg-tertiary px-6 py-2 text-center font-mono text-sm font-bold text-white shadow-md sm:mx-0 md:text-base"
      >
        Aperte ctrl + k para linha de comando
      </h3>
    </div>
  );
}
