import React from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
  const assignedClasses = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = classes.red;
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1> Yo </h1>
      <p className={assignedClasses.join(" ")}>ASDFG</p>
      <button className={btnClass} onClick={props.clicked}>
        Show Persons
      </button>
    </div>
  );
};

export default cockpit;
