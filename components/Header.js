export default function Header() {
  return (
    <header className="bg-white fixed w-screen h-20 border-b-2 flex align-middle">
      <div className="w-full max-w-screen-xl m-auto flex justify-between align-middle">
        <h1>LOGO</h1>
        <div className="flex justify-between">
          <a className="ml-20 text-base">HOME</a>
          <a className="ml-20 text-base">PROJETOS</a>
          <a className="ml-20 text-base">HABILIDADES</a>
          <a className="ml-20 text-base">CONTATO</a>
        </div>
      </div>
    </header>
  );
}
