import { useState } from "react";
import SectionTitle from "../SectionTitle";
import FeaturedProject from "../FeaturedProject";
import projects from "../../data/projects";
import OtherProject from "../OtherProject";
import ProjectsPreview from "../ProjectsPreview";

export default function Projects({ section }) {
  const [projectOrder, setProjectOrder] = useState(0);

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
        {/* Featured Projects */}

        <div className="flex flex-col gap-4 md:pr-20">
          <div className="flex h-10 w-full justify-between bg-tertiary text-gray-1">
            {projects.feature.map((project, index) => {
              return (
                <h3
                  id={index}
                  key={index}
                  onClick={handleClick}
                  className={`${
                    projectOrder == index
                      ? "bg-primary text-secondary"
                      : "bg-tertiary"
                  } relative flex w-full items-center justify-center border-x-2 border-primary p-2 text-center hover:bg-primary hover:text-secondary`}
                >
                  {project.name}
                </h3>
              );
            })}
          </div>
          <FeaturedProject project={projects.feature[projectOrder]} />
        </div>
        {/* Projects Preview */}

        <div className="w-5/12 shrink-0">
          <ProjectsPreview project={projects.feature[projectOrder]} />
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
