import { useState, useEffect } from "react";

export default function Home({}) {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setPosition(window.pageYOffset);
    });
  }, []);

  return (
    <div className="flex h-screen grow flex-col items-start">
      <div className="h-16"></div>
      <div className="flex grow flex-col justify-evenly">
        <div className="sticky top-10 flex flex-col items-start justify-evenly  md:top-6">
          <h3
            style={{
              opacity: `${-position / 2 + 100}%`,
              bottom: `${position / 10}px`,
            }}
            className="relative font-mono text-base text-quaternary md:text-2xl"
          >
            👋️ Olá, me chamo
          </h3>
          <div className="w-[90vw]">
            <h1
              className={`relative my-2 w-fit animate-text-fill text-5xl font-bold [-webkit-text-fill-color:transparent] [-webkit-text-stroke:1px_white] md:my-6 md:text-7xl`}
            >
              Fabio Lima.
            </h1>
            <div className="gradient-oceanic relative bottom-14 h-0 w-0 animate-cover rounded-lg bg-gradient-to-r duration-500 ease-in-out md:bottom-[96px] md:h-[72px]"></div>
          </div>
          <h3
            style={{
              opacity: `${-position / 2 + 100}%`,
              bottom: `${position / 10}px`,
            }}
            className="relative font-mono text-base text-quaternary md:text-2xl"
          >
            Front End Developer e UI Designer
          </h3>
        </div>
        <h3
          style={{
            opacity: `${-position / 2 + 100}% `,
            bottom: `${position / 10}px`,
          }}
          className="relative w-fit rounded-2xl bg-gray-2 px-6 py-2 text-center font-mono text-sm font-bold text-white md:text-base"
        >
          Aperte ctrl + k para linha de comando
        </h3>
      </div>
    </div>
  );
}
