import { useState } from "react";
import HamburgerIcon from "../HamburgerIcon";
import DarkModeIcon from "../DarkModeIcon";
import MobileNav from "../MobileNav";

export default function Header({ darkMode, setDarkMode, sections }) {
  const [open, setOpen] = useState(false);

  function handleSetOpen() {
    setOpen(!open);
  }

  return (
    <header className="fixed z-50 flex h-16 w-screen items-center justify-between bg-primary px-10 md:px-20">
      <h1 className="text-sm text-secondary">LOGO</h1>
      {/* Larger Screens navbar */}
      <nav className="hidden md:block">
        {Object.keys(sections).map((key) => {
          return (
            <a
              href={`./#${sections[key].nav}`}
              className="mx-8 text-xs text-tertiary"
            >
              {sections[key].nav}
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
