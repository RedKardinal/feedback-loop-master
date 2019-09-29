// ---- Import Redux, Routers Axios, & React ---- //
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { HashRouter as Router, Link } from 'react-router-dom';
// ---- Import CSS ---- //
import './Submit.css';
// ---- Material UI ------ // 
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Button } from '@material-ui/core'
// ---- Material UI Designs ---- //
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4055B2',
    },
    secondary: { main: '#4055B2' },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  }
});
// ---- Submit Component Below ---- //
class Submit extends Component {
  
  componentDidMount = () => {
    console.log(this.props.reduxStore.cartReducer);
  }
 
  submitPOST = () => {
    console.log('Submit button clicked!', this.props.reduxStore.cartReducer);
    let feedbackData = this.props.reduxStore.feedbackReducer
    // 
    axios.post('/feedback', feedbackData)
      .then((response) => {
        console.log('Checkout Page', response);

      }).catch(error => {
        console.log('Error in the POST checkout', error);
      })
    this.props.dispatch({ type: 'CLEAR' })
  } // end submitPOST

  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <div className="mainBox">
            <h2>
              Please review your feedback before submitting.
            </h2>
            <h3>
              Feeling: {this.props.reduxStore.feedbackReducer[0]} / 5
            </h3>
            <h3>
              Understanding: {this.props.reduxStore.feedbackReducer[1]} / 5
            </h3>
            <h3>
              Support: {this.props.reduxStore.feedbackReducer[2]} / 5
            </h3>
            <h3>
              Comments: {this.props.reduxStore.feedbackReducer[3]}
            </h3>
            <br />
            <div className="buttons">
            <Link to='/Finished'><Button onClick={this.submitPOST} variant='contained' color="primary">Submit</Button></Link>
            </div>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  } // end render
} // end Submit Componenet

const mapReduxStoreToProps = (reduxStore) => ({
  reduxStore
});
export default connect(mapReduxStoreToProps)(Submit);