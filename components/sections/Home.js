import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../SectionTitle";

export default function Home({ setTitleWidth, titleWidth, sections }) {
  const [position, setPosition] = useState(0);
  // const titleRef = useRef();

  useEffect(() => {
    function scrollHandler() {
      setPosition(window.pageYOffset);
    }

    window.addEventListener("scroll", scrollHandler);

    // setTitleWidth(titleRef.current.getBoundingClientRect().width);

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
        <SectionTitle sections={sections} />
        <h3
          // style={{          // style={{
          //   opacity: `${-position / 2 + 100}%`,
          //   bottom: `${position / 10}px`,
          // }}
          className="text-center text-base text-secondary md:text-xl"
        >
          Desenvolvedor Front End e UI Designer.
        </h3>
      </div>
      <h3
        // style={{
        //   opacity: `${-position / 2 + 100}% `,
        //   bottom: `${position / 10}px`,
        // }}
        className="w-fit rounded-2xl bg-tertiary px-6 py-2 text-center font-mono text-sm font-bold text-white md:text-base"
      >
        Aperte ctrl + k para linha de comando
      </h3>
    </div>
  );
}
