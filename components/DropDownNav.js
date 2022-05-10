import { useState } from "react";

export default function DropDownNav({ sections }) {
  const [open, setOpen] = useState(false);

  function handleClick() {
    open ? setOpen(false) : setOpen(true);
    console.log(open);
  }

  return (
    <>
      <div onClick={handleClick} className="md:hidden">
        <div className="bg-black w-8 h-[2px] rounded mb-[5px]"></div>
        <div className="bg-black w-8 h-[2px] rounded mb-[5px]"></div>
        <div className="bg-black w-8 h-[2px] rounded mb-[5px]"></div>
      </div>
      {open ? <Nav /> : <></>}
    </>
  );
}

function Nav() {
  return <div>sections.</div>;
}
