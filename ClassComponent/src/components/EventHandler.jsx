import React, { Component } from "react";

export default class EventHandler extends Component {
  render() {
    const HelloFunction = (name) => {
      alert("hello" + name);
    };
    return (
      <div>
        <input
          type="button"
          value="click"
          onClick={() => HelloFunction(this.props.name)}
        />
      </div>
    );
  }
}

// import React from "react";

// const EventHandler = (props) => {
//   const Hellofunction = (name) => {
//     alert("Hello " + name);
//   };
//   return (
//     <div>
//       <input
//         type="button"
//         value="click"
//         onClick={() => Hellofunction(props.name)}
//       />
//     </div>
//   );
// };

// export default EventHandler;

// import React, { Component } from "react";

// export default class EventHandler extends Component {
//   Hellofunction() {
//     alert("Hello Event Handler Function");
//   }
//   render() {
//     return (
//       <div>
//         <input type="button" value="click" onClick={this.Hellofunction} />
//       </div>
//     );
//   }
// }

// import React from "react";

// const EventHandler = () => {
//   function Hellofunction() {
//     alert("This is Event Handler Function");
//   }
//   return (
//     <div>
//       <input type="button" value="click" onClick={Hellofunction} />
//     </div>
//   );
// };

// export default EventHandler;
