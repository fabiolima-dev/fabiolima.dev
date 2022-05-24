import { motion, useTransform, useViewportScroll } from "framer-motion";
import Technologies from "../Technologies";

export default function About() {
  const { scrollYProgress } = useViewportScroll();
  const translateAbout = useTransform(
    scrollYProgress,
    [0, 0.2, 0.7, 1],
    ["0vh", "-40vh", "-40vh", "-70vh"]
  );

  return (
    <section className="px-5 xs:px-10 md:px-20">
      <div className="m-auto flex max-w-screen-xl flex-col">
        <motion.div
          style={{ translateY: translateAbout }}
          className="relative -mx-5 flex w-screen flex-col rounded-md bg-tertiary font-mono text-base leading-loose text-white drop-shadow-md xs:-mx-10 md:mx-0 md:w-full"
        >
          <div className="border-b-seconary flex h-14 w-full items-center border-b-quaternary px-5">
            <div className="ml-3 h-3 w-3 rounded-full bg-[#FF605C]"></div>
            <div className="ml-3 h-3 w-3 rounded-full bg-[#FFBD44]"></div>
            <div className="ml-3 h-3 w-3 rounded-full bg-[#00CA4E]"></div>
          </div>
          <div className="flex p-5 md:pr-10">
            <div className="mr-6 hidden w-5 md:block">
              <p className="text-right opacity-50">
                1 2 3 4 5 6 7 8 9 10 11 12 13
              </p>
            </div>
            <div className="flex h-full flex-col">
              <p className="text-pink-400">
                import{" "}
                <span className="text-white">{`{ about, experience, technologies }`}</span>{" "}
                from <span className="text-yellow-200">"fabio"</span>
              </p>
              <p>
                export default <span className="text-green-400">Bio</span>
                <span className="text-white">() {`{`}</span>
              </p>
              <div className="flex">
                <div className="flex flex-col">
                  <div className="h-full w-0 border-[0.5px] border-white opacity-10"></div>
                  <p>}</p>
                </div>
                <div className="ml-6">
                  <p className="font-sans">
                    Me formei em design gráfico em 2019 e fiz um ano de estágio
                    na área, porem me encontrei na programação meu primeiro
                    contato foi atraves do curso gratuito de Harvard, CS50x, em
                    2020, e no momento que tive meus primeiros desafios e fiz
                    minhas primeiras resoluções através de linhas de código
                    descobri que era realmente o que eu queria desde então venho
                    estudando e aprimorando minhas habilidades através de
                    livros, artigos, e conteúdos na internet.
                  </p>
                  <p className="text-pink-400">return (</p>
                  <div className="flex">
                    <div className="flex flex-col">
                      <div className="h-full w-0 border-[0.5px] border-white opacity-10"></div>
                      <p className="text-pink-400">);</p>
                    </div>
                    <div className="ml-6 flex flex-col">
                      <p className="text-pink-400">
                        const{" "}
                        <span className="text-purple-300">thingsThatILike</span>{" "}
                        = {`{`}
                      </p>
                      <div className="flex">
                        <div className="flex flex-col">
                          <div className="h-full w-0 border-[0.5px] border-white opacity-10"></div>
                          <p>}</p>
                        </div>
                        <div className="ml-6 flex flex-col">
                          <p>
                            programming:{" "}
                            <span className="text-blue-200">[</span>
                            <span className="text-yellow-200">
                              "typing"<span className="text-white">, </span>
                              "color themes"
                              <span className="text-blue-200">]</span>
                              <span className="text-white">,</span>
                            </span>
                          </p>
                          <p>
                            hobbies: <span className="text-blue-200">[</span>
                            <span className="text-yellow-200">
                              "games"<span className="text-white">, </span>
                              "movies"
                              <span className="text-blue-200">]</span>
                              <span className="text-white">,</span>
                            </span>
                          </p>
                          <br></br>
                        </div>
                      </div>
                      <br></br>
                    </div>
                  </div>
                  <br></br>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <Technologies />
      </div>
    </section>
  );
}
