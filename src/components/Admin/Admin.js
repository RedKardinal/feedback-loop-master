// ---- Import Redux, Routers Axios, & React ---- //
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { HashRouter as Router, Link } from 'react-router-dom';
// ---- Import CSS ---- //
import './Admin.css';
// ---- Material UI ------ // 
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Button } from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// ---- Material UI Designs ---- //

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

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
    state = {
        feedback: [],
    }

    componentDidMount() {
        this.feedbackGET();
    }

    feedbackGET = () => {
        axios.get('/feedback')
            .then((response) => {
                // console.log('Admin Page', response);
                this.setState({
                    feedback: response.data
                })
            }).catch((err) => {
                console.log(err);
            })
    } // end GET

    render() {
        return (
            <Router>
                <MuiThemeProvider theme={theme}>
                    <div className="mainBox">
                        <div>
                            <h1>Administrator Page</h1>
                        </div>
                        <div>
                        <Link to='/'><Button variant='contained' color="primary">Home</Button></Link>
                        </div>
                        <br />
                        <Paper className="Paper">
                            <Table className="Table">
                                <TableHead>
                                    <TableRow>
                                        <CustomTableCell align="left">Feeling</CustomTableCell>
                                        <CustomTableCell align="left">Understanding</CustomTableCell>
                                        <CustomTableCell align="left">Support</CustomTableCell>
                                        <CustomTableCell align="left">Comments</CustomTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody className="display" >
                                    
                                    {this.state.feedback.map((item) => {
                                        return (<TableRow key={item.id} >
                                            <CustomTableCell >{item.feeling}</CustomTableCell>
                                            <CustomTableCell>{item.understanding}</CustomTableCell>
                                            <CustomTableCell>{item.support}</CustomTableCell>
                                            <CustomTableCell>{item.comments}</CustomTableCell>
                                        </TableRow>)
                                    })}
                                </TableBody>
                            </Table>
                        </Paper>
                    </div>
                </MuiThemeProvider>
            </Router>
        );
    } // end render
} // end Submit Componenet

const mapStateToProps = (reduxStore) => ({
    reduxStore
})
export default connect(mapStateToProps)(Admin);