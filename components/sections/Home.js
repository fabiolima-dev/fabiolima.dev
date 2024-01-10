import { motion } from "framer-motion";
import reveal from "../../data/reveal";
import SectionTitle from "../SectionTitle";

export default function Home({ section, setShowCommandLine, showCommandLine }) {
  function handleClick(e) {
    setShowCommandLine(!showCommandLine);
  }
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
        <motion.div custom={1} variants={reveal} className="my-2">
          <SectionTitle section={section} />
        </motion.div>
        <motion.h3 custom={2} variants={reveal} className="text-secondary">
          Desenvolvedor de Software
        </motion.h3>
      </motion.div>
      <motion.h3
        onClick={handleClick}
        initial="initial"
        animate="animate"
        custom={4}
        variants={reveal}
        className="absolute bottom-16 left-0 right-0 mx-auto w-fit cursor-pointer rounded-md bg-tertiary px-6 py-2 text-center text-white"
      >
        Aperte <span className="font-bold">ctrl + k</span> para linha de comando
      </motion.h3>
    </section>
  );
}
