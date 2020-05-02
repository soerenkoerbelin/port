import React, { useReducer } from "react";
import "./App.scss";

import RightContainer from "./RightSide/RightContainer";
import CenterContainer from "./Center/CenterContainer";
import LeftContainer from "./LeftSide/LeftContainer";

import { Context, initialState, reducer } from "./_helper/store";

function App() {
  const [store, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <Context.Provider value={{ store, dispatch }}>
        <LeftContainer></LeftContainer>
        <CenterContainer></CenterContainer>
        <RightContainer></RightContainer>
      </Context.Provider>
    </div>
  );
}

export default App;
