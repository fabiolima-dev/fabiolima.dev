import { motion } from "framer-motion";
import SectionTitle from "../SectionTitle";

export default function Home({ section, reveal }) {
  const shake = {
    initial: { rotate: 0 },
    animate: (i) => ({
      rotate: [0, 20, 0, 20, 0],
      transition: { type: "tween", delay: i * 0.1 },
    }),
  };

  return (
    <section
      id={section.id}
      className="flex h-screen flex-col items-center justify-evenly pt-16 sm:items-start"
    >
      <motion.div
        initial="initial"
        whileInView="animate"
        custom={0}
        variants={reveal}
        className="flex flex-col"
      >
        <motion.h3
          custom={0}
          variants={reveal}
          className="text-base text-secondary md:text-xl"
        >
          <motion.span
            custom={20}
            variants={shake}
            className="inline-block origin-[90%_90%]"
          >
            👋️
          </motion.span>{" "}
          Olá, me chamo
        </motion.h3>
        <motion.div custom={1} variants={reveal} className="my-4 md:my-6">
          <SectionTitle section={section} />
        </motion.div>
        <motion.h3
          custom={2}
          variants={reveal}
          className="text-base text-secondary md:text-xl"
        >
          Desenvolvedor Front End e UI Designer.
        </motion.h3>
      </motion.div>
      <motion.h3
        initial="initial"
        animate="animate"
        custom={4}
        variants={reveal}
        className="mx-8 w-fit rounded-md bg-tertiary px-6 py-2 text-center font-mono text-sm font-bold text-white hover:drop-shadow-md sm:mx-0 md:text-base"
      >
        Aperte ctrl + k para linha de comando
      </motion.h3>
    </section>
  );
}
