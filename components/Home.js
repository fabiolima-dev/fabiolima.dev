export default function Home() {
  return (
    <div className="flex h-screen flex-col">
      <div className="h-20"></div>
      <div className="flex  w-1/2 grow flex-col justify-evenly">
        <div className="flex-col">
          <h3 className="text-4xl text-gray-700">👋️ Olá, eu sou</h3>
          <h1
            className={`my-3 bg-gradient-to-r bg-clip-text text-8xl font-bold text-transparent from-gradients-primary-${darkMode}-start to-gradients-primary-${darkMode}-end`}
          >
            Fabio Lima
          </h1>
          <h3 className="text-4xl text-gray-700">Front End Developer</h3>
        </div>
        <h3 className="text-2xl font-light">
          Aperte ctrl+k para linha de comando
        </h3>
      </div>
    </div>
  );
}
