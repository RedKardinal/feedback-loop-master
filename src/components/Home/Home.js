import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import {HashRouter as Router, Link} from 'react-router-dom';


class Home extends Component {
    render() {
      return (
        <div className="homePage">
            <h2>
                Remember! Be as critical and you possibly can be.
            </h2>
            <br/>
            <Link to='/Feelings'><button>Let's Begin!</button></Link>
            <h2>
                Good luck!
            </h2>
        </div>
      );
    }
  }
  


const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(Home);