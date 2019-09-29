import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './Checkout.css';
// import axios from 'axios';
import { HashRouter as Router, Link } from 'react-router-dom';


// ------ MATERIAL UI --------- //

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';


// MATERIAL UI

class Feelings extends Component {

  state = {
    feelings: '3'
  }

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
    return (
      <Router>
        <div className="homePage">
          <h2>
            Feelings...
            </h2>
          <div>
          <div onChange={this.handleChange} value={this.state.feelings} className="feelingsB">
          <input type="radio" id="1" name="feelings" value="1"/>
          <label for="1">Awful</label>

          <input type="radio" id="2" name="feelings" value="2"/>
          <label for="2">Not Good</label>

          <input type="radio" id="3" name="feelings" value="3"/>
          <label for="3">Ok</label>

          <input type="radio" id="4" name="feelings" value="4"/>
          <label for="4">Pretty Good</label>

          <input type="radio" id="5" name="feelings" value="5"/>
          <label for="5">Great!</label>
          </div>
            {/* <select onChange={this.handleChange} value={this.state.feelings}>
              <option value="1">I feel terrible.</option>
              <option value="2">I feel bad.</option>
              <option value="3">I feel meh...</option>
              <option value="4">I feel good.</option>
              <option value="5">I feel Amazing.</option>
            </select> */}
          </div>
          <br />
          <Link to='/Understanding'><button onClick={this.handleClick}>On to Understanding</button></Link>
          <h2>
            Is that how you really feel?
          </h2>
        </div>
      </Router>
    );
  }
}



const mapReduxStoreToProps = (reduxStore) => ({
  reduxStore
});
export default connect(mapReduxStoreToProps)(Feelings);