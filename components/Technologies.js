import { motion } from "framer-motion";
import CliIcon from "../public/technologies-icons/cli-icon.svg";
import NpmIcon from "../public/technologies-icons/npm-icon.svg";
import GitIcon from "../public/technologies-icons/git-icon.svg";
import GithubIcon from "../public/technologies-icons/github-icon.svg";
import HtmlIcon from "../public/technologies-icons/html-icon.svg";
import CssIcon from "../public/technologies-icons/css-icon.svg";
import StyledComponentsIcon from "../public/technologies-icons/styled-components-icon.svg";
import TailwindIcon from "../public/technologies-icons/tailwind-icon.svg";
import JavascriptIcon from "../public/technologies-icons/javascript-icon.svg";
import ReactIcon from "../public/technologies-icons/react-icon.svg";
import NextIcon from "../public/technologies-icons/next-icon.svg";
import FirebaseIcon from "../public/technologies-icons/firebase-icon.svg";
import PrettierIcon from "../public/technologies-icons/prettier-icon.svg";
import EslintIcon from "../public/technologies-icons/eslint-icon.svg";
import FigmaIcon from "../public/technologies-icons/figma-icon.svg";

export default function Technologies() {
  const technologies = {
    "Command Line": <CliIcon />,
    Npm: <NpmIcon />,
    Git: <GitIcon />,
    Github: <GithubIcon />,
    HTML: <HtmlIcon />,
    CSS: <CssIcon />,
    "Styled Components": <StyledComponentsIcon />,
    Tailwind: <TailwindIcon />,
    Javascript: <JavascriptIcon />,
    React: <ReactIcon />,
    Next: <NextIcon />,
    Firebase: <FirebaseIcon />,
    Prettier: <PrettierIcon />,
    ESlint: <EslintIcon />,
    Figma: <FigmaIcon />,
  };

  const positions = [1, 2];

  return (
    <div className="text-secondary">
      <h3 className="mb-10">Tecnologias que tenho usado recentemente:</h3>
      <div className="flex h-36 w-full overflow-hidden">
        {positions.map((key) => {
          return (
            <motion.div
              initial={{ translateX: "-100%" }}
              whileInView={{ translateX: "0%" }}
              transition={{
                repeat: Infinity,
                duration: 35,
                ease: "linear",
                delay: 0.8,
              }}
              className={`mt-4 inline`}
              key={key}
            >
              <div className="flex">
                {Object.keys(technologies).map((key) => {
                  return (
                    <div
                      key={key}
                      className="group mr-10 h-12 w-16 shrink-0 flex-col items-center justify-between grayscale hover:scale-110 hover:grayscale-0"
                    >
                      {technologies[key]}
                      <div className="flex justify-center">
                        <p className="mt-4 hidden w-min rounded-sm bg-tertiary p-1 px-3 text-center text-sm text-white group-hover:block">
                          {key}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
