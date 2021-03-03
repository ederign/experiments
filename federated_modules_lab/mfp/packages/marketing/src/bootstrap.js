import React from "react";
import ReactDOM from "react-dom";

const mount = (el) => {
  ReactDOM.render(<h1> Hi there! </h1>, el);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("_marketing_dev_root");
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };