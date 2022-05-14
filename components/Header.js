import { useState } from "react";
import HamburgerIcon from "./HamburgerIcon";
import DarkModeIcon from "./DarkModeIcon";
import MobileNav from "./MobileNav";

export default function Header({ handleSetDarkMode, darkMode }) {
  const [open, setOpen] = useState(false);

  const sections = ["HOME", "PROJETOS", "HABILIDADES", "SOBRE", "CONTATO"];

  function handleSetOpen() {
    open ? setOpen(false) : setOpen(true);
  }

  return (
    <>
      <header className="fixed flex h-16 w-screen items-center justify-center border-b-[1px] border-tertiary bg-primary">
        <div className="mx-10 flex w-full justify-between md:mx-20">
          <h1 className="-z-20 text-sm text-secondary">LOGO</h1>
          {/* Larger Screens navbar */}
          <nav className="hidden md:block">
            {sections.map((section) => {
              return (
                <a href="#" className="ml-16 text-sm font-light text-secondary">
                  {section}
                </a>
              );
            })}
          </nav>
          {/* Mobile Hamburger navbar */}
          <HamburgerIcon handleClick={handleSetOpen} opened={open} />
          <DarkModeIcon />
          {open ? <MobileNav sections={sections} /> : <></>}
        </div>
      </header>
    </>
  );
}
