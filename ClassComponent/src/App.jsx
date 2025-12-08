import "./App.css";
import React, { Component } from "react";
import Props from "./components/Props";
import Student from "./components/Student";
import Employee from "./components/Employee";
import EventHandler from "./components/EventHandler";
import BindingEvent from "./components/BindingEvent";
class App extends Component {
  render() {
    return (
      <>
        {/* <h1>Ha bhai Class Compoenent</h1>
        <p>Dekh bhai Seekhay ga to kaam aye ga teray</p> */}
        {/* <Props name="Mohsin" age={20} />
        <Props name="Muneeb" age={19} />
        <Props name="Taha" age={20} /> */}
        {/* <Student name="Mohsin"/> */}
        {/* <Employee name="Hassan" age={23} /> */}
        {/* <EventHandler name="Muneeb" /> */}
        <BindingEvent />
      </>
    );
  }
}
// Pahla tareeqa
// import React from "react";
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Ha bhai Class Compoenent</h1>
//       </div>
//     );
//   }
// }
// function App() {
//   return (
//     <>
//       <div>
//         <h1>Ha Bhai a jao class Component seekhay </h1>
//       </div>
//     </>
//   );
// }

export default App;
