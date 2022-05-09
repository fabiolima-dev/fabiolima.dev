export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="h-20"></div>
      <div className="grow  w-1/2 flex flex-col justify-evenly">
        <div className="flex-col">
          <h3 className="text-gray-700 text-4xl">👋️ Olá, eu sou</h3>
          <h1 className="text-8xl font-bold my-3 text-transparent bg-clip-text bg-gradient-to-r from-gradient1-start to-gradient1-end">
            Fabio Lima
          </h1>
          <h3 className="text-gray-700 text-4xl">Front End Developer</h3>
        </div>
        <h3 className="text-2xl font-light">
          Aperte ctrl+k para linha de comando
        </h3>
      </div>
    </div>
  );
}
