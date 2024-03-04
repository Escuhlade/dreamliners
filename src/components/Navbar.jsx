import React, { useState } from "react";
import DropMenu from "./DropMenu";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const redirectToInstagram = () => {
    // Open Instagram in a new tab
    window.open("https://www.instagram.com/dreamliners.cp/", "_blank");
  };

  return (
    <>
      <nav className="fixed z-10 w-full bg-transparent">
        <div className="flex w-screen items-center justify-between p-4">
          <div className="">
            <DropMenu />
          </div>
          {/* Centered Dreamliner Logo*/}
          <div className="flex items-center justify-center">
            <a href="/">
              <img
                src="https://i.gyazo.com/8727f9cdf2e8b2ad922a4738cf995a0f.png"
                className="h-16 transform cursor-pointer transition-transform duration-100 hover:scale-110"
                alt="DL Logo"
              />
            </a>
          </div>

          {/* Horizontal Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute left-0 top-0 z-10 mt-2 w-48 origin-top-left space-x-4 rounded-md border border-gray-200 bg-white shadow-lg">
              <a
                href="/"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Menu Item 1
              </a>
              <a
                href="/"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Menu Item 2
              </a>
              <a
                href="/"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Menu Item 3
              </a>
            </div>
          )}

          <div className="flex flex-row">
            <div className="flex md:order-2 md:ml-auto">
              <button
                type="button"
                className="transform px-4 text-sm font-medium text-white transition-transform duration-100 hover:scale-105"
              >
                Get Started
              </button>
            </div>

            <div
              className="flex h-12 w-12 items-center justify-between"
              id="navbar-sticky"
            >
              <img
                src="https://i.gyazo.com/6aa589114f810d037cd078b07c45ee97.png"
                className="transform transition-transform duration-100 hover:scale-110"
                alt="Some Other Logo"
                onClick={redirectToInstagram}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
