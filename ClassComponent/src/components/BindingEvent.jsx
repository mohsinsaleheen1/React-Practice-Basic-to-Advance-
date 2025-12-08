import React, { Component } from "react";

export default class BindingEvent extends Component {
  constructor() {
    super();
    // First Approach
    // this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: "Mohsin",
    };
  }
  handleChange() {
    this.setState({
      name: "Muneeb",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        {/* <button onClick={this.handleChange}>Click</button> */}
        {/* Second Approach */}
        <button onClick={this.handleChange.bind(this)}>Click</button>
      </div>
    );
  }
}
