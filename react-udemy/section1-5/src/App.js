import React, { Component } from "react";
import cssClasses from "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 29 },
      { name: "Dora", age: 7 },
      { name: "Bento", age: 77 }
    ],
    showPersons: false
  };

  deletePersonsHandler = personIndex => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  togglePersonHander = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;
    let btnClass = '';


    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                changed={this.nameChangedHandler}
                key={index}
                click={() => this.deletePersonsHandler(index)}
                name={person.name}
                age={person.age}
              />
            );
          })}
        </div> 
      );

      btnClass = cssClasses.Red;
    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(cssClasses.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(cssClasses.red);
    }


    return (
      <div className={cssClasses.App}>
        <h1> Hello, </h1>
        <p className={assignedClasses.join(' ')}> Some p </p>
        <button className={btnClass} onClick={this.togglePersonHander}>
          Toogle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
