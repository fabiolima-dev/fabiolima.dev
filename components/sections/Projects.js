import { useState } from "react";
import SectionTitle from "../SectionTitle";
import FeaturedProject from "../FeaturedProject";
import projects from "../../data/projects";
import OtherProject from "../OtherProject";

export default function Projects({ section }) {
  const [projectOrder, setProjectOrder] = useState(1);

  function handleClick(e) {
    setProjectOrder(e.target.id);
  }

  return (
    <section
      id={section.id}
      className="flex min-h-screen flex-col justify-evenly gap-14 pt-16"
    >
      <SectionTitle section={section} />
      <div className="flex">
        <div className="flex flex-col gap-4 md:pr-20">
          <div className="flex h-10 w-full justify-between bg-tertiary text-gray-1">
            {projects.feature.map((project, index) => {
              return (
                <h3
                  id={index}
                  key={index}
                  onClick={handleClick}
                  className={`${
                    projectOrder === index
                      ? "bg-primary text-secondary"
                      : "bg-tertiary"
                  } relative flex w-full items-center justify-center p-2 text-center hover:bg-primary hover:text-secondary`}
                >
                  {project.name}
                </h3>
              );
            })}
          </div>
          <FeaturedProject project={projects.feature[projectOrder]} />
        </div>

        {/* Projects Preview */}

        <div className="relative hidden w-5/12 shrink-0 md:block">
          <div className="gradient-hyper absolute -left-10 h-[320px] w-[540px] -rotate-12 -skew-y-6 rounded-lg bg-gradient-to-tr"></div>
          <div className="absolute flex w-[500px] justify-center">
            <img
              className="absolute"
              alt="Foto versão desktop do projeto 1"
              src="/../../projeto-1-desktop.png"
              width="85%"
            ></img>
            <img
              className="absolute"
              alt="iPhone Mockup"
              width="100%"
              src="/../../ipad-mockup.png"
            ></img>
          </div>
          <div className="absolute top-36 -left-4 w-[100px]">
            <img
              className="absolute"
              alt="Foto versão mobile do projeto 1"
              src="/../../projeto-1-mobile.png"
              width="100%"
            ></img>
            <img
              className="absolute"
              alt="iPhone Mockup"
              width="100%"
              src="/../../iphone-mockup.png"
            ></img>
          </div>
        </div>
      </div>

      {/* Other Projects */}

      <div className="flex flex-col gap-4">
        <h2>Outros projetos</h2>
        <div className="flex flex-col gap-4 md:flex-row">
          {projects.others.map((project) => {
            return <OtherProject project={project} />;
          })}
        </div>
      </div>
    </section>
  );
}
