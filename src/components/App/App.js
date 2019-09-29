// ---- Import Redux, Routers, & React ---- //
import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
// ---- Import CSS ---- //
import './App.css';
// ---- Connect Pages to App.js ---- //
import Home from '../Home/Home';
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Submit from '../Submit/Submit';
import Finished from '../Finished/Finished';
// ---- Material UI ---- //
import 'typeface-roboto';
// ---- App Component Below ---- //
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <div className="photoGrid">
              <img src={require('./plogo.jpg')} alt="Prime Logo" width="120" height="120" />
              <h1 className="App-title">Daily Feedback</h1>
            </div>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br />
          <div className="routes">
            <Route path='/' exact render={() => <Home />} />
            <Route path='/Feelings' exact render={() => <Feelings />} />
            <Route path='/Understanding' exact render={() => <Understanding />} />
            <Route path='/Support' render={() => <Support />} />
            <Route path='/Comments' render={() => <Comments />} />
            <Route path='/Submit' render={() => <Submit />} />
            <Route path='/Finished' render={() => <Finished />} />
          </div>
        </div>
      </Router>
    );
  } // end render
} // end App Component

const mapReduxStoreToProps = (reduxStore) => ({
  reduxStore
});
export default connect(mapReduxStoreToProps)(App);