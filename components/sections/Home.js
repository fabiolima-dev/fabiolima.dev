import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home({ setTitleWidth, titleWidth, section }) {
  const [position, setPosition] = useState(0);
  const titleRef = useRef();

  useEffect(() => {
    function scrollHandler() {
      setPosition(window.pageYOffset);
    }
    window.addEventListener("scroll", scrollHandler);
    console.log(titleRef);
    setTitleWidth(titleRef.current.getBoundingClientRect().width);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div className="flex h-screen grow flex-col items-start">
      <div className="h-16"></div>
      <div className="flex grow flex-col justify-evenly">
        <div className="sticky top-12 flex flex-col items-start justify-evenly md:top-6">
          <h3
            style={{
              opacity: `${-position / 2 + 100}%`,
              bottom: `${position / 10}px`,
            }}
            className="relative text-base text-quaternary md:text-xl"
          >
            👋️ Olá, me chamo
          </h3>
          <div className="md: my-2">
            <AnimatePresence>
              {!section && (
                <motion.h1
                  key="Home title"
                  animate={{
                    background:
                      "linear-gradient(to right, var(--gradient-oceanic-one), var(--gradient-oceanic-two), var(--gradient-oceanic-three))",
                    WebkitBackgroundClip: "text",
                    WebkitTextStrokeColor: "currentcolor",
                    WebkitTextStrokeWidth: 0,
                  }}
                  transition={{ delay: 1.5 }}
                  exit={{ opacity: 0, transition: { duration: 0, delay: 0.3 } }}
                  ref={titleRef}
                  className={`w-max bg-transparent text-5xl font-bold leading-tight [-webkit-text-fill-color:transparent] [-webkit-text-stroke:1px_white] md:text-6xl md:leading-tight`}
                >
                  Fabio Lima.
                </motion.h1>
              )}
            </AnimatePresence>
            <div
              style={{ width: `${titleWidth}px` }}
              className="absolute top-[32px] h-16 md:top-[56px] md:h-20"
            >
              <AnimatePresence>
                {!section && (
                  <motion.div
                    key="Home title box"
                    animate={{
                      width: [
                        "0px",
                        `${titleWidth}px`,
                        `${titleWidth}px`,
                        "0px",
                      ],
                      marginLeft: ["0px", "0px", "0px", "auto"],
                    }}
                    transition={{
                      delay: 1,
                      ease: "easeInOut",
                      duration: 1,
                      times: [0, 0.3, 0.6, 1],
                    }}
                    className="gradient-oceanic relative h-16 rounded-md bg-gradient-to-r md:h-20"
                  ></motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <h3
            style={{
              opacity: `${-position / 2 + 100}%`,
              bottom: `${position / 10}px`,
            }}
            className="relative text-base text-quaternary md:text-xl"
          >
            Front End Developer e UI Designer
          </h3>
        </div>
        <h3
          style={{
            opacity: `${-position / 2 + 100}% `,
            bottom: `${position / 10}px`,
          }}
          className="relative w-fit rounded-2xl bg-gray-3 px-6 py-2 text-center font-mono text-base font-bold text-white md:text-base"
        >
          Aperte ctrl + k para linha de comando
        </h3>
      </div>
    </div>
  );
}
