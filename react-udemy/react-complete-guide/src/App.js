import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 29 },
      { name: "Dora", age: 7 },
      { name: "Bento", age: 77 }
    ]
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 29 },
        { name: "Dorinha", age: 7 },
        { name: "Bento", age: 77 }
      ]
    });
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

  render() {
    return (
      <div className="App">
        <h1> Hello, </h1>
        <button onClick={() => this.switchNameHandler("Dora")}>
          Switch name
        </button>
        <Person
          changed={this.nameChangedHandler}
          click={this.switchNameHandler.bind(this, "Max3")}
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          changed={this.nameChangedHandler}
          click={this.switchNameHandler.bind(this, "Max4")}
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          changed={this.nameChangedHandler}
          click={this.switchNameHandler.bind(this, "Max5")}
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        >
          {" "}
          bla bla bla
        </Person>
      </div>
    );
  }
}

export default App;
