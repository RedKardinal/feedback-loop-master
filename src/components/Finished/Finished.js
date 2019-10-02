// ---- Import Redux, Routers, & React ---- //
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';
// ---- Import CSS ---- //
import './Finished.css';
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
class Finished extends Component {

    handleClick = () => {
        console.log('Next!');
        this.props.history.push('/')
    }
    
    render() {
        return (
            <Router>
                <MuiThemeProvider theme={theme}>
                    <div className="mainBox">
                        <h2>
                            Your feedback was submitted, thank you!
                        </h2>
                        <br />
                        <br />
                        <Button onClick={this.handleClick} variant='contained' color="primary">Leave new feedback</Button>
                        <br />
                        <br />
                    </div>
                </MuiThemeProvider>
            </Router>
        );
    } // end render
} // end Finished Component

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(Finished);