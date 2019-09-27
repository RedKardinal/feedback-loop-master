import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import {HashRouter as Router, Link} from 'react-router-dom';


class Support extends Component {

  state = {
    comments: '',
    button: true
  }
  
  handleChange = (event) => {
    this.setState({
      comments: event.target.value,
      button: false
    })
  }
  
  handleClick = (event) => {
    this.props.dispatch({ type: 'SET_COMMENTS', payload: this.state.comments })
    console.log('From Feeling', this.state.comments);
  }

    render() {
      return (
        <Router>
        <div className="homePage">
          <h2>
            ...Comments
            </h2>
          <div>
            <input onChange={this.handleChange} value={this.state.comments}/>
          </div>
          <br />
          <Link to='/Submit'><button disabled={this.state.button} onClick={this.handleClick}>Submit</button></Link>
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