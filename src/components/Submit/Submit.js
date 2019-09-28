import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {HashRouter as Router, Link} from 'react-router-dom';




class Submit extends Component {

  submitPOST = () => {
    console.log('Submit button clicked!', this.props.reduxStore.cartReducer);
    let feedbackData = this.props.reduxStore.feedbackReducer
    // 
    axios.post('/feedback', feedbackData )
    .then((response) => {
        console.log('Checkout Page', response);

    }).catch(error => {
        console.log('Error in the POST checkout', error);    
    })  
    this.props.dispatch({ type: 'CLEAR' })
  } // end checkoutOrder

  render() {
    return (
      <Router>
      <div className="submit">
        <h2>
          Thank You!
            </h2>
        <h3>
          {this.props.reduxStore.feedbackReducer[0]}
        </h3>
        <h3>
          {this.props.reduxStore.feedbackReducer[1]}
        </h3>
        <h3>
          {this.props.reduxStore.feedbackReducer[2]}
        </h3>
        <h3>
          {this.props.reduxStore.feedbackReducer[3]}
        </h3>
        <br />
        <Link to='/'><button onClick={this.submitPOST}>Submit</button></Link>
        <h2>
          Wow, thanks...
            </h2>
      </div>
      </Router>
    );
  }
}



const mapReduxStoreToProps = (reduxStore) => ({
  reduxStore
});
export default connect(mapReduxStoreToProps)(Submit);