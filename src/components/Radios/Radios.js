// ---- Below is a template for all Feedback pages ---- //



// ---- Import Redux, Routers, & React ---- //
// import React, { Component } from 'react';
// import { HashRouter as Router, Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// // ---- Import CSS ---- //
// import './Radios.css';
// // ---- Material UI ---- //
// import { withStyles } from '@material-ui/core/styles';
// import green from '@material-ui/core/colors/green';
// import red from '@material-ui/core/colors/red';
// import Radio from '@material-ui/core/Radio';
// import { Button } from '@material-ui/core'
// import 'typeface-roboto';
// // ---- Material UI Designs ---- //
// const styles = {
//   great: {
//     color: green[800],
//     '&$checked': {
//       color: green[700],
//     },
//   },
//   good: {
//     color: green[600],
//     '&$checked': {
//       color: green[500],
//     },
//   },
//   ok: {
//     color: green[100],
//     '&$checked': {
//       color: green[50],
//     },
//   },
//   bad: {
//     color: red[600],
//     '&$checked': {
//       color: red[500],
//     },
//   },
//   awful: {
//     color: red[800],
//     '&$checked': {
//       color: red[700],
//     },
//   },
//   checked: {},
// };

// class Radios extends Component {

//   state = {
//     selectedValue: '3',
//   };

//   handleChange = event => {
//     this.setState({ selectedValue: event.target.value });
//   };

//   handleClick = (event) => {
//     this.props.dispatch({ type: 'SET_FEELINGS', payload: this.state.feelings })
//     console.log('From Feeling', this.state.feelings);
//   }

//   render() {
//     const { classes } = this.props;

//     return (
//       <Router>
//         <div className="mainBox">
//           <div className="question">
//             <h2>How are you feeling today?</h2>
//           </div>
//           <br/>
//           <div className="row">
//             <div className="col1">
//               <h3>Bad</h3>
//             </div>
//             <div className="operators">
//               <Radio
//                 checked={this.state.selectedValue === '1'}
//                 onChange={this.handleChange}
//                 value="1"
//                 name="radio-button-demo"
//                 aria-label="1"
//                 classes={{
//                   root: classes.awful,
//                   checked: classes.checked,
//                 }}
//               />
//               <Radio
//                 checked={this.state.selectedValue === '2'}
//                 onChange={this.handleChange}
//                 value="2"
//                 name="radio-button-demo"
//                 aria-label="2"
//                 classes={{
//                   root: classes.bad,
//                   checked: classes.checked,
//                 }}
//               />
//               <Radio
//                 checked={this.state.selectedValue === '3'}
//                 onChange={this.handleChange}
//                 value="3"
//                 name="radio-button-demo"
//                 aria-label="3"
//                 classes={{
//                   root: classes.ok,
//                   checked: classes.checked,
//                 }}
//               />
//               <Radio
//                 checked={this.state.selectedValue === '4'}
//                 onChange={this.handleChange}
//                 value="4"
//                 color="default"
//                 name="radio-button-demo"
//                 aria-label="4"
//                 classes={{
//                   root: classes.good,
//                   checked: classes.checked,
//                 }}
//               />
//               <Radio
//                 checked={this.state.selectedValue === '5'}
//                 onChange={this.handleChange}
//                 value="5"
//                 color="default"
//                 name="radio-button-demo"
//                 aria-label="5"
//                 classes={{
//                   root: classes.great,
//                   checked: classes.checked,
//                 }}
//               />
//             </div>
//             <div className="col2">
//               <h3>Great</h3>
//             </div>
//           </div>
//           <div>
//             <Link to='/Understanding'><Button onClick={this.handleClick} variant='contained' color="primary">Next</Button></Link>
//           </div>
//           <div className="boxFooter">
//           </div>
//         </div>
//       </Router>
//     );
//   }
// }


// const mapReduxStoreToProps = (reduxStore) => ({
//   reduxStore
// });

// export default withStyles(styles)(connect(mapReduxStoreToProps)(Radios));