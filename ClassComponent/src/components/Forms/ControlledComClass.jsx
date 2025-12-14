import React, { Component } from "react";

export default class ControlledComClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "Mohsin",
    };
  }
  handleForm = (e) => {
    console.log(e);
    this.setState({
      data: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <form>
          <h1>{this.state.data}</h1>
          <label htmlFor="">Enter Name</label>
          <input
            type="text"
            value={this.state.data}
            onChange={this.handleForm}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
