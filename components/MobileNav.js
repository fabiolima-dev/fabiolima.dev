export default function MobileNav({ sections, opened }) {
  return (
    <div
      className={`${
        opened ? "" : "translate-x-full"
      } fixed top-0 left-0 flex h-screen min-h-[400px] w-screen items-center bg-gray-3 duration-500 ease-in-out md:hidden`}
    >
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
