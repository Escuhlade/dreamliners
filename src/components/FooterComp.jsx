// FooterComp.js

import { Footer } from 'flowbite-react';

function FooterComp() {
  return (
    <Footer container>
      <div className="w-full text-center relative">
        {/* Video element */}
        <video
          className="w-full h-full object-cover absolute inset-0"
          autoPlay
          loop
          muted
        >
          <source
            src="https://rr1---sn-tt1e7nls.c.drive.google.com/videoplayback?expire=1706488498&ei=gsi2Zev3E4Cf2LYP1pyz8AU&ip=99.237.254.43&id=4cff8e21831e3c50&itag=37&source=webdrive&requiressl=yes&xpc=EghonaK1InoBAQ==&mh=Ls&mm=32,29&mn=sn-tt1e7nls,sn-gvbxgn-tt1e6&ms=su,rdu&mv=m&mvi=1&pl=17&ttl=transient&susc=dr&driveid=1sVWG-P9GC3F7OU173ZzrOaZOZl9HHmOE&app=explorer&eaua=_gCHqaHYbww&mime=video/mp4&vprv=1&prv=1&dur=10.054&lmt=1704094319480706&mt=1706477333&fvip=5&subapp=DRIVE_WEB_FILE_VIEWER&txp=0001224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=AJfQdSswRQIhAPuNdniLC828vAYJHea9BV-6r-w7nEp60GshgVMK1YksAiADRsl04XgxKZ0yAtuCNN_xXQDaFGsuX1xXdZ5Uic8RRg==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AAO5W4owRgIhAK43V2rU_LVE2yBjvMNbWidRKMYKX7uHHy5J1mdUghCAAiEA-38O3nzwLgtGFpWJTNBktrTwo1k0oazcXJOxKYp3z3g=&cpn=tlydKSjLIM9bmNla&c=WEB_EMBEDDED_PLAYER&cver=1.20240123.01.00"
            type="video/mp4"
          />
        </video>

        {/* Content on top of the video */}
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
