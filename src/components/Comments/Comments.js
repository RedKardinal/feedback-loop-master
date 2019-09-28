import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import {HashRouter as Router, Link} from 'react-router-dom';

// ---- Material UI ------ // 
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import {Button} from '@material-ui/core'


const theme = createMuiTheme({

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

        <div className="homePage">
          <h2>
            ...Comments
            </h2>
          <div>
            <input onChange={this.handleChange} value={this.state.comments}/>
          </div>
          <br />
          <Link to='/Submit'><Button disabled={this.state.button} onClick={this.handleClick}>Submit</Button></Link>
          <h2>
            Understanding
            </h2>
        </div>
        </MuiThemeProvider>
      </Router>
      );
    }
  }
  


const mapReduxStoreToProps = (reduxStore) => ({
  reduxStore
});
export default connect(mapReduxStoreToProps)(Support);