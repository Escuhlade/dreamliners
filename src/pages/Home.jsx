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
            <source src="https://streamable.com/auvp2y" />
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
              src="https://rr1---sn-tt1e7nls.c.drive.google.com/videoplayback?expire=1706491878&ei=ttW2ZcGyCJXe2LYPhMWpyAI&ip=99.237.254.43&id=ddd9a9ae7659a8a2&itag=37&source=webdrive&requiressl=yes&xpc=EghonaK1InoBAQ==&mh=JS&mm=32,29&mn=sn-tt1e7nls,sn-gvbxgn-tt1e6&ms=su,rdu&mv=m&mvi=1&pl=17&ttl=transient&susc=dr&driveid=1vG3U3dwPAxzM5hFafEtOHormIfZkSQys&app=explorer&eaua=_gCHqaHYbww&mime=video/mp4&vprv=1&prv=1&dur=12.329&lmt=1703110802182701&mt=1706480687&fvip=6&subapp=DRIVE_WEB_FILE_VIEWER&txp=0001224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=AJfQdSswRQIhALKRH-6BUfTVSh9VV3wONWt3mbucUsIzO0U8U1C2NQ6zAiBmXumMLMerWzNeUAeLCZu1VAcD8d5f-46yWaQp5rl-TQ==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AAO5W4owRAIgVBc8OJ9zcGzzgloBsHqAjbQD5EkjkFC22AVXFzokI64CIHuu5sLuEKNnWOUdB_4QersVmBP4auvL6P3X-3jjLGLT&cpn=Gee7KuNzT_tpEGGE&c=WEB_EMBEDDED_PLAYER&cver=1.20240123.01.00"
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
              src="https://rr3---sn-tt1elnel.c.drive.google.com/videoplayback?expire=1706491828&ei=hNW2ZdGGMPrP2LYP2ZCaoAk&ip=99.237.254.43&id=b081ba1945a72c26&itag=37&source=webdrive&requiressl=yes&xpc=EghonaK1InoBAQ==&mh=IM&mm=32,29&mn=sn-tt1elnel,sn-gvbxgn-tt1e6&ms=su,rdu&mv=m&mvi=3&pl=17&ttl=transient&susc=dr&driveid=1maH2XKnlJvYMZJmgL2PMEI8FdtO1ypTL&app=explorer&eaua=_gCHqaHYbww&mime=video/mp4&vprv=1&prv=1&dur=11.888&lmt=1703110207433392&mt=1706480687&fvip=8&subapp=DRIVE_WEB_FILE_VIEWER&txp=0001224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=AJfQdSswRQIhAMDF8_btm00w4ByvfILrtHhAU6LNEF9jz3H1DdWV46y_AiBcBFAZD6E1c6ATpoYsRq6oaNj546zpydS-qk5Sb_A9TQ==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AAO5W4owRQIgUuVQKhhm4Kbs56mVNC9zeTxuHEV1RN--HKzHwgWoLhICIQD7A7LcYgbkglFPqoyzSl8OBnTmcS5YbwfZVgxBClZ3gA==&cpn=lfRKTQ49dKdHtBS9&c=WEB_EMBEDDED_PLAYER&cver=1.20240123.01.00"
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
              src="https://rr3---sn-tt1e7nls.c.drive.google.com/videoplayback?expire=1706491905&ei=0dW2ZbSOD82m2LYPpfio-Ao&ip=99.237.254.43&id=002bc88cbd2f05f8&itag=37&source=webdrive&requiressl=yes&xpc=EghonaK1InoBAQ==&mh=Aq&mm=32,29&mn=sn-tt1e7nls,sn-gvbxgn-tt1ee&ms=su,rdu&mv=m&mvi=3&pl=17&sc=yes&ttl=transient&susc=dr&driveid=1pYajI8rx83ml68mzaE5HKFpUZybETNiN&app=explorer&eaua=_gCHqaHYbww&mime=video/mp4&vprv=1&prv=1&dur=3.552&lmt=1706480828719300&mt=1706480687&fvip=3&subapp=DRIVE_WEB_FILE_VIEWER&txp=0001224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=AJfQdSswRgIhANOC4KHvwASrcmqZEnExh2Pabn3bDpCL5JNpuILq1x3hAiEAyabzRNPxxYX3ip6iyOkGGsLiSB5fj1PYT3kWP00lbZ0=&lsparams=mh,mm,mn,ms,mv,mvi,pl,sc&lsig=AAO5W4owRQIgHD-5vs6KXWJwlC6BO7Tb0hB2B9b6a_WqM7AhYn1WlGQCIQC2BNERTyA1-0tDp1XrG0tTI8xaGzAiZ9Nq2jDyWNoLvQ==&cpn=WHQnV2K_wKyG3nZa&c=WEB_EMBEDDED_PLAYER&cver=1.20240123.01.00"
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
