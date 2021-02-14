import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "eder", age: 38 },
      { name: "ana", age: 36 },
      { name: "dora", age: 9 },
    ],
  };

  render() {
    return (
      <div className="App">
        <h1> Hi </h1>
        <button>Switch name</button>
        <Person name={this.state.persons[0].name} />
        <Person name={this.state.persons[1].name} />
        <Person name={this.state.persons[2].name}>
          {this.state.persons[0].age}
        </Person>
      </div>
    );
  }
}

export default App;
