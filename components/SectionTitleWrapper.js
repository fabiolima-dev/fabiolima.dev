import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function SectionTitleWrapper({ sections }) {
  const [fixed, setFixed] = useState(false);
  const titleRef = useRef();
  const wrapperRef = useRef();

  useEffect(() => {
    function scrollHandler() {
      if (titleRef.current.getBoundingClientRect().top < 79.9) {
        setFixed(true);
      } else if (wrapperRef.current.getBoundingClientRect().top > 104) {
        setFixed(false);
      }
    }

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div className="my-4 md:my-6">
      <div ref={wrapperRef}></div>
      <div
        ref={titleRef}
        style={{ position: fixed ? "fixed" : "static" }}
        className="top-20 w-fit"
      >
        <SectionTitle />
        <div className="relative h-0 w-full">
          <motion.div
            animate={{
              width: ["0%", `100%`, `100%`, "0%"],
              marginLeft: ["0px", "0px", "auto", "auto"],
            }}
            transition={{
              delay: 1,
              duration: 1,
              times: [0, 0.3, 0.6, 1],
            }}
            className="gradient-oceanic relative bottom-[48px] h-[48px] w-0 rounded-md bg-gradient-to-r md:bottom-[60px] md:h-[60px]"
          ></motion.div>
        </div>
      </div>
    </div>
  );
}
