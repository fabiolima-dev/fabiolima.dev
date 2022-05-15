export default function Home({}) {
  return (
    <div className="flex h-screen flex-col">
      <div className="h-16"></div>
      <div className="flex grow flex-col items-center justify-evenly md:items-start">
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-center font-mono text-2xl text-quaternary">
            👋️ Olá, me chamo
          </h3>
          <h1
            className={`my-6 w-min animate-gradient text-center text-7xl font-bold [-webkit-text-fill-color:transparent] [-webkit-text-stroke:1px_white] md:w-max`}
          >
            Fabio Lima.
            <div className="gradient-oceanic relative bottom-full h-full w-0 animate-reveal rounded-lg bg-gradient-to-r duration-500 ease-in-out"></div>
          </h1>
          <h3 className="text-center font-mono text-2xl text-quaternary">
            Front End Developer e UI Designer
          </h3>
        </div>
        <h3 className="w-fit rounded-2xl bg-gray-2 px-6 py-2 text-center font-mono text-base font-bold text-white">
          Aperte ctrl + k para linha de comando
        </h3>
      </div>
    </div>
  );
}

// "gradient-oceanic my-6 w-min bg-gradient-to-r bg-clip-text text-center text-7xl font-bold text-transparent md:w-max"
