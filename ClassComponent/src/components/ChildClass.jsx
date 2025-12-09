import React, { Component } from "react";

export default class ChildClass extends Component {
  render() {
    return (
      <div>
        <button onClick={()=>this.props.pMethod("Mohsin","Saleheen")}>Click Me</button>
      </div>
    );
  }
}

// import React, { Component } from "react";

// export default class ChildClass extends Component {
//   componentWillUnmount() {
//     console.log("componentWillUnmount Called");
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hey Mohsin Brother</h1>
//       </div>
//     );
//   }
// }
