import DropDownNav from "./DropDownNav";

export default function Header() {
  const sections = ["HOME", "PROJETOS", "HABILIDADES", "CONTATO"];

  return (
    <header className="bg-white fixed w-screen h-20 border-b-2 flex items-center justify-center">
      <div className="w-full max-w-screen-xl flex justify-between mx-10 md:mx-20">
        <h1>LOGO</h1>
        {/* Larger Screens navbar */}
        <nav className="hidden md:block">
          {sections.map((section) => {
            return (
              <a href="#" className="ml-20 text-base">
                {section}
              </a>
            );
          })}
        </nav>
        {/* Mobile Hamburger navbar */}
        <DropDownNav sections={sections} />
      </div>
    </header>
  );
}
