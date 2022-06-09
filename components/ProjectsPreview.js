export default function ProjectsPreview({ project }) {
  return (
    <div className="relative">
      <div className="gradient-hyper absolute -left-10 h-[320px] w-[540px] -rotate-12 -skew-y-6 rounded-lg bg-gradient-to-tr"></div>
      <div className="absolute flex w-[500px] justify-center">
        <img
          className="absolute"
          alt="Foto versão desktop do projeto 1"
          src={`/../../images/${project.desktopImage}`}
          width="85%"
        ></img>
        <img
          className="absolute"
          alt="iPhone Mockup"
          width="100%"
          src="/../../images/ipad-mockup.png"
        ></img>
      </div>
      <div className="absolute top-36 -left-4 w-[100px]">
        <img
          className="absolute"
          alt="Foto versão mobile do projeto 1"
          src={`/../../images/${project.mobileImage}`}
          width="100%"
        ></img>
        <img
          className="absolute"
          alt="iPhone Mockup"
          width="100%"
          src="/../../images/iphone-mockup.png"
        ></img>
      </div>
    </div>
  );
}
