import React from "react";
import "./Person.css";

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>{props.name}</p>
      <p>{props.age}</p>
      <input type="text" value={props.name} onChange={props.changed} />
    </div>
  );
};

export default person;
