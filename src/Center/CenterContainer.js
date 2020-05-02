import React, { useContext } from "react";
import { Context } from "./../_helper/store";

import PhotoGallery from "./../PhotoGallery/PhotoGallery"

import "./CenterContainer.scss";

function CenterContainer() {
  const { store } = useContext(Context);
  return (
    <div className="center-container" style={{ fontFamily: store.font }}>
      <div className="top-container">
        <h1>
          ME<span style={{ color: store.color }}>. </span>{" "}
        </h1>
        <h1>
          SALUTES<span style={{ color: store.color }}>. </span>YOU
          <span style={{ color: store.color }}>. </span>
        </h1>
        <h1>
          ACCENTS<span style={{ color: store.color }}>. </span>KISS
          <span style={{ color: store.color }}>. </span>MINIMALISM
          <span style={{ color: store.color }}>. </span>
        </h1>
      </div>
      <div
        className="content-container"
        style={{ backgroundColor: store.color }}
      >
        <div className="rotation-wrapper">
          <div className="headline">
            <p className="underline uppercase">What I do</p>
          </div>
          <div className="content">
            <ul>
              <li>Web Development / Online Marketing Environment</li>
              <li>
                Using Java, Spring Boot, Angular, AWS, Mongo, MYSQL, CI/CD
              </li>
            </ul>
          </div>
        </div>

        <div className="rotation-wrapper">
          <div className="headline">
            <p className="underline uppercase">What I learn</p>
          </div>
          <div className="content">
            <ul>
              <li>MERN stack stuff</li>
              <li>Photography things</li>
            </ul>
          </div>
        </div>

        <div className="rotation-wrapper">
          <div className="headline">
            <p className="underline uppercase">The future</p>
          </div>
          <div className="content">
            <ul>
              <li>Deepen frontend development using React + Redux </li>
              <li>Working on a more visual and customer orientated level</li>
            </ul>
          </div>
        </div>

        <div className="rotation-wrapper">
          <div className="headline">
            <p className="underline uppercase">Leasure time</p>
          </div>
          <div className="content">
            <ul>
              <li>Cycling</li>
              <li>Photography</li>
            </ul>
          </div>
        </div>
      </div>
      <PhotoGallery />
    </div>
  );
}

export default CenterContainer;
