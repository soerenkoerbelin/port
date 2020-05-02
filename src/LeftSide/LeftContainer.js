import React, { useContext } from "react";

import { Context } from "./../_helper/store";

import "./LeftContainer.scss";

function LeftContainer() {
  const { store } = useContext(Context);

  return (
    <div style={{ backgroundColor: store.color, fontFamily: store.font }}>
      <h1 className="rotate">SÖREN KÖRBELIN</h1>
    </div>
  );
}

export default LeftContainer;
