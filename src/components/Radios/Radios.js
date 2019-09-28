import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Radios.css';




// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import Radio from '@material-ui/core/Radio';
// import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
// import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

const styles = {
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  checked: {},
};

class Radios extends Component {
  state = {
    selectedValue: '3',
  };

  handleChange = event => {
    this.setState({ selectedValue: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <Router>
      <div className="test">
        <p>Test Text</p>
        <Radio
          checked={this.state.selectedValue === '1'}
          onChange={this.handleChange}
          value="1"
          name="radio-button-demo"
          aria-label="1"
        />
        <Radio
          checked={this.state.selectedValue === '2'}
          onChange={this.handleChange}
          value="2"
          name="radio-button-demo"
          aria-label="2"
        />
        <Radio
          checked={this.state.selectedValue === '3'}
          onChange={this.handleChange}
          value="3"
          name="radio-button-demo"
          aria-label="3"
          classes={{
            root: classes.root,
            checked: classes.checked,
          }}
        />
        <Radio
          checked={this.state.selectedValue === '4'}
          onChange={this.handleChange}
          value="4"
          color="default"
          name="radio-button-demo"
          aria-label="4"
        />
        <Radio
          checked={this.state.selectedValue === '5'}
          onChange={this.handleChange}
          value="5"
          color="default"
          name="radio-button-demo"
          aria-label="5"
          label="test"
        />
        <p>Test Text</p>
      </div>
      </Router>
    );
  }
}


const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
  });

export default withStyles(styles)(connect(mapReduxStoreToProps)(Radios));
