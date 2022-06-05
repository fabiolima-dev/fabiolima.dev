import { motion } from "framer-motion";
import reveal from "../../data/reveal";
import SectionTitle from "../SectionTitle";
import Technologies from "../Technologies";

export default function About({ section }) {
  return (
    <section
      ref={section.intersection.ref}
      id={section.id}
      className="flex min-h-screen flex-col justify-evenly gap-10 pt-16"
    >
      <SectionTitle section={section} />
      <motion.p
        initial="initial"
        whileInView="animate"
        custom={3}
        variants={reveal}
        className="leading-loose text-gray-1"
      >
        Olá, meu nome é{" "}
        <span className="text-secondary">Fabio Henrique de Lima</span>, sou
        Desenvolvedor Front End, atualmente morando em Louveira - SP.<br></br>
        <br></br> Meu interesse por desenvolvimento web se iniciou em 2017,
        durante minha graduaçāo em Design Gráfico, onde desenvolvemos um projeto
        em HTML e CSS. Após concluir a faculdade e estagiar durante um ano na
        área, percebi que não era realmente o que eu queria e buscando por outra
        área, dessa vez, que envolvesse mais{" "}
        <span className="text-secondary">raciocínio lógico</span>, encontrei o{" "}
        <a
          href="https://cs50.harvard.edu/x/2022/"
          target="_blank"
          className="text-base text-secondary underline"
        >
          CS50x
        </a>
        , um curso da universidade de Harvard, introdutório a ciência da
        computação que é disponibilizado gratuitamente. A partir do momento que
        fiz minhas primeiras{" "}
        <span className="text-secondary">
          resoluções de problemas através de linhas de código
        </span>
        , tive a certeza que tinha me encontrado. <br></br>
        <br></br>Desde então, venho estudando e aprimorando minhas habilidades
        por meio de{" "}
        <span className="text-secondary">
          livros, artigos e conteúdos na internet
        </span>
        , além de buscar automatizar e facilitar através da programaçāo, toda
        tarefa possível no meu trabalho atual.
      </motion.p>
      <motion.button
        initial="initial"
        whileInView="animate"
        custom={3}
        variants={reveal}
        className="h-12 w-40 rounded-sm bg-tertiary text-white"
      >
        Baixar resumo
      </motion.button>
      <motion.div
        initial="initial"
        whileInView="animate"
        custom={3}
        variants={reveal}
      >
        <Technologies />
      </motion.div>
    </section>
  );
}
