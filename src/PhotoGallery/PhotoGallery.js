import React from "react";

import "./PhotoGallery.scss";
import images from "./images";
import GalleryItem from "./GalleryItem/GalleryItem";

function PhotoGallery() {

  return (
    <div className="gallery">
      {images.map(({src}) => {
        return <GalleryItem key={src} src={src}/>;
      })}
    </div>
  );
}

export default PhotoGallery;
