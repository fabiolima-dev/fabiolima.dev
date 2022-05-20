import { motion, useTransform, useViewportScroll } from "framer-motion";
import SectionTitleWrapper from "../SectionTitleWrapper";

export default function Home({ sections }) {
  const { scrollY } = useViewportScroll();
  const translate = useTransform(scrollY, [0, 100], [0, -25]);
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <div className="h-screen bg-gradient-to-tl from-slate-900 via-black px-5 md:px-20 xs:px-10">
      <div className="m-auto flex h-full max-w-screen-xl flex-col items-center justify-evenly pt-16 sm:items-start">
        <div className="flex flex-col">
          <motion.h3
            style={{ translateY: translate, opacity: opacity }}
            className="text-base text-secondary md:text-xl"
          >
            👋️ Olá, me chamo
          </motion.h3>
          <SectionTitleWrapper scrollY={scrollY} />
          <motion.h3
            style={{ translateY: translate, opacity: opacity }}
            className="text-base text-secondary sm:px-0 md:text-xl"
          >
            Desenvolvedor Front End e UI Designer.
          </motion.h3>
        </div>
        <motion.h3
          style={{ translateY: translate, opacity: opacity }}
          className="mx-8 w-fit rounded-2xl bg-tertiary px-6 py-2 text-center font-mono text-sm font-bold text-white shadow-md sm:mx-0 md:text-base"
        >
          Aperte ctrl + k para linha de comando
        </motion.h3>
      </div>
    </div>
  );
}
