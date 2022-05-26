import FabioLogo from "../../public/fabio-logo.svg";
import HamburgerIcon from "../HamburgerIcon";
import DarkModeIcon from "../DarkModeIcon";

export default function Header({ darkMode, setDarkMode, sections }) {
  return (
    <header className="fixed z-50 flex h-16 w-screen items-center justify-between bg-primary px-5 xs:px-10 md:px-20">
      <div className="h-6 w-6">
        <FabioLogo />
      </div>
      {/* Larger Screens navbar */}
      <nav className="hidden md:flex">
        {Object.keys(sections).map((key) => {
          return (
            <a
              key={key}
              href={`./#${sections[key].id}`}
              className={`${
                sections[key].intersection.inView
                  ? "bg-tertiary text-white"
                  : "text-gray-1"
              } flex items-center gap-4 rounded-md px-6 py-2 hover:bg-tertiary hover:text-secondary`}
            >
              <div
                className={`h-5 w-1 bg-gradient-to-tr ${sections[key].color}`}
              ></div>
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
