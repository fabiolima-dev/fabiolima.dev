import { useState } from "react";
import HamburgerIcon from "./HamburgerIcon";
import MobileNav from "./MobileNav";

export default function Header({ handleSetDarkMode, darkMode }) {
  const [open, setOpen] = useState(false);

  const sections = ["HOME", "PROJETOS", "HABILIDADES", "SOBRE", "CONTATO"];

  function handleSetOpen() {
    open ? setOpen(false) : setOpen(true);
  }

  return (
    <>
      <header className="dark-theme fixed flex h-20 w-screen items-center justify-center border-b-2 bg-primary">
        <div className="mx-10 flex w-full max-w-screen-xl justify-between md:mx-20">
          <h1 className="-z-20 text-secondary">LOGO</h1>
          {/* Larger Screens navbar */}
          <nav className="hidden md:block">
            {sections.map((section) => {
              return (
                <a href="#" className="ml-20 text-base text-secondary">
                  {section}
                </a>
              );
            })}
          </nav>
          {/* Mobile Hamburger navbar */}
          <HamburgerIcon handleClick={handleSetOpen} opened={open} />
          {open ? <MobileNav sections={sections} /> : <></>}
        </div>
      </header>
    </>
  );
}
