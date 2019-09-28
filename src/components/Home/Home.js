import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import {HashRouter as Router, Link} from 'react-router-dom';
import './Home.css';

// ---- Material UI ------ // 
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import {Button} from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: {
      main:'#bdbdbd',
    },
    secondary: {main:'#dfbdfa'},
    contrastThreshold: 3,
    tonalOffset: 0.2,
  }
});

class Home extends Component {
    render() {
      return (
        <Router>
          <MuiThemeProvider theme={theme}>

        <div className="main">
            <h2>
                Remember! Be as critical and you possibly can be.
            </h2>
            <br/>
            <Link to='/Feelings'><Button variant='contained' color="primary">Let's Begin!</Button></Link>
            <h2>
                Good luck!
            </h2>
          <footer className="footer">Text</footer>
        </div>
          </MuiThemeProvider>
        </Router>
      );
    }
  }
  


const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapReduxStoreToProps)(Home);