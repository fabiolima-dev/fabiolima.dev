import { useState } from "react";
import DropDownMenu from "./DropDownMenu";

export default function HamburgerIcon({ sections }) {
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
      {open ? <DropDownMenu sections={sections} /> : <></>}
    </>
  );
}
