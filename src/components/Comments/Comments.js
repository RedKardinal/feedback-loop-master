// ---- Import Redux, Routers, & React ---- //
import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';
// ---- Import CSS ---- //
import './Comments.css';
// ---- Material UI ------ // 
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
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
        <MuiThemeProvider theme={theme}>
          <div className="main">
            <h2>
              Leave a comment about the week or your concerns.
            </h2>
            <div>
            <TextField onChange={this.handleChange} value={this.state.comments}
              id="outlined-multiline-static"
              label="Comments"
              multiline
              fullWidth
              rows="4"
              // defaultValue=""
              // className={classes.textField}
              margin="normal"
              variant="outlined"
              />
              {/* <input onChange={this.handleChange} value={this.state.comments} /> */}
            </div>
            <br />
            <Link to='/Submit'><Button variant='contained' color="primary" disabled={this.state.button} onClick={this.handleClick}>Next</Button></Link>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  } // end render
} // end Comments Component

const mapReduxStoreToProps = (reduxStore) => ({
  reduxStore
});
export default connect(mapReduxStoreToProps)(Support);