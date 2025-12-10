import React, { Component } from "react";
// import "../stylesheet1.css";
import style from "../stylesheet1.module.css";
export default class Stylesheet1 extends Component {
  render() {
    return (
      <div>
        <h1 className={style.heading1}>Wellcome to Learning Never Ends</h1>
      </div>
    );
  }
}
