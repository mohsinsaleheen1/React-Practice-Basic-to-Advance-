import React, { Component } from "react";

export default class Employee extends Component {
  state = {
    name: "Mohsin",
    age: 23,
  };
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // name: "PAKISTAN IS THE BIGGEST COUNTRY OF ALL OVER THE WORLD",
  //     // count: 1,
  //     name: this.props.name,
  //     age: this.props.age,
  //   };
  // }
  changeName() {
    this.setState({
      // name:"KARACHI IS THE BIGGEST CITY OF PAKISTAN"
      // count: this.state.count + 1,
      name: "Hassan",
      age: 22,
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.age}</h1>
        <input type="button" value="Click" onClick={() => this.changeName()} />
      </div>
    );
  }
}
