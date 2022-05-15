export default function HamburgerIcon({ handleClick, opened }) {
  return (
    <div
      onClick={handleClick}
      className="flex h-4 flex-col items-center justify-between md:hidden"
    >
      <div
        className={`${
          opened ? "w-0" : "w-6"
        } h-[2px] rounded bg-secondary duration-500 ease-in-out`}
      ></div>
      <div className="h-[2px] w-6">
        <div
          className={`${
            opened ? "rotate-45 bg-white" : "bg-secondary"
          } absolute h-[2px] w-6 rounded duration-500 ease-in-out`}
        ></div>
        <div
          className={`${
            opened ? "-rotate-45 bg-white" : "bg-secondary"
          } absolute h-[2px] w-6 rounded duration-500 ease-in-out `}
        ></div>
      </div>
      <div
        className={`${
          opened ? "w-0" : "w-6"
        } h-[2px] rounded bg-secondary duration-500 ease-in-out`}
      ></div>
    </div>
  );
}
