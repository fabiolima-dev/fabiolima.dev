export default function HamburgerIcon({ handleClick, primary }) {
  return (
    <div onClick={handleClick} className="md:hidden">
      <div
        className={`${
          primary ? "bg-white" : "bg-black"
        } w-8 h-[2px] rounded mb-[5px]`}
      ></div>
      <div
        className={`${
          primary ? "bg-white" : "bg-black"
        } w-8 h-[2px] rounded mb-[5px]`}
      ></div>
      <div
        className={`${
          primary ? "bg-white" : "bg-black"
        } w-8 h-[2px] rounded mb-[5px]`}
      ></div>
    </div>
  );
}
