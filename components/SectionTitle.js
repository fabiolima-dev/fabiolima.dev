import { motion } from "framer-motion";

export default function SectionTitle({ section }) {
  const reveal = {
    animate: {
      width: ["0%", `100%`, `100%`, "0%", "0%"],
      marginLeft: ["0px", "0px", "auto", "auto", "0px"],
      transition: {
        delay: 1,
        duration: 1,
        times: [0, 0.3, 0.6, 1, 1],
      },
    },
  };

  const fill = {
    animate: {
      background: `linear-gradient(to right, var(--${section.color}-one), var(--${section.color}-two), var(--${section.color}-three))`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textShadow: "none",
      transition: {
        delay: 1.5,
      },
    },
  };

  return (
    <div className="w-fit">
      <motion.h1
        whileInView="animate"
        variants={fill}
        className="w-max text-center [-webkit-text-fill-color:var(--color-primary)] [text-shadow:1px_1px_var(--color-secondary),1px_-1px_var(--color-secondary),-1px_1px_var(--color-secondary),-1px_-1px_var(--color-secondary)] md:text-6xl"
      >
        {section.title}
      </motion.h1>
      <div className="relative h-0 w-full">
        <motion.div
          whileInView="animate"
          variants={reveal}
          className={`${section.color} relative bottom-[48px] h-[48px] w-0 rounded-md bg-gradient-to-r md:bottom-[60px] md:h-[60px]`}
        ></motion.div>
      </div>
    </div>
  );
}
