import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function MobileNav({ sections, open, setOpen }) {
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    function scrollHandler() {
      Object.keys(sections).forEach((key) => {
        const rect =
          sections[key].intersection.entry?.target.getBoundingClientRect();
        const half = window.innerHeight / 2;
        if (rect?.y < half && rect?.bottom > half) {
          setCurrentSection(sections[key].id);
        }
      });
    }
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [sections]);

  return (
    <motion.div className="fixed top-0 right-0 -z-10 flex w-screen md:hidden">
      <div
        onClick={setOpen}
        className={`${open ? "" : "hidden"} h-screen w-screen backdrop-blur-sm`}
      >
        <div className="h-full w-full bg-secondary opacity-5"></div>
      </div>
      <motion.div
        animate={{ translateX: open ? "-100%" : "0%" }}
        transition={{ type: "tween" }}
        className="fixed left-full flex h-screen min-h-[400px] w-3/4 items-center bg-primary"
      >
        <nav className="flex h-3/5 w-full flex-col justify-evenly">
          {Object.keys(sections).map((key) => {
            return (
              <a
                onClick={setOpen}
                href={"#" + sections[key].id}
                key={key}
                className={`${
                  sections[key].id === currentSection
                    ? "bg-quaternary text-secondary"
                    : "text-gray-1"
                } mx-5 flex items-center justify-between rounded-md px-5 py-3 [-webkit-tap-highlight-color:transparent]`}
              >
                <div
                  className={`h-12 w-2 bg-gradient-to-tr ${sections[key].color}`}
                ></div>
                {sections[key].nav}
              </a>
            );
          })}
        </nav>
      </motion.div>
    </motion.div>
  );
}
