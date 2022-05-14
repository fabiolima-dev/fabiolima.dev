export default function Home({ darkMode }) {
  return (
    <div className="flex h-screen flex-col bg-primary">
      <div className="h-20"></div>
      <div className="flex grow flex-col justify-evenly">
        <div className="flex h-60 flex-col justify-between">
          <h3 className="w-fit text-center font-mono text-4xl font-light text-quaternary">
            👋️ Olá, me chamo
          </h3>
          <h1
            className={
              "gradient-sunset w-fit bg-gradient-to-r bg-clip-text text-center text-8xl font-bold text-transparent"
            }
          >
            Fabio Lima.
          </h1>
          <h3 className="w-fit text-center font-mono text-4xl font-light text-quaternary">
            Front End Developer
          </h3>
        </div>
        <h3 className="font-mono text-2xl text-quaternary">
          Aperte ctrl+k para linha de comando
        </h3>
      </div>
    </div>
  );
}
