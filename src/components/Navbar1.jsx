import React from "react";

const Navbar1 = () => {
  return (
    <nav className="bg-black p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-extrabold text-xl">
          Your Luxury Brand
        </div>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-white hover:text-gray-400 transition duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-400 transition duration-300"
          >
            Models
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-400 transition duration-300"
          >
            Gallery
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-400 transition duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
