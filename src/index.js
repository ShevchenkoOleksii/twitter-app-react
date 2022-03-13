// import React, { Component } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/app/';

// class WhoAmI extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       years: 26,
//       nationality: 'uk',
//     }
//     this.nextYear = this.nextYear.bind(this); // 1-st
//     // this.nextYear = () => { // 2-nd 
//     //   this.setState(state => ({
//     //     years: ++state.years
//     //   }))
//     // } // 2-nd
//   }
 
  // nextYear = () => { // 3-rd ES9
  //   this.setState(state => ({
  //     years: ++state.years
  //   }))
  // } // 3-rd ES9

//   nextYear() { // 1-st
//     // this.state.years++ - wrong!!!
//     this.setState(state => ({
//       years: ++state.years
//     }))
//   } // 1-st
//   render() {
//     const {name, surname, link} = this.props;
//     const {years} = this.state;
//     return (
//       <React.Fragment>
//         <button onClick={this.nextYear}>++</button>
//         <h1>My name is {name}, surname - {surname}, years = {years}</h1>
//         <a href={link}>My profile</a>
//       </React.Fragment>
//     )
//   }
// }

// function WhoAmI({name, surname, link}) {
//   return (
//     <React.Fragment>
//       <h1>My name is {name}, surname - {surname}</h1>
//       <a href={link}>My profile</a>
//     </React.Fragment>
//   )
// }

// const All = () => {
//   return (
//     <>
//       <WhoAmI name='Vova' surname='Pupkin' link='#'/>
//       <WhoAmI name='Vasya' surname='Ivanko' link='#'/>
//       <WhoAmI name='Viktor' surname='Zalupkin' link='#'/>
//     </>
//   )
// }
// ReactDOM.render(
//   <>
//     <All/>
//   </>,
//   document.getElementById('root')
// );
// ReactDOM.render(
//   <>
//     <WhoAmI name='Vova' surname='Pupkin' link='#'/>
//   </>,
//   document.getElementById('root')
// );
// function WhoAmI(props) {
//   return (
//     <React.Fragment>
//       <h1>My name is {props.name}, surname - {props.surname}</h1>
//       <a href={props.link}>My profile</a>
//     </React.Fragment>
//   )
// }

// ReactDOM.render(
//   <>
//     <WhoAmI name='Vova' surname='Pupkin' link='#'/>
//   </>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <WhoAmI />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);