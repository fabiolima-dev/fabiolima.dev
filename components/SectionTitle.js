import { motion } from "framer-motion";

export default function SectionTitleWrapper() {
  return (
    <div className="w-fit">
      <motion.h1
        animate={{
          background:
            "linear-gradient(to right, var(--gradient-oceanic-one), var(--gradient-oceanic-two), var(--gradient-oceanic-three))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "none",
        }}
        transition={{ delay: 1.5 }}
        className="w-max text-center text-5xl font-extrabold [-webkit-text-fill-color:var(--color-primary)] [text-shadow:1px_1px_white,1px_-1px_white,-1px_1px_white,-1px_-1px_white] md:text-6xl"
      >
        Fabio Lima.
      </motion.h1>
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
  );
}
