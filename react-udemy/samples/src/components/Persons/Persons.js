import React from 'react';
import Person from './Person/Person';

const persons = (props) => {
  console.log("persons. component rendered");
  return props.persons.map((person, index) => {
    return (
      <Person
        key={index}
        changed={(event) => props.changed(event, person.id)}
        click={() => props.clicked(index)}
        name={person.name}
        age={person.age}
      />
    );
  })
}

export default persons;