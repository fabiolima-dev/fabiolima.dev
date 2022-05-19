import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SectionTitle({ titleWidth, setTitleWidth, section }) {
  const titleRef = useRef();
  const componentRef = useRef();

  useEffect(() => {
    if (section.inView) {
      if (titleRef.current.clientWidth > titleWidth)
        setTitleWidth(titleRef.current.clientWidth);
    }
  }, [section.inView]);
  return (
    <AnimatePresence>
      {section.inView && (
        <motion.div
          animate={{ zIndex: 1 }}
          exit={{
            zIndex: [0, 0, 0],
            opacity: [1, 1, 0],
            transition: { animate: 0.3, time: [0, 1, 1] },
          }}
          ref={componentRef}
          className="fixed top-20"
        >
          <AnimatePresence>
            {section.inView && (
              <motion.h1
                key={section.nav}
                animate={{
                  opacity: 1,
                }}
                transition={{ delay: 0.3, duration: 0 }}
                exit={{ opacity: 0, transition: { delay: 0.3 } }}
                ref={titleRef}
                className={`${section.color} w-max bg-gradient-to-r bg-clip-text text-5xl font-bold leading-tight text-transparent opacity-0 md:text-6xl md:leading-tight`}
              >
                {section.title}
              </motion.h1>
            )}
          </AnimatePresence>
          <div
            style={{ width: `${titleWidth}px` }}
            className="absolute top-[-2px] h-20 md:top-[-2.5px]"
          >
            <AnimatePresence>
              {section.inView && (
                <motion.div
                  key={section.nav}
                  animate={{
                    width: ["0px", `${titleWidth}px`, `${titleWidth}px`, "0px"],
                    marginLeft: ["0px", "0px", "0px", "auto"],
                  }}
                  transition={{
                    ease: "easeInOut",
                    duration: 1,
                    times: [0, 0.3, 0.6, 1],
                  }}
                  className={`${section.color} relative h-16 rounded-md bg-gradient-to-r md:h-20`}
                ></motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
