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
      <nav className="bg-transparent dark:bg-transparent fixed w-full z-20 top-0 start-0 border-b border-transparent dark:border-transparent">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 relative top-0 left-0">
          <div className="top-0 left-0">
            <DropMenu />
          </div>
          {/* Centered Dreamliner Logo */}
          <div className="flex items-center justify-center w-full">
            <img
              src="https://i.gyazo.com/57ee3243a1eb2b0aca748f10056aa55b.png"
              className="h-8 flex-shrink-0 cursor-pointer"
              alt="DL Logo"
            />
          </div>

          {/* Horizontal Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute left-0 top-0 mt-2 space-x-4 origin-top-left bg-white border border-gray-200 rounded-md shadow-lg w-48 z-10">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Menu Item 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Menu Item 2
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Menu Item 3
              </a>
            </div>
          )}

          <div className="flex items-center space-x-3 md:order-2 md:ml-auto rtl:space-x-reverse">
            <button
              type="button"
              className="text-white hover:bg-violet-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 dark:focus:ring-blue-800"
            >
              Get Started
            </button>
          </div>

          <div
            className="flex items-center justify-between w-auto"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-transparent rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:border-transparent">
              <li>
                <img
                  src="https://i.gyazo.com/8ce47fd872187bfa8d11505b3bd8944e.png"
                  className="h-8 mr-3"
                  alt="Some Other Logo"
                  onClick={redirectToInstagram}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
