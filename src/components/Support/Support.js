import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import {HashRouter as Router, Link} from 'react-router-dom';



class Support extends Component {

  state = {
    support: '3'
  }
  
  handleChange = (event) => {
    this.setState({
      support: event.target.value
    })
  }
  
  handleClick = (event) => {
    this.props.dispatch({ type: 'SET_SUPPORT', payload: this.state.support })
    console.log('From Feeling', this.state.support);
  }


    render() {
      return (
        <Router>
        <div className="homePage">
          <h2>
            Understanding...
            </h2>
          <div>
            <select onChange={this.handleChange} value={this.state.support}>
              <option value="1">I need help.</option>
              <option value="2">I feel bad.</option>
              <option value="3">I feel meh...</option>
              <option value="4">I feel good.</option>
              <option value="5">I feel Amazing.</option>
            </select>
          </div>
          <br />
          <Link to='/Comments'><button onClick={this.handleClick}>On to Comments</button></Link>
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
export default connect(mapReduxStoreToProps)(Support);