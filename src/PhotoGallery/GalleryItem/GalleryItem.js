import React from "react";
import "./GalleryItem.scss";
import "../PhotoGallery.scss";

function GalleryItem(props) {
  return (
    <figure key={props.id} className="gallery-item">
      <img src={props.src} className="gallery-img"></img>
    </figure>
  );
}

export default GalleryItem;
