// FooterComp.js
import { Footer } from "flowbite-react";

function FooterComp() {
  return (
    <div className="">
      <nav className="z-10 w-full bg-transparent">
        <div className="mx-16 flex items-center justify-center p-4 pt-14">
          <div className="space-y1-1 flex flex-row text-left text-lg text-white">
            <div className="flex h-full w-1/5 flex-col space-y-1 pl-2 text-left text-lg text-white">
              <a href="/">
                <p>Home</p>
              </a>
              <a href="/about">
                <p>AboutUs</p>
              </a>
              <a href="/showcase">
                <p>Gallery</p>
              </a>
            </div>
            <div className="flex h-full w-1/5 flex-col space-y-1 pl-20 text-left text-lg text-white">
              <a href="/packages">
                <p>Packages</p>
              </a>
              <a href="/bookings">
                <p>Bookings</p>
              </a>
              <a href="/faqs">
                <p>FAQs</p>
              </a>
              <a href="/contact">
                <p>Contact</p>
              </a>
            </div>
          </div>
          <div className="flex h-full w-full flex-col items-center justify-center">
            <div className="flex items-center justify-center">
              <a href="/">
                <img
                  src="https://i.gyazo.com/8727f9cdf2e8b2ad922a4738cf995a0f.png"
                  className="h-16 transform cursor-pointer transition-transform duration-100 hover:scale-110"
                  alt="DL Logo"
                />
              </a>
            </div>
            <a href="https://www.instagram.com/dreamliners.cp/">
              <img
                src="https://images2.imgbox.com/3b/19/w1oJKniW_o.png"
                className="h-8 transform cursor-pointer transition-transform duration-100 hover:scale-110"
                alt="DL Logo"
              />
            </a>
          </div>
          <div className="flex h-full w-1/5 flex-col justify-end">
            <a href="https://www.instagram.com/dreamliners.cp/">
              <div className="flex items-center justify-end">
                <p className="w-full py-2 text-right text-lg text-white">
                  @dreamliners.cp
                </p>
                <img
                  src="https://i.gyazo.com/6aa589114f810d037cd078b07c45ee97.png"
                  className="h-10 w-10"
                  alt="Some Other Logo"
                />
              </div>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61552362267687">
              <div className="flex items-center justify-end">
                <p className="w-full py-2 text-right text-lg text-white">
                  Dreamliners CP
                </p>
                <img
                  src="https://i.gyazo.com/6aa589114f810d037cd078b07c45ee97.png"
                  className="h-10 w-10"
                  alt="Some Other Logo"
                />
              </div>
            </a>
          </div>
        </div>
        <div style={{ scrollSnapAlign: "end" }}>
          <p className="w-full py-5 text-center text-sm text-white">
            © 2024 Dreamliners
          </p>
        </div>
      </nav>
    </div>
  );
}

export default FooterComp;
