import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import {HashRouter as Router, Link} from 'react-router-dom';

class Understanding extends Component {
  state = {
    understanding: '3'
  }
  
  handleChange = (event) => {
    this.setState({
      understanding: event.target.value
    })
  }
  
  handleClick = (event) => {
    this.props.dispatch({ type: 'SET_UNDERSTANDING', payload: this.state.understanding })
    console.log('From Feeling', this.state.understanding);
  }

    render() {
      return (
      <Router>
        <div className="homePage">
          <h2>
            Understanding...
            </h2>
          <div>
            <select onChange={this.handleChange} value={this.state.understanding}>
              <option value="1">I Suck.</option>
              <option value="2">I feel bad.</option>
              <option value="3">I feel meh...</option>
              <option value="4">I feel good.</option>
              <option value="5">I feel Amazing.</option>
            </select>
          </div>
          <br />
          <Link to='/Support'><button onClick={this.handleClick}>On to Comments</button></Link>
          <h2>
            Understanding
            </h2>
        </div>
      </Router>
      );
    }
  }
  


const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(Understanding);