import SectionTitle from "../SectionTitle";

export default function Projects({ section }) {
  return (
    <section
      id={section.id}
      className="flex min-h-screen flex-col justify-evenly gap-14 pt-16"
    >
      <SectionTitle section={section} />
      <div className="flex">
        <div className="flex flex-col gap-4 md:pr-20">
          <div className="flex gap-8 text-gray-1">
            <h3 className="text-white">Fleet Webapp</h3>
            <h3>Título 2</h3>
            <h3>Título 3</h3>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h2>Fleet Webapp</h2>
              <h3>2022</h3>
            </div>
            <li className="flex gap-8">
              <ul>
                <i className="ri-checkbox-line"></i> Design
              </ul>
              <ul className="text-gray-1">
                <i className="ri-checkbox-blank-line"></i> Desenvolvimento
              </ul>
            </li>
            <p className="text-gray-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse ac magna facilisis, accumsan orci a, vehicula magna.
              Aliquam laoreet orci sed ligula gravida fringilla. Ut non sagittis
              ante. Ut sed cursus tortor. Quisque iaculis sed mauris nec
              ultrices.{" "}
            </p>
            <li className="flex flex-wrap gap-4 text-white">
              <ul className="rounded-sm bg-tertiary py-[4px] px-2">React</ul>
              <ul className="rounded-md bg-tertiary py-[4px] px-2">
                Styled Components
              </ul>
              <ul className="rounded-sm bg-tertiary py-[4px] px-2">Firebase</ul>
            </li>
            <div className="flex gap-8 text-3xl">
              <i className="ri-github-line"></i>
              <i className="ri-link"></i>
            </div>
          </div>
        </div>

        {/* Preview div */}

        <div className="relative hidden w-5/12 shrink-0 md:block">
          <div className="gradient-hyper absolute bottom-0 h-[400px] w-[600px] -rotate-12 rounded-lg bg-gradient-to-tr"></div>
          <div className="absolute left-10 -top-10 flex w-[500px] justify-center">
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
          <div className="absolute h-[500px] w-[100px]">
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
      <div className="flex flex-col gap-4">
        <h2>Outros projetos</h2>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex w-full flex-col justify-evenly gap-4 rounded-md border-[1px] border-quaternary p-4">
            <h3 className="font-bold">Calculadora Javascript</h3>
            <li className="flex flex-wrap gap-4 text-white">
              <ul className="rounded-sm bg-tertiary py-[4px] px-2">React</ul>
              <ul className="rounded-md bg-tertiary py-[4px] px-2">
                Styled Components
              </ul>
              <ul className="rounded-sm bg-tertiary py-[4px] px-2">Firebase</ul>
            </li>
            <div className="flex gap-4 text-xl">
              <i className="ri-github-line"></i>
              <i className="ri-link"></i>
            </div>
          </div>
          <div className="flex w-full flex-col justify-evenly gap-4 rounded-md border-[1px] border-quaternary p-4">
            <h3 className="font-bold">Restaurante</h3>
            <li className="flex flex-wrap gap-4 text-white">
              <ul className="rounded-sm bg-tertiary py-[4px] px-2">React</ul>
              <ul className="rounded-md bg-tertiary py-[4px] px-2">
                Styled Components
              </ul>
              <ul className="rounded-sm bg-tertiary py-[4px] px-2">Firebase</ul>
            </li>
            <div className="flex gap-4 text-xl">
              <i className="ri-github-line"></i>
              <i className="ri-link"></i>
            </div>
          </div>
          <div className="flex w-full flex-col justify-evenly gap-4 rounded-md border-[1px] border-quaternary p-4">
            <h3 className="font-bold">Título</h3>
            <li className="flex flex-wrap gap-4 text-white">
              <ul className="rounded-sm bg-tertiary py-[4px] px-2">React</ul>
              <ul className="rounded-md bg-tertiary py-[4px] px-2">
                Styled Components
              </ul>
              <ul className="rounded-sm bg-tertiary py-[4px] px-2">Firebase</ul>
            </li>
            <div className="flex gap-4 text-xl">
              <i className="ri-github-line"></i>
              <i className="ri-link"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
