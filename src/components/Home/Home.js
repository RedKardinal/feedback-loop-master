// ---- Import Redux, Routers, & React ---- //
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';
// ---- Import CSS ---- //
import './Home.css';
// ---- Material UI ------ // 
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Button } from '@material-ui/core'
// ---- Material UI theme ---- //
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4055B2',
    },
    secondary: { main: '#dfbdfa' },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  }
});
// ---- Home Component Below ---- //

class Home extends Component {
  handleClick = () => {
    this.props.history.push('/Feelings')
}

  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <div className="main">
            <h2>
              Please give us some feedback on how the week went.
            </h2>
            <br />
            <Button onClick={this.handleClick} variant='contained' color="primary">Let's Begin!</Button>
            <h2>
            </h2>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  } // end render
} // end Home Component

const mapReduxStoreToProps = (reduxStore) => ({
  reduxStore
});
export default connect(mapReduxStoreToProps)(Home);