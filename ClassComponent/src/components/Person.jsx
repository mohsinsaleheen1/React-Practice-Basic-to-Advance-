import React, { Component } from "react";

export default class Person extends Component {
  constructor(props) {
    console.log("Constructor Called");
    super(props);

    this.state = {
      name: "Mohsin",
    };
  }
  changeState = () => {
    this.setState({
      name: "Muneeb",
    });
    console.log("Button Clicked...");
  };
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    console.log(props);
    console.log(state);
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate Called");
    console.log(nextProps);
    console.log(nextState);
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate Called");
    console.log(prevProps);
    console.log(prevState);
    return "Hello";
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("ComponentDidUpdate Called");
    console.log(prevProps);
    console.log(prevState);
    console.log(snapshot);
  }
  render() {
    console.log("Render Called");
    return (
      <div>
        <h1>{this.state.name}</h1>
        <p>{this.props.city}</p>
        <button onClick={this.changeState}>Change</button>
      </div>
    );
  }
}
