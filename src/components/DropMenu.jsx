import React, { useState } from "react";
import MenuItem from "./MenuItem";
import { MdMenu, MdClose } from "react-icons/md";

const DropMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <div onClick={() => setIsOpen(true)}
        className={`${isOpen ? 'opacity-0' : 'opacity-100'} flex flex-row items-center justify-center p-3 text-white bg-white bg-opacity-0 transition-all hover:bg-opacity-25  gap-2 rounded-xl cursor-pointer select-none`}>
        <MdMenu className="h-8 w-8 " />
        <p
          type="button"
          className=""
          id="menu-button"
        >
          Menu
        </p>
      </div>

        <div
          className={`absolute left-0 top-0  w-[20%] h-screen bg-black bg-opacity-60 text-white
          ${
            isOpen
              ? 'left-0 transform translate-x-0 duration-500 ease-out'
              : '-left-full transform translate-x-full duration-500 ease-in'
          }`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        // onClick={handleMenuClick}
        >
          <div className='flex flex-row justify-between items-center pr-5 pt-4 pb-4'>
            <div></div>
            <div> </div>
            <div onClick={() => setIsOpen(false)} className='p-4 rounded-xl text-white transition-all bg-white bg-opacity-0 hover:bg-opacity-25 cursor-pointer select-none'>
              <MdClose className="h-8 w-8" />
            </div>
          </div>
          <MenuItem name='Home' path='/' />
          <MenuItem name='About' path='/about' />
          <MenuItem name='Showcase' path='/showcase' />
          <MenuItem name='Packages' path='/packages' />
          <MenuItem name='Bookings' path='/bookings' />
          <MenuItem name='FAQs' path='/faqs' />
          <MenuItem name='Contact' path='/contact' />


        </div>
      }
    </div>
  );
};

export default DropMenu;
