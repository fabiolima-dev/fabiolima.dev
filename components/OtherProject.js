export default function OtherProject({ project }) {
  return (
    <div className="flex w-full flex-col justify-evenly gap-4 rounded-md border-[1px] border-gray-1 p-4">
      <h3 className="font-bold">{project.name}</h3>
      <li className="flex flex-wrap gap-4 text-white">
        {project.technologies.map((technologie, index) => {
          return (
            <ul
              key={index}
              className="w-max rounded-sm bg-tertiary py-[4px] px-2"
            >
              {technologie}
            </ul>
          );
        })}
      </li>
      <div className="flex gap-4">
        <a className="text-xl" target="_blank" href={`${project.github}`}>
          <i className="ri-github-line"></i>
        </a>
        <a className="text-xl" target="_blank" href={`${project.link}`}>
          <i className="ri-link"></i>
        </a>
      </div>
    </div>
  );
}
