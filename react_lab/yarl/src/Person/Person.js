import React from "react";

const person = (props) => {
  return (
    <div>
      <p>ASDFG {props.name}</p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
