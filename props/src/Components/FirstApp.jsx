import React from "react";
import PropTypes from "prop-types";
const FirstApp = (props) => {
  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <td>Name:</td>
              <td>Age:</td>
              <td>Gender:</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{props.name}</td>
              <td>{props.age}</td>
              <td>{props.gender}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
FirstApp.PropTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  gender: PropTypes.bool,
};
export default FirstApp;
