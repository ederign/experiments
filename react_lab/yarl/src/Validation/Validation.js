import React from "react";
const validation = (props) => {
  const validationMessage =
    props.inputLength > 5 ? "Text long enough" : "Text too short";
  return <p>{validationMessage}</p>;
};
export default validation;
