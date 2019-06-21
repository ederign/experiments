import React from "react";
import classes from "./Person.css";

const person = props => {
  const rnd = Math.random();
  // if (rnd > 0.7) {
  //   throw new Error("fsdfsd");
  // }

  return (
    <div className={classes.Person} >
      <p onClick={props.click}>
        I'm a {props.name}! and I'm {props.age} years old
      </p>
      <p>{props.children}</p>
      <input type="text" value={props.name} onChange={props.changed}
      />
    </div>
  );
};

export default person;
