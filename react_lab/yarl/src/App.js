import React, { Component } from "react";

import "./App.css";
import Person from "./Person/Person";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

class App extends Component {
  state = {
    persons: [
      { id: "fsdfsd", name: "Eder", age: 10 },
      { id: "fdfdsvcx", name: "Ana", age: 11 },
      { id: "vxcvxce", name: "Dora", age: 12 },
    ],
    otherState: "some other value",
    showPersons: false,
    userInput: "",
  };

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  deleteCharHandler = (index) => {
    const inputs = [...this.state.userInput.split("")];
    inputs.splice(index, 1);
    this.setState({ userInput: inputs.join("") });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex],
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  inputChanged = (e) => {
    this.setState({
      userInput: e.target.value,
    });
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((p, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={p.name}
                age={p.age}
                key={p.id}
                changed={(event) => this.nameChangedHandler(event, p.id)}
              />
            );
          })}
        </div>
      );
    }
    let charList = this.state.userInput.split("").map((c, index) => {
      return (
        <Char
          click={() => this.deleteCharHandler(index)}
          key={index}
          letter={c}
        />
      );
    });

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <div>
          <Validation inputLength={this.state.userInput.length} />
          <input
            type="text"
            value={this.state.userInput}
            onChange={this.inputChanged}
          />
          <p className={classes.join(" ")}> This is really working </p>
          <p>{this.state.userInput}</p>
          <p>{this.state.userInput.length}</p>
          {charList}
        </div>
        <button className="button" onClick={() => this.tooglePersonsHandler()}>
          Show Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
