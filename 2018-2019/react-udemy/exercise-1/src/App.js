import React, { Component } from "react";
import "./App.css";

import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    userName: "ederign"
  };

  usernameChangeHandler = event => {
    this.setState({
      userName: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput currentValue={this.state.userName} changeHandler={this.usernameChangeHandler} />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName="Dora"/>
      </div>
    );
  }
}

export default App;
