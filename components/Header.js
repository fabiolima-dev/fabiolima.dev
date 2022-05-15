import { useState } from "react";
import HamburgerIcon from "./HamburgerIcon";
import DarkModeIcon from "./DarkModeIcon";
import MobileNav from "./MobileNav";

export default function Header({ darkMode, setDarkMode, sections }) {
  const [open, setOpen] = useState(false);

  function handleSetOpen() {
    open ? setOpen(false) : setOpen(true);
  }

  return (
    <header className="fixed flex h-16 w-screen items-center justify-between border-b-[1px] border-tertiary bg-primary px-10 md:px-20">
      <h1 className="text-sm text-secondary">LOGO</h1>
      {/* Larger Screens navbar */}
      <nav className="hidden md:mx-12 md:flex md:w-[576px] md:max-w-xl md:justify-between">
        {sections.map((item) => {
          return (
            <a
              href={item.link}
              className="mx-2 text-sm font-light text-secondary"
            >
              {item.section}
            </a>
          );
        })}
      </nav>
      {/* Mobile Hamburger navbar */}
      <div className="flex w-24 items-center justify-between md:w-auto">
        <DarkModeIcon darkMode={darkMode} setDarkMode={setDarkMode} />
        <HamburgerIcon handleClick={handleSetOpen} opened={open} />
      </div>
      <MobileNav sections={sections} opened={open} />
    </header>
  );
}
