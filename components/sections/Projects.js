import { motion } from "framer-motion";
import reveal from "../../data/reveal";
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
      ref={section.intersection.ref}
      id={section.id}
      className="flex min-h-screen flex-col justify-evenly gap-14 pt-16"
    >
      <SectionTitle section={section} />
      <div className="flex">
        {/* Featured Projects */}

        <div className="flex flex-col gap-12 md:pr-20">
          <motion.div
            initial="initial"
            whileInView="animate"
            custom={3}
            variants={reveal}
            className="flex h-10 w-full justify-between bg-tertiary text-gray-1"
          >
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
          </motion.div>
          <motion.div
            initial="initial"
            whileInView="animate"
            custom={3}
            variants={reveal}
          >
            <FeaturedProject project={projects.feature[projectOrder]} />
          </motion.div>
        </div>
        {/* Projects Preview */}

        <motion.div
          initial="initial"
          whileInView="animate"
          custom={3}
          variants={reveal}
          className="hidden w-5/12 shrink-0 xl:block"
        >
          <ProjectsPreview project={projects.feature[projectOrder]} />
        </motion.div>
      </div>
      {/* Other Projects */}

      <motion.div
        initial="initial"
        whileInView="animate"
        custom={3}
        variants={reveal}
        className="flex flex-col gap-4"
      >
        <h2>Outros projetos</h2>
        <div className="flex flex-col gap-4 md:flex-row">
          {projects.others.map((project) => {
            return <OtherProject project={project} />;
          })}
        </div>
      </motion.div>
    </section>
  );
}
