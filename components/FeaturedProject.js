export default function FeaturedProject({ project }) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2>{project.name}</h2>
        <h3 className="w-full">{project.year}</h3>
      </div>
      <li className="flex gap-8">
        {project.development ? (
          <ul className="flex items-center gap-2">
            <i className="ri-checkbox-line"></i> Desenvolvimento
          </ul>
        ) : (
          <ul className="flex items-center gap-2 text-gray-1">
            <i className="ri-checkbox-blank-line"></i> Desenvolvimento
          </ul>
        )}
        {project.design ? (
          <ul className="flex items-center gap-2">
            <i className="ri-checkbox-line"></i> Design
          </ul>
        ) : (
          <ul className="flex items-center gap-2 text-gray-1">
            <i className="ri-checkbox-blank-line"></i> Design
          </ul>
        )}
      </li>
      <p className="text-gray-1">{project.description}</p>
      <li className="flex flex-wrap gap-4 text-white">
        {project.technologies.map((technologie) => {
          return (
            <ul className="rounded-sm bg-tertiary py-[4px] px-2">
              {technologie}
            </ul>
          );
        })}
      </li>
      <div className="flex gap-8 ">
        <a className="text-3xl" target="_blank" href={`${project.github}`}>
          <i className="ri-github-line"></i>
        </a>
        <a className="text-3xl" target="_blank" href={`${project.link}`}>
          <i className="ri-link"></i>
        </a>
      </div>
    </div>
  );
}
