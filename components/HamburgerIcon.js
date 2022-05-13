export default function HamburgerIcon({ handleClick, opened }) {
  const bars = [];

  for (let i = 0; i < 3; i++) {
    bars.push(
      <div
        className={`${
          opened ? "bg-white" : "bg-secondary"
        } mb-[5px] h-[2px] w-8 rounded`}
        key={i}
      ></div>
    );
  }

  return (
    <div onClick={handleClick} className="md:hidden">
      {bars}
    </div>
  );
}
