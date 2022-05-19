import HamburgerIcon from "../HamburgerIcon";
import DarkModeIcon from "../DarkModeIcon";

export default function Header({ darkMode, setDarkMode, sections }) {
  return (
    <header className="fixed z-50 flex h-16 w-screen items-center justify-between bg-primary px-5 sm:px-10 md:px-20">
      <h1 className="text-sm text-secondary">LOGO</h1>
      {/* Larger Screens navbar */}
      <nav className="hidden md:block">
        {Object.keys(sections).map((key) => {
          return (
            <a
              key={key}
              href={`./#${sections[key].nav}`}
              className="mx-8 text-xs text-gray-1"
            >
              {sections[key].nav}
            </a>
          );
        })}
      </nav>
      {/* Mobile Hamburger navbar */}
      <div className="flex items-center">
        <DarkModeIcon darkMode={darkMode} setDarkMode={setDarkMode} />
        <HamburgerIcon sections={sections} />
      </div>
    </header>
  );
}
