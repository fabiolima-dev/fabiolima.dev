import { motion } from "framer-motion";

export default function MobileNav({ sections, open }) {
  return (
    <motion.div
      className={`fixed top-0 right-0 -z-10 flex w-screen opacity-100 md:hidden`}
    >
      <div
        className={`${open ? "" : "hidden"} h-screen w-screen backdrop-blur-sm`}
      ></div>
      <motion.div
        animate={{ translateX: open ? "-100%" : "0%" }}
        transition={{ type: "tween" }}
        className="fixed left-full flex h-screen min-h-[400px] w-3/4 items-center bg-tertiary"
      >
        <nav className="flex h-4/5 w-full flex-col justify-evenly">
          {Object.keys(sections).map((key) => {
            return (
              <div
                key={key}
                className="flex w-full items-center justify-between px-5 xs:px-10"
              >
                <div
                  className={`h-12 w-2 rounded-md bg-gradient-to-tr ${sections[key].color}`}
                ></div>
                <a
                  href={"#" + sections[key].nav}
                  className={"text-sm text-white"}
                >
                  {sections[key].nav}
                </a>
              </div>
            );
          })}
        </nav>
      </motion.div>
    </motion.div>
  );
}
