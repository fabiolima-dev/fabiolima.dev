import { useState } from "react";
import HamburgerIcon from "./HamburgerIcon";
import MobileNav from "./MobileNav";

export default function Header() {
  const [open, setOpen] = useState(false);

  const sections = ["HOME", "PROJETOS", "HABILIDADES", "CONTATO"];

  function handleClick() {
    open ? setOpen(false) : setOpen(true);
  }

  return (
    <>
      <header className="bg-white fixed w-screen h-20 border-b-2 flex items-center justify-center">
        <div className="w-full max-w-screen-xl flex justify-between mx-10 md:mx-20">
          <h1 className="-z-20">LOGO</h1>
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
          <HamburgerIcon handleClick={handleClick} primary={open} />
          {open ? <MobileNav sections={sections} /> : <></>}
        </div>
      </header>
    </>
  );
}
