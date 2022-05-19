import { motion } from "framer-motion";

export default function SectionTitle() {
  return (
    <motion.h1
      animate={{
        background:
          "linear-gradient(to right, var(--gradient-oceanic-one), var(--gradient-oceanic-two), var(--gradient-oceanic-three))",
        WebkitBackgroundClip: "text",
        WebkitTextStrokeColor: "currentcolor",
        WebkitTextStrokeWidth: 0,
      }}
      transition={{ delay: 1.5 }}
      className="w-max text-center text-5xl font-extrabold [-webkit-text-fill-color:transparent] [-webkit-text-stroke:1px_white] md:text-6xl"
    >
      Fabio Lima.
    </motion.h1>
  );
}
