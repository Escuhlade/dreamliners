import React, { useState } from "react";

const DropMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  const handleMenuClick = (event) => {
    // Prevent the menu from closing when clicking on a menu item
    event.stopPropagation();
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-opacity-50 px-3 py-2 text-sm font-semibold text-white shadow-sm transform transition-transform duration-100 hover:scale-105"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={handleButtonClick}
        >
          Menu
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute top-full left-0 z-10 mt-2 w-56 origin-top divide-y divide-gray-100 rounded-md bg-white bg-opacity-75 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-transform duration-300 transform hover:scale-105"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
          onClick={handleMenuClick}
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
              onClick={handleMenuItemClick}
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-1"
              onClick={handleMenuItemClick}
            >
              Packages
            </a>
          </div>
          <div className="py-1" role="none">
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-2"
              onClick={handleMenuItemClick}
            >
              Bookings
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-3"
              onClick={handleMenuItemClick}
            >
              FAQs
            </a>
          </div>
          <div className="py-1" role="none">
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-4"
              onClick={handleMenuItemClick}
            >
              Exhibit
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropMenu;
