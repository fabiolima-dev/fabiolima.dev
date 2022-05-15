export default function MobileNav({ sections }) {
  return (
    <div className="fixed left-0 top-0 -z-10 flex h-screen min-h-[400px] w-screen items-center bg-gray-3 md:hidden">
      <nav className="flex h-4/5 flex-col justify-evenly">
        {sections.map((item) => {
          return (
            <div className="flex w-screen items-center justify-between px-10">
              <div
                className={`h-12 w-2  rounded-md bg-gradient-to-tr ${item.color}`}
              ></div>
              <a href={item.link} className={"text-lg text-white"}>
                {item.section}
              </a>
            </div>
          );
        })}
      </nav>
    </div>
  );
}
