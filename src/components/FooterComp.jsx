// FooterComp.js
import { Footer } from 'flowbite-react';

function FooterComp() {

  return (
    <div className=''>
      <nav className="bg-transparent w-full z-10">
        <div className="flex mx-16 items-center p-4 pt-14 justify-center">
          <div className='flex flex-col space-y-1 text-white text-sm text-left h-full w-1/5'>
            <a href='/showcase'><p>About Us</p></a>
            <a href='/showcase'><p>Exhibit</p></a>
            <a href='/showcase'><p>Packages</p></a>
            <a href='/showcase'><p>FAQ</p></a>
          </div>
          <div className="flex flex-col items-center justify-center h-full w-full">
            <div className="flex items-center justify-center">
              <a href="/">
                <img
                  src="https://i.gyazo.com/8727f9cdf2e8b2ad922a4738cf995a0f.png"
                  className="h-16 cursor-pointer transform transition-transform duration-100 hover:scale-110"
                  alt="DL Logo"
                />
              </a>
            </div>
            <a href="https://www.instagram.com/dreamliners.cp/">
              <img
                src="https://images2.imgbox.com/3b/19/w1oJKniW_o.png"
                className="h-8 cursor-pointer transform transition-transform duration-100 hover:scale-110"
                alt="DL Logo"
              />
            </a>
          </div>
          <div className="flex flex-col justify-end h-full w-1/5">
            <a href='https://www.instagram.com/dreamliners.cp/'>
              <div className="flex items-center justify-end" >
                <p className='text-white text-sm text-right w-full py-2'>@dreamliners.cp</p>
                <img
                  src="https://i.gyazo.com/6aa589114f810d037cd078b07c45ee97.png"
                  className="w-10 h-10"
                  alt="Some Other Logo"
                />
              </div>
            </a>
            <a href='https://www.facebook.com/profile.php?id=61552362267687'>
              <div className="flex items-center justify-end">
                <p className='text-white text-sm text-right w-full py-2'>Dreamliners CP</p>
                <img
                  src="https://i.gyazo.com/6aa589114f810d037cd078b07c45ee97.png"
                  className="w-10 h-10"
                  alt="Some Other Logo"
                />
              </div>
            </a>
          </div>
        </div>
        <div style={{ scrollSnapAlign: "end" }}>
          <p className='text-white text-sm text-center w-full py-5'>© 2024 Dreamliners</p>
        </div>
      </nav>
    </div>
  )
}

export default FooterComp;
