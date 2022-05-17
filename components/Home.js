import { useState, useEffect, useRef } from "react";

export default function Home({ setTitleHeight }) {
  const [position, setPosition] = useState(0);
  const titleRef = useRef();

  useEffect(() => {
    function scrollHandler() {
      setPosition(window.pageYOffset);
    }

    window.addEventListener("scroll", scrollHandler);

    console.log(titleRef.current.offsetWidth);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
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
          <div className="my-2 flex max-w-fit bg-red-500 md:my-6">
            <h1
              ref={titleRef}
              className={`relative w-fit animate-text-fill text-5xl font-bold md:text-7xl`}
            >
              Fabio Lima.
            </h1>
            <h1 className="absolute max-h-min w-0 max-w-max animate-cover rounded-lg bg-blue-500 bg-gradient-to-r text-5xl font-bold duration-500 ease-in-out md:text-7xl">
              Fabio Lima.
            </h1>
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

// [-webkit-text-fill-color:transparent] [-webkit-text-stroke:1px_white]
