import React, { useRef, useState } from "react";
import PhotoAlbum from "react-photo-album";

import './ImageSlider.css'

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const photos = [
  { width: 4000, height: 6000, src: require("../images/Exhibit_Images/DSC_0366.JPG") },
  { width: 4000, height: 6000, src: require("../images/Exhibit_Images/DSC_0393.JPG") },
  { width: 6000, height: 4000, src: require("../images/Exhibit_Images/DSC_0419.JPG") },
  { width: 4000, height: 6000, src: require("../images/Exhibit_Images/DSC_0369.JPG") },
  { width: 2160, height: 3840, src: require("../images/Exhibit_Images/g801.png") },
  { width: 2160, height: 3840, src: require("../images/Exhibit_Images/g802.png") },
  { width: 2160, height: 3840, src: require("../images/Exhibit_Images/g803.png") },
  { width: 2160, height: 2700, src: require("../images/Exhibit_Images/IMG_7380-Edit.JPG") },
  { width: 2160, height: 3840, src: require("../images/Exhibit_Images/m801.png") },
  { width: 2160, height: 3840, src: require("../images/Exhibit_Images/m802.png") },
  { width: 6000, height: 4000, src: require("../images/Exhibit_Images/starter.JPG") },
  { width: 1920, height: 1079, src: require("../images/Exhibit_Images/luxury.jpg") },
  { width: 1080, height: 1080, src: require("../images/Exhibit_Images/ultralux.jpg") },
];

const ImageSlider = () => {
  const [index, setIndex] = useState(-1);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <PhotoAlbum layout="columns" photos={photos} columns={6} onClick={({ index }) => setIndex(index)}/>
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Thumbnails]}
        // plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  );
};

export default ImageSlider;
