export default function MobileNav({ sections }) {
  return (
    <div className="fixed -z-10 -mx-10 mt-[-27px] flex h-screen w-screen flex-col items-center justify-center bg-gray md:-mx-20">
      <nav className="flex flex-col items-center text-center">
        {sections.map((section, index) => {
          return (
            <a
              href="#"
              className={`text-2xl text-white ${index === 0 ? "" : "mt-16"}`}
            >
              {section}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
