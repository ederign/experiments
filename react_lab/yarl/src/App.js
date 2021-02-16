import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Eder", age: 10 },
      { name: "Ana", age: 11 },
      { name: "Dora", age: 12 },
    ],
    otherState: "some other value",
  };

  switchNameHandler = (n) => {
    this.setState({
      persons: [
        { name: n, age: 1 },
        { name: "Ana Ana", age: 2 },
        { name: "Dora", age: 3 },
      ],
    });
  };

  nameChangedHandler = (e) => {
    this.setState({
      persons: [
        { name: e.target.value, age: 1 },
        { name: "Ana", age: 2 },
        { name: "Dora", age: 3 },
      ],
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button style={style} onClick={() => this.switchNameHandler("Bebezin")}>
          Switch Name
        </button>
        <Person
          changed={this.nameChangedHandler}
          click={this.switchNameHandler.bind(this, "Ysfd")}
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
