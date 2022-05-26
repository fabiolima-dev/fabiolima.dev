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
          className="flex gap-4 text-2xl"
        >
          <i className="ri-github-line"></i>
          <i className="ri-linkedin-line"></i>
          <i className="ri-twitter-line"></i>
          <i className="ri-mail-line"></i>
        </motion.div>
      </div>
    </section>
  );
}
