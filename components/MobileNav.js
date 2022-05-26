import { motion } from "framer-motion";

export default function MobileNav({ sections, open, setOpen }) {
  return (
    <motion.div className="fixed top-0 right-0 -z-10 flex w-screen opacity-100 md:hidden">
      <div
        onClick={setOpen}
        className={`${open ? "" : "hidden"} h-screen w-screen backdrop-blur-sm`}
      ></div>
      <motion.div
        animate={{ translateX: open ? "-100%" : "0%" }}
        transition={{ type: "tween" }}
        className="fixed left-full flex h-screen min-h-[400px] w-3/4 items-center bg-tertiary"
      >
        <nav className="flex h-3/5 w-full flex-col justify-evenly">
          {Object.keys(sections).map((key) => {
            return (
              <a
                onClick={setOpen}
                href={"#" + sections[key].id}
                key={key}
                className={`${
                  sections[key].intersection.inView
                    ? "bg-primary text-secondary"
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
