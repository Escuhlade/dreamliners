// FooterComp.js

import { Footer } from 'flowbite-react';

import background from '../videos/compressed/FooterBackdrop-trimmed.mov'

function FooterComp() {
  return (
    <Footer container>
      <div className="w-full text-center relative bg-black">
        <div className="w-full justify-between flex items-center relative z-10">
          <Footer.Brand
            // follow the similar way to how we did it for fb logo where the logo is being called inside the link but with img tag. so change this to try with img tag and adjsut size
            className="w-full h-full flex-shrink-0 cursor-pointer transform transition-transform duration-100 hover:scale-105 mt-0"
            href="https://www.instagram.com/dreamliners.cp/"
            src="https://images2.imgbox.com/3b/19/w1oJKniW_o.png"
            alt="Dreamliners Logo"
            name=""
          />
          <Footer.LinkGroup className="flex flex-row space-x-4 items-center mt-0">
            <Footer.Link
              href="/"
              className="text-white transition-transform duration-100 hover:scale-110"
            >
              About Us
            </Footer.Link>
            <Footer.Link
              href="/showcase"
              className="text-white transition-transform duration-100 hover:scale-110"
            >
              Exhibit
            </Footer.Link>
            <Footer.Link
              href="/showcase"
              className="text-white transition-transform duration-100 hover:scale-110"
            >
              Packages
            </Footer.Link>
            <Footer.Link
              href="/showcase"
              className="text-white transition-transform duration-100 hover:scale-110"
            >
              FAQs
            </Footer.Link>
          </Footer.LinkGroup>
          {/* Footer Link Group for Facebook and Instagram */}
          <Footer.LinkGroup>
            <Footer.Link
              href="https://www.facebook.com/profile.php?id=61552362267687"
              className="text-white transition-transform duration-100 hover:scale-110 mt-0"
            >
              <img
                src="https://images2.imgbox.com/a9/14/JgAiUM1A_o.png"
                alt="Facebook Logo"
                className="w-8 h-8 transition-transform duration-100 hover:scale-110 mr-2"
              />
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright className="text-white" href="#" by="Dreamliners" year={2024} />
      </div>
    </Footer>
  );
}

export default FooterComp;
