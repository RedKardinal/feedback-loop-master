// ---- Import Redux, Routers, & React ---- //
import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';
// ---- Import CSS ---- //
import './Feelings.css';
// ---- Material UI ---- //
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import Radio from '@material-ui/core/Radio';
import { Button } from '@material-ui/core'
import 'typeface-roboto';
// ---- Material UI Designs ---- //
const styles = {
  great: {
    color: green[800],
    '&$checked': {
      color: green[700],
    },
  },
  good: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  ok: {
    color: green[100],
    '&$checked': {
      color: green[50],
    },
  },
  bad: {
    color: red[600],
    '&$checked': {
      color: red[500],
    },
  },
  awful: {
    color: red[800],
    '&$checked': {
      color: red[700],
    },
  },
  checked: {},
};
// ---- Feelings Component Below ---- //
class Feelings extends Component {

  state = {
    feelings: '3',
  };

  handleChange = (event) => {
    this.setState({
      feelings: event.target.value
    })
  }

  handleClick = (event) => {
    this.props.dispatch({ type: 'SET_FEELINGS', payload: this.state.feelings })
    console.log('From Feeling', this.state.feelings);
  }

  render() {
    const { classes } = this.props;

    return (
      <Router>
        <div className="mainBox">
          <div className="question">
            <h2>How are you feeling today?</h2>
          </div>
          <br/>
          <div className="row">
            <div className="col1">
              <h3>Bad</h3>
            </div>
            <div className="operators">
              <Radio
                checked={this.state.feelings === '1'}
                onChange={this.handleChange}
                value="1"
                name="radio-button-demo"
                aria-label="1"
                classes={{
                  root: classes.awful,
                  checked: classes.checked,
                }}
              />
              <Radio
                checked={this.state.feelings === '2'}
                onChange={this.handleChange}
                value="2"
                name="radio-button-demo"
                aria-label="2"
                classes={{
                  root: classes.bad,
                  checked: classes.checked,
                }}
              />
              <Radio
                checked={this.state.feelings === '3'}
                onChange={this.handleChange}
                value="3"
                name="radio-button-demo"
                aria-label="3"
                classes={{
                  root: classes.ok,
                  checked: classes.checked,
                }}
              />
              <Radio
                checked={this.state.feelings === '4'}
                onChange={this.handleChange}
                value="4"
                color="default"
                name="radio-button-demo"
                aria-label="4"
                classes={{
                  root: classes.good,
                  checked: classes.checked,
                }}
              />
              <Radio
                checked={this.state.feelings === '5'}
                onChange={this.handleChange}
                value="5"
                color="default"
                name="radio-button-demo"
                aria-label="5"
                classes={{
                  root: classes.great,
                  checked: classes.checked,
                }}
              />
            </div>
            <div className="col2">
              <h3>Great</h3>
            </div>
          </div>
          <div>
            <Link to='/Understanding'><Button onClick={this.handleClick} variant='contained' color="primary">Next</Button></Link>
          </div>
          <div className="boxFooter">
          </div>
        </div>
      </Router>
    );
  } // end render
} // end Feelings Componenet

const mapReduxStoreToProps = (reduxStore) => ({
  reduxStore
});

export default withStyles(styles)(connect(mapReduxStoreToProps)(Feelings));




// // ---- Import Redux, Routers, & React ---- //
// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { HashRouter as Router, Link } from 'react-router-dom';

// // ---- Import CSS ---- //

// // ------ MATERIAL UI --------- //


// // MATERIAL UI

// class Feelings extends Component {

//   state = {
//     feelings: '3'
//   }

//   handleChange = (event) => {
//     this.setState({
//       feelings: event.target.value
//     })
//   }

//   handleClick = (event) => {
//     this.props.dispatch({ type: 'SET_FEELINGS', payload: this.state.feelings })
//     console.log('From Feeling', this.state.feelings);
//   }

//   render() {
//     return (
//       <Router>
//         <div className="homePage">
//           <h2>
//             Feelings...
//             </h2>
//           <div>
//           <div onChange={this.handleChange} value={this.state.feelings} className="feelingsB">
//           <input type="radio" id="1" name="feelings" value="1"/>
//           <label for="1">Awful</label>

//           <input type="radio" id="2" name="feelings" value="2"/>
//           <label for="2">Not Good</label>

//           <input type="radio" id="3" name="feelings" value="3"/>
//           <label for="3">Ok</label>

//           <input type="radio" id="4" name="feelings" value="4"/>
//           <label for="4">Pretty Good</label>

//           <input type="radio" id="5" name="feelings" value="5"/>
//           <label for="5">Great!</label>
//           </div>
//             {/* <select onChange={this.handleChange} value={this.state.feelings}>
//               <option value="1">I feel terrible.</option>
//               <option value="2">I feel bad.</option>
//               <option value="3">I feel meh...</option>
//               <option value="4">I feel good.</option>
//               <option value="5">I feel Amazing.</option>
//             </select> */}
//           </div>
//           <br />
//           <Link to='/Understanding'><button onClick={this.handleClick}>On to Understanding</button></Link>
//           <h2>
//             Is that how you really feel?
//           </h2>
//         </div>
//       </Router>
//     );
//   }
// }

// const mapReduxStoreToProps = (reduxStore) => ({
//   reduxStore
// });
// export default connect(mapReduxStoreToProps)(Feelings);