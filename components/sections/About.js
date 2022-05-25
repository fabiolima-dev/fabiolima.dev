import { motion } from "framer-motion";
import SectionTitle from "../SectionTitle";
import Technologies from "../Technologies";

export default function About({ section, reveal }) {
  return (
    <section
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
        <span className="text-secondary">Fabio Henrique de Lima.</span> Sou de
        Louveira-SP. <br></br>
        <br></br>
        Meu primeiro contato com a programação foi em 2020, através de um curso
        online gratuito de Harvard, CS50x. Nos desafios iniciais e primeiras
        resoluções através das linhas de código, percebi que gostaria de seguir
        na área da programação. <br></br>
        <br></br>Desde então, venho estudando e aprimorando minhas habilidades
        por meio de livros, artigos e conteúdos na internet. Por ser graduado em
        Design Gráfico, ter familiaridade e facilidade com a criação de
        interfaces, voltei meu aprendizado e capacitação para as tecnologias de
        front end. Contudo, tenho muita curiosidade, vontade de aprender coisas
        novas e me manter atualizado de novas tecnologias. Deste modo, também me
        interesso em tecnologias de backend.
      </motion.p>
      <motion.button className="h-12 w-40 rounded-sm bg-tertiary text-white">
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
