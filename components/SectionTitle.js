import { motion, AnimatePresence } from "framer-motion";

export default function SectionTitle({ view, titleWidth, section }) {
  function renderSection() {
    if (view) {
      return (
        <div className="fixed top-20">
          <AnimatePresence>
            {view && (
              <motion.h1
                key={section.name}
                animate={{
                  opacity: 1,
                }}
                transition={{ delay: 0.3, duration: 0 }}
                exit={{ opacity: 0, transition: { delay: 0.3 } }}
                className={`gradient-hyper w-max bg-gradient-to-r bg-clip-text text-5xl font-bold leading-tight text-transparent opacity-0 md:text-6xl md:leading-tight`}
              >
                {section.name}
              </motion.h1>
            )}
          </AnimatePresence>
          <div
            style={{ width: `${titleWidth}px` }}
            className="absolute top-[-2px] h-20 md:top-[-2.5px]"
          >
            <AnimatePresence>
              {view && (
                <motion.div
                  key="Home title box"
                  animate={{
                    width: ["0px", `${titleWidth}px`, `${titleWidth}px`, "0px"],
                    marginLeft: ["0px", "0px", "0px", "auto"],
                  }}
                  transition={{
                    ease: "easeInOut",
                    duration: 1,
                    times: [0, 0.3, 0.6, 1],
                  }}
                  className="gradient-hyper relative h-16 rounded-md bg-gradient-to-r md:h-20"
                ></motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  }
  return <div className="h-[50vh]">{renderSection()}</div>;
}
