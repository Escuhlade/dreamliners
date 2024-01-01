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
      <Navbar />
      <div
        className="snap-y overflow-y-auto h-screen"
        style={{ scrollSnapType: "y mandatory" }}
        onWheel={(e) => e.preventDefault()} // Prevent default wheel behavior
      >
        <div className="snap-always snap-center mb-0 w-full h-full">
          {/* <ReactVideoPlayer /> */}
          <video
            className="w-full h-full object-cover"
            controls={false}
            autoPlay
            loop
          >
            <source
              src="https://rr4---sn-tt1e7nls.c.drive.google.com/videoplayback?expire=1704098811&ei=y1GSZd_4EomGp84P566KgA4&ip=99.237.254.43&id=3b45acbe5808905d&itag=22&source=webdrive&requiressl=yes&xpc=EghonaK1InoBAQ==&mh=_X&mm=32&mn=sn-tt1e7nls&ms=su&mv=m&mvi=4&pl=18&ttl=transient&susc=dr&driveid=11nCdHGkPS38y_YIlJiFwwGoMBLFbRE4S&app=explorer&eaua=WIug9EHVF8Q&mime=video/mp4&vprv=1&prv=1&dur=10.031&lmt=1703111203530560&mt=1704085008&subapp=DRIVE_WEB_FILE_VIEWER&txp=0001224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=AJfQdSswRQIhANpQtFPLwWKO-VftNhpuEDMYk0LDHFaMWj0jh8G6s78kAiBMUToQOMuSUaqYB8xXXjuAjeiesQEFZycuYNNzDBpD4A==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AAO5W4owRgIhAI-FMaMJ4ZpH3r8oPx4lmhy62qVyyhBCdDZeGPOxg8amAiEAzhLkGrGEwTheonrM8R96wIFAmkMw9u-60Q7iMNnFqbg=&cpn=QlrRJvvSXIVmehgD&c=WEB_EMBEDDED_PLAYER&cver=1.20231217.00.00"
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
              src="https://rr1---sn-tt1e7nls.c.drive.google.com/videoplayback?expire=1704103290&ei=SmOSZa7KDdy2wN4Ps6ipmA8&ip=99.237.254.43&id=ddd9a9ae7659a8a2&itag=22&source=webdrive&requiressl=yes&xpc=EghonaK1InoBAQ==&mh=JS&mm=32&mn=sn-tt1e7nls&ms=su&mv=m&mvi=1&pl=18&ttl=transient&susc=dr&driveid=1vG3U3dwPAxzM5hFafEtOHormIfZkSQys&app=explorer&eaua=WIug9EHVF8Q&mime=video/mp4&vprv=1&prv=1&dur=12.329&lmt=1703110133397794&mt=1704092435&subapp=DRIVE_WEB_FILE_VIEWER&txp=0006224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=AJfQdSswRQIgPI2_xzPk8Y7qden7CrR4OQQec5qYEd4OtJwvIMja6O4CIQDzmQX5YVzgFCAM9XJEeRb-Yd0Gi85x0DtOG9r0Hp-gQQ==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AAO5W4owRgIhANsP2XagtJ58dtL1GIRj-EY0oXpSXtsX6VqYdn1yF4YoAiEA1YDhv-XFzRBtA8mITWzcQcK3XQ8l1WdE6bR4qQF5j1c=&cpn=xirDR25ZdUgcUWC4&c=WEB_EMBEDDED_PLAYER&cver=1.20231217.00.00"
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
              src="https://rr3---sn-tt1elnel.c.drive.google.com/videoplayback?expire=1704103186&ei=4mKSZaqwBtXfwN4PsailUA&ip=99.237.254.43&id=b081ba1945a72c26&itag=22&source=webdrive&requiressl=yes&xpc=EghonaK1InoBAQ==&mh=IM&mm=32&mn=sn-tt1elnel&ms=su&mv=m&mvi=3&pl=18&ttl=transient&susc=dr&driveid=1maH2XKnlJvYMZJmgL2PMEI8FdtO1ypTL&app=explorer&eaua=WIug9EHVF8Q&mime=video/mp4&vprv=1&prv=1&dur=11.888&lmt=1703110102658367&mt=1704091969&subapp=DRIVE_WEB_FILE_VIEWER&txp=0006224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=AJfQdSswRQIgdGIim_jRhTigq4lefu4xqUpTsuWuRa5yf771qfWcDcoCIQD9EpHIO_iE7lSkBoCFDlHDP78R9ydVh7Oe4JuI4XZ6CA==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AAO5W4owRQIgWiyioOqpIcm26blE074WZ8fO22sr3mF8x4YqBQz-EqgCIQCPQDkgyitJlPnv-YmYLu6Z-ctTP-vi1FVTxmFhPMQDQQ==&cpn=sDSd6FoN6Zmdl03D&c=WEB_EMBEDDED_PLAYER&cver=1.20231217.00.00"
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
              src="https://rr1---sn-tt1e7nls.c.drive.google.com/videoplayback?expire=1704104148&ei=pGaSZY-hMbL-rvIP-vezgAU&ip=99.237.254.43&id=4cff8e21831e3c50&itag=22&source=webdrive&requiressl=yes&xpc=EghonaK1InoBAQ==&mh=Ls&mm=32&mn=sn-tt1e7nls&ms=su&mv=m&mvi=1&pl=18&ttl=transient&susc=dr&driveid=1sVWG-P9GC3F7OU173ZzrOaZOZl9HHmOE&app=explorer&eaua=WIug9EHVF8Q&mime=video/mp4&vprv=1&prv=1&dur=10.054&lmt=1704093322518614&mt=1704092947&subapp=DRIVE_WEB_FILE_VIEWER&txp=0006224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=AJfQdSswRQIgUYb5ZRhS8-n3A_GV55mcA7yEzPmLZyerE6E0O3L12_4CIQCrJi-3D65hVAWjmWVMPpfHFdRGWqu9yXHdJgHZnz88Zw==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AAO5W4owRAIgQmFUi3l41SQplQvS140Gg_PstGTljcFFX4AxjqOAG7ACIDYlfwFldZpuLAt24JoN3CD_zR94qkm1YT4vPRAY7bkc&cpn=WAN4ZoHajjkmta_R&c=WEB_EMBEDDED_PLAYER&cver=1.20231217.00.00"
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
