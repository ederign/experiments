import React, { Component } from "react";
import "./App.css";
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

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Max", age: 29 },
        { name: "Dorinha", age: 7 },
        { name: event.target.value, age: 77 }
      ]
    });
  };

  togglePersonHander = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                // changed={this.nameChangedHandler}
                click={() => this.deletePersonsHandler(index)}
                name={person.name}
                age={person.age}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1> Hello, </h1>
        <button style={style} onClick={this.togglePersonHander}>
          Switch name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
