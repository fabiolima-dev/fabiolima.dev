import { useState } from "react";
import { motion } from "framer-motion";
import MobileNav from "./MobileNav";

export default function HamburgerIcon({ darkMode, sections }) {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <div className="z-50 ml-6 w-7 md:hidden">
      <button
        onClick={handleClick}
        className="flex h-4 flex-col items-center justify-between"
      >
        <motion.div
          animate={{ width: open ? 0 : 24, translateY: open ? 5 : 0 }}
          className={`${
            darkMode ? "bg-white" : "bg-secondary"
          } h-[2px] w-6 rounded bg-secondary`}
        ></motion.div>
        <div className="h-[2px] w-6">
          <motion.div
            animate={{ rotate: open ? 45 : 0 }}
            className={`${
              darkMode ? "bg-white" : "bg-secondary"
            } absolute h-[2px] w-6 rounded`}
          ></motion.div>
          <motion.div
            animate={{ rotate: open ? -45 : 0 }}
            className={`${
              darkMode ? "bg-white" : "bg-secondary"
            } absolute h-[2px] w-6 rounded `}
          ></motion.div>
        </div>
        <motion.div
          animate={{ width: open ? 0 : 24, translateY: open ? -5 : 0 }}
          className={`${
            darkMode ? "bg-white" : "bg-secondary"
          } h-[2px] w-6 rounded bg-secondary`}
        ></motion.div>
      </button>
      <MobileNav sections={sections} open={open} setOpen={handleClick} />
    </div>
  );
}
