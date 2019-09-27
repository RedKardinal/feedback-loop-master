import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './Checkout.css';
// import axios from 'axios';
import {HashRouter as Router, Link} from 'react-router-dom';


class Feelings extends Component {
    render() {
      return (
        <div className="Feelings">
            <p>Test Text: I'm drinking Canada Dry!</p>
        </div>
      );
    }
  }
  


const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(Feelings);