import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SectionTitle({ section }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        width: ["0%", `100%`, `100%`, "0%", "0%"],
        marginLeft: ["0px", "0px", "auto", "auto", "0px"],
        transition: {
          delay: 0.5,
          times: [0, 0.3, 0.6, 1, 1],
        },
      });
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className="w-fit">
      <h1
        className={`${
          inView
            ? `${section.color} bg-gradient-to-r bg-clip-text text-transparent delay-1000`
            : "drop-shadow-secondary text-primary [text-shadow:-1px_-1px_0_var(--color-secondary),1px_-1px_0_var(--color-secondary),-1px_1px_0_var(--color-secondary),1px_1px_0_var(--color-secondary)]"
        } w-max text-center leading-normal`}
      >
        {section.title}
      </h1>
      <div className="relative h-0 w-full">
        <motion.div
          initial={{ width: "0%", marginLeft: "0px" }}
          animate={controls}
          className={`${section.color} relative bottom-[72px] h-[65px] rounded-md bg-gradient-to-r`}
        ></motion.div>
      </div>
    </div>
  );
}
