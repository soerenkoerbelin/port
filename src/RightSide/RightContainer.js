import React, { useEffect, useContext } from "react";

import { Context } from "./../_helper/store";

import "./RightContainer.scss";

function RightContainer() {
  const { store, dispatch } = useContext(Context);

  useEffect(() => {
    changeColor();
  }, []);

  useEffect(() => {
    changeFontFamily();
  }, []);

  function changeColor() {
    // const colors = ["#CDC5B4", "#8F857D", "#AD343E", "#8D99AE", "#E53935"];
    const colors = ["#B8D8D8", "#7A9E9F", "#FF3366", "#EF7674", "#81A094"];
    const randomHex = colors[Math.floor(Math.random() * colors.length)];
    dispatch({ type: "CHANGE_COLOR", payload: randomHex });
  }

  function changeFontFamily() {
    const fonts = [
      "Comfortaa",
      "Lato",
      "Muli",
      "IBM Plex Mono",
      "Nunito",
      "Ubuntu",
    ];
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    dispatch({ type: "CHANGE_FONT", payload: randomFont });
  }

  return (
    <div style={{ backgroundColor: store.color, fontFamily: store.font }}>
      <div className="icons">
        <a href="mailto:soeren.koerbelin@gmail.com">
          <i className="fa fa-envelope fa-lg" aria-hidden="true"></i>
        </a>
        <a href="https://www.instagram.com/soeren.ko/">
          <i className="fab fa-instagram fa-lg" aria-hidden="true"></i>
        </a>
        <a href="https://github.com/soerenkoerbelin">
          <i className="fab fa-github fa-lg" aria-hidden="true"></i>
        </a>
        <a href="https://www.strava.com/athletes/3492566">
          <i className="fab fa-strava fa-lg" aria-hidden="true"></i>
        </a>
        <a href="https://www.linkedin.com/in/sören-körbelin-b6b1a1142/">
          <i className="fab fa-linkedin fa-lg" aria-hidden="true"></i>
        </a>
        <span className="hex-code pointer" onClick={() => changeColor()}>
          {store.color}
        </span>
        <span className="font-code pointer" onClick={() => changeFontFamily()}>
          {store.font}
        </span>
        <span className="technology">REACT / CSS GRID</span>
        <span className="copyright">&copy;{new Date().getFullYear()}</span>
      </div>
    </div>
  );
}

export default RightContainer;
