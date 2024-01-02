import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroVideo from "../videos/HeroVideo.mp4";
import VideoHeroPlay from "../components/VideoHeroPlay";

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
            <source src="https://rr5---sn-tt1e7nlz.c.drive.google.com/videoplayback?expire=1704181883&ei=SpaTZdeAPZXdwN4PvO2a-A8&ip=99.237.254.43&id=495544872713bdbd&itag=22&source=webdrive&requiressl=yes&xpc=EghonaK1InoBAQ==&mh=mL&mm=32&mn=sn-tt1e7nlz&ms=su&mv=m&mvi=5&pl=18&ttl=transient&susc=dr&driveid=1-Gjr0qahvO4OhBZNXG49UqlsNZIblwzV&app=explorer&eaua=WIug9EHVF8Q&mime=video/mp4&vprv=1&prv=1&dur=10.031&lmt=1703110121549697&mt=1704170697&subapp=DRIVE_WEB_FILE_VIEWER&txp=0006224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=AJfQdSswRQIhAM47PjDWZ5n7eUFc1tDSNEVNRfHemdR88899XRKgTkKwAiAh885AkIK3owZ24XUfBSR_pKX1uSMQq_HbO1kjGVow6g==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AAO5W4owRgIhAKN426Sxm-vnCaEWu6633FO-lyReYzQKq4NaF9j661BtAiEAzV1GlPHhI9ZrWInDPh-tcvv77T0ezkImHKaJ5NI1bOE=&cpn=0B1wGHqvgbFmzrV5&c=WEB_EMBEDDED_PLAYER&cver=1.20231217.00.00" />
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
          {/* left video */}
          <video
            className="w-auto h-full object-cover"
            controls={false}
            autoPlay
            loop
          >
            <source
              src="https://rr1---sn-tt1e7nls.c.drive.google.com/videoplayback?expire=1704182773&ei=xZmTZcqlC5TcwN4P48iLoA8&ip=99.237.254.43&id=ddd9a9ae7659a8a2&itag=22&source=webdrive&requiressl=yes&xpc=EghonaK1InoBAQ==&mh=JS&mm=32&mn=sn-tt1e7nls&ms=su&mv=m&mvi=1&pl=18&ttl=transient&susc=dr&driveid=1vG3U3dwPAxzM5hFafEtOHormIfZkSQys&app=explorer&eaua=WIug9EHVF8Q&mime=video/mp4&vprv=1&prv=1&dur=12.329&lmt=1703110133397794&mt=1704171649&subapp=DRIVE_WEB_FILE_VIEWER&txp=0006224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=AJfQdSswRQIgNvRbpbcp-yVBofPdStgn-M0bINytwIVfho71YHTkD_ICIQCPri4tjqLpcNSftlFh166-Tja5k9XbIIvpN8E6ndtVYA==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AAO5W4owRgIhAK_wve3lN-x2MILuj-We1EpRSgCWIGlM16vrPpSLliv3AiEArHfwALybW3AiucQaoS6qRkjDSRjOgcIAiAhMl1aAePM=&cpn=5TE99G5-ECtq8VIa&c=WEB_EMBEDDED_PLAYER&cver=1.20231217.00.00"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* right video */}
          <video
            className="w-full h-full object-cover"
            controls={false}
            autoPlay
            loop
          >
            <source
              src="https://rr3---sn-tt1elnel.c.drive.google.com/videoplayback?expire=1704182659&ei=U5mTZZf4Ff-r-LYPh8Wb2AQ&ip=99.237.254.43&id=b081ba1945a72c26&itag=22&source=webdrive&requiressl=yes&xpc=EghonaK1InoBAQ==&mh=IM&mm=32&mn=sn-tt1elnel&ms=su&mv=m&mvi=3&pl=18&ttl=transient&susc=dr&driveid=1maH2XKnlJvYMZJmgL2PMEI8FdtO1ypTL&app=explorer&eaua=WIug9EHVF8Q&mime=video/mp4&vprv=1&prv=1&dur=11.888&lmt=1703110102658367&mt=1704171649&subapp=DRIVE_WEB_FILE_VIEWER&txp=0006224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=AJfQdSswRAIgII7B3PUc_Vum55w8fEHagTrmM0CRlMa5RSTn_kdumzsCICg7DzK8urFiNEOynsYvI3RvPpv9ArYBlFyu1H-X9wy7&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AAO5W4owRgIhANS0OvRwbQJ4jCtdQs2HB3G0-icsrpwy_vzyDLeL1L_zAiEAhKlVZQCnq6DhnfGol2wKblYQ1t-12jNxMBwzU2L3Ou4=&cpn=-sENWyKeyfRNE1j-&c=WEB_EMBEDDED_PLAYER&cver=1.20231217.00.00"
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
            <source
              src="https://rr1---sn-tt1e7nls.c.drive.google.com/videoplayback?expire=1704182794&ei=2pmTZeaTCvT1mvUPvtSUEA&ip=99.237.254.43&id=4cff8e21831e3c50&itag=22&source=webdrive&requiressl=yes&xpc=EghonaK1InoBAQ==&mh=Ls&mm=32&mn=sn-tt1e7nls&ms=su&mv=m&mvi=1&pl=18&ttl=transient&susc=dr&driveid=1sVWG-P9GC3F7OU173ZzrOaZOZl9HHmOE&app=explorer&eaua=WIug9EHVF8Q&mime=video/mp4&vprv=1&prv=1&dur=10.054&lmt=1704093322518614&mt=1704171640&subapp=DRIVE_WEB_FILE_VIEWER&txp=0006224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=AJfQdSswRQIhAPbZgu-HzbZJomRs5NKQAkI4psbhP4fRY4zZrpiLSR5WAiBJcO-9gGt39n7KcnjSV1Dp4ON_cfbjA4xULH7CdfiUJg==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AAO5W4owRAIgboDFafI5JUoIx_wWsfCcR8IY9wRbLtgc1i-LrBS-HAQCIHNpcPWX0NDhM0Fefw3NBTkId285LgotNyn8bunucZzF&cpn=wRLTv6Ui73ztuiix&c=WEB_EMBEDDED_PLAYER&cver=1.20231217.00.00"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
};

export default Home;
