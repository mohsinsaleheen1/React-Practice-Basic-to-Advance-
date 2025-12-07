// import React, { Component } from "react";
// export default class Props extends Component {
//   render() {
//     return (
//       <div>
//         <h1>A jao seekho main seekha rha hun </h1>
//         <p>
//           My name is {this.props.name} i am {this.props.age} year old
//         </p>
//       </div>
//     );
//   }
// }
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Props extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <div>
        <p>
          my name is {this.props.name} and i am {this.props.age} years old.
        </p>
        <p>
          my name is {this.props.name} and i am {this.props.age} years old.
        </p>
      </div>
    );
  }
}
Props.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};
