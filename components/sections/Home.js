import { motion } from "framer-motion";
import reveal from "../../data/reveal";
import SectionTitle from "../SectionTitle";

export default function Home({ section, setShowCommandLine, showCommandLine }) {
  function handleClick(e) {
    setShowCommandLine(!showCommandLine);
    e.stopPropagation();
  }
  return (
    <section
      ref={section.intersection.ref}
      id={section.id}
      className="flex h-screen flex-col items-center justify-evenly sm:items-start"
    >
      <div className="mb-36 flex flex-col">
        <div className="my-2">
          <SectionTitle section={section} />
        </div>
        <motion.h3
          initial="initial"
          whileInView="animate"
          custom={3}
          variants={reveal}
          className="text-bold mb-2 text-secondary"
        >
          Desenvolvedor de Software
        </motion.h3>
        <motion.h3
          initial="initial"
          whileInView="animate"
          custom={3}
          variants={reveal}
          className="text-gray-1"
        >
          Crio aplicações que transformam a vida das pessoas
        </motion.h3>
      </div>
      <motion.h3
        onClick={handleClick}
        initial="initial"
        whileInView="animate"
        custom={3}
        variants={reveal}
        className="absolute bottom-16 left-0 right-0 mx-auto w-fit cursor-pointer rounded-md bg-tertiary px-6 py-2 text-center text-white"
      >
        Aperte <span className="hidden font-bold md:inline">ctrl + k</span> para
        linha de comando
      </motion.h3>
    </section>
  );
}
