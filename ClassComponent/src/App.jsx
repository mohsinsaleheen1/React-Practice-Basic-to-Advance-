import "./App.css";
import React, { Component } from "react";
import Props from "./components/Props";
import Student from "./components/Student";
import Employee from "./components/Employee";
import EventHandler from "./components/EventHandler";
import BindingEvent from "./components/BindingEvent";
import MoutingCom from "./components/MoutingCom";
import Updating1 from "./components/Updating1";
import Person from "./components/Person";
import ParentClass from "./components/ParentClass";
import Stylesheet1 from "./components/Stylesheet1";
import Stylesheet2 from "./components/Stylesheet2";
import Usestate from "./components/Hooks/Usestate";
import USwithObject from "./components/Hooks/USwithObject";
import USwitharray from "./components/Hooks/USwitharray";
import UseEffectPrac from "./components/Hooks/UseEffectPrac";
import CompA from "./components/contexthook/CompA";
import CompMain from "./components/contexthook/CompMain";
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
        {/* <BindingEvent /> */}
        {/* <MoutingCom city="Karachi" /> */}
        {/* <Updating1 /> */}
        {/* <Person city="Karachi" /> */}
        {/* <ParentClass /> */}
        {/* <Stylesheet1 />
        <Stylesheet2 /> */}
        {/* <Usestate /> */}
        {/* <USwithObject /> */}
        {/* <USwitharray /> */}
        {/* <UseEffectPrac /> */}
        {/* <CompA/> */}
        <CompMain />
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
