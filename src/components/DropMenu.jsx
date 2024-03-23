import React, { useState } from "react";
import MenuItem from "./MenuItem";
import { MdMenu, MdClose } from "react-icons/md";

const DropMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="">
      {!isOpen && (
        <div
          onClick={openMenu}
          className="flex cursor-pointer select-none flex-row items-center justify-center gap-2 rounded-xl bg-white bg-opacity-0  p-3 text-white transition-all hover:bg-opacity-25"
        >
          <MdMenu className="h-8 w-8" />
          <p type="button" className="" id="menu-button">
            Menu
          </p>
        </div>
      )}

      {isOpen && (
        <div
          className="absolute left-0 top-0 h-screen w-[20%] translate-x-0 transform bg-black bg-opacity-60 text-white duration-500 ease-out"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="flex flex-row items-center justify-between pb-4 pr-5 pt-4">
            <div
              onClick={closeMenu}
              className="cursor-pointer select-none rounded-xl bg-white bg-opacity-0 p-4 text-white transition-all hover:bg-opacity-25"
            >
              <MdClose className="h-8 w-8" />
            </div>
          </div>
          <MenuItem name="Home" path="/" />
          <MenuItem name="About Us" path="/about" />
          <MenuItem name="Showcase" path="/showcase" />
          <MenuItem name="Packages" path="/packages" />
          <MenuItem name="Bookings" path="/bookings" />
          <MenuItem name="FAQs" path="/faqs" />
          <MenuItem name="Contact" path="/contact" />
        </div>
      )}
    </div>
  );
};

export default DropMenu;
