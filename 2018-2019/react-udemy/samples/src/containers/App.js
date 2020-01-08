import React, { Component } from "react";
import cssClasses from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit"
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary"

class App extends Component {

  constructor(props){
    super(props);
    console.log("Ap-js constructor");
  }

  static getDerivedStateFromProps(props, state){
    console.log("App.js getDerived stated" + props);
    return state;
  }

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

  componentDidMount(){
    console.log("componentDidMount");
  }
  
  render() {
    console.log("Appjs render");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonsHandler}
          changed={this.nameChangedHandler} />
      );
    }

    return (
      <div className={cssClasses.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          click={this.togglePersonHander} />
        {persons}
      </div>
    );
  }
}

export default App;
