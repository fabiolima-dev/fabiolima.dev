import { motion } from "framer-motion";
import reveal from "../../data/reveal";
import SectionTitle from "../SectionTitle";

export default function Home({ section }) {
  const shake = {
    initial: { rotate: 0 },
    animate: (i) => ({
      rotate: [0, 20, 0, 20, 0],
      transition: { type: "tween", delay: i * 0.1 },
    }),
  };

  return (
    <section
      ref={section.intersection.ref}
      id={section.id}
      className="flex h-screen flex-col items-center justify-evenly sm:items-start"
    >
      <motion.div
        initial="initial"
        whileInView="animate"
        custom={0}
        variants={reveal}
        className="mb-36 flex flex-col"
      >
        <motion.h3 custom={0} variants={reveal} className="text-secondary">
          <motion.span
            custom={20}
            variants={shake}
            className="inline-block origin-[90%_90%]"
          >
            👋️
          </motion.span>{" "}
          Olá, me chamo
        </motion.h3>
        <motion.div custom={1} variants={reveal} className="my-2">
          <SectionTitle section={section} />
        </motion.div>
        <motion.h3 custom={2} variants={reveal} className="text-secondary">
          Desenvolvedor Front End
        </motion.h3>
      </motion.div>
      <motion.h3
        initial="initial"
        animate="animate"
        custom={4}
        variants={reveal}
        className="absolute bottom-16 left-0 right-0 mx-auto w-fit rounded-md bg-tertiary px-6 py-2 text-center text-white"
      >
        Aperte <span className="font-bold">ctrl + k</span> para linha de comando
      </motion.h3>
    </section>
  );
}
