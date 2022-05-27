import { motion } from "framer-motion";
import reveal from "../../data/reveal";
import SectionTitle from "../SectionTitle";

export default function Contact({ section }) {
  return (
    <section
      ref={section.intersection.ref}
      id={section.id}
      className="flex min-h-screen flex-col justify-evenly pt-16"
    >
      <div className="m-auto flex max-w-md flex-col items-center gap-20">
        <SectionTitle section={section} />
        <motion.p
          initial="initial"
          whileInView="animate"
          custom={3}
          variants={reveal}
          className="text-center text-gray-1"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac magna facilisis, accumsan orci a, vehicula magna. Aliquam laoreet
          orci sed ligula gravida fringilla. Ut non sagittis ante. Ut sed cursus
          tortor. Quisque iaculis sed mauris nec ultrices.
        </motion.p>
        <motion.div
          initial="initial"
          whileInView="animate"
          custom={3}
          variants={reveal}
          className="flex gap-4"
        >
          <a
            className="text-2xl"
            target="_blank"
            href="https://github.com/fabiolima-dev"
          >
            <i className="ri-github-line"></i>
          </a>
          <a
            className="text-2xl"
            target="_blank"
            href="https://www.linkedin.com/in/fabiolimadev/"
          >
            <i className="ri-linkedin-line"></i>
          </a>
          <a
            className="text-2xl"
            target="_blank"
            href="https://twitter.com/FabioLimaDev"
          >
            <i className="ri-twitter-line"></i>
          </a>
          <a
            className="text-2xl"
            target="_blank"
            href="mailto: fabiolima@fabiolima.dev"
          >
            <i className="ri-mail-line"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
