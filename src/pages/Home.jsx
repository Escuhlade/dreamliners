import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroVideo from "../videos/HeroVideo.mp4";
import VideoHeroPlay from "../components/VideoHeroPlay";
import FooterComp from "../components/FooterComp";

const Home = () => {
  const [scrollIndex, setScrollIndex] = useState(0);

  useEffect(() => {
    const handleWheel = (event) => {
      const scrollDirection = event.deltaY > 0 ? 1 : -1; // 1 for scrolling down, -1 for scrolling up
      setScrollIndex((prevIndex) => prevIndex + scrollDirection);
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  useEffect(() => {
    const maxScrollIndex = 2; // Adjust based on the number of videos
    setScrollIndex((prevIndex) =>
      Math.max(0, Math.min(maxScrollIndex, prevIndex))
    );
  }, [scrollIndex]);

  useEffect(() => {
    window.scrollTo({
      top: scrollIndex * window.innerHeight,
      behavior: "smooth",
    });
  }, [scrollIndex]);

  return (
    <>
      {/* <h1> Butcher Works</h1> */}
      <Navbar />
      <div className="snap-y overflow-y-auto h-screen">
        <div className="snap-always snap-center mb-0 w-full h-full">
          {/* <ReactVideoPlayer /> */}
          <video
            className="w-full h-full object-cover"
            controls={false}
            autoPlay
            loop
          >
            {/* Below is the main hero video that is going to be on the landing page of the website in source */}
            <source src="https://rr5---sn-tt1e7nlz.c.drive.google.com/videoplayback?expire=1706235214&ei=HuuyZY2zB7C2mvUP0fanCA&ip=209.171.88.88&id=495544872713bdbd&itag=37&source=webdrive&requiressl=yes&xpc=EghonaK1InoBAQ==&mh=mL&mm=32,29&mn=sn-tt1e7nlz,sn-uxa0n-tm3e&ms=su,rdu&mv=m&mvi=5&pl=24&ttl=transient&susc=dr&driveid=1-Gjr0qahvO4OhBZNXG49UqlsNZIblwzV&app=explorer&eaua=_gCHqaHYbww&mime=video/mp4&vprv=1&prv=1&dur=10.031&lmt=1703111205606126&mt=1706224132&fvip=3&subapp=DRIVE_WEB_FILE_VIEWER&txp=0001224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=AJfQdSswRgIhAKuLmCjK9yyVHpCZyr0-YxNT1eFdL481RZxO58_l2XdDAiEAgo40Wy8pvsYd_xN2IzPeL39bDgNwDsd499mv8_FtGTw=&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AAO5W4owRQIhAMP2k6SaYqH3XjZcOSaTCLHRHupUHiO1wDJCJvOt26L4AiB-5I-S6Ny_doCMJMQ2NByxnGO69wpF_M5Ss-ANkNwWIg==&cpn=6sYCzg3VoljYxBcR&c=WEB_EMBEDDED_PLAYER&cver=1.20240123.01.00" />
            Your browser does not support the video tag.
          </video>
          {/* <VideoHeroPlay /> */}
          {/* <waqVideo /> */}
          {/* <video
            className="w-full h-full"
            controls
            onError={(e) => console.error(e)}
          >
            <source src={HeroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
        </div>
        <div className="flex justify-start snap-always snap-center mb-0 h-screen">
          {/* left video for half half split*/}
          <video
            className="w-auto h-full object-cover"
            controls={false}
            autoPlay
            loop
          >
            <source
              src="https://rr1---sn-tt1e7nls.c.drive.google.com/videoplayback?expire=1706235636&ei=xOyyZYzjGri3mvUP5KCikA0&ip=207.112.12.19&id=ddd9a9ae7659a8a2&itag=37&source=webdrive&requiressl=yes&xpc=EghonaK1InoBAQ==&mh=JS&mm=32,29&mn=sn-tt1e7nls,sn-gvbxgn-tt1e6&ms=su,rdu&mv=m&mvi=1&pl=22&ttl=transient&susc=dr&driveid=1vG3U3dwPAxzM5hFafEtOHormIfZkSQys&app=explorer&eaua=_gCHqaHYbww&mime=video/mp4&vprv=1&prv=1&dur=12.329&lmt=1703110802182701&mt=1706224381&fvip=6&subapp=DRIVE_WEB_FILE_VIEWER&txp=0001224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=AJfQdSswRQIgVsRwukRZwWS90lGFXb-4wYyn-hNWWHpexsiWLjLIbjQCIQDz7lz3BbaWs20LofdfZHR_0ATzCxPOVNfGBvlsWM3PVw==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AAO5W4owRQIgSd2Sn2BLtsrHe_r-6jB5kiO62j7fp37p896Zo7JuobkCIQCNqABJIYxwQa4pNTeAz2V8zcAEN_vZJOlkukHaFguh6g==&cpn=VFcE7UHq14sWhP69&c=WEB_EMBEDDED_PLAYER&cver=1.20240123.01.00"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* right video for half half split*/}
          <video
            className="w-full h-full object-cover"
            controls={false}
            autoPlay
            loop
          >
            <source
              src="https://rr5---sn-tt1e7nls.c.drive.google.com/videoplayback?expire=1706235385&ei=yeuyZd-UC-rBp84P4JOz8Ac&ip=209.171.88.88&id=b081ba1945a72c26&itag=37&source=webdrive&requiressl=yes&xpc=EghonaK1InoBAQ==&mh=IM&mm=32,29&mn=sn-tt1e7nls,sn-uxa0n-tm3l&ms=su,rdu&mv=m&mvi=5&pl=24&ttl=transient&susc=dr&driveid=1maH2XKnlJvYMZJmgL2PMEI8FdtO1ypTL&app=explorer&eaua=_gCHqaHYbww&mime=video/mp4&vprv=1&prv=1&dur=11.888&lmt=1703110207433392&mt=1706224132&fvip=1&subapp=DRIVE_WEB_FILE_VIEWER&txp=0001224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=AJfQdSswRAIgMXtRx78iZshNFF7_ka67a1vaiHVyXD9TeRqXvxaPZP8CIAQFCoeTsOeiEVHB_dOrxWecA6lU_uwaEOpl9Qr_eDiw&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AAO5W4owRQIgQ7jtnMKy0A-2qVGJ3ei7CxmBX7ImdTUnNYlYGxwKxHcCIQCket-sFayf6PIa5d7-UAI5-_ZccN9LxSb3zEzH_hBBmQ==&cpn=jZZPn0VSugr528Ry&c=WEB_EMBEDDED_PLAYER&cver=1.20240123.01.00"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="snap-always snap-center mb-0 h-screen">
          <video
            className="w-full h-full object-cover"
            controls={false}
            autoPlay
            loop
          >
            {/* footer video end of website */}
            <source
              src="https://rr1---sn-tt1e7nls.c.drive.google.com/videoplayback?expire=1704182794&ei=2pmTZeaTCvT1mvUPvtSUEA&ip=99.237.254.43&id=4cff8e21831e3c50&itag=22&source=webdrive&requiressl=yes&xpc=EghonaK1InoBAQ==&mh=Ls&mm=32&mn=sn-tt1e7nls&ms=su&mv=m&mvi=1&pl=18&ttl=transient&susc=dr&driveid=1sVWG-P9GC3F7OU173ZzrOaZOZl9HHmOE&app=explorer&eaua=WIug9EHVF8Q&mime=video/mp4&vprv=1&prv=1&dur=10.054&lmt=1704093322518614&mt=1704171640&subapp=DRIVE_WEB_FILE_VIEWER&txp=0006224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=AJfQdSswRQIhAPbZgu-HzbZJomRs5NKQAkI4psbhP4fRY4zZrpiLSR5WAiBJcO-9gGt39n7KcnjSV1Dp4ON_cfbjA4xULH7CdfiUJg==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AAO5W4owRAIgboDFafI5JUoIx_wWsfCcR8IY9wRbLtgc1i-LrBS-HAQCIHNpcPWX0NDhM0Fefw3NBTkId285LgotNyn8bunucZzF&cpn=wRLTv6Ui73ztuiix&c=WEB_EMBEDDED_PLAYER&cver=1.20231217.00.00"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      {/* footer comp */}
      <FooterComp/>
    </>
  );
};

export default Home;
