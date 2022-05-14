export default function MobileNav({ sections }) {
  return (
    <div className="fixed -z-10 -mx-10 mt-[-27px] flex h-screen w-screen flex-col items-center justify-center bg-gray-3 md:-mx-20">
      <nav className="flex h-4/5 flex-col items-center justify-evenly text-center">
        {sections.map((section) => {
          return (
            <div className="flex h-20 w-screen items-center justify-between px-10">
              <div className="bg-gradient h-10  w-2 rounded-md hover:left-0 hover:-mx-20 hover:h-20 hover:w-screen hover:rounded-none"></div>
              <a href="#" className={"z-10 text-lg text-white"}>
                {section}
              </a>
            </div>
          );
        })}
      </nav>
    </div>
  );
}
