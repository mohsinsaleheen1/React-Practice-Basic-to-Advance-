import React, { Component } from "react";

export default class MoutingCom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Mohsin",
    };
    console.log("Mounting 1 Constructor Invoked");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Mounting 1 getDerivedStateFromProp Invoked");
    console.log(props);
    console.log(state);
    return null;
  }
  componentDidMount() {
    console.log("Mounting 1 Component Did mount Invoked");
  }
  render() {
    console.log("Mounting 1 Render Invoked");
    return (
      <div>
        <h1>{this.state.name}</h1>
        <p>{this.props.city}</p>
      </div>
    );
  }
}
