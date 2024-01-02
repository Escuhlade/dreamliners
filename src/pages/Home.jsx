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
            <source
              src="https://rr1---sn-tt1elnel.c.drive.google.com/videoplayback?expire=1704170795&ei=-2qTZduhLsu0wN4PruKY2A8&ip=99.237.254.43&id=3b45acbe5808905d&itag=22&source=webdrive&requiressl=yes&xpc=EghonaK1InoBAQ==&mh=_X&mm=32&mn=sn-tt1elnel&ms=su&mv=m&mvi=1&pl=18&ttl=transient&susc=dr&driveid=11nCdHGkPS38y_YIlJiFwwGoMBLFbRE4S&app=explorer&eaua=WIug9EHVF8Q&mime=video/mp4&vprv=1&prv=1&dur=10.031&lmt=1703111203530560&mt=1704159646&subapp=DRIVE_WEB_FILE_VIEWER&txp=0001224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=AJfQdSswRgIhAP2tDhSdVt1qtXYGP39VWFkPkyaP_n6GSq-dK_BGJ4vDAiEAhJFejbW4dSoS8S5CyVDfvflOoVIHGIAkNNDw7A2sAVQ=&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AAO5W4owRQIgHc8gZRuKe273Wpl3P9KHCzKcBYQZx0NUjTR7F731xDYCIQCg6kG2Ppruc-m7AmdZUvJdnHQb2leIfIWHk1vOP6uL5A==&cpn=FbSwjX6MiKqqz0GG&c=WEB_EMBEDDED_PLAYER&cver=1.20231217.00.00"
              type="video/mp4"
            />
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
              src="https://rr1---sn-tt1e7nls.c.drive.google.com/videoplayback?expire=1704170833&ei=IWuTZayuOau1wN4PsMyykAw&ip=99.237.254.43&id=ddd9a9ae7659a8a2&itag=22&source=webdrive&requiressl=yes&xpc=EghonaK1InoBAQ==&mh=JS&mm=32&mn=sn-tt1e7nls&ms=su&mv=m&mvi=1&pl=18&ttl=transient&susc=dr&driveid=1vG3U3dwPAxzM5hFafEtOHormIfZkSQys&app=explorer&eaua=WIug9EHVF8Q&mime=video/mp4&vprv=1&prv=1&dur=12.329&lmt=1703110133397794&mt=1704159646&subapp=DRIVE_WEB_FILE_VIEWER&txp=0006224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=AJfQdSswRAIgS93Ut5hxeeUimeYwkL2DMOam-_ncd6SARRcZi9swQdcCIFveI5-mEC1p4V-LgU1sjwaBNNJ79s_zjOk7cTUExU9T&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AAO5W4owRQIhAPPe_3KTgn1ex-WozAM70DgQ4hdF0d7k9Ipb8BRTNu_lAiBGbjowORAodaaeW-9CmFVeN1ItNSQs9HEc9oLgRNpvAQ==&cpn=bSMn0OmrjHBsWPeL&c=WEB_EMBEDDED_PLAYER&cver=1.20231217.00.00"
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
              src="https://rr5---sn-tt1e7nls.c.drive.google.com/videoplayback?expire=1704170830&ei=HmuTZbu7KtygrvIPtNmpgAc&ip=99.237.254.43&id=b081ba1945a72c26&itag=22&source=webdrive&requiressl=yes&xpc=EghonaK1InoBAQ==&mh=IM&mm=32&mn=sn-tt1e7nls&ms=su&mv=m&mvi=5&pl=18&ttl=transient&susc=dr&driveid=1maH2XKnlJvYMZJmgL2PMEI8FdtO1ypTL&app=explorer&eaua=WIug9EHVF8Q&mime=video/mp4&vprv=1&prv=1&dur=11.888&lmt=1703110102658367&mt=1704159646&subapp=DRIVE_WEB_FILE_VIEWER&txp=0006224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=AJfQdSswRQIhANRcOI41dmIe7CvIpQZrkJtUXpJyJ8R1r1wg3WTTXOcoAiBEWrJVSznUw-obkt6fl_SkDwjfOZFfBGM7V_LAou1jig==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AAO5W4owRQIgfcVi0Wk5cYDuiLZqRaWZeTQ_ZLrDkCLwL_9re0mKZvgCIQDB7P43N59BZ2JI52gJOcSzwQx_mOI0Qn3sK7XFMW-pgQ==&cpn=xRQWo52EnLf-SRRi&c=WEB_EMBEDDED_PLAYER&cver=1.20231217.00.00"
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
              src="https://rr1---sn-tt1e7nls.c.drive.google.com/videoplayback?expire=1704170950&ei=lmuTZbHpLo-BwN4P7t-QqAw&ip=99.237.254.43&id=4cff8e21831e3c50&itag=22&source=webdrive&requiressl=yes&xpc=EghonaK1InoBAQ==&mh=Ls&mm=32&mn=sn-tt1e7nls&ms=su&mv=m&mvi=1&pl=18&ttl=transient&susc=dr&driveid=1sVWG-P9GC3F7OU173ZzrOaZOZl9HHmOE&app=explorer&eaua=WIug9EHVF8Q&mime=video/mp4&vprv=1&prv=1&dur=10.054&lmt=1704093322518614&mt=1704159886&subapp=DRIVE_WEB_FILE_VIEWER&txp=0006224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=AJfQdSswRAIgNwP4LmcG8Qt0i4Ef1mmOC0IawttOfhsmIIpHdFqF0o8CIHRX3byFj2tFCgHYvzLjIhGeK_Y5qEwAuD8PYKfq6Wgg&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AAO5W4owRAIgEo33eL2R28B7Jn-XelkfotWgUzqJK_VudyOehqkwjSYCIGXFsGD-pU9iD37OExAUE960C4v9oWVAEB81lyWLsp7b&cpn=GNqUg4eJtL8E-Qgc&c=WEB_EMBEDDED_PLAYER&cver=1.20231217.00.00"
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
