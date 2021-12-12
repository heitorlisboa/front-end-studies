import React from "react";
import "./index.scss";

function Button(props) {
  return (
    <button
      className={`button ${
        props.finished !== undefined ? `${props.finished}` : ""
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
