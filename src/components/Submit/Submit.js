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

  submitPOST = () => {
    console.log('Submit button clicked!', this.props.reduxStore.feedbackReducer);
    let feedbackData = this.props.reduxStore.feedbackReducer
    // 
    axios.post('/feedback', feedbackData)
      .then((response) => {
        console.log('Submit Page', response);
        this.props.dispatch({ type: 'CLEAR' })
      }).catch(error => {
        console.log('Error in the POST submit.js', error);
      })
      this.props.history.push('/Finished')
    // clear reducer fields
  } // end submitPOST

  handleBack = () => {
    console.log('Back!'); 
  }

  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <div className="mainBox">
            <h2>
              Please review your feedback before submitting.
            </h2>
            <h3>
              Feeling: {this.props.reduxStore.feedbackReducer.feelings} / 5
            </h3>
            <h3>
              Understanding: {this.props.reduxStore.feedbackReducer.understanding} / 5
            </h3>
            <h3>
              Support: {this.props.reduxStore.feedbackReducer.support} / 5
            </h3>
            <h3>
              Comments: {this.props.reduxStore.feedbackReducer.comments}
            </h3>
            <br/>
            <div className="buttons">
            <Button onClick={this.submitPOST} variant='contained' color="primary">Submit</Button>
              {/* <Link to='/Finished' ><Button>Go on</Button></Link> */}
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