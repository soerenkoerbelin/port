import React from "react";

export const initialState = { color: "", font: "" };

export const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return {
        ...state,
        color: action.payload,
      };
    case "CHANGE_FONT":
      return {
        ...state,
        font: action.payload,
      };
    default:
      return state;
  }
};

export const Context = React.createContext();
