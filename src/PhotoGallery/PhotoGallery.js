import React, { useEffect } from "react";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";

import "./PhotoGallery.scss";
import images from "./images.json";

function PhotoGallery() {
  return (
    <div className="gallery">
      {images.map((image) => (
        <LazyLoadImage key={image.src} src={image.src} />
      ))}
    </div>
  );
}

export default trackWindowScroll(PhotoGallery);
