export default function HamburgerIcon({ handleClick, opened }) {
  return (
    <div
      onClick={handleClick}
      className={`${
        opened ? "justify-center" : "justify-between"
      } flex flex-col items-center md:hidden`}
    >
      <div
        className={`${
          opened ? "w-0" : "bg-secondary"
        } h-[2px] w-8 rounded duration-500 ease-in-out`}
      ></div>
      <div className="h-[2px] w-8">
        <div
          className={`${
            opened ? "rotate-45 bg-white" : "bg-secondary"
          } absolute h-[2px] w-8 rounded duration-500 ease-in-out`}
        ></div>
        <div
          className={`${
            opened ? "-rotate-45 bg-white" : "bg-secondary"
          } absolute h-[2px] w-8 rounded duration-500 ease-in-out `}
        ></div>
      </div>
      <div
        className={`${
          opened ? "w-0" : "bg-secondary"
        } h-[2px] w-8 rounded duration-500 ease-in-out`}
      ></div>
    </div>
  );
}
