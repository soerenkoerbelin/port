import React from "react";
import "./GalleryItem.scss";
import "../PhotoGallery.scss";

function GalleryItem(props) {
  return (
    <img
      key={props.id}
      src={props.src}
      className="gallery-img"
      alt={props.src}
    ></img>
  );
}

export default GalleryItem;
