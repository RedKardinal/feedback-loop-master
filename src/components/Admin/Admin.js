// ---- Import Redux, Routers Axios, & React ---- //
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { HashRouter as Router, Link } from 'react-router-dom';
// ---- Import CSS ---- //
import './Admin.css';
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
  // ---- Admin Component Below ---- //
  class Admin extends Component {
  
    // submitPOST = () => {
    //   console.log('Submit button clicked!', this.props.reduxStore.cartReducer);
    //   let feedbackData = this.props.reduxStore.feedbackReducer
    //   // 
    //   axios.post('/feedback', feedbackData)
    //     .then((response) => {
    //       console.log('Submit Page', response);
  
    //     }).catch(error => {
    //       console.log('Error in the POST submit', error);
    //     })
    //   // clear reducer fields
    //   this.props.dispatch({ type: 'CLEAR' })
    // } // end submitPOST
  
    render() {
      return (
        <Router>
          <MuiThemeProvider theme={theme}>
            <div className="mainBox">
                <div>
                    <h1>Administrator Page</h1>
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
  export default connect(mapReduxStoreToProps)(Admin);