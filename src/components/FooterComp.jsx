'use client';

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
            src="https://rr1---sn-tt1e7nls.c.drive.google.com/videoplayback?expire=1706421039&ei=_8C1ZfLLDbLJp84PqIiV2AQ&ip=99.237.254.43&id=4cff8e21831e3c50&itag=37&source=webdrive&requiressl=yes&xpc=EghonaK1InoBAQ==&mh=Ls&mm=32,29&mn=sn-tt1e7nls,sn-gvbxgn-tt1e6&ms=su,rdu&mv=m&mvi=1&pl=17&ttl=transient&susc=dr&driveid=1sVWG-P9GC3F7OU173ZzrOaZOZl9HHmOE&app=explorer&eaua=_gCHqaHYbww&mime=video/mp4&vprv=1&prv=1&dur=10.054&lmt=1704094319480706&mt=1706409888&fvip=5&subapp=DRIVE_WEB_FILE_VIEWER&txp=0001224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=AJfQdSswRgIhALaOPmYADoFBkW3Zf0X2pvKUj6_8S_uHahn2NfEs0xJ4AiEA88F4aqVJK409MznuwMRLCqAj95ZwpbQ5z2zWzmEGjbk=&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AAO5W4owRQIgD_iSZKMs7wgOwPZwTCdWoBwb0x37UO68aMb_qS2nMRcCIQDtmNn4QGqTn0pe57K9jlVqBPYOYGN7KF980OME477yFA==&cpn=nrUEaNhU5n3joXK1&c=WEB_EMBEDDED_PLAYER&cver=1.20240123.01.00"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Content on top of the video */}
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between relative z-10">
          <Footer.Brand
            className="w-1/4 h-1/4 flex-shrink-0 cursor-pointer transform transition-transform duration-100 hover:scale-105"
            href="https://www.instagram.com/dreamliners.cp/"
            src="https://images2.imgbox.com/3b/19/w1oJKniW_o.png"
            alt="Dreamliners Logo"
            name=""
          />
          <Footer.LinkGroup className="flex flex-col sm:flex-row sm:space-x-4 items-center mt-4 sm:mt-0">
            <Footer.Link href="/" className="text-white">About Us</Footer.Link>
            <Footer.Link href="/showcase" className="text-white">Exhibit</Footer.Link>
            <Footer.Link href="/showcase" className="text-white">Packages</Footer.Link>
            <Footer.Link href="/showcase" className="text-white">FAQs</Footer.Link>
          </Footer.LinkGroup>
          {/* Footer Link Group for Facebook and Instagram */}
          <Footer.LinkGroup>
            <Footer.Link
              href="https://www.facebook.com/profile.php?id=61552362267687"
              src="https://images2.imgbox.com/a9/14/JgAiUM1A_o.png"
              alt="Facebook Logo"
              name="Facebook"
            ></Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="Dreamliners" year={2024} />
      </div>
    </Footer>
  );
}

export default FooterComp;
