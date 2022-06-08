import { motion, useTransform, useViewportScroll } from "framer-motion";
import CliIcon from "./technologies-icons/cli-icon.svg";
import NpmIcon from "./technologies-icons/npm-icon.svg";
import GitIcon from "./technologies-icons/git-icon.svg";
import GithubIcon from "./technologies-icons/github-icon.svg";
import HtmlIcon from "./technologies-icons/html-icon.svg";
import CssIcon from "./technologies-icons/css-icon.svg";
import StyledComponentsIcon from "./technologies-icons/styled-components-icon.svg";
import TailwindIcon from "./technologies-icons/tailwind-icon.svg";
import JavascriptIcon from "./technologies-icons/javascript-icon.svg";
import ReactIcon from "./technologies-icons/react-icon.svg";
import NextIcon from "./technologies-icons/next-icon.svg";
import FirebaseIcon from "./technologies-icons/firebase-icon.svg";
import PrettierIcon from "./technologies-icons/prettier-icon.svg";
import EslintIcon from "./technologies-icons/eslint-icon.svg";
import FigmaIcon from "./technologies-icons/figma-icon.svg";

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
              animate={{ translateX: "-100%" }}
              transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
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
