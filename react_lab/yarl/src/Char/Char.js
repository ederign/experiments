import React from "react";
import "./Char.css";

const charComponent = (props) => {
  return (
    <div onClick={props.click} className="CharComponent">
      {props.letter}
    </div>
  );
};
export default charComponent;
