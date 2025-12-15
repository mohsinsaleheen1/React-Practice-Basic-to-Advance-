import React, { Component, createRef } from "react";

export default class RefComp extends Component {
  constructor(props) {
    super(props);
    this.myRef = createRef();
  }
  componentDidMount() {
    console.log(this.myRef);
    console.log(this.myRef.current.innerHTML);
  }
  handleHeading = () => {
    // this.myRef.current.align = "right";
    // this.myRef.current.hidden = true;
    this.myRef.current.style.color = "yellow";
    this.myRef.current.style.backgroundColor = "red";
  };
  render() {
    return (
      <div>
        <h1 ref={this.myRef}>Wellcome to learning Never Ends</h1>
        <button onClick={this.handleHeading}>Click</button>
      </div>
    );
  }
}
