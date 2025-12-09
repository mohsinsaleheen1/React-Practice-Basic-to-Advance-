import React, { Component } from "react";
import Updating2 from "./Updating2";

export default class Updating1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name1: "Mohsin",
    };
  }
  changeState = () => {
    console.log("Button Click");
    this.setState({
      name1: "Muneeb",
    });
  };
  render() {
    return (
      <div>
        <Updating2 name={this.state.name1} />
        <button onClick={this.changeState}>ChangeState</button>
      </div>
    );
  }
}
