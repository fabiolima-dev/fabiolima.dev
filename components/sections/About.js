import { motion, useTransform, useViewportScroll } from "framer-motion";

export default function About() {
  const { scrollYProgress } = useViewportScroll();
  const translate = useTransform(scrollYProgress, [0, 1], [0, -1000]);

  return (
    <section className="h-screen px-5 md:px-20 xs:px-10">
      <div className="m-auto flex h-full w-full max-w-screen-xl flex-col">
        <motion.div
          style={{ translateY: translate }}
          className="relative -mx-5 flex w-screen flex-col rounded-md bg-tertiary font-mono text-base leading-loose text-white drop-shadow-md md:mx-0 md:w-full xs:-mx-10"
        >
          <div className="flex h-14 w-full items-center border-b-2 border-b-gray-2">
            <div className="ml-3 h-3 w-3 rounded-full bg-[#FF605C]"></div>
            <div className="ml-3 h-3 w-3 rounded-full bg-[#FFBD44]"></div>
            <div className="ml-3 h-3 w-3 rounded-full bg-[#00CA4E]"></div>
          </div>
          <div className="flex w-full grow p-4 md:pr-10">
            <div className="mr-6 hidden w-5 md:block">
              <p className="text-right opacity-50">
                1 2 3 4 5 6 7 8 9 10 11 12 13
              </p>
            </div>
            <div className="flex h-full flex-col">
              <p className="h-fit text-pink-400">
                import{" "}
                <span className="text-white">{`{ about, experience, technologies }`}</span>{" "}
                from <span className="text-yellow-200">"fabio"</span>
                <br></br> export default{" "}
                <span className="text-green-400">Bio</span>
                <span className="text-white">() {`{`}</span>
              </p>
              <div className="flex grow">
                <div className="mr-8 w-0 border-[0.5px] border-white opacity-10"></div>
                <div>
                  <p className="font-sans">
                    Me formei em design gráfico em 2019 e fiz um ano de estágio
                    na área, porem me encontrei na programação meu primeiro
                    contato foi atraves do curso gratuito de Harvard, CS50x, em
                    2020, e no momento que tive meus primeiros desafios e fiz
                    minhas primeiras resoluções através de linhas de código
                    descobri que era realmente o que eu queria desde então venho
                    estudando e aprimorando minhas habilidades através de
                    livros, artigos, e conteúdos na internet
                  </p>
                  <p className="text-pink-400">
                    return <span className="text-white">(</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <h1 className="font-base text-secondary">
          Tecnologias que estou usando recentemente
        </h1>
      </div>
    </section>
  );
}
