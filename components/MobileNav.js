export default function MobileNav({ sections }) {
  return (
    <div className="-mx-10 md:-mx-20 mt-[-27px] bg-black -z-10 fixed w-screen h-screen">
      <nav className="flex flex-col items-center text-center mt-20">
        {sections.map((section) => {
          return (
            <a href="#" className="text-white mt-12 text-xl">
              {section}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
